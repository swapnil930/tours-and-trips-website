import { FaStar } from "react-icons/fa";
import { useEffect, useRef } from "react";
import testimonials from "../../jsonData/testimonials";

const Testimonials = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      const cardWidth = slider.firstChild.offsetWidth + 24;
      scrollAmount += cardWidth;

      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
      }

      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 overflow-hidden">
      <div className="flex flex-col items-start px-5 lg:px-10  mb-10">
        <span className="h-1 w-28 bg-yellow-500 mb-1 rounded-full"></span>
        <div className="flex w-full justify-between items-center">
          <p className="text-[1.75rem] leading-normal md:text-3xl lg:text-4xl xl:text-[2.5rem] xl:leading-tight font-semibold text-black">
            What's Our Travelers Say
          </p>

        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8">
        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-hidden py-5"
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="min-w-[80%] sm:min-w-[45%] lg:min-w-[32%] 
                         bg-gradient-to-br from-blue-50 to-purple-50 
                         p-6 rounded-2xl shadow-lg"
            >
              <div className="flex mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-5 italic">"{t.text}"</p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-xl mr-3">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
