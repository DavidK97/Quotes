export default function CategoryTableAdminTool({ categories, deleteCategoryById }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <tr key={category.id}>
            <td>{category.id}</td>
            <td>{category.title}</td>
            <td><button type="button" onClick={() => deleteCategoryById(category.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
