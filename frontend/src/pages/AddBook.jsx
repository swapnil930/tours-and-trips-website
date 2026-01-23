import { useNavigate } from "react-router-dom";

import BookForm from "../components/BookForm";
import { api } from "../services/bookApi";
import { toast } from "react-toastify";
import {useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Loader from "../components/Loader";

const AddBook = ({ isDarkMode }) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleAddBook = (data) => {
        setLoading(true)
        api.createBook(data)
            .then((res) => {
                toast.success("Book added sucessfully..!!")
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false)
            })

    };

   

    return (
        <>
            <div className="w-full mx-auto p-6">
                <h2 className=" flex items-center gap-2 text-2xl font-semibold text-primary mb-4">
                    <button className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                        onClick={() => navigate(-1)}>
                        <FaArrowLeft size={15} />
                    </button>
                    Add  Book
                </h2>
            </div>
            <div className="max-w-3xl mx-auto p-6">
                {loading ? (
                    <Loader />
                ) : (

                    <BookForm isDarkMode={isDarkMode} onSubmit={handleAddBook} buttonText="Add Book" />

                )}
            </div>
        </>

    );
}
export default AddBook;