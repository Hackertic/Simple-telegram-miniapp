    // Get user info
    const user = tg.initDataUnsafe.user;
    document.getElementById("username").textContent = user.username || "No Username";
    document.getElementById("profit-name").textContent = user.first_name || "Unknown";
    document.getElementById("profit-username").textContent = `@${user.username || "N/A"}`;
    document.getElementById("profit-uid").textContent = user.id;

    // Load Telegram profile picture
    if (user.photo_url) {
        document.getElementById("avatar").src = user.photo_url;
    }

    // Dark/Light Theme Toggle
    const toggleTheme = document.getElementById("toggle-theme");
    toggleTheme.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Menu Toggle
    document.getElementById("menu-button").addEventListener("click", () => {
        document.querySelector(".dropdown").classList.toggle("show");
    });

    // Expand WebApp for full view
    tg.expand();
});
