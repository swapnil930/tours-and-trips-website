import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  { question: "What Are Group Tours With Tripzee?", answer: "Our group tours are curated travel experiences where you explore destinations with like-minded travelers, guided by experts and full support." },
  { question: "What Makes Tripzee Holidays Different?", answer: "We focus on personalized experiences, premium stays, small groups, and complete end-to-end travel assistance." },
  { question: "How Do I Sign Up For A Trip With Tripzee?", answer: "Simply choose your destination, fill out the inquiry form, and our team will contact you with all details." },
  { question: "Is Traveling With Tripzee Safe For Solo Female Travelers?", answer: "Yes, safety is our priority. We provide verified stays, trusted guides, and secure transportation." },
  { question: "I'm A Solo Traveler – Can I Join Your Trips?", answer: "Absolutely! Many of our travelers are solo. You’ll join a friendly group and make new connections." }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fdfbf6] py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* Left Content */}
        <div>
          <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            FAQ's About Tripzee Holidays
          </h2>
          <p className="text-gray-600 max-w-md">
            Get quick answers to the questions travelers ask the most and plan your perfect getaway with ease.
          </p>
        </div>

        {/* Right Accordion */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-black/80 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-black"
              >
                <span>{index + 1}. {faq.question}</span>
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </button>

              {activeIndex === index && (
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
