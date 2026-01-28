import { Routes, Route } from "react-router-dom";
import Tours from "../pages/Tours";
import Footer from "../components/common/footer/Footer";
import Home from "../pages/Home";
import Destinations from "../pages/Destinations";
import About from "../pages/About";
import Contact from "../pages/Contact";
import WhatsAppBtn from "../components/common/footer/WhatsAppBtn";
import BookingForm from "../pages/Booking";
import Header from "../components/common/header/Header";

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
        <Route path="/booking" element={<BookingForm/>}/>
      </Routes>

      <Footer />
      <WhatsAppBtn/>
    </>
  );
};

export default AppRoutes;
