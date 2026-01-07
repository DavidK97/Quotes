export default function DetailCard({ title, children }) {
  return (
    <div>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}


// For example 3.2 (if not using children) and only sending the quote as a prop
// then one card for each ressource (quotes, author, category) would be needed 
/*
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
  */
