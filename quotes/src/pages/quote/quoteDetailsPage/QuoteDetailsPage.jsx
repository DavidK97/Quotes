import { useParams } from "react-router";
import facade from "../../../apiFacade";
import { useEffect, useState } from "react";
import DetailCard from "../../../components/detailCard/DetailCard";


export default function QuoteDetailsPage() {
  const loggedIn = facade.loggedIn();
  const hasUserAccess = facade.hasUserAccess("USER", loggedIn);
  const hasAdminAccess = facade.hasUserAccess("ADMIN", loggedIn);

  let { quoteId } = useParams();
  const [quote, setQuote] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");


  useEffect(() => {
    if (hasUserAccess || hasAdminAccess) {
      const promise = facade.fetchData("quotes/" + quoteId);
      promise.then((data) => setQuote(data));
      promise.catch((error) => {
        console.error(
          "Full Error: ",
          error.fullError,
          "Error Status:",
          error.status
        );
        setErrorMessage("Could not retrieve quote");
      });
    }
  }, [quoteId, hasAdminAccess, hasUserAccess]);


   // Alternative method to restrict user access (if not using our protected route)
  if (!hasAdminAccess && !hasUserAccess) {
    return <p>Log in as a user or admin to view the quote details</p>;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }
 
  if (!quote) {
    return <p>Loading quote...</p>;
  }

  return (
    <div>
      <DetailCard title={"Quote nr. " + quoteId}>
       <p><strong>Text:</strong> {quote.text}</p>
       <p><strong>Category Id:</strong> {quote.category?.id}</p>
       <p><strong>Category:</strong> {quote.category?.title}</p>
       <p><strong>Author Id:</strong> {quote.author?.id}</p>
       <p><strong>Author:</strong> {quote.author?.name}</p>
       <p><strong>Author Country:</strong> {quote.author?.country}</p>
       <p><strong>Birthday:</strong> {quote.author?.dateOfBirth}</p>
       <p><strong>Posted by:</strong> {quote.user.username}</p>
       <p><strong>Created at:</strong> {quote.createdAt}</p>
       <p><strong>Likes:</strong> {quote.favoritedCount}</p>
      </DetailCard>
    </div>

  );

}

