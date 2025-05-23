// Array of motivational quotes
const quotes = [
    "Believe you can and you're halfway there.",
    "Don’t watch the clock; do what it does. Keep going.",
    "You are capable of amazing things.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Stay positive, work hard, make it happen.",
    "Your only limit is your mind.",
    "Don’t stop until you’re proud.",
    "Success doesn’t just find you. You have to go out and get it."
  ];
  
  // Get quote element
  const quoteEl = document.getElementById("quote");
  
  // Function to display a random quote
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const newQuote = quotes[randomIndex];
  
    // Fade-out effect
    quoteEl.style.opacity = 0;
  
    // Wait for fade-out to complete, then show new quote with fade-in
    setTimeout(() => {
      quoteEl.textContent = newQuote;
      quoteEl.style.opacity = 1;
    }, 300);
  }
  