import { FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BookCard = ({
    book,
    isDarkMode,
    isSelected,
    onSelect,
}) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/books/${book.id}`)}
            className={`rounded-xl shadow-md hover:shadow-lg transition p-4 cursor-pointer border
            ${isDarkMode
                    ? "bg-slate-800 border-slate-700 text-gray-200"
                    : "bg-white border-gray-200 text-gray-800"
                }`}
        >
            <div className="flex gap-4 items-start">
                <input
                    title="Select to Delete"
                    type="checkbox"
                    checked={isSelected}
                    onClick={(e) => e.stopPropagation()}
                    onChange={() => onSelect(book.id)}
                    className="mt-2 w-4 h-4"
                />

                <div className="w-20 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-sm">
                            {book.title}
                        </h3>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/edit/${book.id}`);
                            }}
                            className="text-blue-500 hover:text-blue-700"
                        >
                            <FaPen title="Edit" />
                        </button>
                    </div>

                    <p className="text-xs mt-1">
                        <span className="font-medium">Author:</span> {book.author}
                    </p>
                    <p className="text-xs">
                        <span className="font-medium">Publisher:</span> {book.publisher}
                    </p>

                    <p className="text-xs mt-2 line-clamp-2 text-gray-400">
                        {book.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
