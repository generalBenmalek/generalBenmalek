// Projects Loader & Sidebar Navigator
const projectIds = [
    "0_cv",
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
});

async function loadProjects() {
    const sidebar = document.getElementById("projectsSidebar");
    if (!sidebar) return;

    // Preserve the title, clear dynamic items
    const titleEl = sidebar.querySelector(".sidebar-title");
    sidebar.innerHTML = "";
    if (titleEl) sidebar.appendChild(titleEl);

    try {
        let projects;
        try {
            const fetches = projectIds.map(id =>
                fetch(`projects/${id}.json`)
                    .then(res => {
                        if (!res.ok) throw new Error(`Failed to load ${id}`);
                        return res.json();
                    })
            );
            projects = await Promise.all(fetches);
        } catch (fetchErr) {
            console.warn("Fetch projects failed, trying fallback data:", fetchErr);
            if (window.projectsDataFallback) {
                projects = window.projectsDataFallback;
            } else {
                throw new Error("Projects data fallback not found");
            }
        }

        projects.forEach((p, idx) => {
            loadedProjects[p.id] = p;
            
            const item = document.createElement("div");
            item.className = "sidebar-item";
            item.setAttribute("data-project-id", p.id);
            item.innerHTML = `<span class="sidebar-item-number">${idx + 1}.</span>${p.title}`;
            item.addEventListener("click", () => selectProject(p.id));
            sidebar.appendChild(item);
        });

        // Auto-select first project
        if (projects.length > 0) {
            selectProject(projects[0].id);
        }
    } catch (err) {
        console.error("Error loading projects:", err);
        const errDiv = document.createElement("div");
        errDiv.style.padding = "20px";
        errDiv.style.color = "#ff6b6b";
        errDiv.style.fontFamily = "'Cinzel', serif";
        errDiv.style.textAlign = "center";
        errDiv.textContent = "❌ ERROR GATHERING QUESTS";
        sidebar.appendChild(errDiv);
    }
}

function selectProject(id) {
    const p = loadedProjects[id];
    if (!p) return;

    // Highlight active sidebar item
    document.querySelectorAll(".sidebar-item").forEach(item => {
        if (item.getAttribute("data-project-id") === id) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    const detailContainer = document.getElementById("projectDetail");
    if (!detailContainer) return;

    const technologies = Array.isArray(p.technologies) ? p.technologies : [];
    const achievements = Array.isArray(p.achievements) ? p.achievements : [];
    const youtubeVideos = Array.isArray(p.youtube_videos) ? p.youtube_videos : [];
    const images = Array.isArray(p.images) ? p.images : [];
    const projectUrls = Array.isArray(p.project_url) ? p.project_url : [];

    // Build Technologies HTML
    const tagsHtml = technologies.map(tech => `<span class="project-tag">${tech}</span>`).join("");

    // Build Achievements HTML
    const achievementsHtml = achievements.map(ach => `<li>${ach}</li>`).join("");

    // Build Project Links HTML
    const projectLinksHtml = projectUrls.length > 0 ? `
        <div class="project-detail-section">
            <h3>Project Links</h3>
            <div class="project-links">
                ${projectUrls.map(link => {
                    if (typeof link === "string") {
                        return `<a href="${link}" target="_blank" rel="noopener noreferrer" class="project-link-btn">${link}</a>`;
                    }

                    const linkUrl = link.url || "";
                    const linkLabel = link.name || link.title || linkUrl;
                    return `<a href="${linkUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn">${linkLabel}</a>`;
                }).join("")}
            </div>
        </div>
    ` : "";

    // Build Media HTML
    let mediaHtml = "";

    // 1. PDF Report Embed & Download
    if (p.path_report) {
        mediaHtml += `
            <div class="project-pdf-container">
                <iframe src="${p.path_report}"></iframe>
            </div>
            <a href="${p.path_report}" download class="project-download-btn">
                <i class="fi fi-rr-download" style="margin-right: 8px;"></i> Download PDF Report
            </a>
        `;
    }

    // 2. Video Player (YouTube or Local)
    if (youtubeVideos.length > 0) {
        youtubeVideos.forEach(video => {
            const videoUrl = typeof video === "string" ? video : video.url;
            const videoLabel = typeof video === "string" ? "" : (video.name || video.title || "");
            const videoId = getYouTubeId(videoUrl);
            if (videoId) {
                mediaHtml += `
                    ${videoLabel ? `<div class="project-media-label">${videoLabel}</div>` : ""}
                    <div class="project-video-container">
                        <iframe src="https://www.youtube.com/embed/${videoId}" 
                                title="YouTube video player" frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen></iframe>
                    </div>
                `;
            }
        });
    } else if (p.path_video) {
        mediaHtml += `
            <div class="project-video-container">
                <video controls>
                    <source src="${p.path_video}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        `;
    }

    // 3. Image Gallery
    if (images.length > 0) {
        mediaHtml += `
            <div class="project-image-gallery">
                ${images.map(img => `<img src="${img}" alt="${p.title} Screenshot" onclick="window.open('${img}', '_blank')">`).join("")}
            </div>
        `;
    }

    // Default media placeholder if empty
    if (!p.path_report && youtubeVideos.length === 0 && !p.path_video && images.length === 0) {
        mediaHtml = `<div class="project-no-media">No media assets available for this quest.</div>`;
    }

    // Render details
    detailContainer.innerHTML = `
        <div class="project-detail-header">
            <h2 class="project-detail-title">${p.title}</h2>
            <div class="project-detail-subtitle">${p.subtitle || ""}</div>
            <div class="project-detail-tags">${tagsHtml}</div>
        </div>

        <div class="project-detail-section">
            <h3>Description</h3>
            <p class="project-detail-description">${p.description}</p>
        </div>

        <div class="project-detail-section">
            <h3>Key Achievements</h3>
            <ul class="project-detail-achievements">
                ${achievementsHtml}
            </ul>
        </div>

        ${projectLinksHtml}

        <div class="project-detail-section">
            <h3>Quest Media & Report</h3>
            ${mediaHtml}
        </div>
    `;

    // Scroll detail container back to top
    detailContainer.scrollTop = 0;
}

function getYouTubeId(url) {
    if (typeof url !== "string") return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}
