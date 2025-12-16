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
import AdminToolsPage from "./pages/admin-tools/adminPage/AdminToolsPage.jsx";
import HelpPage from "./pages/helpPage/HelpPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* Root layout med Navbar og Footer */}
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="help" element={<HelpPage/>}>  
          <Route path="faq" element={<h2>faq page med hvordan man bruger API'et</h2>} /> 
          <Route path="contact" element={<h2>Kunne bare være et inputfelt med en besked og email, så de kan sende feedback</h2>} />
      </Route>

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

        <Route path="admin-tools" element={<AdminToolsPage />} >
          
          <Route path="users" element={<h2>Edit users</h2>} />
          <Route path="quotes" element={<h2>Edit quotes</h2>} />
          <Route path="categories" element={<h2>Edit Categories</h2>} />
          <Route path="authors" element={<h2>Edit authors</h2>} />
        </Route>

      </Route>
    </Routes>
  </BrowserRouter>
);
