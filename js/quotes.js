const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        authour: "Nelson Mandela",
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        authour: "Abraham Lincoln",
    },
    {
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        authour: "Robert Louis Stevenson",
    },
    {
        quote: "The only impossible journey is the one you never begin.",
        authour: "Tony Robbins",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        authour: "John Lennon",
    },
    {
        quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        authour: "Helen Keller",
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        authour: "Ralph Waldo Emerson",
    },
    {
        quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        authour: "Albert Schweitzer",
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        authour: "Winston Churchill",
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        authour: "Aristotle Onassis",
    },
];

const quote = document.querySelector("#quote span:first-child");
const authour = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
authour.innerText = todaysQuote.authour;
