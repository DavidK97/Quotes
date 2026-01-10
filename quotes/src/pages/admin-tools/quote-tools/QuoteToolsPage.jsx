import { useEffect, useState } from "react";
import QuoteTable from "../../../components/quoteTable/QuoteTable";
import facade from "../../../apiFacade";
import QuoteTableAdminTool from "../../../components/quoteTableAdminTool/quoteTableAdminTool";
import QuoteFormAdminTool from "../../../components/quoteFormAdminTool/QuoteFormAdminTool";

export default function QuoteToolsPage() {
  const [quotes, setQuotes] = useState([]);
  const blankQuote = { id: "", text: "", category: "", author: "" };
  const [quoteToEdit, setQuoteToEdit] = useState(blankQuote);

  // The quote chosen to edit
  function editQuote(quote) {
    setQuoteToEdit(quote);
  }

  function deleteQuoteById(quoteId) {
    const promise = facade.deleteData("quotes/" + quoteId)
      promise.then(() => {
        setQuotes(quotes.filter((q) => q.id !== quoteId));
      })
      .catch((err) => console.error(err));
  }

  //TODO kald til API
  function updateQuote(quote) {
    const promise = facade.putData("quotes/" + quote.id, quote);
    promise
      .then((updatedQuote) => {
        setQuotes(
          quotes.map((q) => (q.id === updatedQuote.id ? updatedQuote : q))
        );
        setQuoteToEdit(blankQuote);
      })
      .catch((error) => console.error(error));
  }

  function getAllQuotes() {
    const promise = facade.fetchData("quotes");
    promise.then((data) => setQuotes(data));
  }

  useEffect(() => {
    getAllQuotes();
  }, [quotes]);

  return (
    <div>
      <QuoteFormAdminTool
        updateQuote={updateQuote}
        blankQuote={blankQuote}
        quoteToEdit={quoteToEdit}
      />

      <QuoteTableAdminTool
        quotes={quotes}
        deleteQuoteById={deleteQuoteById}
        editQuote={editQuote}
      />
    </div>
  );
}
