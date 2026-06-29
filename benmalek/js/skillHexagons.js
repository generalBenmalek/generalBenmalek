// Skill Hexagons System — View/Game Mode with contiguous layout and localStorage persistence
const STORAGE_KEY = 'skillHexagons_gameState';
const MAX_LEVEL = 5;
const RENDER_SIZE = 60;    // Render size (radius) for pointy-topped hexagons

let hexMode = 'view'; // 'view' or 'game'
let skillsData = null; // loaded from skills.json
let skillsList = [];   // flat list of skills
let gameState = null;  // loaded from localStorage

// Pan & Zoom state
let zoom = 0.8;
let panX = 0;
let panY = 0;
let isDragging = false;
let startX = 0;
let startY = 0;

document.addEventListener('DOMContentLoaded', () => {
    loadSkillsData();
    setupModeToggle();
    setupPanningZooming();
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
        
        // Flat map skills and load their contiguous coordinates
        skillsList = [];
        
        // Define Hex class with Honeycomb.js UMD if available
        let Hex = null;
        if (typeof Honeycomb !== 'undefined') {
            Hex = Honeycomb.defineHex({
                dimensions: RENDER_SIZE,
                orientation: 'pointy'
            });
        }

        skillsData.categories.forEach(cat => {
            cat.skills.forEach(s => {
                s.category = cat.id;

                // Calculate pixel positions relative to center (0,0)
                let px, py;
                if (Hex) {
                    const hex = new Hex([s.q, s.r]);
                    const point = hex.toPoint();
                    px = point.x;
                    py = point.y;
                } else {
                    // Manual layout calculation as fallback if Honeycomb fails to load (offline)
                    px = RENDER_SIZE * Math.sqrt(3) * (s.q + s.r / 2);
                    py = RENDER_SIZE * 1.5 * s.r;
                }
                s.px = px;
                s.py = py;

                skillsList.push(s);
            });
        });

        // Initialize game state (depends on loaded skills list)
        loadGameState();
        
        // Render
        renderHexTree();
        resetCenter();
    } catch (err) {
        console.error('Error loading skills:', err);
        const canvas = document.getElementById('hexCanvas');
        if (canvas) {
            canvas.innerHTML = '<div style="text-align:center; color:#ff6b6b; font-family:Cinzel,serif; font-size:1.3rem; padding:40px;">❌ Failed to load skill data</div>';
        }
    }
}

function setupModeToggle() {
    const viewBtn = document.getElementById('viewModeBtn');
    const gameBtn = document.getElementById('gameModeBtn');
    if (!viewBtn || !gameBtn) return;

    viewBtn.addEventListener('click', () => {
        if (hexMode === 'view') return;
        hexMode = 'view';
        viewBtn.classList.add('active');
        gameBtn.classList.remove('active');
        document.getElementById('hexSPDisplay').style.display = 'none';
        renderHexTree();
    });

    gameBtn.addEventListener('click', () => {
        if (hexMode === 'game') return;
        hexMode = 'game';
        gameBtn.classList.add('active');
        viewBtn.classList.remove('active');
        document.getElementById('hexSPDisplay').style.display = 'block';
        loadGameState();
        renderHexTree();
    });
}

// ── Drag to Pan & Scroll to Zoom ───────────────────────────────────────
function setupPanningZooming() {
    const container = document.getElementById('hexContainer');
    if (!container) return;

    container.addEventListener('mousedown', (e) => {
        // Only pan on left click drag
        if (e.button !== 0) return;
        isDragging = true;
        container.style.cursor = 'grabbing';
        startX = e.clientX - panX;
        startY = e.clientY - panY;
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        panX = e.clientX - startX;
        panY = e.clientY - startY;
        updateTransform();
    });

    window.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            container.style.cursor = 'grab';
        }
    });

    // Zoom on wheel scroll
    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        const zoomSpeed = 0.05;
        if (e.deltaY < 0) {
            zoom = Math.min(2.0, zoom + zoomSpeed);
        } else {
            zoom = Math.max(0.3, zoom - zoomSpeed);
        }
        updateTransform();
    }, { passive: false });

    // Zoom buttons
    document.getElementById('hexZoomIn').addEventListener('click', () => {
        zoom = Math.min(2.0, zoom + 0.1);
        updateTransform();
    });
    document.getElementById('hexZoomOut').addEventListener('click', () => {
        zoom = Math.max(0.3, zoom - 0.1);
        updateTransform();
    });
    document.getElementById('hexZoomReset').addEventListener('click', () => {
        resetCenter();
    });
}

function resetCenter() {
    const container = document.getElementById('hexContainer');
    if (!container) return;
    zoom = 0.8;
    panX = container.clientWidth / 2;
    panY = container.clientHeight / 2;
    updateTransform();
}

function updateTransform() {
    const canvas = document.getElementById('hexCanvas');
    if (canvas) {
        canvas.style.transform = `translate(${panX}px, ${panY}px) scale(${zoom})`;
    }
}

// ── localStorage Game State ──────────────────────────────────────────
function loadGameState() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
        try {
            gameState = JSON.parse(raw);
        } catch {
            gameState = createFreshGameState();
        }
    } else {
        gameState = createFreshGameState();
    }
    updateGameSPDisplay();
}

function createFreshGameState() {
    const state = { version: 1, skillPoints: (typeof skillPoints !== 'undefined') ? skillPoints : 10, skills: {} };
    skillsList.forEach(s => {
        state.skills[s.id] = { level: s.id === 'core' ? 5 : 0, percentage: s.id === 'core' ? 100 : 0 };
    });
    saveGameState(state);
    return state;
}

// Helper function to save game state
function saveGameState(state) {
    if (!state) state = gameState;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function updateGameSPDisplay() {
    const el = document.getElementById('hexSPCount');
    if (el && gameState) {
        el.textContent = gameState.skillPoints;
    }
}

// ── Hexagon Tree Rendering ───────────────────────────────────────────
function renderHexTree() {
    const canvas = document.getElementById('hexCanvas');
    if (!canvas) return;
    canvas.innerHTML = '';

    // Draw hexagons directly (no connecting line branches!)
    skillsList.forEach(s => {
        const data = getSkillDisplayData(s);
        canvas.appendChild(createHexCell(s, data));
    });
}

function getSkillDisplayData(skill) {
    if (hexMode === 'game' && gameState) {
        const gs = gameState.skills[skill.id];
        if (gs) {
            return {
                level: gs.level,
                percentage: gs.percentage,
                rarity: levelToRarity(gs.level)
            };
        }
        return { level: 0, percentage: 0, rarity: 'common' };
    }
    // View mode — use JSON data
    return {
        level: skill.level,
        percentage: skill.percentage,
        rarity: skill.rarity
    };
}

function levelToRarity(level) {
    const map = ['common', 'uncommon', 'rare', 'epic', 'legendary'];
    return map[Math.min(level, MAX_LEVEL) - 1] || 'common';
}

function createHexCell(skill, data) {
    const cell = document.createElement('div');
    cell.className = 'hex-cell';
    cell.style.left = skill.px + 'px';
    cell.style.top = skill.py + 'px';
    cell.style.transform = 'translate(-50%, -50%)';

    // Rarity glow effect
    if (data.rarity === 'legendary') cell.classList.add('legendary-glow');
    else if (data.rarity === 'epic') cell.classList.add('epic-glow');

    // Set piece (mastery nodes) thick purple border
    const setPieces = ['fullstack_master', 'ai_master', 'game_master', 'ds_algo', 'rl', 'security'];
    if (setPieces.includes(skill.id)) {
        cell.classList.add('set-piece');
    }

    // Locked status in game mode
    const isLocked = hexMode === 'game' && data.level === 0;
    if (isLocked) {
        cell.classList.add('locked');
    }

    // Border layer (colored by category)
    const border = document.createElement('div');
    border.className = `hex-cell-border cat-${skill.category}`;
    cell.appendChild(border);

    // Inner content
    const inner = document.createElement('div');
    inner.className = 'hex-inner';

    // Name
    const name = document.createElement('div');
    name.className = 'hex-name';
    name.textContent = skill.name;
    inner.appendChild(name);

    // Level pips (●●●○○)
    const pips = document.createElement('div');
    pips.className = 'hex-level-pips';
    for (let i = 1; i <= MAX_LEVEL; i++) {
        const pip = document.createElement('div');
        pip.className = 'hex-pip' + (i <= data.level ? ' filled' : '');
        pips.appendChild(pip);
    }
    inner.appendChild(pips);

    cell.appendChild(inner);

    // Game mode: unlock/upgrade logic
    if (hexMode === 'game') {
        const parentNode = skillsList.find(p => p.id === skill.parent);
        const parentUnlocked = !parentNode || (gameState && gameState.skills[parentNode.id] && gameState.skills[parentNode.id].level > 0);
        
        // Upgrade button on hover (if unlockable)
        if (parentUnlocked && skill.id !== 'core') {
            const btn = document.createElement('button');
            btn.className = 'hex-upgrade-btn';
            
            const cost = skill.cost || 2;
            const canUpgrade = data.level < MAX_LEVEL && gameState && gameState.skillPoints >= cost;
            btn.textContent = data.level >= MAX_LEVEL ? 'MAX' : `+${cost} SP`;
            btn.disabled = !canUpgrade;
            
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                upgradeSkill(skill.id, cost);
            });
            inner.appendChild(btn);
        }
    }

    return cell;
}

// ── Game Mode: Upgrade Logic ─────────────────────────────────────────
function upgradeSkill(skillId, cost) {
    if (!gameState || hexMode !== 'game') return;
    if (gameState.skillPoints < cost) return;

    const gs = gameState.skills[skillId];
    if (!gs || gs.level >= MAX_LEVEL) return;

    gs.level += 1;
    gs.percentage = Math.min(100, Math.round((gs.level / MAX_LEVEL) * 100));
    gameState.skillPoints -= cost;

    saveGameState();
    updateGameSPDisplay();
    renderHexTree();
}

window.addSkillPoints = function(amount) {
    if (!gameState) {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            try {
                gameState = JSON.parse(raw);
            } catch {
                gameState = createFreshGameState();
            }
        } else {
            gameState = createFreshGameState();
        }
    }

    if (gameState) {
        gameState.skillPoints = (gameState.skillPoints || 0) + amount;
        saveGameState();
        updateGameSPDisplay();
    }

    if (typeof skillPoints !== 'undefined') {
        skillPoints += amount;
        if (typeof updateSkillPoints === 'function') {
            updateSkillPoints();
        }
    }

    if (hexMode === 'game') {
        renderHexTree();
    }
};
