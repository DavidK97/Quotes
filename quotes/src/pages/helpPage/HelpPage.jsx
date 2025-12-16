import { NavLink, Outlet } from "react-router";

export default function HelpPage() {
  return (
    <div className="help-page">
      <h2>Website Help</h2>

      <nav>
        <NavLink to="faq">FAQ and how to use the API</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
