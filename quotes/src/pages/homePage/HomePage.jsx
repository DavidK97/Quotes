import { useEffect } from "react";
import facade from "../../apiFacade";

export default function HomePage() {
  useEffect(() => {
    // DOM manipulation example
    const quoteElement = document.getElementById("quote-text");
    const button = document.getElementById("fetch-button");

    button.addEventListener("click", () => {
      button.style.backgroundColor = "grey";

      const randomQuoteId = Math.floor(Math.random() * 15) + 1;

      // API call
      facade
        .fetchData("quotes/" + randomQuoteId)
        .then((data) => {
          quoteElement.innerText = data.text;
          console.log(data);
        })
        .catch((error) => {
          quoteElement.innerText = "Could not retrieve quote";
          console.error(error);
        });
    });
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      <h3>Welcome to the Quote API</h3>
      <div>
        <p id="quote-text">Get the days Quote</p>
        <button id="fetch-button">Fetch Quote</button>
      </div>
    </div>
  );
}

// Pure JS example

/*
export default function HomePage() {
  useEffect(() => {
    // Hook into index.html
    const root = document.getElementById("root");

    // Parent container
    const outerDiv = document.createElement("div");

    // div for quote.text and button
    const innerDiv = document.createElement("div");

    // Elements
    const title = document.createElement("h2");
    title.innerText = "Home Page";

    const greeting = document.createElement("h3");
    greeting.innerText = "Welcome to the Quote API";

    const quoteText = document.createElement("p");
    quoteText.id = "quote-text";
    quoteText.innerText = "Get the days Quote";

    const btn = document.createElement("button");
    btn.id = "fetch-button";
    btn.innerText = "Fetch Quote";


    // Append all
    innerDiv.appendChild(quoteText);
    innerDiv.appendChild(btn);

    outerDiv.appendChild(title);
    outerDiv.appendChild(greeting);
    outerDiv.appendChild(innerDiv);

    root.appendChild(outerDiv);

    
    // DOM manipulation example
    const quoteElement = document.getElementById("quote-text");
    const button = document.getElementById("fetch-button");

    button.addEventListener("click", () => {
      button.style.backgroundColor = "grey";

      const randomQuoteId = Math.floor(Math.random() * 10) + 1;

      facade
        .fetchData("quotes/" + randomQuoteId)
        .then((data) => {
          quoteElement.innerText = data.text;
          console.log(data);
        })

        .catch((error) => {
          quoteElement.innerText = "Could not retrieve quote";

          console.error(error);
        });
    });
  }, []);
}

*/
