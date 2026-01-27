import { FaAward, FaInstagram, FaStar } from "react-icons/fa";

const Stats = () => {
  return (
      <>
      {/* Instagram */}
      <div className="flex justify-center items-center">
        <div className="flex items-center gap-2">
          <FaInstagram className="text-3xl lg:text-4xl" />
          <div className="flex flex-col">
            <span className="font-semibold tracking-wider lg:text-lg xl:text-xl">
              30k+
            </span>
            <span className="text-xs lg:text-sm font-light">
              Followers
            </span>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="flex justify-center items-center">
        <div className="flex items-center gap-2">
          <FaStar className="text-3xl lg:text-4xl text-yellow-400" />
          <div className="flex flex-col">
            <span className="font-semibold tracking-wider lg:text-lg xl:text-xl">
              4.7
            </span>
            <span className="text-xs lg:text-sm font-light">
              (2,800+ Reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="flex justify-center items-center">
        <div className="flex items-center gap-2">
          <FaAward className="text-3xl lg:text-4xl" />
          <div className="flex flex-col">
            <span className="font-semibold tracking-wider lg:text-lg xl:text-xl">
              10+ Years
            </span>
            <span className="text-xs lg:text-sm font-light">
              Experience
            </span>
          </div>
        </div>
      </div>

      {/* Divider Lines */}
      <span className="hidden md:block absolute top-1/2 left-1/3 -translate-y-1/2 h-6 w-[2px] bg-white/40"></span>
      <span className="hidden md:block absolute top-1/2 left-2/3 -translate-y-1/2 h-6 w-[2px] bg-white/40"></span>
   </>
  );
};
export default Stats;
