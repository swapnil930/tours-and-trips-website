import { FaBars, FaInstagram, FaPhoneAlt, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = ({ scrolled, menuOpen, setMenuOpen }) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  const tabs = [
    { id: 1, title: t("header.home"), path: "/" },
    { id: 2, title: t("header.tour"), path: "/upcoming-tours" },
    { id: 3, title: t("header.blog"), path: "/blogs" },
    { id: 4, title: t("header.about"), path: "/about-us" },
    { id: 5, title: t("header.contact"), path: "/contact-us" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 
      ${scrolled ? "bg-yellow-500 shadow-lg py-2" : "bg-transparent py-2"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className={`text-2xl font-bold ${scrolled ? "text-gray-900" : "text-white"}`}>
              Demo Trips
            </h1>
            <p className={`text-xs ${scrolled ? "text-gray-700" : "text-blue-100"}`}>
              {t("header.tagline")}
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
                  className={`relative font-medium transition-colors ${isActive
                    ? scrolled
                      ? "text-white"
                      : "text-black"
                    : scrolled
                      ? "text-black hover:text-white"
                      : "text-white hover:text-black"
                    }`}
                >
                  {item.title}

                  {/* Yellow Underline */}
                  <span
                    className={`absolute left-0 -bottom-0 h-[2px] transition-all duration-300 ${isActive ? "w-full" : ""
                      } ${scrolled ? "bg-white" : "bg-yellow-400"
                      }`}
                  ></span>

                </Link>
              );
            })}
          </nav>

          <div className="flex items-center justify-center gap-1">
            <div className="flex flex-row items-center gap-2 lg:gap-4">
              <div>
                <select
                  value={i18n.language}
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="px-3 py-1 text-sm font-medium text-yellow-600 bg-black 
               rounded-xl border border-gray-300 
               focus:outline-none focus:ring-1 focus:ring-yellow-400 
               cursor-pointer"
                >
                  <option value="en">EN</option>
                  <option value="th">TH</option>
                  <option value="vi">VI</option>
                </select>
              </div>
              <span>|</span>
              <a className="flex flex-row gap-1 items-center text-xs font-medium" href="#">
                <FaInstagram size={26} />
              </a>
              <span>|</span>
              <a href="tel:+911234567890">
                <div
                  className="flex items-center justify-center gap-1 font-medium text-xs 
                 h-6.5 w-6.5 bg-black rounded-full text-yellow-500 
                 lg:px-3 py-1 lg:h-fit lg:w-fit lg:hover:bg-blue-500 
                 transition-all duration-300 ease-in-out"
                >
                  <FaPhoneAlt size={13} />
                  <span className="hidden lg:block">(+91) 1234567890</span>
                </div>
              </a>
              <span className=" lg:hidden">|</span>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden rounded-lg"
              >

                <FaBars size={20} className="text-gray-900" />

              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide Down */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-[35%] bg-yellow-400
        transform transition-all duration-500 ease-in-out rounded-br-4xl
        ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="p-6 flex flex-col space-y-2">
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
                className={`text-md font-medium transition-all ${isActive
                  ? "text-white"
                  : "text-black hover:text-white"
                  }`}
              >
                {item.title}
              </Link>

            );
          })}

        </div>
      </div>
    </header>
  );
};

export default Header;
