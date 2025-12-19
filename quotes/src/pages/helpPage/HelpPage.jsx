import styles from "./helpPage.module.css";

import { NavLink, Outlet } from "react-router";

export default function HelpPage() {
  return (
    <div className={styles.helpPage}>
      <nav>
        <NavLink
          to="faq"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          FAQ and how to use the API
        </NavLink>

        <NavLink
          to="contact"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Contact Us
        </NavLink>
      </nav>

      <div className={styles.outletContainer}>
        <Outlet />
      </div>
    </div>
  );
}
