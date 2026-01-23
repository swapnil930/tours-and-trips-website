import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../services/bookApi";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { FaArrowLeft } from "react-icons/fa";
import BookForm from "../components/BookForm";

export default function EditBook({ isDarkMode }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        api.getBookById(id)
            .then((res) => {
                setBook(res?.data)
            })
            .catch((err) => {
                console.log(err);
                toast.error("Something went wrong...!!")
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id]);

    const handleUpdateBook = (data) => {
        api.updateBook(id, data)
            .then((res) => {
                toast.success("Book details update successfully..!!")
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                toast.error("Failed to update deatils")
            })
    };

    return (
        <div className="container">
            <div className="w-full mx-auto p-6">
                <h2 className=" flex items-center gap-2 text-2xl font-semibold text-primary mb-4">
                    <button className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                        onClick={() => navigate(-1)}>
                        <FaArrowLeft size={15} />
                    </button>
                    Edit  Book
                </h2>
            </div>

            {loading ? (
                <Loader />
            ) : (
                <div className="max-w-3xl mx-auto p-6">
                    <BookForm
                        isDarkMode={isDarkMode}
                        book={book}
                        onSubmit={handleUpdateBook}
                        buttonText="Update"
                    />
                </div>
            )}
        </div>
    );
}
