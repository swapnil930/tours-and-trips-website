import { FaBook } from "react-icons/fa";

const Loader = ({ text = "Loading..." }) => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="relative flex flex-col items-center">

                <div className="w-20 h-20 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600"></div>

                <div className="absolute inset-0 bottom-8 flex items-center justify-center">
                    <FaBook className="text-blue-600 text-2xl animate-pulse" />
                </div>

                <p className="mt-4 text-center text-sm text-gray-500 font-medium">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default Loader;
