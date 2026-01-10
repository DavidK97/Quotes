import { useEffect, useState } from "react";
import facade from "../../../apiFacade";
import CategorySelector from "../../../components/categorySelector/CategorySelector";
import QuoteTable from "../../../components/quoteTable/QuoteTable";
import QuoteCounter from "../../../components/quoteCounter/QuoteCounter";
import { Link } from "react-router";

export default function QuotesPage() {
  const [quotes, setQuotes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function getAllQuotes() {
    const promise = facade.fetchData("quotes");
    promise.then((data) => setQuotes(data));
    promise.catch((error) => {
      console.error(
        "Full Error: ",
        error.fullError,
        "Error Status:",
        error.status
      );
      setErrorMessage("Could not retrieve quotes");
    });
  }

  // WARNING: Define inside the useEffect, to avoid possible cascading rendering
  async function fetchCategories() {
    try {
      const data = await facade.fetchData("categories");
      setCategories(data);
    } catch (error) {
      console.error("Error retrieving categories:", error);
      setErrorMessage("Could not retrieve categories");
    }
  }

  //TODO, så man ikke kan like flere gange
  //TODO Lav conditional rendering så man ikke kan se like-knappen medmindre man er logget ind
  //Uncught promise fordi vores backend returnerer en tekst-streng og ikke JSON.
  function likeQuote(quoteId) {
    const username = facade.getUsername();

    const promise = facade.postData(
      "users/" + username + "/favorites/" + quoteId
    );

    promise.then((data) => {
      console.log(data);

      setQuotes((quotes) =>
        quotes.map((quote) =>
          quote.id === quoteId
            ? { ...quote, favoritedCount: quote.favoritedCount + 1 }
            : quote
        )
      );
    });
    promise.catch((error) => {
      console.error(
        "Full Error: ",
        error.fullError,
        "Error Status:",
        error.status
      );
      setErrorMessage("Could not like quote");
      alert("Something went wrong, Quote could not be liked");
    });
  }

  useEffect(() => {
    getAllQuotes();
    fetchCategories();

    // Cleanup function example
    sessionStorage.setItem("user", "active on quotes page");

    return () => {
      sessionStorage.removeItem("user");
    };
  }, []);

  return (
    <div>
      {errorMessage && <p>{errorMessage}</p>}
      <div>
        <Link to="add-quote">
          <button>Add New Quote</button>
        </Link>
      </div>

      <div className="quote-table">
        <CategorySelector
          categories={categories}
          onCategoryChange={setSelectedCategory}
        />
        <QuoteTable
          quotes={quotes}
          selectedCategory={selectedCategory}
          onLike={likeQuote}
        />
        <QuoteCounter quotes={quotes} selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}
