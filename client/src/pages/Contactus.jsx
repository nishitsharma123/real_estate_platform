import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
const ContactUs = () => {
  const [animate, setAnimate] = useState(false);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  // ------------------------------------
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    countryCode: "+91",
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };
   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);
    try {
      // Make POST request to the back-end API
      const response = await axios.post("https://ibuy-403u.onrender.com/api/contact", formData);
      alert("Your message has been sent!");
    } catch (error) {
      alert("There was an error sending your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ------------------------------------
  useEffect(() => {
    // Clear the error state when the component mounts
    // dispatch(signUpFailure(null));
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => {
      clearTimeout(timer);
      setAnimate(false);
    };
  }, [dispatch]);
  return (
    <div className="flex flex-wrap justify-between items-start p-8 bg-blue-100 font-sans">
      {/* Left Section */}
      <div className="flex-1 pr-8 min-w-[300px] mt-20">
        <h1
          className={`text-3xl font-bold mb-4 text-[#333] transition-all duration-[2000ms] ${
            animate ? "translate-x-0 opacity-100" : "translate-x-60 opacity-0"
          }`}
        >
          Contact Us
        </h1>
        <p className="text-[#555] mb-4">
          We're here to make your real estate journey seamless and stress-free. Whether you’re looking to buy, sell, or simply explore your options, iBuyR is ready to assist you every step of the way.
        </p>
        
        <a
          href="#"
          className="text-white bg-black p-1 rounded-lg cursor-pointer"
        >
          Company helpline details
        </a>
        <p className="text-blue-500 mt-2">info@snappy.io</p>
        <p className="text-blue-500 mb-4">321-221-231</p>
        {/* Additional Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div
            className={`p-5 bg-slate-300 rounded-2xl transition-all duration-[2000ms] ${
              animate
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <h2 className="font-semibold text-[#333] mb-2">Customer Support</h2>
            <p className="text-sm text-[#555]">
              Our support team is available around the clock to address any
              concerns or queries you may have.
            </p>
          </div>
          <div
            className={`p-5 bg-slate-300 rounded-2xl transition-all duration-[2000ms] ${
              animate ? "translate-y-0 opacity-100" : "translate-y-60 opacity-0"
            }`}
          >
            <h2 className="font-semibold text-[#333] mb-2">
              Feedback and Suggestions
            </h2>
            <p className="text-sm text-[#555]">
              We value your feedback and are continuously working to improve
              Snappy.
            </p>
          </div>
          <div
            className={`p-5 bg-slate-300 rounded-2xl transition-all duration-[2000ms] ${
              animate
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <h2 className="font-semibold text-[#333] mb-2">Media Inquiries</h2>
            <p className="text-sm text-[#555]">
              For media-related questions, please contact us at
              media@snappyapp.com.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div
        className={`flex-1 bg-white rounded-2xl shadow-lg p-8 min-w-[300px] mt-20 transition-all duration-[2000ms] ${
          animate ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4 text-[#333]">Get in Touch</h2>
        <p className="text-sm text-[#555] mb-6">You are one step away to find your dream home with iBuyr</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex gap-4 mb-4 flex-wrap">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First name"
              className="flex-1 p-3 border border-gray-300 rounded-md"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last name"
              className="flex-1 p-3 border border-gray-300 rounded-md"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            className="p-3 mb-4 border border-gray-300 rounded-md"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="flex gap-4 mb-4">
            <select
              id="countryCode"
              name="countryCode"
              className="p-3 border border-gray-300 rounded-md"
              value={formData.countryCode}
              onChange={handleChange}
            >
              <option value="+62">+62</option>
              <option value="+1">+1</option>
              <option value="+91">+91</option>
            </select>
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Phone number"
              className="flex-1 p-3 border border-gray-300 rounded-md w-20"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <textarea
            id="message"
            name="message"
            placeholder="How can we help?"
            className="p-3 mb-4 border border-gray-300 rounded-md resize-none"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold p-3 rounded-md hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
        <p className="text-xs text-[#555] mt-4">
          By contacting us, you agree to our{" "}
          <a href="#" className="text-blue-600 underline">
            Terms of service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
