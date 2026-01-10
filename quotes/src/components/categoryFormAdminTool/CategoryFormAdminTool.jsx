import { useRef } from "react";

export default function CategoryFormAdminTool({ createCategory }) {
  const categoryTitel = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const category = {
      title: categoryTitel.current.value,
    };
    createCategory(category);
    categoryTitel.current.value = "";
  }

  return (
    <div>
      <h2>Category Form Admin Tool</h2>

      <form onSubmit={handleSubmit}>
        <label>Titel</label>
        <input type="text" id="titel" ref={categoryTitel} required />
        <button type="submit">Create Category</button>
      </form>
    </div>
  );
}
