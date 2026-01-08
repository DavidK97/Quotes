import { Link, useNavigate } from "react-router";
import styles from "./quoteTable.module.css";

export default function QuoteTable({ quotes, selectedCategory, onLike }) {
  const navigate = useNavigate();

  const filteredQuotes =
    selectedCategory === "" // If "Any Category" option is picked
      ? quotes
      : quotes.filter((quote) => quote.category.title === selectedCategory);

  //Event bubbling example
  function handleOnClick(event) {
    console.log("Event target:", event.target.id);
    navigate(`/quotes/${event.target.id}`);
  }

  
  const quoteItems = filteredQuotes.map((quote) => (
    <tr key={quote.id}>
      <td id={quote.id}>{quote.text}</td>
      <td>{quote.category?.title || "Unkown category" }</td>
      <td>{quote.author?.name || "Unknown author"}</td>
      <td>{quote.favoritedCount}</td>
      <td>
        <button
          onClick={(event) => { 
            event.stopPropagation(); // !! stops bubbling
            onLike(quote.id);
          }}
        >
          Like Quote
        </button>
      </td>
    </tr>
  ));

  return (
    //Event bubbling example
    <div className={styles.container} onClick={handleOnClick}>
      <table>
        <thead>
          <tr>
            <th>Text</th>
            <th>Category</th>
            <th>Author</th>
            <th>Likes</th>
            <th>Like Quote</th>
          </tr>
        </thead>
        <tbody>{quoteItems}</tbody>
      </table>
    </div>
  );
}

//Kommetar til eventbubbling eksempel 2
//Da man kan klikke på <td> så kan vi ikke bruge event.target til at "hente" id'et vi skal bruge til at navigere videre med, da det fx ville give os quote.text og ikke id'et
//Derfor sættes der et id til hvert row: data-id={quote.id}
//Og der bruges: .closest("tr[data-id]"), til at finde det nærmeste row som en <td> tilhører

/*
    // 1. example, simple
    console.log("Element clicked");
    console.log("Event target:", event.target);
    //alert("Element clicked");

    // 2. example
    const clickedRow = event.target.closest("tr[data-id]");
  
    const quoteId = clickedRow.dataset.id;
    navigate(`/quotes/${quoteId}`);
    */
