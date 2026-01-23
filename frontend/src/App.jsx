import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import BookDetails from "./pages/BookDetails";
import { useEffect, useState } from "react";

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);


useEffect(() => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setIsDarkMode(savedTheme === "dark");
  document.body.className = savedTheme === "dark" ? "dark-mode" : "";
}, []);

const toggleTheme = () => {
  const newTheme = isDarkMode ? "light" : "dark";
  setIsDarkMode(!isDarkMode);
  document.body.className = newTheme === "dark" ? "dark-mode" : "";
  localStorage.setItem("theme", newTheme);
};


  return (
    <BrowserRouter>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home isDarkMode={isDarkMode}/>} />
        <Route path="/add" element={<AddBook isDarkMode={isDarkMode} />} />
        <Route path="/edit/:id" element={<EditBook isDarkMode={isDarkMode} />} />
        <Route path="/books/:id" element={<BookDetails isDarkMode={isDarkMode} />} />
      </Routes>
    </BrowserRouter>
  );
}
