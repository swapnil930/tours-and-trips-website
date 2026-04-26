import { useState } from "react";

const ReachOutForm = () => {
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
    console.log("Reach Out Form Data:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      destination: ""
    });
  };

  const inputClasses =
    "w-full h-12 px-3 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent";

  return (
    <section className="px-4">
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-2">
          Reach Out to Us
        </h2>
        <p className="text-gray-500 text-sm text-center mb-6">
          Get travel deals, offers & updates from Demo Holidays
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
            type="text"
            name="destination"
            placeholder="Destination Name"
            value={formData.destination}
            onChange={handleChange}
            className={inputClasses}
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-500 transition"
          >
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReachOutForm;
