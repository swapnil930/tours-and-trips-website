import Hero from "../components/Home/Hero";
import PopularDestinations from "../components/Home/PopularDestinations";
import Testimonials from "../components/Home/Testimonials";
import FeaturedTours from "../components/Home/FeaturedTours";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import ExpertBanner from "../components/home/ExpertBanner";
import NewsLetter from "../components/common/NewsLetter/NewsLetter";

const Home = () => {


  return (
    <>
      <Hero />
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
