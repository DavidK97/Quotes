import { useEffect, useState } from "react";

export default function QuoteFormAdminTool({blankQuote, quoteToEdit}) {
  const [quote, setQuote] = useState({ ...quoteToEdit });

  useEffect(() => {
    setQuote(quoteToEdit);
  }, [quoteToEdit])

  //Sørger for at når man har trykket edit, så kan man også ændre på inputfeleterne, ellers er de read-only, hvis der ikke er defineret et onChange event
  function handleChange(event) {
    const value = event.target.value; 
    const name = event.target.id;
    setQuote({ ...quote, [name]: value });
  }

  function handleSubmit(event) {
    
  }

  return (
    <div>
      <h2>Edit form</h2>
      {JSON.stringify(quote)}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Text</label>
        <input
          name="text"
          id="text"
          type="text"
          placeholder="text"
          value={quote.text}
          onChange={handleChange}
        />

        <label htmlFor="category">Category</label>
        <select name="category" id="category" value={quote.category} onChange={handleChange}>
          <option defaultChecked>Select Category TODO</option>
          <option value="1">Humor</option>
          <option value="2">Motivation</option>
        </select>

        
        <label htmlFor="Author">Author</label>
        <input
          name="author"
          id="author"
          type="text"
          placeholder="author"
          value={quote.author}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
        <button type="button" onClick={() => setQuote(blankQuote)}>
          Reset
        </button>
      </form>
    </div>
  );
}
