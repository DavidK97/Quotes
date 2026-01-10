import { useState, useEffect } from "react";
import facade from "../../../apiFacade";
import CategoryTableAdminTool from "../../../components/categoryTableAdminTool/CategoryTableAdminTool";
import CategoryFormAdminTool from "../../../components/categoryFormAdminTool/CategoryFormAdminTool";
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


    @media (max-width: 700px) {
      flex-direction: column;
      align-items: stretch;
    }
  }

  input,
  textarea, {
  button {
    padding: 5px;
    border: 1px solid grey;
    border-radius: 10px;
  }
`;

export default function CategoryToolsPage() {
  const [categories, setCategories] = useState([]);

  function getAllCategories() {
    const promise = facade.fetchData("categories");
    promise.then((data) => setCategories(data));

    promise.catch((error) => {
      console.error(
        "Full Error: ",
        error.fullError,
        "Error Status:",
        error.status
      );
    });
  }

  function createCategory(category) {
    console.log(category);
    const promise = facade.postData("categories", category);
    promise.then((data) => setCategories([...categories, data]));
    promise.catch((error) => {
      console.error(
        "Full Error: ",
        error.fullError,
        "Error Status:",
        error.status
      );
    });
  }

  function deleteCategoryById(categoryId) {
    const promise = facade.deleteData("categories/" + categoryId);
    promise.then(() => {
      setCategories(
        categories.filter((category) => category.id !== categoryId)
      );
    });
    promise.catch((error) => {
      console.error(
        "Full Error: ",
        error.fullError,
        "Error Status:",
        error.status
      );
    });
  }

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <Wrapper>
      <h3>Category Tools Page</h3>

      <CategoryFormAdminTool createCategory={createCategory} />
      <CategoryTableAdminTool
        categories={categories}
        deleteCategoryById={deleteCategoryById}
      />
    </Wrapper>
  );
}
