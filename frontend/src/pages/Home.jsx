import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/bookApi";
import Loader from "../components/Loader";
import {FaPlusCircle, FaSearch } from "react-icons/fa";
import BookTable from "../components/BookTable";
import { Link } from "react-router-dom";

const Home = ({ isDarkMode }) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedBooks, setSelectedBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all")

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = () => {
        api.getAllBooks()
            .then((res) => {
                setBooks(res?.data)
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => { setLoading(false) })
    };

    useEffect(() => {
        api.getAllCategories()
            .then((res) => setCategories(res?.data))
            .catch((err) => console.log(err))
    }, [])

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedBooks(filteredBooks?.map((book) => book?.id));
        } else {
            setSelectedBooks([]);
        }
    };

    const handleSelectBook = (id) => {
        if (selectedBooks?.includes(id)) {
            setSelectedBooks(selectedBooks?.filter((selectedId) => selectedId !== id));
        } else {
            setSelectedBooks([...selectedBooks, id]);
        }
    };

    const handleDeleteSelected = () => {
        if (selectedBooks?.length === 0) {
            toast.warning("No books selected");
            return;
        }

        if (window.confirm(`Are you sure you want to delete ${selectedBooks?.length} book(s)?`)) {
            Promise.all(selectedBooks?.map((id) => api.deleteBook(id)))
                .then(() => {
                    toast.success(`${selectedBooks?.length} book(s) deleted successfully!`);
                    setBooks(books?.filter((book) => !selectedBooks?.includes(book.id)));
                    setSelectedBooks([]);
                })
                .catch((err) => {
                    console.log(err);
                    toast.error("Failed to delete selected books");
                });
        }
    };


    const filteredBooks = books.filter((book) =>
        (book?.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book?.author.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedCategory === "all" || book?.category === selectedCategory)
    );


    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-slate-900 text-gray-200" : "bg-gray-50 text-gray-800"}`}>
            <div className="max-w-7xl mx-auto p-6">
                <div className={`rounded-lg shadow-sm border transition-colors
                  ${isDarkMode
                        ? "bg-slate-800 border-slate-700"
                        : "bg-white border-gray-200"
                    }`}
                >
                    {/* Header */}
                    <div className={`p-4 border-b transition-colors
                    ${isDarkMode ? "border-slate-700" : "border-gray-200"}`}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h1 className={`text-2xl font-semibold ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}>
                                Book Inventory
                            </h1>
                            {selectedBooks?.length > 0 ? (
                                <button
                                    onClick={handleDeleteSelected}
                                    className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition"
                                >
                                    Delete({selectedBooks?.length})
                                </button>
                            ) : (

                                <Link
                                    to="/add"
                                    className={`flex items-center gap-2 px-4 py-2 rounded-md transition
                                      ${isDarkMode
                                            ? "bg-blue-500 text-white hover:bg-blue-600"
                                            : "bg-blue-600 text-white hover:bg-blue-700"}`}
                                >
                                    <FaPlusCircle
                                        title="Add Book" />
                                    <span className="hidden sm:block">Add Book</span>
                                </Link>

                            )}
                        </div>

                        <div className="relative max-w-md flex gap-5">
                            <div>
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <FaSearch />
                                </div>

                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className={`block w-full pl-10 pr-3 py-2.5 text-sm rounded-md focus:ring-1 focus:ring-blue-500 transition
                                 ${isDarkMode ?
                                            "bg-slate-700 border border-slate-600 text-gray-100 placeholder-gray-400"
                                            : "bg-gray-50 border border-gray-300 text-gray-900"
                                        }`}
                                    placeholder="Search books..."
                                />
                            </div>
                            <div className="flex gap-3 items-center">
                                <select
                                    name="category"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="px-3 py-1 border rounded-md"
                                >
                                    <option value="all">All</option>
                                    {categories.map((category) => (
                                        <option key={category?.id} value={category?.name}>
                                            {category?.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                        </div>
                    </div>

                    {loading ? (<Loader text={"Loading books.."} />) : (
                        <BookTable
                            isDarkMode={isDarkMode}
                            selectedBooks={selectedBooks}
                            filteredBooks={filteredBooks}
                            handleSelectAll={handleSelectAll}
                            handleSelectBook={handleSelectBook}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
