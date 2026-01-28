import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = ({ scrolled, menuOpen, setMenuOpen }) => {
  const location = useLocation();

  const tabs = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Tour", path: "/upcoming-tours" },
    { id: 3, title: "Destinations", path: "/destinations" },
    { id: 4, title: "About", path: "/about" },
    { id: 5, title: "Contact", path: "/contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 
      ${scrolled ? "bg-yellow-500 shadow-lg py-4" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className={`text-2xl font-bold ${scrolled ? "text-gray-900" : "text-white"}`}>
              Demo Trips
            </h1>
            <p className={`text-xs ${scrolled ? "text-gray-700" : "text-blue-100"}`}>
              Explore the World
            </p>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {tabs.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`font-medium transition-colors ${isActive
                    ? "text-white"
                    : scrolled
                      ? "text-black hover:text-white"
                      : "text-white/80 hover:text-white"
                    }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          <Link to="/booking" className="hidden md:block px-6 py-2.5 bg-white text-black rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all">
            Book Now
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg"
          >
            {menuOpen ? (
              <FaTimes className={scrolled ? "text-gray-900" : "text-white"} />
            ) : (
              <FaBars className={scrolled ? "text-gray-900" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide Down */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-[40%] bg-yellow-400
        transform transition-all duration-500 ease-in-out rounded-br-4xl
        ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="p-6 flex flex-col space-y-4">
          <div className="flex justify-end">
            <button onClick={closeMenu}>
              <FaTimes className="text-black text-xl" />
            </button>
          </div>

          {tabs.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={closeMenu}
                className={`text-lg font-semibold transition-all ${isActive
                  ? "text-white"
                  : "text-black hover:text-white"
                  }`}
              >
                {item.title}
              </Link>

            );
          })}
          <Link
            to="/booking"
            onClick={closeMenu}
            className="text-black hover:text-white text-lg font-semibold transition-all"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
