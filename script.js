const quotes = [
    "Talk is cheap. Show me the code. – Linus Torvalds",
    "Programs must be written for people to read. – Harold Abelson",
    "First, solve the problem. Then, write the code. – John Johnson",
    "Code is like humor. When you have to explain it, it’s bad. – Cory House",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler"
  ];
  
  function generateQuote() {
    const quoteEl = document.getElementById("quote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteEl.textContent = quotes[randomIndex];
  }
  