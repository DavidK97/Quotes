export default function CategorySelector({ categories, onCategoryChange }) {
  
    const handleOnChange = (event) => {
    onCategoryChange(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="category-selector">
      <select name="categories" onChange={handleOnChange}>
        <option value="">Any Category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.title}>
            {category.title}
          </option>
        ))}
      </select>
    </div>
  );
}
