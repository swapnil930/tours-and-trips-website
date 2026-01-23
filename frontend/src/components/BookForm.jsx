import { useEffect, useState } from "react";
import validateForm from "../validation/validation";
import { api } from "../services/bookApi";

const BookForm = ({ book = {}, onSubmit, buttonText, isDarkMode }) => {
    const [categories, setCategories] = useState([]);

    const [formData, setFormData] = useState({
        title: book?.title || "",
        image: book?.image || "",
        author: book?.author || "",
        publisher: book?.publisher || "",
        publishedDate: book?.publishedDate || "",
        description: book?.description || "",
        email: book?.email || "",
        age: book?.age || "",
        category: book?.category || ""
    });

    const [errors, setErrors] = useState({});


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            onSubmit(formData);
        }
    };

    useEffect(() => {
        api.getAllCategories()
            .then((res) => setCategories(res?.data))
            .catch((err) => console.log(err))
    }, [])

    const inputClasses = `
    w-full p-2 rounded-md transition focus:ring-1 focus:ring-blue-500
    ${isDarkMode
            ? "bg-slate-700 border border-slate-600 text-gray-100 placeholder-gray-400"
            : "bg-white border border-gray-300 text-gray-900"
        }
    `;

    const errorText = "text-red-500 text-sm mt-1";

    return (
        <form
            onSubmit={handleSubmit}
            className={`p-6 rounded-lg shadow-md space-y-4 transition-colors
          ${isDarkMode ? "bg-slate-800 text-gray-100" : "bg-white text-gray-800"}`}
        >
            {/* Title */}
            <div>
                <input
                    type="text"
                    name="title"
                    placeholder="Book Title"
                    value={formData?.title}
                    onChange={handleChange}
                    className={inputClasses}
                />
                {errors.title && <p className={errorText}>{errors?.title}</p>}
            </div>
            {/* img */}
            <div>
                <input
                    type="text"
                    name="image"
                    required
                    placeholder="Upload Book Image Link"
                    value={formData?.image}
                    onChange={handleChange}
                    className={inputClasses}
                />
            </div>

            {/* Author */}
            <div>
                <input
                    type="text"
                    name="author"
                    placeholder="Author Name"
                    value={formData?.author}
                    onChange={handleChange}
                    className={inputClasses}
                />
                {errors?.author && <p className={errorText}>{errors?.author}</p>}
            </div>

            {/* Publisher */}
            <div>
                <input
                    type="text"
                    name="publisher"
                    placeholder="Publisher"
                    value={formData?.publisher}
                    onChange={handleChange}
                    className={inputClasses}
                />
                {errors.publisher && <p className={errorText}>{errors.publisher}</p>}
            </div>

            {/* Email */}
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="Contact Email"
                    value={formData?.email}
                    onChange={handleChange}
                    className={inputClasses}
                />
                {errors?.email && <p className={errorText}>{errors?.email}</p>}
            </div>

            {/* Age */}
            <div className="grid grid-cols-2 gap-3 items-start">
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 py-2 border rounded-md ${isDarkMode
                        ? "bg-slate-700 border-slate-600 text-gray-100"
                        : "bg-white border-gray-300 text-gray-900"
                        }`}
                >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.name}>
                            {category.name}
                        </option>
                    ))}
                </select>

                <div>
                    <input
                        type="text"
                        name="age"
                        placeholder="Author Age"
                        value={formData.age}
                        onChange={handleChange}
                        className={`w-full ${inputClasses}`}
                    />
                    {errors?.age && <p className={errorText}>{errors.age}</p>}
                </div>
            </div>


            {/* Description */}
            <div>
                <textarea
                    name="description"
                    placeholder="Book Description"
                    value={formData?.description}
                    onChange={handleChange}
                    rows={4}
                    className={inputClasses}
                />
                {errors?.description && <p className={errorText}>{errors?.description}</p>}
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className={`w-25 py-2 rounded-md font-medium transition
              ${isDarkMode
                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
            >
                {buttonText}
            </button>
        </form>
    );
}

export default BookForm 