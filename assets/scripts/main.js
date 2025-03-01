let balance = 0;

// Click Event for Balance Counter
document.getElementById("click-button").addEventListener("click", () => {
    balance += 1; // Increment balance per click
    document.getElementById("balance").textContent = balance;
});