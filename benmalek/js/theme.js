// Pull-Cord Ceiling Lamp Light/Dark Theme Switcher Logic
document.addEventListener("DOMContentLoaded", () => {
    setupTheme();
});

function setupTheme() {
    const lampTrigger = document.getElementById("themeLampTrigger");
    if (!lampTrigger) return;

    const ropeGroup = lampTrigger.querySelector(".lamp-rope-group");

    const toggleTheme = () => {
        // Satisfaction pull bounce animation
        if (ropeGroup) {
            ropeGroup.style.transform = "translateY(15px)";
            setTimeout(() => {
                ropeGroup.style.transform = "translateY(0)";
            }, 180);
        }

        document.body.classList.toggle("light-mode");
        const isLight = document.body.classList.contains("light-mode");
        localStorage.setItem("theme", isLight ? "light" : "dark");
    };

    // Click event on the pull cord group
    if (ropeGroup) {
        ropeGroup.addEventListener("click", toggleTheme);
    }

    // Load and persist theme from Local Storage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }
}
