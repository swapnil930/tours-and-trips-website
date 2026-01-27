import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ scrolled, menuOpen, setMenuOpen }) => {
  const tabs = [
    {
      id: 1,
      title: "Home",
      path: "/"
    },
    {
      id: 2,
      title: "Tour",
      path: "/upcoming-tours"
    },
    {
      id: 3,
      title: "Destinations",
      path: "/destinations"
    },
    {
      id: 4,
      title: "About",
      path: "/about"
    },
    {
      id: 5,
      title: "Contact",
      path: "/contact"
    },


  ]
  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300  ${scrolled ? 'bg-yellow-500 shadow-lg py-4' : 'bg-transparent py-6'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div>
              <h1 className={`text-2xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                WanderLust
              </h1>
              <p className={`text-xs ${scrolled ? 'text-gray-600' : 'text-blue-100'}`}>
                Explore the World
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {tabs.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`font-medium transition-colors ${scrolled
                  ? 'text-black hover:text-white'
                  : 'text-white hover:text-white'
                  }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block px-6 py-2.5 bg-white text-black rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all">
            Book Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg"
          >
            {menuOpen ? (
              <FaTimes className={scrolled ? 'text-gray-900' : 'text-white'} />
            ) : (
              <FaBars className={scrolled ? 'text-gray-900' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-2xl shadow-xl">
            {tabs.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {item.title}
              </Link>
            ))}
            <button className="mx-6 mt-3 w-[calc(100%-3rem)] px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium">
              Book Now
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;