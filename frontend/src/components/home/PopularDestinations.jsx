
import destinations from "../../jsonData/Destinations";

const PopularDestinations = () => {

  return (
    <section className="py-20">
      <div className="flex flex-col items-start px-10 mb-10">
        <span className="h-1 w-28 bg-yellow-500 mb-1 rounded-full"></span>
        <div className="flex w-full justify-between items-center">
          <p className="text-[1.75rem] leading-normal md:text-3xl lg:text-4xl xl:text-[2.5rem] xl:leading-tight font-semibold text-black">
            Popular Destinations
          </p>

        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {destinations.map((dest, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                <h3 className="text-2xl font-bold mb-1">{dest.name}</h3>
                <p className="text-sm opacity-90 mb-2">{dest.country}</p>
                <span className="text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                  {dest.tours} Tours
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default PopularDestinations  