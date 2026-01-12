
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

import HelpPage from "./pages/helpPage/HelpPage.jsx";
import { AdminRoutes } from "./components/security/AdminRoutes.jsx";
import AdminToolsPage from "./pages/admin-tools/admin-tools-dashboard/AdminToolsPage.jsx";
import QuoteToolsPage from "./pages/admin-tools/quote-tools/QuoteToolsPage.jsx";
import ContactPage from "./pages/helpPage/contactPage/ContactPage.jsx";
import CategoryToolsPage from "./pages/admin-tools/categoryTools/CategoryToolsPage.jsx";
import FaqPage from "./pages/helpPage/faqPage/FaqPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}> {/* Root layout med Navbar og Footer */}
        <Route index element={<HomePage />} />

        <Route path="help" element={<HelpPage />}>
          <Route path="faq" element={<FaqPage />} />
          <Route path="contact"element={<ContactPage />} />
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

        <Route element={<AdminRoutes />}>
          <Route path="admin-tools" element={<AdminToolsPage />}>
            <Route path="users" element={<h2>Edit users</h2>} />
            <Route path="quotes" element={<QuoteToolsPage/>} />
            <Route path="categories" element={<CategoryToolsPage />} />
            <Route path="authors" element={<h2>Edit authors</h2>} />
          </Route>
        </Route>

         <Route path="*" element={<h2>404 - Page not found</h2>} />

      </Route>
    </Routes>
  </BrowserRouter>
);
