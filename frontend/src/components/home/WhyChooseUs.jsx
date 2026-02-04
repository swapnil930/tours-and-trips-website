import { FaAward, FaChartLine, FaHeart, FaShieldAlt } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaAward className="w-8 h-8" />,
      title: "Best Price Guarantee",
      description: "We ensure you get the best prices for all our tours and packages",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Safe & Secure",
      description: "Your safety is our priority with secure payments and insurance",
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Trusted by Thousands",
      description: "Join 50,000+ happy travelers who explored the world with us",
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Our team is always available to help you anytime, anywhere",
    },
  ];

  return (
    <section className="py-12">

      <div className="flex flex-col px-6 lg:px-10 mb-10">
        <span className="h-1 w-28 bg-yellow-500 mb-1 rounded-full"></span>
        <div className="flex flex-col lg:flex-row w-full gap-10">
          {/* LEFT TEXT */}
          <div className="w-full lg:w-[35%]">
            <p className="text-[1.75rem] leading-normal md:text-3xl lg:text-4xl xl:text-[2.5rem] xl:leading-tight font-semibold text-black mb-4">
              Why Choose us?
            </p>
            <p className="text-md font-medium">
              Planning a trip with friends can be messy someone cancels,
              someone gets confused, and nothing goes as planned.
              That’s why we’re here! We take care of everything, so you
              just show up, relax, and enjoy your holiday.
            </p>
          </div>

          <div className="w-ful">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden bg-white p-8 rounded-2xl shadow-lg 
                  transition-all duration-500 group"
                >
                  <span
                    className="absolute w-[500px] h-[500px] rounded-full bg-indigo-500
                     top-[10px] left-[150px] -translate-x-1/2 -translate-y-1/2
                     scale-0 transition-transform duration-500 ease-out
                     group-hover:scale-100 opacity-0 group-hover:opacity-90"
                  ></span>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14">
                        <div
                          className="w-full h-full rounded-2xl flex items-center justify-center
        bg-gradient-to-br from-blue-500 to-purple-600 text-white
        transition-all duration-500
        group-hover:bg-white group-hover:bg-none group-hover:text-indigo-600"
                        >
                          {feature.icon}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-white">
                        {feature.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-200">
                      {feature.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
