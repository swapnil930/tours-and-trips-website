import { useState, useEffect } from "react";
import {FaMapMarkerAlt } from "react-icons/fa";
import Stats from "../common/hero/Stats";
import { useTranslation } from "react-i18next";

const HomeHero = () => {
  const {t} = useTranslation();

  const destinations = [
  {
    id: 1,
    key: "thailand",
    image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=500&q=80"
  },
  {
    id: 2,
    key: "himachal",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&q=80"
  },
  {
    id: 3,
    key: "sikkim",
    image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=500&q=80"
  },
  {
    id: 4,
    key: "goa",
    image: "https://images.unsplash.com/photo-1587922546307-776227941871?w=500&q=80"
  },
  {
    id: 5,
    key: "kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&q=80"
  }
];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    setProgress(0);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 100 / 35;
      });
    }, 100);

    const slideTimer = setTimeout(() => {
      if (!isLargeScreen) {
        setFade(false);
      }

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % destinations.length);

        if (!isLargeScreen) {
          setFade(true);
        }
      }, 400);
    }, 3500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(slideTimer);
    };
  }, [currentIndex, destinations.length, isLargeScreen]);

  const currentDestin = destinations[currentIndex];

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bgImage = isLargeScreen
    ? "/images/hero/home-bg.jpg"
    : currentDestin.image;

  return (
    <section className="relative h-[700px] overflow-hidden mb-16">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${fade ? "opacity-100" : "opacity-0"
            }`}
          style={{ backgroundImage: `url(${bgImage})` }}
        />

      </div>

      <div className="h-full w-full max-w-[88rem] mx-auto px-6 md:px-8 lg:px-10 relative grid md:grid-cols-2 md:gap-10">
        {/* Left Section */}
        <div className="flex flex-col justify-center h-fit my-auto w-full bg-black/20 backdrop-blur-sm border-2 border-black/55 p-4 lg:p-5 xl:p-8 rounded-xl max-w-md md:max-w-full">
          <h1
            className="text-4xl lg:text-5xl xl:text-6xl leading-tight lg:leading-tight xl:leading-tight capitalize font-semibold text-white drop-shadow-[0px_2.5px_8px_rgba(0,0,0,0.10)]"
            style={{ textShadow: "0px 4px 10px rgba(0,0,0,0.40)" }}
          >
            {t("home.sirfTripNahiMemoriesBanao")}
          </h1>
          <p className="text-sm lg:text-lg xl:text-xl max-w-md lg:max-w-full text-white mt-2 pr-16 lg:pr-10 xl:pr-0">
            {t("home.fromInstaWorthyStays")}
          </p>

          <div className="flex flex-row justify-between items-center gap-8 mt-6 lg:mt-10 bg-white w-full max-w-xl mx-auto h-fit rounded-md lg:p-3 lg:pl-4 p-2 text-sm lg:text-base">
            <div className="flex flex-row gap-2 items-center h-fit w-full">
              <div className="flex gap-4 sm:gap-6 justify-center items-center h-full w-full">
                <div className="flex flex-row gap-2 items-center h-9 w-full max-w-md relative">
                  <FaMapMarkerAlt size={16} className="text-gray-400" />
                  <input
                    id="search"
                    placeholder={t("home.search")}
                    className="bg-transparent focus-visible:outline-none text-black w-full placeholder:text-zinc-500"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button className="bg-yellow-400 rounded-lg px-2 py-2 shrink-0">{t("home.letsExplore")}</button>
          </div>
        </div>

        {/* Right Section*/}
        <div className="h-full w-full hidden md:flex flex-col justify-center items-end pb-10">
          <div className="h-full w-fit flex justify-center items-center">
            <div className="flex flex-row items-center gap-6">
              <div className="animate-in flex flex-col items-center gap-8 justify-center">
                <div className="flex relative justify-center w-full items-center">
                  <div
                    className="h-fit w-fit cursor-grab backdrop-blur-sm bg-black/20 rounded-lg border-2 border-black/55"
                    draggable="false"
                    style={{ opacity: 1, transform: "none", userSelect: "none", touchAction: "pan-x" }}
                  >
                    <div className="grid grid-cols-7 gap-4 h-40 lg:h-48 w-full max-w-sm p-2.5">
                      <div className="col-span-3 relative h-full w-full rounded-lg overflow-hidden">
                        <img
                          src={currentDestin.image}
                          alt={currentDestin.name}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>

                      <div className="col-span-4 py-2 lg:py-4 px-2 text-white flex flex-col justify-center gap-2">
                        <h2 className="text-lg lg:text-2xl font-semibold"> {t(`destinations.${currentDestin.key}.name`)}</h2>
                        <p className="lg:text-sm text-xs overflow-hidden line-clamp-4">
                           {t(`destinations.${currentDestin.key}.description`)}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="shrink-0 relative h-56 lg:h-64 flex flex-row items-center gap-3">
                <div className="w-2 h-full bg-black/55 backdrop-blur-sm rounded overflow-hidden relative">
                  <div
                    className="w-full bg-white rounded transition-all duration-100 ease-linear absolute top-0 left-0"
                    style={{
                      height: `${progress}%`,
                      transformOrigin: 'top'
                    }}
                  />
                </div>

                <p className="text-base lg:text-xl text-white tracking-wider whitespace-nowrap font-medium"
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    transform: 'rotate(180deg)'
                  }}>
                  Popular Locations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 w-full py-4 bg-transparent backdrop-blur-sm grid grid-cols-3 text-white">
        <Stats />
      </div>
    </section>
  );
};

export default HomeHero;