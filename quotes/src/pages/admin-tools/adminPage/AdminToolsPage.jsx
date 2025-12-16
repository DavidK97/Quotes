import { NavLink } from "react-router";
import { Outlet } from "react-router";

export default function AdminToolsPage() {
  return (
    <div>
      <h2>Admin Tool Page</h2>
      <nav>
        <NavLink to="quotes"> Quotes</NavLink>
        <NavLink to="authors"> Authors</NavLink>
        <NavLink to="categories"> Categories</NavLink>
        <NavLink to="users"> Users</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
