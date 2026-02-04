import React from "react";
import { useParams } from "react-router-dom";
import tours from "../../jsonData/Tours";
import TourHero from "../../components/tour/TourHero";
import TourInfoCard from "../../components/tour/TourInfoCard";

const TourDetails = () => {
  const { title } = useParams();
  const tour = tours.find((t) => t.title === title);

  if (!tour) return null;

  return (
    <>
      <TourHero title={tour.title} image={tour.image} />

      {/* Info Card Overlay */}
      <div className="relative z-20 -mt-24 px-4 lg:px-16">
        <TourInfoCard />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-16 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-12">

          <Section title="Trip Overview">
            <p className="text-gray-700 leading-relaxed">
              Thailand Unplugged: A Journey Through Paradise...{" "}
              <span className="text-blue-600 cursor-pointer font-medium">
                Read More
              </span>
            </p>
          </Section>

          <Section title="Itinerary">
            {tour.itinerary.map((day, index) => (
              <div key={index} className="border rounded-xl p-4 mb-4">
                <h4 className="font-semibold text-lg">
                  Day {index + 1}
                </h4>
                <p className="text-gray-600">{day}</p>
              </div>
            ))}
          </Section>

          <Section title="Dates & Costing">
            <p className="text-gray-700 mb-4">
              Contact us directly for available date batches for this trip.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border rounded-xl">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 text-left">Sharing Type</th>
                    <th className="p-3 text-left">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {tour.costing.map((item, i) => (
                    <tr key={i} className="border-t">
                      <td className="p-3">{item.type}</td>
                      <td className="p-3 font-semibold">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="Inclusion">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {tour.inclusions.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="Exclusion">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {tour.exclusions.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="Gallery">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
              {tour.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className="rounded-xl object-cover h-40 w-full"
                />
              ))}
            </div>
          </Section>

        </div>

        {/* RIGHT STICKY CARD */}
        <div className="hidden lg:block">
          <div className="sticky top-24">

          </div>
        </div>

      </div>
    </>
  );
};

export default TourDetails;

const Section = ({ title, children }) => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    {children}
  </div>
);
