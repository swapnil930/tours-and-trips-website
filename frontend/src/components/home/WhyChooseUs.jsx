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
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Journey, Our Passion
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-gray-50 p-2 rounded-3xl">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden bg-white p-8 rounded-2xl shadow-lg 
              transition-all duration-500 group"
            >
              {/* Card Blast Layer (comes from icon) */}
              <span
                className="absolute w-[450px] h-[450px] rounded-full bg-indigo-500
                top-[60px] left-[60px] -translate-x-1/2 -translate-y-1/2
                scale-0 transition-transform duration-700 ease-out
                group-hover:scale-100 opacity-0 group-hover:opacity-90"
              ></span>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon Wrapper */}
                <div className="relative w-16 h-16 mb-6">
                  {/* Icon Box */}
                  <div
                    className="w-full h-full rounded-2xl flex items-center justify-center
                      bg-gradient-to-br from-blue-500 to-purple-600 text-white
                      transition-all duration-500
                      group-hover:bg-white group-hover:bg-none group-hover:text-indigo-600"
                  >
                    {feature.icon}
                  </div>

                </div>

                <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-white">
                  {feature.title}
                </h3>

                <p className="transition-colors duration-300 group-hover:text-gray-200">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
