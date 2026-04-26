import React from "react";
import { Link, useParams } from "react-router-dom";
import tours from "../../jsonData/tours";
import TourHero from "../../components/common/hero/DetailHero";
import TourInfoCard from "../../components/tour/TourInfoCard";
import ReachOutForm from "../../components/tour/ReachOutForm";
import { useTranslation } from "react-i18next";

const TourDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const tour = tours.find((t) => t.id === id);

  if (!tour) return null;

  return (
    <>
      <TourHero
        title={t(`tours.${tour?.key}.title`)}
        image={tour?.image}
        desc={t(`tours.${tour?.key}.description`)}
      />

      <div className="relative z-20 -mt-40 lg:-mt-25 px-4 lg:px-16">
        <TourInfoCard
          pickUp={tour?.pickUp}
          drop={tour?.drop}
          duration={t("labels.duration", {
            days: tour?.duration?.days,
            nights: tour?.duration?.nights
          })}
          type={t(`tours.${tour.key}.type`)}

        />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-10 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-12">

          <div className="flex flex-col items-start mb-12 ">
            <span className="h-1 w-28 bg-yellow-500 mb-1 rounded-full"></span>
            <div className="w-full">
              <p className="text-[1.75rem] leading-normal md:text-3xl lg:text-4xl xl:text-[2.5rem] xl:leading-tight font-semibold text-black mb-4">
                Trip Overview
              </p>
              <p className="text-gray-700 leading-relaxed">
                Welcome to  {t(`tours.${tour?.key}.title`)} Unplugged:{t(`tours.${tour?.key}.description`)}...{" "}

              </p>
              <Link to="/" className="inline-block mt-4 bg-yellow-400 text-black font-medium rounded-lg px-4 py-2 hover:bg-yellow-500 transition-colors">
                Read More
              </Link>
            </div>
          </div>

          <Section title={t("sections.itinerary")}>
            {t(`tours.${tour.key}.itinerary`, { returnObjects: true })?.map(
              (day, index) => (
                <div key={index} className="border rounded-xl p-4 mb-4">
                  <h4 className="font-semibold text-lg">
                    {t("common.day", "Day")} {index + 1}
                  </h4>
                  <p className="text-gray-600">{day}</p>
                </div>
              )
            )}
          </Section>

          <Section title={t("sections.costing")}>
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
                  {t(`tours.${tour.key}.costing`, { returnObjects: true })?.map((item, i) => (
                    <tr key={i} className="border-t">
                      <td className="p-3">{item.type}</td>
                      <td className="p-3 font-semibold">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title={t("sections.inclusions")}>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {t(`tours.${tour.key}.inclusions`, { returnObjects: true })?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title={t("sections.exclusions")}>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {t(`tours.${tour.key}.exclusions`, { returnObjects: true })?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title={t("sections.gallery")}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
              {tour?.gallery?.map((img, i) => (
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

        <div className="">
          <div className="sticky top-0 lg:top-24">
            <ReachOutForm />
          </div>
        </div>

      </div>
    </>
  );
};

export default TourDetails;

const Section = ({ title, children }) => (
  <div>
    <div className="flex flex-col items-start mb-10">
      <span className="h-1 w-28 bg-yellow-500 mb-1 rounded-full"></span>
      <div className="w-full">
        <p className="text-[1.75rem] leading-normal md:text-3xl lg:text-4xl xl:text-[2.5rem] xl:leading-tight font-semibold text-black mb-4">
          {title}
        </p>
        {children}
      </div>
    </div>
  </div>
);
