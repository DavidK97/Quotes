export default function QuoteTable({ quotes, selectedCategory, onLike }) {
  const filteredQuotes =
    selectedCategory === "" // If "Any Category" option is picked
      ? quotes
      : quotes.filter((quote) => quote.category.title === selectedCategory);

  const quoteItems = filteredQuotes.map((quote) => (
    <tr key={quote.id}>
      <td>{quote.text}</td>
      <td>{quote.category.title}</td>
      <td>{quote.author.name}</td>
      <td>{quote.favoritedCount}</td>
      <td><button onClick={() => onLike(quote.id)}>Like Quote</button></td>
    </tr>
  ));

  return (
    <div>
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
