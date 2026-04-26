
const TourHero = ({ title = "", desc = "", image = "" }) => {

    return (
        <section className="relative h-[500px] overflow-hidden mb-16">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}            >
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="absolute top-1/2 z-40 -translate-y-1/2 w-full">
                <div className="w-full mx-auto px-8 text-center">
                    <p className="text-white text-4xl md:text-7xl font-medium">
                        {title}
                    </p>

                    <p className="mt-4 text-white/90 text-base md:text-xl max-w-2xl mx-auto">
                        {desc}
                    </p>
                </div>
            </div>
        </section>

    );
};

export default TourHero;
