// Skill Hexagons System — View/Game Mode using custom hexagonTreeBuilder
const STORAGE_KEY = 'skillHexagons_gameState_v2';

let hexMode = 'view'; // 'view' or 'game'
let skillsData = null; // loaded from skills.json
let nodesList = [];   // list of Node instances
let gameState = null;  // loaded from localStorage
let mapInstance = null;

document.addEventListener('DOMContentLoaded', () => {
    loadSkillsData();
    setupModeToggle();
    setupZoomControls();
});

async function loadSkillsData() {
    try {
        try {
            const res = await fetch('skills.json');
            if (!res.ok) throw new Error('Failed to load skills.json');
            skillsData = await res.json();
        } catch (fetchErr) {
            console.warn('Fetch skills.json failed, falling back to local data:', fetchErr);
            if (window.skillsDataFallback) {
                skillsData = window.skillsDataFallback;
            } else {
                throw new Error('Skills data fallback not found');
            }
        }
        
        loadGameState();
        renderHexMap();
    } catch (err) {
        console.error('Error loading skills:', err);
        const svg = document.getElementById('hexCanvas');
        if (svg) {
            svg.innerHTML = '<text x="50%" y="50%" text-anchor="middle" fill="#ff6b6b" font-family="Cinzel, serif" font-size="20">❌ Failed to load skill data</text>';
        }
    }
}

function setupModeToggle() {
    const modeToggle = document.getElementById('hexModeToggle');
    const spDisplay = document.getElementById('hexSPDisplay');
    if (!modeToggle) return;

    const syncModeUi = () => {
        hexMode = modeToggle.checked ? 'game' : 'view';
        if (spDisplay) {
            spDisplay.style.display = hexMode === 'game' ? 'block' : 'none';
        }
    };

    const applyMode = () => {
        syncModeUi();
        if (hexMode === 'game') {
            loadGameState();
        }
        renderHexMap();
    };

    modeToggle.addEventListener('change', applyMode);
    modeToggle.checked = hexMode === 'game';
    syncModeUi();
}

function setupZoomControls() {
    const zoomInBtn = document.getElementById('hexZoomIn');
    const zoomOutBtn = document.getElementById('hexZoomOut');
    const zoomResetBtn = document.getElementById('hexZoomReset');
    
    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', () => {
            zoomMap(0.9);
        });
    }
    
    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', () => {
            zoomMap(1.1);
        });
    }
    
    if (zoomResetBtn) {
        zoomResetBtn.addEventListener('click', () => {
            const svg = document.getElementById('hexCanvas');
            if (svg) {
                svg.removeAttribute('viewBox');
            }
            renderHexMap();
        });
    }
}

function zoomMap(factor) {
    const svg = document.getElementById("hexCanvas");
    if (!svg || !svg.viewBox) return;
    const view = svg.viewBox.baseVal;
    const cx = view.x + view.width / 2;
    const cy = view.y + view.height / 2;
    
    view.width *= factor;
    view.height *= factor;
    view.x = cx - view.width / 2;
    view.y = cy - view.height / 2;
}

// ── localStorage Game State ──────────────────────────────────────────
function loadGameState() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
        try {
            gameState = JSON.parse(raw);
            if (!gameState.unlockedSkills) gameState.unlockedSkills = ["Start"];
            if (!gameState.unlockedSkills.includes("Start")) gameState.unlockedSkills.push("Start");
        } catch {
            gameState = createFreshGameState();
        }
    } else {
        gameState = createFreshGameState();
    }
    
    // Sync global variable
    skillPoints = gameState.skillPoints;
    updateSkillPoints();
}

function createFreshGameState() {
    const state = {
        version: 2,
        skillPoints: (typeof skillPoints !== 'undefined') ? skillPoints : 10,
        unlockedSkills: ["Start"]
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return state;
}

function saveGameState() {
    if (gameState) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
    }
}

function updateGameSPDisplay() {
    const el = document.getElementById('hexSPCount');
    if (el && gameState) {
        el.textContent = gameState.skillPoints;
    }
    const gameSpDisplay = document.getElementById('gameSkillPoints');
    if (gameSpDisplay && gameState) {
        gameSpDisplay.textContent = gameState.skillPoints;
    }
}

// ── Hexagon Map Rendering ───────────────────────────────────────────
function renderHexMap() {
    const svg = document.getElementById('hexCanvas');
    if (!svg) return;
    
    // Create list of Node objects using custom hexagonTreeBuilder classes
    nodesList = skillsData.nodes.map(n => {
        const state = getSkillState(n.id);
        const nodeObj = new Node(n.name, n.r, n.c);
        nodeObj.id = n.id;
        nodeObj.icon = n.icon;
        nodeObj.cost = n.cost;
        nodeObj.isStart = !!n.isStart;
        nodeObj.isSetPiece = !!n.isSetPiece;
        nodeObj.renderer = getRendererForState(n, state);
        return nodeObj;
    });
    
    // Instantiate and build Map
    mapInstance = new HexagonMap(
        "Skills Map",
        45, // hexagon radius
        nodesList,
        6 // gap
    );
    
    mapInstance.buildMap(svg);
}

function getSkillState(nodeId) {
    if (hexMode === 'view') {
        return 'unlocked'; // All unlocked in View Mode
    }
    
    if (!gameState) return 'locked';
    if (gameState.unlockedSkills.includes(nodeId)) {
        return 'unlocked';
    }
    
    const nConfig = skillsData.nodes.find(n => n.id === nodeId);
    if (nConfig && nConfig.isStart) {
        return 'unlocked';
    }
    
    // Find neighbors using Node's native coords finder
    const tempNodes = skillsData.nodes.map(n => {
        const nodeObj = new Node(n.name, n.r, n.c);
        nodeObj.id = n.id;
        return nodeObj;
    });
    
    const currentNode = tempNodes.find(n => n.id === nodeId);
    if (!currentNode) return 'locked';
    
    const neighbors = currentNode.getNeighbors(tempNodes);
    const hasUnlockedNeighbor = neighbors.some(neighbor => {
        const neighborConfig = skillsData.nodes.find(n => n.id === neighbor.id);
        return gameState.unlockedSkills.includes(neighbor.id) || (neighborConfig && neighborConfig.isStart);
    });
    
    if (hasUnlockedNeighbor && gameState.skillPoints >= nConfig.cost) {
        return 'available';
    }
    
    return 'locked';
}

function getRendererForState(node, state) {
    return (g, size, nodeObj) => {
        g.setAttribute("class", `hex-group ${state}`);
        
        // polygon
        const hex = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        let pts = [];
        for (let i = 0; i < 6; i++) {
            const angle = Math.PI / 180 * (60 * i - 30);
            pts.push(`${size * Math.cos(angle)},${size * Math.sin(angle)}`);
        }
        hex.setAttribute("points", pts.join(" "));
        
        let classes = `hex-node ${state} cat-${node.category}`;
        if (node.isStart) classes += " start-node";
        if (node.isSetPiece) classes += " set-piece";
        hex.setAttribute("class", classes);
        hex.setAttribute("data-node-id", node.id);
        
        if (hexMode === 'game' && state === 'available') {
            hex.addEventListener("click", (e) => {
                e.stopPropagation();
                unlockSkill(node.id, node.cost);
            });
        }
        
        g.appendChild(hex);

        // Image Logo or Icon/Emoji fallback
        if (node.logo) {
            const img = document.createElementNS("http://www.w3.org/2000/svg", "image");
            img.setAttribute("href", node.logo);
            img.setAttribute("x", -size * 0.35);
            img.setAttribute("y", -size * 0.45);
            img.setAttribute("width", size * 0.7);
            img.setAttribute("height", size * 0.7);
            img.setAttribute("pointer-events", "none");
            
            img.onerror = () => {
                img.remove();
                if (node.icon) {
                    const textIcon = document.createElementNS("http://www.w3.org/2000/svg", "text");
                    textIcon.textContent = node.icon;
                    textIcon.setAttribute("class", "hex-icon");
                    textIcon.setAttribute("font-size", size * 0.55);
                    textIcon.setAttribute("text-anchor", "middle");
                    textIcon.setAttribute("dominant-baseline", "central");
                    textIcon.setAttribute("y", -size * 0.12);
                    textIcon.setAttribute("pointer-events", "none");
                    g.appendChild(textIcon);
                }
            };
            g.appendChild(img);
        } else if (node.icon) {
            const textIcon = document.createElementNS("http://www.w3.org/2000/svg", "text");
            textIcon.textContent = node.icon;
            textIcon.setAttribute("class", "hex-icon");
            textIcon.setAttribute("font-size", size * 0.55);
            textIcon.setAttribute("text-anchor", "middle");
            textIcon.setAttribute("dominant-baseline", "central");
            textIcon.setAttribute("y", -size * 0.12);
            textIcon.setAttribute("pointer-events", "none");
            g.appendChild(textIcon);
        }

        // Skill Name
        if (node.name) {
            const textName = document.createElementNS("http://www.w3.org/2000/svg", "text");
            textName.textContent = node.name;
            textName.setAttribute("class", "hex-label");
            
            // Dynamic font sizing to prevent hexagon overflow
            let fontSize = size * 0.22;
            if (node.name.length > 15) {
                fontSize = size * 0.13;
            } else if (node.name.length > 10) {
                fontSize = size * 0.17;
            }
            
            textName.setAttribute("font-size", fontSize);
            textName.setAttribute("text-anchor", "middle");
            textName.setAttribute("dominant-baseline", "central");
            textName.setAttribute("y", node.logo ? (size * 0.35) : 0);
            textName.setAttribute("pointer-events", "none");
            g.appendChild(textName);
        }
        
        // SP Cost Badge (available nodes)
        if (hexMode === 'game' && state === 'available' && node.cost > 0) {
            const costBadge = document.createElementNS("http://www.w3.org/2000/svg", "g");
            costBadge.setAttribute("class", "cost-badge");
            costBadge.setAttribute("transform", `translate(0, ${size * 0.72})`);
            
            const badgeBg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            badgeBg.setAttribute("x", -18);
            badgeBg.setAttribute("y", -8);
            badgeBg.setAttribute("width", 36);
            badgeBg.setAttribute("height", 16);
            badgeBg.setAttribute("rx", 4);
            badgeBg.setAttribute("class", "badge-bg");
            costBadge.appendChild(badgeBg);
            
            const badgeText = document.createElementNS("http://www.w3.org/2000/svg", "text");
            badgeText.textContent = `${node.cost} SP`;
            badgeText.setAttribute("text-anchor", "middle");
            badgeText.setAttribute("dominant-baseline", "central");
            badgeText.setAttribute("class", "badge-text");
            badgeText.setAttribute("font-size", 9);
            costBadge.appendChild(badgeText);
            
            g.appendChild(costBadge);
        }
    };
}

function unlockSkill(nodeId, cost) {
    if (hexMode !== 'game' || !gameState) return;
    if (gameState.skillPoints < cost) return;
    
    // Deduct cost and unlock
    gameState.skillPoints -= cost;
    gameState.unlockedSkills.push(nodeId);
    
    // Sync global variable
    skillPoints = gameState.skillPoints;
    
    saveGameState();
    updateSkillPoints();
    renderHexMap();
}

window.addSkillPoints = function(amount) {
    if (!gameState) {
        loadGameState();
    }
    gameState.skillPoints = (gameState.skillPoints || 0) + amount;
    skillPoints = gameState.skillPoints;
    saveGameState();
    updateSkillPoints();
    
    if (hexMode === 'game') {
        renderHexMap();
    }
};
