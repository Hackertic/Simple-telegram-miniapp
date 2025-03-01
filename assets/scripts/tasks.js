document.addEventListener("DOMContentLoaded", () => {
    const telegramTask = document.getElementById("verify-task");
    const youtubeTask = document.getElementById("verify-youtube");
    const twitterTask = document.getElementById("verify-twitter");

    // Telegram Channel Verification
    telegramTask.addEventListener("click", () => {
        const tg = window.Telegram.WebApp;
        tg.showAlert("Have you joined @the_minngs?", () => {
            alert("Task Completed! +500 Coins");
            telegramTask.disabled = true;
        });
    });

    // YouTube Subscription (Fake Check)
    youtubeTask.addEventListener("click", () => {
        const youtubeUrl = "https://www.youtube.com/yourchannel"; // Replace with your actual channel link
        window.open(youtubeUrl, "_blank");
        alert("Subscribed? Click again to claim rewards!");
        youtubeTask.textContent = "Claim +500 Coins";

        youtubeTask.addEventListener("click", () => {
            alert("Task Completed! +500 Coins");
            youtubeTask.disabled = true;
        }, { once: true });
    });

    // Twitter Follow (Fake Check)
    twitterTask.addEventListener("click", () => {
        const twitterUrl = "https://twitter.com/yourprofile"; // Replace with your actual Twitter profile link
        window.open(twitterUrl, "_blank");
        alert("Followed? Click again to claim rewards!");
        twitterTask.textContent = "Claim +500 Coins";

        twitterTask.addEventListener("click", () => {
            alert("Task Completed! +500 Coins");
            twitterTask.disabled = true;
        }, { once: true });
    });
});