import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const NewsLetter = () => {
  return (
   
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-xl border-t-4 border-blue-500">
          
          <div className="grid grid-cols-1 md:grid-cols-3 h-full w-full">        
            {/* Left Section */}
            <div className="flex justify-start lg:justify-center items-center px-5 md:px-0 pt-8 pb-6 md:py-10">
              <div className="flex flex-col gap-2 pl-4">
                <div className="flex flex-col items-start">
                  <h1 className="text-[1.75rem] md:text-3xl lg:text-4xl xl:text-[2.5rem] font-semibold text-black">
                    Get In Touch
                  </h1>
                </div>
                <p className="text-sm lg:text-base xl:text-md font-medium text-gray-600">
                  For Customised Travel Packages <br /> at Special Offers
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-span-2 px-5 md:px-0 md:pr-4 xl:px-10 md:pt-8 lg:pt-10 pb-6">
              <form className="w-full space-y-4 lg:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                  <div className="relative">
                    <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      className="w-full h-10 px-4 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="relative">
                    <FaEnvelope className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      className="w-full h-10 px-4 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Gmail"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                  <div className="relative">
                    <FaPhone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      className="w-full h-10 px-4 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Number"
                    />
                  </div>

                  <div className="relative">
                    <FaMapMarkerAlt className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      className="w-full h-10 px-4 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Destination Name"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-yellow-300 hover:bg-yellow-500 text-black font-medium px-3 py-2 rounded-lg transition"
                  >
                    Submit Now
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
 
  );
};

export default NewsLetter;
