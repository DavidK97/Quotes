import { Outlet } from "react-router";
import Navbar from "./layouts/navbar/Navbar";
import Footer from "./layouts/footer/Footer";
import styles from "./layouts/mainLayout.module.css";

function App() {
  return (
    <div className={styles.wrapper}>
      <Navbar />

      <main className={styles.content}>
      <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
