import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { api } from "../services/bookApi";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { FaArrowLeft, FaPen } from "react-icons/fa";

const BookDetails = ({ isDarkMode }) => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true)
        api.getBookById(id)
            .then((res) => {
                setBook(res?.data)
            })
            .catch((err) => {
                console.log(err);
                toast.error("Something went wrong..!!");
            })
            .finally(() => setLoading(false));

    }, [id]);

    return (
        <>
            <div className="w-full mx-auto p-6">
                <h2 className=" flex items-center gap-2 text-2xl font-semibold text-gray-900 mb-4">
                    <button className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                        onClick={() => navigate(-1)}>
                        <FaArrowLeft size={15} />
                    </button>
                    Book Details
                </h2>
            </div>
            {!book ||loading ? (
                <div className="text-center mt-10 text-red-500">
                    <Loader text={"No Details Found.."} />
                </div>
            ) : (

                <div className="max-w-4xl mx-auto p-6">
                    <div
                        className={`shadow-md rounded-lg p-6 space-y-4 transition-colors
                             ${isDarkMode
                                ? "bg-slate-800 border border-slate-700"
                                : "bg-white border border-gray-200"
                            }`}
                    >
                        <div className="flex items-center justify-end">
                            <Link
                                to={`/edit/${book?.id}`}
                                className={`inline-flex items-center gap-2 p-2.5 rounded-md transition
                                ${isDarkMode
                                        ? "bg-blue-500 text-white hover:bg-blue-600"
                                        : "bg-blue-600 text-white hover:bg-blue-700"
                                    }`}
                            >
                                <FaPen />
                            </Link>
                        </div>
                        <div
                            className={`
                             ${isDarkMode ? "bg-slate-800 " : "bg-white "}`}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                                <div className="flex justify-center md:justify-start">
                                    <img
                                        src={book?.image}
                                        alt={book?.title}
                                        className="w-100 h-90 object-cover rounded-lg shadow-md"
                                    />
                                </div>

                                <div className="md:col-span-2 space-y-4">

                                    <h2
                                        className={`text-2xl font-semibold ${isDarkMode ? "text-blue-400" : "text-blue-600"
                                            }`}
                                    >
                                        {book?.title}
                                    </h2>

                                    {/* Details Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <p><span className="font-semibold">Author:</span> {book?.author}</p>
                                        <p><span className="font-semibold">Publisher:</span> {book?.publisher}</p>
                                        <p><span className="font-semibold">Published Date:</span> {book?.publishedDate}</p>
                                        <p><span className="font-semibold">Author Age:</span> {book?.age}</p>
                                        <p><span className="font-semibold">Contact Email:</span> {book?.email}</p>
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <p className="font-semibold">Description:</p>
                                        <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                                            {book?.description}
                                        </p>
                                    </div>

                                </div>
                            </div>
                                <div className="mt-6 text-lg">
                                    <span className="font-semibold">Details: </span>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo sed eius laudantium cupiditate repudiandae delectus nostrum fugiat, explicabo quod aliquam libero facilis corrupti distinctio possimus voluptatem omnis illum amet consectetur nisi ea? Blanditiis fugiat consequuntur est dolor provident placeat, enim vel, beatae alias eveniet doloribus? Nemo nisi veritatis harum nihil.</p>
                                </div>

                        </div>

                    </div>
                </div>

            )}
        </>

    );
};

export default BookDetails;
