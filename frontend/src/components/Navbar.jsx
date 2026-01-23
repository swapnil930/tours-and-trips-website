import { FaMoon, FaSun, FaBook, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ isDarkMode, toggleTheme }) => {
    return (
        <nav
            className={`w-full sticky top-0 z-50 transition-colors duration-300 shadow-md
           ${isDarkMode ? "bg-slate-900 text-gray-100" : "bg-white text-slate-800"}`}
        >
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <FaBook
                        className={`text-xl ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}
                    />
                    <h4 className="text-sm sm:text-lg font-bold tracking-wide">
                        Book Management{" "}
                        <span className={`${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                            System
                        </span>
                    </h4>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 font-medium">
                    <Link
                        to="/"
                        className={`flex items-center gap-2 transition
                        ${isDarkMode ? "hover:text-blue-400" : "hover:text-blue-600"}`}
                    >
                        <FaHome size={20} />
                        <span className="hidden sm:block">Home</span>
                    </Link>

                    <button
                        title={isDarkMode ? "Light Mode" : "Dark Mode"}
                        onClick={toggleTheme}
                        className={`p-1 rounded-full transition-all
                        ${isDarkMode
                                ? "bg-gray-200 text-slate-900 hover:bg-gray-300"
                                : "bg-slate-800 text-white hover:bg-slate-700"}`}
                    >
                        {isDarkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;