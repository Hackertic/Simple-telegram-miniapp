const BOT_ID = "7932272738";  // Replace with your bot ID

document.addEventListener("DOMContentLoaded", () => {
    if (window.Telegram && Telegram.WebApp) {
        const user = Telegram.WebApp.initDataUnsafe?.user;

        if (user) {
            // Check if user is using the correct bot
            if (Telegram.WebApp.initDataUnsafe?.receiver?.id !== BOT_ID) {
                document.body.innerHTML = "<h2>Access Denied: Use the official bot to open this Mini App.</h2>";
                return;
            }
        } else {
            document.body.innerHTML = "<h2>Access Denied: Please open this Mini App from Telegram.</h2>";
        }
    }
});
