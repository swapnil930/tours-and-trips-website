import PopularDestinations from "../components/home/PopularDestinations";
import Testimonials from "../components/home/Testimonials";
import FeaturedTours from "../components/home/FeaturedTours";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ExpertBanner from "../components/home/ExpertBanner";
import NewsLetter from "../components/common/NewsLetter/NewsLetter";
import HomeHero from "../components/home/HomeHero";

const Home = () => {


  return (
    <>
      <HomeHero />
      <FeaturedTours />
      <ExpertBanner />
      <PopularDestinations />
      <WhyChooseUs />
      <Testimonials />
      <div className="relative z-20 lg:px-15 mx-5 top-28">
        <NewsLetter />
      </div>
    </>

  );
};

export default Home;
