document.addEventListener("DOMContentLoaded", () => {
    const stats = {
        totalUsers: 500,
        activeUsers: 120,
        totalBalance: 25000
    };

    document.getElementById("total-users").textContent = stats.totalUsers;
    document.getElementById("active-users").textContent = stats.activeUsers;
    document.getElementById("total-balance").textContent = stats.totalBalance;
});