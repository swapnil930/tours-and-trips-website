import { useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaCalendar, FaMapMarkerAlt, FaStopwatch } from "react-icons/fa";
import { Link } from "react-router-dom";
import tours from "../../jsonData/tours";
import { useTranslation } from "react-i18next";
import i18next from "i18next";


const FeaturedTours = () => {
  const { t } = useTranslation();

  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollLeft -= 350;
  };

  const slideRight = () => {
    sliderRef.current.scrollLeft += 350;
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat(i18next.language, {
      day: "numeric",
      month: "short",
    }).format(new Date(date));
  };


  return (
    <div className="relative w-full mb-10">

      <div className="flex flex-col items-start px-5 lg:px-10  mb-10">
        <span className="h-1 w-28 bg-yellow-500 mb-1 rounded-full"></span>
        <div className="flex w-full justify-between items-center">
          <p className="text-[1.75rem] leading-normal md:text-3xl lg:text-4xl xl:text-[2.5rem] xl:leading-tight font-semibold text-black">
            {t("sections.featuredDestinations")}
          </p>
          <Link to="/upcoming-tours" className="hidden lg:flex text-black font-medium rounded-lg p-2 bg-yellow-400 hover:bg-yellow-500">
            Explore All
          </Link>
        </div>
      </div>

      {/* Left Button */}
      <button
        onClick={slideLeft}
        className="absolute left-5 top-1/2 z-20 -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        <FaArrowLeft className="text-yellow-400" />
      </button>

      <div
        ref={sliderRef}
        className="flex gap-8 overflow-x-scroll scroll-smooth scrollbar-hide px-10  "
      >

        {tours?.map((tour) => (
          <Link to={`/upcoming-tours/trip/${tour?.id}`} >
            <div
              key={tour?.id}
              className="relative min-w-[275px] h-[370px] rounded-2xl overflow-hidden shadow-lg group"
            >
              <img
                src={tour?.image}
                alt={tour?.key}
                className=" inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

              <div className="absolute top-3 right-3 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                <span className="line-through text-xs mr-1">₹{tour.oldPrice}</span>
                ₹{tour?.price}
              </div>

              <div className="absolute bottom-0 p-4 text-white space-y-2 w-full">
                <span className="inline-block bg-yellow-400 text-black border border-white text-[9px]  px-2 py-1 rounded-full">
                  {t(`tours.${tour.key}.type`)}
                </span>

                <h3 className="text-md font-bold leading-tight line-clamp-1">
                  {t(`tours.${tour?.key}.title`)}
                </h3>


                <div className="flex justify-between text-sm opacity-90">
                  <span className="flex items-center gap-1"><FaMapMarkerAlt size={10} /> {tour?.pickUp} - {tour?.drop}</span>
                  <span className="flex items-center gap-1"><FaStopwatch /> {t("labels.duration", {
                    days: tour?.duration?.days,
                    nights: tour?.duration?.nights
                  })}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                  <FaCalendar />
                  {tour?.dates?.map((date, index) => (
                    <span key={index}>
                      {formatDate(date)}
                      {index !== tour?.dates?.length - 1 && " - "}
                    </span>
                  ))}
                  </div>
                  <div>
                  {tour?.batches > 0 && (
                    <span className="text-blue-400">
                      +{tour.batches} {t("labels.batches")}
                    </span>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}


      </div>
      {/* Right Button */}
      <button
        onClick={slideRight}
        className="absolute right-5 top-1/2 z-20 -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        <FaArrowRight className="text-yellow-400" />
      </button>
      <div className="flex justify-center mt-8 lg:hidden">
        <Link to="/upcoming-tours" className="text-black font-medium rounded-lg px-6 py-2 bg-yellow-400 hover:bg-yellow-500">
          Explore All
        </Link>
      </div>

    </div>

  );
};

export default FeaturedTours