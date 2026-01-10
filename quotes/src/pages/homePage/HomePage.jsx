import { useEffect } from "react";
import facade from "../../apiFacade";

export default function HomePage() {
  useEffect(() => {
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
          quoteElement.style.color = "red";
          console.error(error);
        });
    });
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      <div>
        <p id="quote-text">Get the days Quote</p>
        <button id="fetch-button">Fetch Quote</button>
      </div>
    </div>
  );
}
