const PopularDestinations = () => {
  const destinations = [
    { name: 'Paris', country: 'France', tours: 45, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
    { name: 'Dubai', country: 'UAE', tours: 38, image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
    { name: 'Maldives', country: 'Maldives', tours: 52, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
    { name: 'New York', country: 'USA', tours: 67, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
    { name: 'London', country: 'UK', tours: 41, image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
    { name: 'Rome', country: 'Italy', tours: 36, image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" }
  ];


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start mb-10">
          <span className="h-1 w-28 bg-yellow-500 mb-2 rounded-full"></span>
          <p className="text-3xl lg:text-4xl font-bold">
            Explore Dream Location
          </p>
        </div>

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