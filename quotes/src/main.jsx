import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";

//Pages
import QuotesPage from "./pages/quote/quotesPage/QuotesPage.jsx";
import AuthorsPage from "./pages/author/authorsPage/AuthorsPage.jsx";
import CategoriesPage from "./pages/category/categoriesPage/CategoriesPage.jsx";
import HomePage from "./pages/homePage/HomePage.jsx";
import QuoteDetailsPage from "./pages/quote/quoteDetailsPage/QuoteDetailsPage.jsx";
import AddQuotePage from "./pages/quote/addQuotePage/AddQuotePage.jsx";
import AuthorDetailsPage from "./pages/author/authorDetailsPage/AuthorDetailsPage.jsx";
import AddAuthorPage from "./pages/author/addAuthorPage/AddAuthorPage.jsx";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* Root layout med Navbar og Footer */}
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="quotes">
          <Route index element={<QuotesPage />} />

          <Route path=":quoteId" element={<QuoteDetailsPage />} />
          <Route path="add-quote" element={<AddQuotePage />} />
        </Route>

        <Route path="authors">
          <Route index element={<AuthorsPage />} />

          <Route path=":authorId" element={<AuthorDetailsPage />} />
          <Route path="add-author" element={<AddAuthorPage />} />
        </Route>

        <Route path="categories">
          <Route index element={<CategoriesPage />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
