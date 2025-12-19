import { useState } from "react";
import styles from "./logIn.module.css";

function LogIn({ login }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

return (
    <div className={styles.container}>
      <form onSubmit={performLogin}>
        <input
          className={styles.input}
          placeholder="Username"
          id="username"
          onChange={onChange}
          value={loginCredentials.username}
        />
        <input
          className={styles.input}
          placeholder="Password"
          id="password"
          type="password"
          onChange={onChange}
          value={loginCredentials.password}
        />
        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
export default LogIn;
