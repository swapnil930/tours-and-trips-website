import React from 'react'
import Hero from "../components/common/hero/Hero";
import { FaMapMarkedAlt, FaPlane, FaUsers } from 'react-icons/fa';
import NewsLetter from '../components/common/newsLetter/NewsLetter';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <Hero
        title='Wander Beyond Ordinary'
        desc='Craft your dream getaway with handpicked stays, thrilling adventures, and destinations that hit different only with Tripzee Holidays.'
        image='/images/hero/about-hero.jpg'
      />

      <div className="relative z-20 lg:px-15 mx-5 -mt-28">
        <NewsLetter />
      </div>

       {/* Mission Section */}
      <section className="py-20 px-5 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
       <div className="flex flex-col items-start">
        <span className="h-1 w-28 bg-yellow-500 mb-1 rounded-full"></span>
        <div className="flex w-full justify-between items-center">
          <p className="text-[1.75rem] leading-normal md:text-3xl lg:text-4xl xl:text-[2.5rem] xl:leading-tight font-semibold text-black">
            Our Mission
          </p>

        </div>
      </div>
            
            <p className="text-gray-700 text-lg">
              Our mission is to make travel easy and enjoyable for everyone. We carefully plan trips, handpick destinations, and ensure safety and comfort throughout your journey.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
              alt="Travel"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-yellow-500 text-white py-20 px-5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center">
            <FaPlane size={40} className="mb-4" />
            <h3 className="text-2xl font-bold mb-2">Adventure</h3>
            <p>We provide thrilling and unforgettable adventures for all travelers.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaMapMarkedAlt size={40} className="mb-4" />
            <h3 className="text-2xl font-bold mb-2">Expert Planning</h3>
            <p>We carefully plan every trip to ensure a smooth and amazing experience.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaUsers size={40} className="mb-4" />
            <h3 className="text-2xl font-bold mb-2">Community</h3>
            <p>We value our travelers and create a welcoming and friendly environment.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-5 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Ready to Explore the World?
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Join thousands of happy travelers who trust us for their unforgettable journeys.
        </p>
        <Link to="/contact" className="bg-yellow-500 text-white font-bold px-8 py-3 rounded-lg hover:bg-yellow-600 transition-colors">
          Book Your Trip
        </Link>
      </section>
    
    </div>
  )
}

export default About
