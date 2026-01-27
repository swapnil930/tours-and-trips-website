import { useState, useEffect } from "react";
import { FaMapMarkerAlt, } from "react-icons/fa";
import Stats from "../about/Stats";

const Hero = () => {
  const destinations = [
    {
      id: 1,
      name: "Himachal",
      description: "Feel the Magic of Himachal with Tripzee Holidays. Himachal Pradesh is one of those places that makes you slow down and just enjoy the moment. Whether i...",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&q=80"
    },
    {
      id: 2,
      name: "Sikkim",
      description: "Sikkim: A Paradise in the Himalayas Nestled in the lap of the Eastern Himalayas, Sikkim is a land of breathtaking beauty, vibrant culture, and serene...",
      image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=500&q=80"
    },
    {
      id: 3,
      name: "Goa",
      description: "Beaches, nightlife, and Portuguese heritage create the perfect tropical escape for every traveler...",
      image: "https://images.unsplash.com/photo-1587922546307-776227941871?w=500&q=80"
    },
    {
      id: 4,
      name: "Kerala",
      description: "Backwaters, houseboats, and lush greenery define God's Own Country, a paradise in South India...",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % destinations.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative  h-[700px] overflow-hidden mb-16">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero/home-bg.jpg')" }}
      >
      </div>

      {/* Popular Destinations Text (Independent Layer) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
        <div className="writing-mode-vertical text-white text-lg font-semibold tracking-widest">
          Popular Destinations
        </div>
      </div>

      {/* Cards Wrapper – only this moves down */}
      <div className="absolute top-1/2 z-40 -translate-y-1/2">
        <div className="max-w-7xl mx-auto  px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2  items-center justify-between gap-8">

            {/* Left Card */}
            <div className="flex justify-center lg:h-[100%]">
              <div className="w-full max-w-xl bg-gray-900/20 backdrop-blur-sm rounded-xl p-4 border border-black p-4 lg:p-5 xl:p-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white text-shadow-md font-bold mb-4">
                  Sirf Trip Nahi,<br />Memories Banao
                </h1>

                <p className="text-blue-100 font-medium text-lg mb-8">
                  From Insta-worthy stays to bucket-list adventures – we plan it all, you just live the vibe.
                </p>

                <div className="bg-white rounded-md flex items-center p-2 w-full overflow-hidden">
                  <FaMapMarkerAlt className="text-gray-400 mx-2" />
                  <input
                    type="text"
                    placeholder="Search destination"
                    className="flex-1 min-w-0 outline-none text-gray-700 px-2"
                  />

                  <button className="bg-yellow-400 px-4 py-2 rounded-md font-medium">
                    Explore
                  </button>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="hidden lg:flex justify-end">
              <div className="relative h-[200px] w-full max-w-sm">
                {destinations.map((dest, index) => {
                  const pos = (index - currentIndex + destinations.length) % destinations.length;

                  return (
                    <div
                      key={dest.id}
                      className="absolute inset-0 transition-all duration-700"
                      style={{
                        transform: `translateY(${pos * 25}px)`,
                        opacity: pos === 0 ? 1 : 0,
                        zIndex: 10 - pos
                      }}
                    >
                      <div className="bg-black/40 rounded-lg overflow-hidden flex h-full border border-black/20">
                        <img
                          src={dest.image}
                          alt={dest.name}
                          className="w-2/5 object-cover"
                        />
                        <div className="w-3/5 p-4">
                          <h3 className="text-2xl font-bold text-white">
                            {dest.name}
                          </h3>
                          <p className="text-white/80 text-sm mt-2">
                            {dest.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 w-full py-4  bg-transperent backdrop-blur-sm grid grid-cols-3 text-white">
        <Stats />
      </div>

      <style jsx>{`
          .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>

  );
};

export default Hero;
