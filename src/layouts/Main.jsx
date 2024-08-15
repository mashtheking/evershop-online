import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-2">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
