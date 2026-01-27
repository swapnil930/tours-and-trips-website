import { FaCalendar, FaMapMarkerAlt, FaStopwatch } from "react-icons/fa";

import Hero from "../components/common/hero/Hero";
import NewsLetter from "../components/common/newsLetter/NewsLetter";

const Tours = () => {
  const tours = [
    {
      id: 1,
      title: "Kerala",
      route: "Kochi - Kanyakumari",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
      oldPrice: 18000,
      price: 16999,
      duration: "9D/8N",
      dates: "1st Nov, 22nd Nov",
      batches: 6,
    },
    {
      id: 2,
      title: "Kashmir",
      route: "Mumbai - Mumbai",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
      oldPrice: 20000,
      price: 18500,
      duration: "10D/9N",
      dates: "1st Jan, 12th Feb",
      batches: 0,
    },
    {
      id: 3,
      title: "Manali - Kasol - Dharamshala",
      route: "Delhi - Delhi",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
      oldPrice: 16000,
      price: 14499,
      duration: "10D/9N",
      dates: "3rd Oct, 11th Oct",
      batches: 12,
    },
    {
      id: 4,
      title: "Thailand",
      route: "Delhi - Delhi",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
      oldPrice: 22000,
      price: 19999,
      duration: "8D/7N",
      dates: "5th Dec, 18th Dec",
      batches: 8,
    },
    {
      id: 5,
      title: "Manali - Kasol - Dharamshala",
      route: "Delhi - Delhi",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
      oldPrice: 16000,
      price: 14499,
      duration: "10D/9N",
      dates: "3rd Oct, 11th Oct",
      batches: 12,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Newsletter (position controlled from page) */}
      <div className="relative z-20 lg:px-15 mx-5 -mt-28">
        <NewsLetter />
      </div>

      {/* Tours Section */}
      <div className="relative w-full mb-16 mt-20">
        {/* Heading */}
        <div className="flex flex-col items-start px-6 md:px-10 mb-10">
          <span className="h-1 w-28 bg-yellow-500 mb-2 rounded-full"></span>
          <div className="flex w-full justify-between items-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
              All Upcoming Trips
            </p>
            <button className="hidden lg:flex text-black font-medium rounded-lg px-4 py-2 bg-yellow-400 hover:bg-yellow-500">
              Explore All
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 md:px-10">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="relative w-full h-[370px] rounded-2xl overflow-hidden shadow-lg group"
            >
              {/* Image */}
              <img
                src={tour.image}
                alt={tour.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

              {/* Price Tag */}
              <div className="absolute top-3 right-3 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                <span className="line-through text-xs mr-1">
                  ₹{tour.oldPrice}
                </span>
                ₹{tour.price}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 p-4 text-white space-y-2 w-full">
                <span className="inline-block bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-semibold">
                  Group Tour
                </span>

                <h3 className="text-md font-bold leading-tight line-clamp-1">
                  {tour.title}
                </h3>

                <div className="flex justify-between text-sm opacity-90">
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt size={12} /> {tour.route}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaStopwatch size={12} /> {tour.duration}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <FaCalendar size={12} /> {tour.dates}
                  {tour.batches > 0 && (
                    <span className="text-blue-400">
                      +{tour.batches} Batches
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="flex justify-center mt-10 lg:hidden">
          <button className="text-black font-medium rounded-lg px-6 py-2 bg-yellow-400 hover:bg-yellow-500">
            Explore All
          </button>
        </div>
      </div>
    </>
  );
};

export default Tours;
