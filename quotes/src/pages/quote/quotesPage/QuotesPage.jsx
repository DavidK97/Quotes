import { useEffect, useState } from "react";
import facade from "../../../apiFacade";
import CategorySelector from "../../../components/categorySelector/CategorySelector";
import QuoteTable from "../../../components/quoteTable/QuoteTable";
import QuoteCounter from "../../../components/quoteCounter/QuoteCounter";

export default function QuotesPage() {
  const [quotes, setQuotes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  function getAllQuotes() {
    const promise = facade.fetchData("quotes");
    promise.then((data) => setQuotes(data));
  }

  function getAllCategories() {
    const promise = facade.fetchData("categories");
    promise.then((data) => setCategories(data));
  }

  //TODO, så man ikke kan like flere gange
  //TODO Lav conditional rendering så man ikke kan se like-knappen medmindre man er logget ind
  // Uncaught promise fordi vores backend returnerer en tekst-streng og ikke JSON
  function likeQuote(quoteId) {
    const username = facade.getUsername();

    const promise = facade.postData(
      "users/" + username + "favorites/" + quoteId
    );

    setQuotes((quotes) =>
      quotes.map((quote) =>
        quote.id === quoteId
          ? { ...quote, favoritedCount: quote.favoritedCount + 1 }
          : quote
      )
    );

    alert("Liked quote: " + quoteId);
  }

  useEffect(() => {
    getAllQuotes();
    getAllCategories();
  }, []);

  return (
    <div>
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
