const ExpertBanner = () => {
    return (
        <section className="w-full flex justify-center py-8">
            <div className="relative w-[90%] max-w-7xl bg-[#FFF9E6] rounded-2xl border border-gray-300 overflow-hidden flex flex-col lg:flex-row h-[400px]">

                {/* Left Content */}
                <div className="flex-1 p-6 sm:p-8 lg:p-12 z-10 flex flex-col justify-center">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
                        Not sure where your next <br className="hidden sm:block" />
                        adventure should be?
                    </h2>

                    <p className="mt-3 text-gray-900 font-medium text-sm sm:text-base lg:text-base max-w-lg">
                        Leave the details to us! Our experts design trips that match your
                        energy and bring your travel dreams alive.
                    </p>

                    <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2.5 rounded-lg shadow transition w-fit">
                        Connect with expert
                    </button>
                </div>


                {/* Right Image Grid - positioned absolutely from bottom right */}
                <div className="absolute top-0 right-0 overflow-hidden w-full lg:w-[45%] h-full pointer-events-none">
                    <div className="absolute -top-12 -right-12 lg:-bottom-24 lg:-right-24 lg:top-auto blur-sm lg:blur-none opacity-80 lg:opacity-100">
                        <div className="grid grid-cols-3 grid-rows-3 gap-3 rotate-45 scale-75 lg:scale-100">
                            {images.map((img, i) => (
                                <div
                                    key={i}
                                    className="w-40 h-40 overflow-hidden rounded-xl shadow-lg pointer-events-auto"
                                >
                                    <img
                                        src={img}
                                        alt="travel"
                                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 -rotate-90"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ExpertBanner;

const images = [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
];