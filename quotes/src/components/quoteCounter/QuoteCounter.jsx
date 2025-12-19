export default function QuoteCounter ({ quotes, selectedCategory }) {
  const count =
    selectedCategory === "" // If "Any Category" option is picked
      ? quotes.length
      : quotes.filter(q => q.category.title === selectedCategory).length;

  return <p>Number of Quotes: {count}</p>;
}
