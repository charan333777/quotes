document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs",
            background: "linear-gradient(to right, #a18cd1, #fbc2eb)" // Light purple to pink
        },
        {
            text: "Innovation distinguishes between a leader and a follower.",
            author: "Steve Jobs",
            background: "linear-gradient(to right, #a18cd1, #fbc2eb)" // Light purple to pink
        },
        {
            text: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt",
            background: "linear-gradient(to right, #fad0c4, #ffd1ff)" // Orange to light purple
        },
        {
            text: "Strive not to be a success, but rather to be of value.",
            author: "Albert Einstein",
            background: "linear-gradient(to right, #c2e9fb, #a1c4fd)" // Light blue to darker blue
        },
        {
            text: "The mind is everything. What you think you become.",
            author: "Buddha",
            background: "linear-gradient(to right, #fddb92, #d1fdff)" // Yellow to light blue
        }
    ];

    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const newQuoteButton = document.getElementById('new-quote-button');

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    function displayQuote() {
        const { text, author, background } = getRandomQuote();
        quoteText.textContent = text;
        quoteAuthor.textContent = `- ${author}`;
        document.body.style.background = background;
    }

    newQuoteButton.addEventListener('click', displayQuote);

    // Display an initial quote when the page loads
    displayQuote();
});

