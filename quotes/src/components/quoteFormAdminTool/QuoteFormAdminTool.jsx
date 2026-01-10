import { useEffect, useState } from "react";

export default function QuoteFormAdminTool({
  blankQuote,
  quoteToEdit,
  updateQuote,
}) {
  const [quote, setQuote] = useState({ ...quoteToEdit });

  useEffect(() => {
    setQuote(quoteToEdit);
  }, [quoteToEdit]);

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.id;

    //TODO handle nested objects (author, category)
    setQuote({ ...quote, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Data for API request:", quote);
    updateQuote(quote);
  }

  return (
    <div>
      <h2>Edit form</h2>
      <h3>Quote Details</h3>
      <form onSubmit={handleSubmit}>
        <label>Text</label>
        <textarea id="text" value={quote.text} onChange={handleChange} />

        <label>Date Created</label>
        <input
          id="created-at"
          type="date"
          value={quote.createdAt}
          onChange={handleChange}
        />

        <h3>Author Details</h3>
        <label>Author Name</label>
        <input
          id="author-name"
          type="text"
          value={quote.author.name}
          onChange={handleChange}
        />

        <label>Country</label>
        <input
          id="author-country"
          type="text"
          value={quote.author.country}
          onChange={handleChange}
        />

        <label>Birthday</label>
        <input
          id="author-birthday"
          type="text"
          value={quote.author.dateOfBirth}
          onChange={handleChange}
        />

        <label>Category</label>
        <select id="category" value={quote.category.id} onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="1">Humor</option>
          <option value="2">Philosophy</option>
          <option value="3">Motivation</option>
        </select>

        <div>
          <button type="submit">Save Changes</button>
          <button type="button" onClick={() => setQuote(blankQuote)}>
            Reset
          </button>
        </div>
      </form>

      <pre>{JSON.stringify(quote, null, 2)}</pre>
    </div>
  );
}
