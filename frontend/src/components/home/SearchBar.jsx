import { FaMapPin, FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="relative z-20 -mt-32 mb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glassmorphism card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-black/30">
          {/* Hero Text Section */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-4 leading-tight">
              Sirf Trip Nahi, Memories Banao
            </h1>
            <p className="text-lg md:text-xl text-gray-700 font-medium">
              From Insta-worthy stays to bucket-list adventures – we plan it all, you just live the vibe.
            </p>
          </div>

          {/* Search Bar Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            {/* Location Input */}
            <div className="relative md:col-span-2">
              <FaMapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 z-10" />
              <input
                type="text"
                placeholder="Where to?"
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-black/20 bg-white/90 backdrop-blur-sm focus:border-blue-500 focus:outline-none focus:bg-white transition-all text-gray-800 placeholder-gray-500"
              />
            </div>

            {/* Search Button */}
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all flex items-center justify-center gap-2 border-2 border-transparent hover:border-white/30">
              <FaSearch className="w-5 h-5" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;