import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import images from "../../jsonData/imgGallary";

const ContentGallary = () => {

    const sliderRef = useRef(null);

    const slideLeft = () => {
        sliderRef.current.scrollLeft -= 350;
    };

    const slideRight = () => {
        sliderRef.current.scrollLeft += 350;
    };

    return (
        <div className="relative w-full mb-10">

            <div className="flex flex-col items-start px-5 lg:px-10 mb-10">
                <span className="h-1 w-28 bg-yellow-500 mb-1 rounded-full"></span>
                <div className="flex w-full justify-between items-center">
                    <p className="text-[1.75rem] leading-normal md:text-3xl lg:text-4xl xl:text-[2.5rem] xl:leading-tight font-semibold text-black">
                        Content Gallary
                    </p>
                    <div className="flex gap-5">
                        <button
                            onClick={slideLeft}
                            className="bg-white p-2 rounded-full shadow hover:shadow-lg transition hover:bg-gray-50"
                        >
                            <FaArrowLeft className="text-yellow-400" />
                        </button>
                        <button
                            onClick={slideRight}
                            className="bg-white p-2 rounded-full shadow hover:shadow-lg transition hover:bg-gray-50"
                        >
                            <FaArrowRight className="text-yellow-400" />
                        </button>
                    </div>
                </div>
            </div>

            <div
                ref={sliderRef}
                className="flex gap-8 overflow-x-scroll scroll-smooth scrollbar-hide px-10  "
            >
                {images.map((img) => (
                    <div
                        key={img.id}
                        className="relative min-w-[275px] h-[370px] rounded-2xl overflow-hidden shadow-lg group"
                    >
                        <img
                            src={img.image}
                            alt={img.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                    </div>
                ))}

            </div>

            <div className="flex justify-center mt-8 lg:hidden">
                <Link to="/blogs" className="text-black font-medium rounded-lg px-6 py-2 bg-yellow-400 hover:bg-yellow-500">
                    Explore All
                </Link>
            </div>

        </div>

    );
};

export default ContentGallary;