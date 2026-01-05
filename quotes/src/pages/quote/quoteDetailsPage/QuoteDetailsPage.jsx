import { useParams } from "react-router";
import facade from "../../../apiFacade";
import { useEffect, useState } from "react";

export default function QuoteDetailsPage() {
  let { quoteId } = useParams();
  const loggedIn = facade.loggedIn();
  const hasUserAccess = facade.hasUserAccess("USER", loggedIn);
  const hasAdminAccess = facade.hasUserAccess("ADMIN", loggedIn);
  const [quote, setQuote] = useState(null);

  // Alternative method to restrict user access (if not using a protected route)
  if (!hasAdminAccess && !hasUserAccess) {
    return <p>Log in as a user or admin to view the quote details</p>;
  }

  useEffect(() => {
    const promise = facade.fetchData("quotes/" + quoteId);
    promise.then((data) => setQuote(data));
  }, [quoteId]);

  if (!quote) {
  return <p>Loading quote...</p>;
}

  return (
    <div>
      <h2>QuoteDetails</h2>

      <table>
        <thead>
        <tr>
          <th>Id</th>
          <th>Quote Text</th>
          <th>Category Id</th>
          <th>Category Title</th>
          <th>Author Id</th>
          <th>Author Name</th>
          <th>Author Country</th>
          <th>Author birthday</th>
          <th>Posted By</th>
          <th>Created At</th>
          <th>Favorited Count</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{quote.id}</td>
          <td>{quote.text}</td>
          <td>{quote.category.id}</td>
          <td>{quote.category.title}</td>
          <td>{quote.author.id}</td>
          <td>{quote.author.name}</td>
          <td>{quote.author.country}</td>
          <td>{quote.author.dateOfBirth}</td>
          <td>{quote.user.username}</td>
          <td>{quote.createdAt}</td>
          <td>{quote.favoritedCount}</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
