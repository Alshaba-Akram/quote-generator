const quote = document.getElementById("quote");
const quotes = [
    "The best way to predict the future is to invent it. – Alan Kay",
    "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "Believe you can and you're halfway there. – Theodore Roosevelt"
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayRandomQuote() {
    quote.textContent = getRandomQuote();
}
