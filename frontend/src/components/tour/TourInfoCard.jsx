import { FaMapMarkerAlt, FaClock, FaUser } from "react-icons/fa";

const TourInfoCard = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="bg-white rounded-3xl shadow-xl border-t-4 border-blue-500 py-6 px-6 md:px-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Pickup Location */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center border rounded-xl">
              <FaMapMarkerAlt className="text-2xl text-black" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Pickup Location</p>
              <h3 className="text-xl font-semibold text-black">Krabi</h3>
            </div>
          </div>

          {/* Drop Location */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center border rounded-xl">
              <FaMapMarkerAlt className="text-2xl text-black" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Drop Location</p>
              <h3 className="text-xl font-semibold text-black">Bangkok</h3>
            </div>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center border rounded-xl">
              <FaClock className="text-2xl text-black" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Duration</p>
              <h3 className="text-xl font-semibold text-black">7N / 8D</h3>
            </div>
          </div>

          {/* Tour Type */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center border rounded-xl">
              <FaUser className="text-2xl text-black" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Tour Type</p>
              <h3 className="text-xl font-semibold text-black">Group</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TourInfoCard;
