import { NavLink } from "react-router";
import { Outlet } from "react-router";
import styles from "./adminToolsPage.module.css";

export default function AdminToolsPage() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
          to="quotes"
        >
          Quotes
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
          to="authors"
        >
          Authors
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
          to="categories"
        >
          Categories
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
          to="users"
        >
          Users
        </NavLink>
      </nav>
      <div className={styles.outletContainer}>
        <Outlet />
      </div>
    </div>
  );
}
