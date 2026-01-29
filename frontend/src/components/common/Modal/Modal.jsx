import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Modal from "react-modal";

const NewsletterModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter Data:", formData);
    setIsOpen(false);
  };

  useEffect(() => {
    setTimeout(() => setIsOpen(true), 2000);
  }, []);

  const inputClasses = "w-full h-12 px-3 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed";


  return (
    <>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="bg-white p-8 rounded-lg max-w-md w-full mx-auto mt-32 outline-none"
        overlayClassName="fixed inset-0 bg-black/60 flex items-start justify-center z-50"
      >
        <div className="flex font-bold mb-2 justify-end">
          <FaTimes size={20} className="text-white w-5 h-5 p-1 bg-yellow-500 rounded-full" onClick={() => setIsOpen(false)} size={15} />
        </div>
        <p className="text-gray-500 text-sm text-center mb-6">
          Get travel deals, offers & updates from Tripzee Holidays
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClasses}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
          />

          <input
            type="tel"
            name="destination"
            placeholder="Destination Name"
            value={formData.destination}
            onChange={handleChange}
            className={inputClasses}
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-lg hover:bg-yellow-500 transition"
          >
            Submit Now
          </button>
        </form>

      </Modal>
    </>
  );
};

export default NewsletterModal;
