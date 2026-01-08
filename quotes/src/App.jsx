import { Outlet } from "react-router";
import Navbar from "./layouts/navbar/Navbar";
import Footer from "./layouts/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
