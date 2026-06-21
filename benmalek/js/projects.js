// Projects Dynamic Loader & Modal Handler
const projectIds = [
    "1_esia_impact_chatbot",
    "2_appliance_power_classification",
    "3_smart_parking_optimization",
    "4_intellicanteen",
    "5_esia_nexus",
    "6_taskit",
    "7_yack",
    "8_moneycash",
    "9_sud",
    "10_dotschat",
    "11_beat_the_magnet"
];

let loadedProjects = {};

document.addEventListener("DOMContentLoaded", () => {
    loadProjects();
    setupModal();
});

async function loadProjects() {
    const grid = document.querySelector(".projects-grid");
    if (!grid) return;
    grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; font-size: 1.5rem; font-family: \'Cinzel\', serif;">⚔ GATHERING PROJECT RUNES... ⚔</div>';

    try {
        const fetches = projectIds.map(id => 
            fetch(`projects/${id}.json`)
                .then(res => {
                    if (!res.ok) throw new Error(`Failed to load ${id}`);
                    return res.json();
                })
        );
        
        const projects = await Promise.all(fetches);
        grid.innerHTML = ""; // Clear loader
        
        projects.forEach(p => {
            loadedProjects[p.id] = p;
            grid.appendChild(createProjectCard(p));
        });
    } catch (err) {
        console.error("Error loading projects:", err);
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: #ff6b6b; font-family: \'Cinzel\', serif;">❌ ERROR GATHERING RUNES. DEFEAT.</div>';
    }
}

function createProjectCard(p) {
    const card = document.createElement("div");
    card.className = "project-card";
    card.setAttribute("data-project-id", p.id);
    card.addEventListener("click", () => openProjectModal(p.id));

    const tagsHtml = p.technologies.slice(0, 4).map(tech => `<span class="project-tag">${tech}</span>`).join("");

    card.innerHTML = `
        <div class="project-title">${p.title}</div>
        <div class="project-description">${p.description}</div>
        <div class="project-tags">${tagsHtml}${p.technologies.length > 4 ? '<span class="project-tag" style="background:transparent; border:1px solid var(--border-color); color:var(--text-color)">+ ' + (p.technologies.length - 4) + '</span>' : ''}</div>
    `;
    return card;
}

function setupModal() {
    const modal = document.getElementById("projectModal");
    const closeBtn = document.getElementById("modalCloseBtn");
    const backdrop = document.getElementById("modalBackdrop");

    if (!modal) return;

    const closeHandler = () => {
        modal.classList.remove("active");
    };

    closeBtn.addEventListener("click", closeHandler);
    backdrop.addEventListener("click", closeHandler);
}

function openProjectModal(id) {
    const p = loadedProjects[id];
    if (!p) return;

    const modal = document.getElementById("projectModal");
    if (!modal) return;

    // Set Text Details
    document.getElementById("modalTitle").textContent = p.title;
    document.getElementById("modalSubtitle").textContent = p.subtitle;
    document.getElementById("modalDescription").textContent = p.description;

    // Set Technologies
    const tagsContainer = document.getElementById("modalTags");
    tagsContainer.innerHTML = p.technologies.map(tech => `<span class="project-tag">${tech}</span>`).join("");

    // Set Achievements Bullet points
    const achContainer = document.getElementById("modalAchievements");
    achContainer.innerHTML = p.achievements.map(ach => `<li>${ach}</li>`).join("");

    // Set Action Button (Report/PDF Download)
    const actionsContainer = document.getElementById("modalActions");
    actionsContainer.innerHTML = "";

    if (p.path_report) {
        const btn = document.createElement("a");
        btn.className = "modal-btn";
        btn.href = p.path_report;
        btn.target = "_blank";
        btn.innerHTML = `<i class="fi fi-rr-download" style="margin-right: 8px;"></i> View Project Report (PDF)`;
        actionsContainer.appendChild(btn);
    } else {
        const btn = document.createElement("button");
        btn.className = "modal-btn";
        btn.disabled = true;
        btn.style.opacity = "0.5";
        btn.style.cursor = "not-allowed";
        btn.innerHTML = `No Report File Attached`;
        actionsContainer.appendChild(btn);
    }

    // Set Media Preview Area (Video embed or placeholder)
    const galleryContainer = document.getElementById("modalGallery");
    if (p.youtube_videos && p.youtube_videos.length > 0) {
        // Embed YouTube video
        const videoId = getYouTubeId(p.youtube_videos[0]);
        if (videoId) {
            galleryContainer.innerHTML = `
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/${videoId}" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen style="border: 2px solid var(--border-color);"></iframe>
            `;
        } else {
            galleryContainer.innerHTML = `<div style="text-align: center;"><i class="fi fi-rr-picture" style="font-size: 2.5rem; display: block; margin-bottom: 10px;"></i>No media assets available</div>`;
        }
    } else if (p.path_video) {
        // Embed Local Video
        galleryContainer.innerHTML = `
            <video width="100%" height="200" controls style="border: 2px solid var(--border-color); background: #000;">
                <source src="${p.path_video}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
    } else {
        galleryContainer.innerHTML = `<div style="text-align: center;"><i class="fi fi-rr-picture" style="font-size: 2.5rem; display: block; margin-bottom: 10px;"></i>No media assets available</div>`;
    }

    // Open Modal
    modal.classList.add("active");
}

function getYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}
