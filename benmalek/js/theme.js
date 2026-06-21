// Light/Dark Theme Switcher Logic
document.addEventListener("DOMContentLoaded", () => {
    setupTheme();
});

function setupTheme() {
    const themeToggle = document.getElementById("themeToggle");
    if (!themeToggle) return;

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        const isLight = document.body.classList.contains("light-mode");
        localStorage.setItem("theme", isLight ? "light" : "dark");
        updateThemeIcon(isLight);
    });

    // Check saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        updateThemeIcon(true);
    } else {
        updateThemeIcon(false);
    }
}

function updateThemeIcon(isLight) {
    const icon = document.getElementById("themeToggleIcon");
    if (!icon) return;

    if (isLight) {
        // Show moon icon for light mode (meaning: click to switch to dark)
        icon.className = "fi fi-rr-moon";
    } else {
        // Show sun icon for dark mode (meaning: click to switch to light)
        icon.className = "fi fi-rr-sun";
    }
}
