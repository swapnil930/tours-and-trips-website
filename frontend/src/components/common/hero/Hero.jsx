import Stats from "../../about/Stats";

const Hero = () => {

    return (
        <section className="relative h-[700px] overflow-hidden mb-16">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/hero/tours-hero.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="absolute top-1/2 z-40 -translate-y-1/2 w-full">
                <div className="w-full mx-auto px-8 text-center">
                    <p className="text-white text-4xl md:text-7xl font-medium">
                        Upcoming Trips
                    </p>

                    <p className="mt-4 text-white/90 text-[15px] md:text-base max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis alias nulla error magnam nesciunt illum consequatur.
                    </p>
                </div>
            </div>


            {/* Stats Bar */}
            <div className="absolute bottom-15 w-full py-4  bg-transperent  grid grid-cols-3 text-white">
                <Stats />
            </div>


        </section>

    );
};

export default Hero;
