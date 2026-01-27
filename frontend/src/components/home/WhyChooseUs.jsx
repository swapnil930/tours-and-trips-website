import { FaAward, FaChartLine, FaHeart, FaShieldAlt, } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaAward className="w-8 h-8" />,
      title: 'Best Price Guarantee',
      description: 'We ensure you get the best prices for all our tours and packages'
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: 'Safe & Secure',
      description: 'Your safety is our priority with secure payments and insurance'
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: 'Trusted by Thousands',
      description: 'Join 50,000+ happy travelers who explored the world with us'
    },
    {
      icon: <FaChartLine  className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Our team is always available to help you anytime, anywhere'
    }
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
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:rotate-6 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs