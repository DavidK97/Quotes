import { useState } from "react";
import { useNavigate } from "react-router";
import facade from "../../../apiFacade";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
    min-width: 300px;
    align-items: flex-end;

    @media (max-width: 700px) {
      flex-direction: column;
      align-items: stretch;
    }
  }

  input,
  textarea,
  select {
    padding: 5px;
    border: 1px solid grey;
    border-radius: 10px;
  }
`;

export default function AddQuotePage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const username = facade.getUsername();

  const [newQuote, setNewQuote] = useState({
    text: "",
    authorName: "",
    authorCountry: "",
    authorBirth: "",
    categoryId: "",
  });

  const isInvalid = newQuote.text.length < 10;

  function handleChange(event) {
    setNewQuote({ ...newQuote, [event.target.id]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const body = {
      text: newQuote.text,
      category: { id: Number(newQuote.categoryId) },
      author: {
        name: newQuote.authorName,
        country: newQuote.authorCountry,
        dateOfBirth: newQuote.authorBirth,
      },
      user: { username: username },
    };

    const promise = facade.postData("quotes", body);
    promise.then(() => navigate("/quotes"));
    promise.catch((error) => {
      console.error(
        "Full Error: ",
        error.fullError,
        "Error Status:",
        error.status
      );
      setErrorMessage("Could create quote");
    });
  }

  return (
    <Wrapper>
      <h3>Add New Quote</h3>
      {errorMessage && <p>{errorMessage}</p>}

      <form onSubmit={handleSubmit}>
        <label>Quote Text</label>
        <textarea
          id="text"
          value={newQuote.text}
          onChange={handleChange}
          required
        />

        <label>Name</label>
        <input
          id="authorName"
          value={newQuote.authorName}
          onChange={handleChange}
        />
        <label>Country</label>
        <input
          id="authorCountry"
          value={newQuote.authorCountry}
          onChange={handleChange}
        />
        <label>Birthday</label>
        <input
          id="authorBirth"
          type="date"
          value={newQuote.authorBirth}
          onChange={handleChange}
        />
        <label>Category</label>
        <select
          id="categoryId"
          value={newQuote.categoryId}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="1">Humor</option>
          <option value="2">Philosophy</option>
          <option value="3">Motivation</option>
        </select>
        <div>
          <button type="submit" disabled={isInvalid}>
            {isInvalid ? "Not a valid quote" : "Create Quote"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
}
