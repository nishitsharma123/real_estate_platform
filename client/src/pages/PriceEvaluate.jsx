import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

const faqs = [
  {
    question: 'What is iBuyr?',
    answer: 'iBuyr is an innovative real estate platform that connects buyers, sellers, and investors to make property transactions simple, transparent, and efficient. We aim to revolutionize the way people buy and sell properties through cutting-edge technology and expert support.',
  },
  {
    question: 'Is iBuyr available nationwide?',
    answer: 'Yes, iBuyr operates across multiple cities and regions, offering a diverse range of properties to cater to your needs. Check our website to explore the locations we currently serve.',
  },
  {
    question: 'How does iBuyr ensure transparency in transactions?',
    answer: 'iBuyr provides verified property listings, complete document checks, and detailed property information to ensure every transaction is secure and transparent.',
  },
  {
    question: 'Does iBuyr assist with legal and financial processes?',
    answer: 'Yes, we have a team of experts to guide you through legal documentation, property registration, and financial services such as home loans and property valuation.',
  },
  {
    question: 'Are there any service fees for buyers or sellers?',
    answer: 'iBuyr offers free property browsing for buyers. Sellers are charged a nominal fee based on the services they choose, such as premium listings or marketing packages.',
  },
  {
    question: 'Can I list my property on iBuyr for free?',
    answer: 'Yes, you can list your property for free. We also offer premium listing options to enhance visibility and attract more potential buyers.',
  },
  {
    question: 'How does iBuyr help buyers find the right property?',
    answer: 'iBuyr uses AI-powered recommendations, advanced search filters, and personalized support to help buyers find properties that meet their specific needs and preferences.',
  },
  {
    question: 'Does iBuyr offer virtual property tours?',
    answer: 'Yes, we provide virtual property tours to give buyers an immersive experience and help them explore properties from the comfort of their homes.',
  },
  {
    question: 'What payment methods do you accept for iBuyr services?',
    answer: 'We accept all major payment methods, including credit/debit cards, UPI, net banking, and mobile wallets.',
  },
  {
    question: 'How can I contact iBuyr for support?',
    answer: 'You can reach out to our support team via email, live chat on our website, or by calling our customer care helpline available 24/7.',
  },
 
];





const PredictPrice = () => {
  
  

    const [animate, setAnimate] = useState(false);
    const dispatch = useDispatch();
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
          setAnimate(true);
        }, 100);
        return () => {
          clearTimeout(timer);
          setAnimate(false);
        };
      }, [dispatch]);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };


  const details = [
    {
      number: "01",
      heading: "Advanced Predictive Technology",
      list: "Our real estate price prediction model utilizes cutting-edge technology to analyze property data and provide highly accurate predictions. This ensures you receive reliable and timely insights for informed decision-making.",
      
      side: "right",
    },
    {
      number: "02",
      heading: "Superior Accuracy for Reliable Predictions",
      list: "With an impressive 95% accuracy rate, our model delivers precise real estate price forecasts, helping buyers, sellers, and investors make confident, data-driven decisions.",
      
      side: "left",
    },
    {
      number: "03",
      heading: "Real-Time Market Insights",
      list: "By processing real-time data, our model adapts to market changes and delivers up-to-date property price predictions. Stay informed with current trends and make decisions based on the most relevant information.",
      side: "right",
    },
    {
      number: "04",
      heading: "Scalable for Any Market",
      list: "Our model is designed to scale effortlessly, accommodating both small and large real estate markets. Whether you're analyzing local trends or global data, it provides valuable insights at any scale.",
      side: "left",
    },
    {
      number: "05",
      heading: "Easy Integration and User-Friendly Interface",
      list: "Integrating our model into your existing platforms is seamless, and its intuitive interface ensures that anyone can easily leverage its power, regardless of technical expertise.",
      side: "right",
    },
    {
      number: "06",
      heading: "A Reliable Tool for Investors and Professionals",
      list: "Ideal for real estate investors, agents, and developers, our model equips you with the tools needed to make informed investment decisions, maximizing potential returns and minimizing risks.",
      side: "left",
    },
  ];
   const cardVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
  
    <div className="min-h-screen flex flex-col md:flex-row gap-5  justify-center px-6 py-8 bg-blue-100">
      <div className="bg-blue-100 rounded-2xl p-8 flex-auto  w-full transform transition-transform duration-500 mt-10">
        <section className="py-12 px-4 pt-0 min-h-screen">
      <h2 className={`text-2xl md:text-4xl text-blue-500 font-bold text-center transition-all duration-[2000ms] ${
            animate ? "translate-x-0 opacity-100" : "-translate-x-60 opacity-0"
          }`}>PropValue delivers data-driven estimates </h2>
<h2 className={`text-2xl md:text-4xl text-blue-500 font-bold text-center mb-8 transition-all duration-[2000ms] ${
            animate ? "translate-x-0 opacity-100" : "-translate-x-60 opacity-0"
          }`}>with ~98% accuracy</h2>
      <div className="flex flex-col gap-8">
        {details.map((exp, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`flex ${
              exp.side === "right" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-md bg-white shadow-xl shadow-blue-400 rounded-3xl p-6 ${
                exp.side === "right" ? "text-right" : "text-left"
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-800">{exp.number}</h3>
              <p className="text-lg md:text-xl font-medium text-gray-600">{exp.heading}</p>
              <p className="text-gray-500">{exp.list}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
        
    
        {/* <form
          onSubmit={handleSubmit}
          className="space-y-6 flex flex-row flex-wrap items-center justify-center p-6 rounded-lg"
        >
          <div className="flex flex-col mt-6 p-5">
            <label htmlFor="city" className="text-gray-700 font-semibold mb-2">
              City:
            </label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleCityChange}
              className="border border-gray-900 w-56 rounded-lg px-4 py-3 focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-300"
            >
              <option value="">Select a city</option>
              {Object.keys(cities).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          
          </div>

          <div className="flex flex-col mt-6 p-5">
            <label
              htmlFor="location"
              className="text-gray-700 font-semibold mb-2"
            >
              Location:
            </label>
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleLocationChange}
              className="border border-gray-900 w-56 rounded-lg px-4 py-3 focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-300"
              disabled={!formData.city}
            >
              <option value="">Select a location</option>
              {formData.city &&
                [...new Set(cities[formData.city])].map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
            </select>
          </div>

          <div className="flex flex-col mt-6 p-5">
            <label
              htmlFor="transaction"
              className="text-gray-700 font-semibold mb-2"
            >
              transaction:
            </label>
            <select
              id="transaction"
              name="transaction"
              value={formData.transaction}
              onChange={handletransactionChange}
              className="border border-gray-900 w-56 rounded-lg px-4 py-3 focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-300"
            >
              <option value="">Select a transaction</option>
              {Object.keys(transactions).map((transaction) => (
                <option key={transaction} value={transaction}>
                  {transaction}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col mt-6 p-5">
            <label
              htmlFor="status"
              className="text-gray-700 font-semibold mb-2"
            >
              status:
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handlestatusChange}
              className="border border-gray-900 w-56 rounded-lg px-4 py-3 focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-300"
            >
              <option value="">Select status</option>
              {Object.keys(statuses).map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col mt-6 p-5">
            <label
              htmlFor="facing"
              className="text-gray-700 font-semibold mb-2"
            >
              facing:
            </label>
            <select
              id="facing"
              name="facing"
              value={formData.facing}
              onChange={handlefacingChange}
              className="border border-gray-900 w-56 rounded-lg px-4 py-3 focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-300"
            >
              <option value="">Select a facing</option>
              {Object.keys(facings).map((facing) => (
                <option key={facing} value={facing}>
                  {facing}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col mt-6 p-5">
            <label
              htmlFor="ownership"
              className="text-gray-700 font-semibold mb-2"
            >
              ownership:
            </label>
            <select
              id="ownership"
              name="ownership"
              value={formData.ownership}
              onChange={handleownerChange}
              className="border border-gray-900 w-56 rounded-lg px-4 py-3 focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-300"
            >
              <option value="">Select owner</option>
              {Object.keys(owner).map((ownership) => (
                <option key={ownership} value={ownership}>
                  {ownership}
                </option>
              ))}
            </select>
          </div>

          

          {Object.keys(formData).map(
            (key) =>
              key !== "city" &&
              key !== "location" &&
              key !== "transaction" &&
              key !== "status" &&
              key !== "facing" &&
              key !== "ownership" && (
                <div key={key} className="flex flex-col mt-6 p-5">
                  <label
                    htmlFor={key}
                    className="text-gray-700 font-semibold mb-2 capitalize"
                  >
                    {key.replace(/_/g, " ")}:
                  </label>
                  <input
                    type={
                      key === "Rate_per_sqft" ||
                      key === "total_area" ||
                      key === "bedroom" ||
                      key === "balcony" ||
                      key === "bathroom" ||
                      key === "BHK"
                        ? "number"
                        : "text"
                    }
                    id={key}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="border border-gray-900 rounded-lg w-56 px-4 py-3 focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-300"
                    placeholder={`Enter ${key.replace(/_/g, " ")}`}
                  />
                </div>
              )
          )}

         
          <br />
          <button
            type="submit"
            className="w-4/5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:translate-y-1"
          >
            Predict Price
          </button>
        </form> */}
       
      </div>
      <div className=" flex-col  text-white min-w-96 bg-gradient-to-r from-blue-500 to-purple-600 bg-opacity-15 backdrop-blur-3xl shadow-2xl rounded-2xl p-8 mt-10 w-full md:w-2/4">
        <div className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg shadow-lg m-auto transition-all duration-[2000ms] ${
            animate ? "translate-x-0 opacity-100" : "translate-x-60 opacity-0"
          }`}>
          <h2 className="text-2xl font-bold mb-4">
            Unlock the Power of Predictive Insights!
          </h2>
          <p className="text-lg">
            Our state-of-the-art ML model delivers accurate property price
            predictions with cutting-edge technology. Designed for precision,
            powered by innovation.
          </p>
          <ul className="list-disc list-inside mt-4 text-sm space-y-2">
            <li>🚀 High accuracy with real-time adaptability</li>
            <li>🏠 Perfect for property buyers, sellers, and agents</li>
            <li>📊 Backed by advanced AI algorithms</li>
          </ul>
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">How to Use:</h3>
            <ol className="list-decimal list-inside text-sm space-y-1">
              <li>
                Enter property details such as location, BHK, total area, etc.
              </li>
              <li>
                Click the <strong>"Predict Price"</strong> button.
              </li>
              <li>Get instant, AI-powered price predictions!</li>
            </ol>
          </div>
          <div className="mt-6">
            <Link to="/propvalue">
            <button className="bg-white w-full  text-blue-600 px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-100">
              Try Now
            </button>
            </Link>
          </div>
          </div>
{/* ------------------ */}

<div className={`flex items-center mt-5 justify-center mb-8 transition-all duration-[2000ms] ${
            animate ? "translate-x-0 opacity-100" : "-translate-x-60 opacity-0"
          }`}>
          <h1 className=" text-3xl md:text-5xl font-bold text-blue-500 mr-4">FAQ</h1>
          <div className="text-left">
            <h2 className=" text-lg md:text-2xl font-semibold text-gray-800">Frequently asked questions</h2>
            <p className="text-white mt-1 md:mt-2">Questions you might ask about product and services</p>
          </div>
        </div>
        <div className={`space-y-4 transition-all duration-[2000ms] ${
            animate ? "translate-x-0 opacity-100" : "translate-x-60 opacity-0"
          }`}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden"
            >
              <div
                className="flex justify-between items-center px-4 py-3 bg-gray-100 cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                <span
                  className={` text-blue-600 font-bold text-2xl transform transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  +
                </span>
              </div>
              {activeIndex === index && (
                <div className="p-4 bg-white border-t">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
{/* ------------------- */}



    

        {/* {predictedPrice !== null && (
          <div
            className="mt-5 p-6 bg-gradient-to-r from-green-100 to-green-50 text-green-800 rounded-xl shadow-inner text-center"
            style={{
              animation: "fadeIn 1s ease-in-out",
            }}
          >
            <h2 className="text-lg font-bold">Predicted Price:</h2>
            <p className="text-3xl font-extrabold">{predictedPrice}</p>
          </div>
        )}
        {error && (
          <p className="mt-4 text-red-600 text-center font-medium animate-pulse bg-white rounded-2xl p-2">
            {error}
          </p>
        )} */}
      </div>
    </div>
  );
};

export default PredictPrice;
