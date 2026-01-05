import { Link } from "react-router";

export default function QuoteTableAdminTool({ quotes, editQuote, deleteQuoteById }) {
  function handleOnClick(event) {
    console.log("Event target:", event.target);
  }

  const quoteItems = quotes.map((quote) => (
    <tr key={quote.id}>
      <td>{quote.text}</td>
      <td>{quote.category.title}</td>
      <td>{quote.author.name}</td>
      <td>
        <button onClick={() => editQuote(quote)}>Edit Quote</button>
      </td>
      <td>
        <button onClick={() => deleteQuoteById(quote.id)}>Delete Quote</button>
      </td>
    </tr>
  ));

  return (
    <div onClick={handleOnClick}>
      <table>
        <thead>
          <tr>
            <th>Text</th>
            <th>Category</th>
            <th>Author</th>
            <th>Edit Quote</th>
            <th>Delete Quote</th>
          </tr>
        </thead>
        <tbody>{quoteItems}</tbody>
      </table>
    </div>
  );
}
