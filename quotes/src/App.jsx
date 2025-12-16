import { Outlet } from "react-router";
import Navbar from "./layouts/navbar/Navbar";
import Footer from "./layouts/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
