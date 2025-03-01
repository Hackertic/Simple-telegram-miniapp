document.addEventListener("DOMContentLoaded", () => {
    const refList = document.getElementById("referral-list");
    const referees = [
        { id: 12345, username: "JohnDoe", earnings: 50, photo: "https://telegram.org/img/telegram-logo.png" },
        { id: 67890, username: "AliceSmith", earnings: 100, photo: "https://telegram.org/img/telegram-logo.png" }
    ];

    referees.forEach(ref => {
        const refItem = document.createElement("div");
        refItem.classList.add("referral-item");
        refItem.innerHTML = `
            <img src="${ref.photo}" alt="Avatar">
            <span>${ref.username} - Earned: ${ref.earnings} Coins</span>
        `;
        refList.appendChild(refItem);
    });
});