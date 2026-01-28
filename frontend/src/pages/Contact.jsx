import React, { useState } from "react";

import Hero from "../components/common/hero/Hero";

const Contact = () => {
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    guests: "1",
    fullName: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const month = [
    { value: 'January', label: 'January' },
    { value: 'February', label: 'February' },
    { value: 'March', label: 'March' },
    { value: 'April', label: 'April' },
    { value: 'May', label: 'May' },
    { value: 'June', label: 'June' },
    { value: 'July', label: 'July' },
    { value: 'August', label: 'August' },
    { value: 'September', label: 'September' },
    { value: 'October', label: 'October' },
    { value: 'November', label: 'November' },
    { value: 'December', label: 'December' }
  ]

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(formData);

    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClasses = "w-full h-12 px-3 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <>
      <Hero />

      <div className="flex flex-col px-6 lg:px-10 mb-10">
        <span className="h-1 w-28 bg-yellow-500 mb-4 rounded-full"></span>

        <div className="flex flex-col lg:flex-row w-full gap-12">
          {/* LEFT TEXT */}
          <div className="w-full lg:w-1/2">
            <p className="text-3xl lg:text-4xl font-bold mb-4">
              Let's Connect and make trip with us
            </p>
            <p className="text-md font-medium">
              Plan your Next Adventure with us, and Explore the World with TripZee
              Holidays. Enquire now!
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-yellow-200">
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Enter Your Detail Here!
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        placeholder="Your Full Name"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={inputClasses}
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        placeholder="Your Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses}
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Phone
                    </label>
                    <div className="relative">
                      <input
                        placeholder="Your Number"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClasses}
                        required
                      />
                    </div>
                  </div>

                  {/* Start Date */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Month
                    </label>
                    <div className="relative">
                      <select
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className={inputClasses}
                      >
                        {/* Placeholder option */}
                        <option value="" disabled>
                          Select Month
                        </option>

                        {month.map((mon) => (
                          <option key={mon.value} value={mon.value}>
                            {mon.label}
                          </option>
                        ))}
                      </select>

                    </div>
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Guests
                    </label>
                    <div className="relative">
                      <select
                        placeholder="Number of Guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className={inputClasses}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                          <option key={n} value={n}>{n} Guests</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Destination */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2">
                      Destination
                    </label>
                    <div className="relative">
                      <input
                        placeholder="Destination"
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className={inputClasses}
                        required
                      />
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2">
                      Special Requests
                    </label>
                    <textarea
                      placeholder="Tell us details about yourself!"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows="4"
                      className={`${inputClasses} h-20`}
                    />
                  </div>
                </div>

                {/* Button */}
                <div className="flex justify-center mt-8">
                  <button
                    type="submit"
                    className=" w-full bg-yellow-300 text-black font-medium py-2 px-10 rounded-lg">
                    Submit Now
                  </button>
                </div>
              </form>

              {submitted && (
                <div className="mt-6 bg-green-100 text-green-700 p-4 rounded-lg text-center">
                  Thank you! We’ll contact you shortly.
                </div>
              )}
            </div>
          </div>
        </div >
      </div >
    </>
  );
};

export default Contact;
