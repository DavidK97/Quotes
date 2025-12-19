import styles from "./navbar.module.css";

import { NavLink, Outlet, useNavigate } from "react-router";
import { useEffect, useState } from "react";

import facade from "../../apiFacade";
import LogIn from "../../components/security/LogIn";
import LoggedIn from "../../components/security/LoggedIn";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    navigate("/");
  };

  const login = (user, pass) => {
    facade.login(user, pass).then(() => {
      setLoggedIn(true);
      console.log("Now we are logged in");
      setUsername(facade.getUsername());
      setRoles(facade.getUserRoles());
    });
  };

  useEffect(() => {
    if (facade.loggedIn()) {
      setLoggedIn(true);
      setUsername(facade.getUsername());
      setRoles(facade.getUserRoles());
    }
  }, []);

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>Quotes API</h1>

      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/quotes"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        Quotes
      </NavLink>

      <NavLink
        to="/authors"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        Authors
      </NavLink>

      <NavLink
        to="/categories"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        Categories
      </NavLink>

      <NavLink
        to="/help"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        Help
      </NavLink>

      {loggedIn && roles.includes("ADMIN") && (
        <NavLink
          to="/admin-tools"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Admin Tools
        </NavLink>
      )}

      <div className="login-section">
        {!loggedIn ? (
          <LogIn login={login} />
        ) : (
          <div>
            <LoggedIn loggedIn={loggedIn} username={username} roles={roles} />
            <button onClick={logout}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
}
