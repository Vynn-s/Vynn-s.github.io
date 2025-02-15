const quoteElement = document.getElementById("quote");
      const authorElement = document.getElementById("author");
      const newQuoteBtn = document.getElementById("newQuoteBtn");
      const copyBtn = document.getElementById("copyBtn");
      const twitterBtn = document.getElementById("twitterBtn");

      function fetchQuote() {
        quoteElement.textContent = "Loading quote...";
        authorElement.textContent = "";

        fetch("https://dummyjson.com/quotes")
          .then((response) => response.json())
          .then((data) => {
            const randomIndex = Math.floor(Math.random() * data.quotes.length);
            const randomQuote = data.quotes[randomIndex];
            quoteElement.textContent = `"${randomQuote.quote}"`;
            authorElement.textContent = `- ${randomQuote.author}`;
          })
          .catch(() => {
            quoteElement.textContent = "Failed to load quote. Please try again.";
          });
      }

      function copyQuote() {
        const text = `${quoteElement.textContent} ${authorElement.textContent}`;
        navigator.clipboard.writeText(text);
        alert("Quote copied to clipboard!");
      }

      function tweetQuote() {
        const text = `${quoteElement.textContent} ${authorElement.textContent}`;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
        window.open(twitterUrl, "_blank");
      }

      newQuoteBtn.addEventListener("click", fetchQuote);
      copyBtn.addEventListener("click", copyQuote);
      twitterBtn.addEventListener("click", tweetQuote);

      fetchQuote();