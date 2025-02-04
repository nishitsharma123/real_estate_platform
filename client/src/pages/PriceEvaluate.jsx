import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaPhone, FaTwitter } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
const faqs = [
  {
    question: "What is PropValue?",
    answer:
      "PropValue is an AI-powered house price prediction tool that uses advanced machine learning algorithms like XGBoost to provide accurate and reliable property price estimates based on various property features and market factors.",
  },
  {
    question: "What factors does PropValue consider for price prediction?",
    answer:
      "PropValue analyzes multiple key factors, including: BHK: Number of bedrooms, halls, and kitchens. Type: Property type (e.g., apartment, villa).Ownership: Ownership status (e.g., freehold or leasehold).Bathroom: Number of bathrooms.Balcony: Number of balconies.City and Location: The geographical area and specific locality.Rate per Sqft: The price per square foot in the area.Total Area: The overall area of the property.Status: Whether the property is ready to move or under construction.Transaction: Resale or new property.Facing: The direction the property faces (e.g., east, west).",
  },
  {
    question: "How does PropValue work?",
    answer:
      "PropValue uses the advance algorithm, that's a powerful machine learning model, to analyze the provided property details alongside market trends and historical data. It then calculates an accurate price prediction tailored to the property's unique features.",
  },
  {
    question: "Is PropValue suitable for all types of properties?",
    answer:
      "Yes, PropValue is designed to handle various property types, including apartments, villas, and independent houses, across different cities and locations.",
  },
  {
    question: "How accurate is PropValue's prediction?",
    answer:
      "PropValue provides highly accurate predictions by leveraging advanced AI models and real-time data. While the estimates are reliable, actual market prices may vary slightly due to specific factors like buyer sentiment or unique property features.",
  },
  {
    question: " Is PropValue free to use?",
    answer:
      "PropValue offers free predictions with access of Advanced features."
  },
  {
    question: "Which cities and locations are supported by PropValue?",
    answer:
      "PropValue currently supports predictions in a 5 cities and  their multiple locations. The tool is continuously expanding to include more areas to cater to a broader audience.",
  },
  {
    question: "How secure is my data on PropValue?",
    answer:
      "Your privacy is our priority. PropValue uses robust encryption protocols and adheres to strict data protection standards to ensure your information remains safe and secure.",
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
    <div className="min-h-screen flex flex-col md:flex-col gap-5  justify-center bg-blue-100">
       <Helmet>
  <title>AI-Powered Property Price Prediction | ibuyr</title>
  <meta name="description" content="Predict property prices using ibuyr's AI-driven model. Make data-backed real estate decisions today!" />
</Helmet>
      <div className=" gap-5 justify-center flex flex-col md:flex-row mt-10 m-4">
      <div className="bg-blue-100 rounded-2xl p-8 flex-auto  w-full transform transition-transform duration-500 mt-10">
        <section className="absolute sm:relative  py-12 px-4 pt-0 min-h-screen hidden sm:flex sm:flex-col">
          <h2
            className={`text-2xl md:text-4xl text-blue-500 mb-8 font-bold text-center transition-all duration-[2000ms] ${
              animate
                ? "translate-x-0 opacity-100"
                : "-translate-x-60 opacity-0"
            }`}
          >
            
PropValue provides data-backed estimates with an impressive accuracy rate of approximately 96%.
          </h2>
          {/* <h2
            className={`text-2xl  md:text-4xl text-blue-500 font-bold text-center mb-8 transition-all duration-[2000ms] ${
              animate
                ? "translate-x-0 opacity-100"
                : "-translate-x-60 opacity-0"
            }`}
          >
            with ~98% accuracy
          </h2> */}
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
                  <h3 className="text-2xl font-bold text-gray-800">
                    {exp.number}
                  </h3>
                  <p className="text-lg md:text-xl font-medium text-gray-600">
                    {exp.heading}
                  </p>
                  <p className="text-gray-500">{exp.list}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <div className=" flex-col  text-white bg-gradient-to-r from-blue-500 to-purple-600 bg-opacity-15 backdrop-blur-3xl shadow-2xl rounded-2xl p-0 sm:p-8 -mt-14 sm:mt-10 w-full md:w-2/4">
        <div
          className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg sm:shadow-lg m-auto transition-all duration-[2000ms] ${
            animate ? "translate-x-0 opacity-100" : "translate-x-60 opacity-0"
          }`}
        >
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
           <div className="mt-6">
            <Link to="/propvalue">
              <button className="bg-white w-full  text-blue-600 px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-100">
                Try Now
              </button>
            </Link>
          </div>
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
         
        </div>

        <div
          className={`flex items-center mt-5 justify-center mb-8 m-3 transition-all duration-[2000ms] ${
            animate ? "translate-x-0 opacity-100" : "-translate-x-60 opacity-0"
          }`}
        >
          <h1 className=" text-3xl md:text-5xl font-bold text-blue-500 mr-4">
            FAQ
          </h1>
          <div className="text-left">
            <h2 className=" text-lg md:text-2xl font-semibold text-gray-800">
              Frequently asked questions
            </h2>
            <p className="text-white mt-1 md:mt-2">
              Questions you might ask about product and services
            </p>
          </div>
        </div>
        <div
          className={`space-y-4 transition-all m-3 duration-[2000ms] ${
            animate ? "translate-x-0 opacity-100" : "translate-x-60 opacity-0"
          }`}
        >
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <div
                className="flex justify-between items-center px-4 py-3 bg-gray-100 cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-medium text-gray-800">
                  {faq.question}
                </h3>
                <span
                  className={` text-blue-600 font-bold text-2xl transform transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
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
      </div>
      </div>
       <footer className="bg-black text-white p-8 flex flex-col items-center w-full justify-between">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-between w-full max-w-6xl mb-8">
          {/* Logo and Description */}
          <div className="flex-1 mb-6 md:mb-0">
            <Link to="/">
              <h1
                className={`font-bold text-3xl sm:text-4xl flex flex-wrap mb-2 transition-all duration-[2000ms] ${
                  animate
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
              >
                <span className="text-blue-400">i</span>
                <span className="text-white ">buyr</span>
              </h1>
            </Link>
            
            <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4 items-center ">
                <FaPhone className="text-blue-400 text-xl" />
                <span className="text-base">+91 986-623-9652</span>
            </div>
            <div className="flex flex-row gap-4 items-center">
                <FaEnvelope className="text-blue-400 text-xl" />
                <span className="text-base text-">nishitsharma@gmail.com</span>
            </div>
            <div className="flex flex-row gap-4">
                <FaLocationArrow className="mt-2 text-blue-400 text-xl"/>
                <div className="flex flex-col">
                <span className="text-base">Sector-21</span>
                <span className="text-base">Noida, Uttar pradesh, India</span>
                <span className="text-base">201102</span>
                </div>
            </div>
            
            </div>
            <div className="flex gap-4 mt-4">
              <i className="fab fa-facebook text-2xl cursor-pointer"></i>
              <i className="fab fa-linkedin text-2xl cursor-pointer"></i>
              <i className="fab fa-twitter text-2xl cursor-pointer"></i>
            </div>
            <div className="mt-4 flex flex-row gap-4 text-3xl">
              <a href="https://www.linkedin.com/in/nishitsharma128"  target="_blank" rel="noopener noreferrer">
              <FaFacebook  className="hover:scale-125"/>
              </a>
              <a href="https://www.linkedin.com/in/nishitsharma128"  target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:scale-125"/>
              </a>
              <a href="https://www.linkedin.com/in/nishitsharma128"  target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:scale-125"/>
              </a>
              <a href="https://www.linkedin.com/in/nishitsharma128"  target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:scale-125"/>
              </a>
              
              
              
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex sm:justify-around text-sm ">
            <ul className="space-y-2 p-5 flex-1">
              {/* <Link to="/property-dashboard">
                <li className="cursor-pointer hover:underline mt-1 text-base">
                  Property listing
                </li>
              </Link> */}
              <Link to="/price-prediction">
                <li className="cursor-pointer hover:underline mt-1 text-base">
                  PropValue
                </li>
              </Link>
              <Link to="/about">
                <li className="cursor-pointer hover:underline mt-2 text-base">About us</li>
              </Link>
              <Link to="/contact-us">
                <li className="cursor-pointer hover:underline mt-2 text-base">Contact us</li>
              </Link>
              <Link to="/term&condition">
                <li className="cursor-pointer hover:underline mt-2 text-base">
                  Privacy Policy
                </li>
              </Link>
            </ul>
            <ul className="space-y-2 p-5 flex-1">
              <li className="text-xl font-bold text-blue-400">Buy your dream home</li>
              <Link to="/property-dashboard">
                <li className="cursor-pointer hover:underline mt-2 text-base">properties in Noida</li>
              </Link>
              {/* <Link to="/contact-us">
                <li className="cursor-pointer hover:underline mt-2 text-base">Contact</li>
              </Link>
              <Link to="/About">
                <li className="cursor-pointer hover:underline mt-2 text-base">
                  Privacy Policy
                </li>
              </Link> */}
            </ul>
          </div>
          <div className="bg-blue-400 rounded-3xl w-56 h-fit text-black">
            {/* <h1 className="text-black font-bold text-xl text-center mt-4">Sell your house
              </h1> */}
              <ul className="space-y-2 p-5">
              <li className="text-xl font-bold text-black ">Sell your house</li>
              <Link to="/price-prediction">
                <li className="cursor-pointer hover:underline mt-2 text-base ">PropValue</li>
              </Link>
              <Link to="">
                <li className="cursor-pointer hover:underline mt-2 text-base">Get instant offer</li>
              </Link>
              <Link to="">
                <li className="cursor-pointer hover:underline mt-2 text-base">
                  Submit you property details
                </li>
              </Link>
            </ul>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full max-w-6xl border-t border-white pt-4 text-xs flex justify-between">
          <p>Copyright ©2025 All rights reserved</p>
          <p className="text-[#b0c4de]">Created by ibuyr</p>
        </div>
      </footer>
    </div>
  );
};

export default PredictPrice;
