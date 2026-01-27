import { Routes, Route } from "react-router-dom";
import Tours from "../pages/Tours";
import Footer from "../components/common/Footer/Footer";
import Header from "../components/common/header/Header";
import Home from "../pages/Home";
import Destinations from "../pages/Destinations";
import About from "../pages/About";
import Contact from "../pages/Contact";

const AppRoutes = ({ scrolled, menuOpen, setMenuOpen }) => {
  return (
    <>
      <Header scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upcoming-tours" element={<Tours />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
};

export default AppRoutes;
