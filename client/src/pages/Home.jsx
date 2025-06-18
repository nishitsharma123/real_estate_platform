import React from "react";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import images from "../data/images.jsx";
import Loader from "../components/Loader";
import CustomSlider from "../components/custom.slider";
import { useState, useEffect } from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import stockvideo1 from "../data/stockvideo1.mp4";
import stockvideo3 from "../data/stockvideo3.mp4";
import homeSlide from "../data/homeSlide.png";
import homeSlide1 from "../data/homeSlide1.png";
import propimage from "../data/propimage.png";
import { Helmet } from "react-helmet-async";
import DivSlider from "../components/DivSlider";
import DivSlider2 from "../components/DivSlider2";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMapMarked,
  FaPhone,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";
const companyNames = [
  "Google",
  "Microsoft",
  "Amazon",
  "Apple",
  "Tesla",
  "Netflix",
  "Meta",
  "IBM",
  "Intel",
  "Adobe",
];
const slides = [
  { id: 1, title: "Selling Speed", text: "Takes weeks or months to close a deal." },
  { id: 2, title: "Process Simplicity", text: "Requires listing, staging, and multiple showings." },
  { id: 3, title: "Certainty & Control", text: "Unpredictable timelines and possible deal fall-throughs." },
  { id: 4, title: "Costs & Fees", text: "Agent commissions, repair costs, and hidden fees." },
  { id: 5, title: "Convenience", text: "Complex paperwork and negotiations." },
];
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [agents, setAgents] = useState([]);
  const [activeTab, setActiveTab] = useState("traditional");
  const [error, setError] = useState(""); // To handle error message
  const dispatch = useDispatch();

  const [city, setCity] = useState("");
  

  const handleSearch = (e) => {
    e.preventDefault();
    if (!city.trim()) {
      // If the input is empty, show an error message
      setError(true);
    } else {
      setError(false); // Clear error
      // Redirect to your ML model webpage with the city as a query parameter
      window.location.href = `https://www.ibuyr.in/propValue`;
    }
  };

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

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const mockData = [
      {
        id: 1,
        name: "Dolly Simpson",
        title: "Realtor",
        description: "Mauris vitae ultricies leo integer malesuada nunc.",
        image:
          "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg",
      },
      {
        id: 2,
        name: "Kyla Stewart",
        title: "Real Estate Agent",
        description: "Varius vel pharetra vel turpis nunc eget lorem dolor.",
        image:
          "https://cdn.pixabay.com/photo/2019/09/15/14/22/fishermans-hut-4478427_1280.jpg",
      },
      {
        id: 3,
        name: "Brooke Cagle",
        title: "Super Star",
        description: "Nisi lacus sed viverra tellus in hac habitasse.",
        image:
          "https://images.unsplash.com/photo-1472224371017-08207f84aaae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ];
    setAgents(mockData);
  }, []);

  return (
    <div className="Home bg-blue-100 min-h-screen w-full">
      <Helmet>
  <title>ibuyr | AI-Powered Real Estate price analysis & deals</title>
  <meta name="description" content="ibuyr is an AI-driven real estate platform that predicts property prices with advanced AI models. Buy, sell, and invest smartly with data-driven insights." />
  <meta name="keywords" content="real estate AI, property price prediction, buy property, sell property, real estate investment, ibuyr, ibuyr real estate, saurabh choudhary ceo, nishit sharma cto & co-founder, ibuyr ai price prediction tool, ibuyr prop value, IBUYR, noida real estate ibuyr" />
  <meta property="og:title" content="ibuyr | AI-Powered Real Estate Solutions" />
  <meta property="og:description" content="Find the best property deals with AI-powered price predictions. ibuyr makes real estate smarter and data-driven." />
  <meta property="og:image" content="https://media-hosting.imagekit.io//6f9560b25c9040c7/WhatsApp%20Image%202025-01-20%20at%204.50.08%20PM-modified.png?Expires=1832097009&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ezVAsZdb2~U1ly5Fp0HJi00ctdodVRcOH~AD-v3ZW4tMcwtJOPgMIgbf6Vt-UFTejj1L9YDtLpXvts~AbEdE0j8byGTM8-1zh6FMIA3mSLw8TdciNuT3XsRWqSO8fZR5QIqVvEnt8tbsYxmHAtj5Lpez7xnxTPUsLUlSG51BorMFObaYij5T8Oo99bNOCuNgr4P6XvlABJcDAkhvgefP9vvN-DptgzPoIwOChMC4P-z3O~rCtfFcH2glERYO0ZqcSg5C-hoADjzAsT54BZoPUbXTH6YZMbh7ekNGfeuNcAxHZdntZHuHLj4dpPKDxj746ofwIcdKScw7ryTxoPjZzw__" />
  <meta property="og:url" content="https://www.ibuyr.in" />
  <meta name="twitter:title" content="ibuyr - Smart Real Estate with AI" />
  <meta name="twitter:description" content="ibuyr helps you buy and sell properties with AI-driven price analysis." />
  <meta name="twitter:image" content="https://media-hosting.imagekit.io//6f9560b25c9040c7/WhatsApp%20Image%202025-01-20%20at%204.50.08%20PM-modified.png?Expires=1832097009&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ezVAsZdb2~U1ly5Fp0HJi00ctdodVRcOH~AD-v3ZW4tMcwtJOPgMIgbf6Vt-UFTejj1L9YDtLpXvts~AbEdE0j8byGTM8-1zh6FMIA3mSLw8TdciNuT3XsRWqSO8fZR5QIqVvEnt8tbsYxmHAtj5Lpez7xnxTPUsLUlSG51BorMFObaYij5T8Oo99bNOCuNgr4P6XvlABJcDAkhvgefP9vvN-DptgzPoIwOChMC4P-z3O~rCtfFcH2glERYO0ZqcSg5C-hoADjzAsT54BZoPUbXTH6YZMbh7ekNGfeuNcAxHZdntZHuHLj4dpPKDxj746ofwIcdKScw7ryTxoPjZzw__" />

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "ibuyr",
      "url": "https://www.ibuyr.in",
      "logo": "https://media-hosting.imagekit.io//6f9560b25c9040c7/WhatsApp%20Image%202025-01-20%20at%204.50.08%20PM-modified.png?Expires=1832097009&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ezVAsZdb2~U1ly5Fp0HJi00ctdodVRcOH~AD-v3ZW4tMcwtJOPgMIgbf6Vt-UFTejj1L9YDtLpXvts~AbEdE0j8byGTM8-1zh6FMIA3mSLw8TdciNuT3XsRWqSO8fZR5QIqVvEnt8tbsYxmHAtj5Lpez7xnxTPUsLUlSG51BorMFObaYij5T8Oo99bNOCuNgr4P6XvlABJcDAkhvgefP9vvN-DptgzPoIwOChMC4P-z3O~rCtfFcH2glERYO0ZqcSg5C-hoADjzAsT54BZoPUbXTH6YZMbh7ekNGfeuNcAxHZdntZHuHLj4dpPKDxj746ofwIcdKScw7ryTxoPjZzw__",
      "sameAs": [
        "https://www.linkedin.com/company/ibuyr/"
      ]
    })}
  </script>
      </Helmet>

      {/* <CustomSlider>
            {images.map((image, index) => (
              <div key={index} style={{ position: "relative" }}>
                <img
                  src={image.imgURL}
                  alt={image.imgAlt}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />

                <div className="absolute left-1/2 top-1/2 ml-10 flex flex-col  transform -translate-x-1/2 -translate-y-1/2 text-white bg-black p-5  bg-opacity-50 rounded-2xl w-3/4 h-auto">
                  <div className=" p-3 font-bold text-6xl ">
                    {image.heading}
                  </div>
                  <div className="p-3">{image.text}</div>
                </div>
              </div>
            ))}
          </CustomSlider> */}
      {/* Main Content Section */}
      <div className="w-full min-h-screen flex flex-col ">
        {/* Text Section */}
        <video
            className="shadow-md w-full h-screen object-cover"
            src={stockvideo3}
            autoPlay
            loop
            muted
          ></video>
        <div className="flex text-left  w-full  h-full sm:text-center md:text-left absolute ">
          <div className=" mt-auto sm:mt-72 mb-20">
          <h1
            className={`text-3xl ml-3 sm:ml-32 sm:text-6xl font-bold text-gray-800 leading-tight transition-all duration-[2000ms] ${
              animate
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
          >
            Find your perfect <br/><span className="text-teal-500">dream home</span>
          </h1>
          <p className="mt-4 ml-3 sm:ml-32 text-white text-sm sm:text-base sm:font-bold">
            Your Trusted Partner in Real Estate: Connecting Dreams to
            Destinations with Expertise, Innovation, and Integrity.
          </p>

          <div
            className={`mt-10 sm:mt-16 mr-5 grid grid-cols-3 md:grid-cols-3 ml-3 sm:ml-32 gap-4  bg-white rounded-3xl md:absolute shadow-lg md:z-10 transition-all duration-[2000ms] ${
              animate
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <div className="text-center bg-transparent p-3 sm:p-6 rounded-3xl ">
              <h2 className="text-lg sm:text-3xl font-bold text-gray-800">2,000+</h2>
              <p className="mt-2 text-gray-600 text-xs sm:text-base">Satisfied and happy clients</p>
            </div>
            <div className="text-center p-3 sm:p-6 rounded-3xl ">
              <h2 className="text-lg sm:text-3xl font-bold text-gray-800">57</h2>
              <p className="mt-2 text-gray-600 text-xs sm:text-base">Professional agents</p>
            </div>
            <div className="text-center p-3 sm:p-6 rounded-3xl ">
              <h2 className="text-lg sm:text-3xl font-bold text-gray-800">8,500+</h2>
              <p className="mt-2 text-gray-600 text-xs sm:text-base">Properties ready for living</p>
            </div>
          </div>
          </div>
          {/* <div className="mt-32 sm:flex items-center hidden">
            <img src={homeSlide} className={`contrast-110 brightness-125 h-[500px] ml-20 opacity-90 transition-all duration-[2000ms] ${
              animate
                ? "-translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}/>
            <div className=" absolute w-[500px] h-[500px] items-center">
            <img src={homeSlide1} className={`brightness-200 h-56 mx-52 mt-24 transition-all duration-[2000ms] ${
              animate
                ? "translate-y-0 opacity-100"
                : "-translate-y-60 opacity-0"
            }`}/>
            </div>
          </div> */}
        </div>

        {/* Image Section
        <div className="hidden sm:flex-auto sm:flex justify-center w-full">
          <img
            src="https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg" // Replace with your image URL
            alt="Modern Home"
            className={`rounded-lg shadow-md w-3/4 m-auto sm:w-auto sm:h-auto  mt-0 object-fit sm:object-contain sm:mt-32 transition-all duration-[2000ms] ${
              animate
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}

          />
          <video
            className={`rounded-lg shadow-md w-3/4 m-auto sm:w-auto sm:h-auto  mt-0 object-fit sm:object-contain sm:mt-32 transition-all duration-[2000ms] ${
              animate
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
            src={stockvideo1}
            autoPlay
            loop
            muted
          ></video>
        </div> */}
      </div>


      <div className="bg-blue-100 w-full pt-12 sm:pt-32">
      <h2 className="text-xl sm:text-6xl font-bold text-center text-gray-800 mb-8">
        What makes us unique
      </h2>
      <div className="flex w-full gap-10 justify-center mb-6">
        <button
          className={`px-6 py-2 text-lg font-semibold w-56 opacity-80  hover:opacity-50 transition-all duration-300 ${
            activeTab === "traditional" ? "bg-red-600 text-white" : "bg-white text-gray-800"
          } rounded-3xl shadow-md`}
          onClick={() => setActiveTab("traditional")}
        >
          Traditional
        </button>
        <button
          className={`px-6 py-2 text-lg font-semibold w-56 opacity-80 hover:opacity-50 transition-all duration-300 ${
            activeTab === "ibuyer" ? "bg-green-600 text-white" : "bg-white text-gray-800"
          } rounded-3xl shadow-md`}
          onClick={() => setActiveTab("ibuyer")}
        >
          Ibuyr
        </button>
      </div>

      <div className="w-full flex justify-center items-center">
        <div
          className={`transition-opacity w-full duration-500 items-center  ease-in-out  min-h-[300px]  ${
            activeTab === "traditional" ? "opacity-100 block" : "opacity-0 hidden"
          }`}
        >
          <DivSlider/>
        </div>

        <div
          className={`transition-opacity w-full duration-500 items-center  ease-in-out  min-h-[300px] ${
            activeTab === "ibuyer" ? "opacity-100 block" : "opacity-0 hidden"
          }`}
        >
          <DivSlider2/>
        </div>
      </div>
    </div>
{/* ------ */}
{/* <div className="w-full flex justify-center items-center bg-blue-300">
  <DivSlider/>
</div> */}
    
{/* ------ */}
    
    <div className="relative w-full  [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_40%,rgba(0,0,0,0)_100%)] ">
  <video 
    className=" h-auto sm:h-[550px] w-full object-cover"
    src={stockvideo1}
    autoPlay
    loop
    muted
  ></video>
  
  
    <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-6xl text-center w-full">
      <h2 className="text-3xl sm:text-6xl text-black font-bold">Find Your Dream Home</h2>
      <p className="text-base text-black font-medium mt-5">
        Explore top listings, discover beautiful properties, and make your dream home a reality.
      </p>
      <a href="/property-dashboard">
        <button className="px-5 py-2 mt-5 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all">
          Buy a home
        </button>
      </a>
    </div>

</div>
<div className="agents-container w-full mt-20 mb-20">
        <h1 className="title mt-10 sm:mt-auto">
          Meet our top <span className="highlight">agents</span>
        </h1>
        <p className="subtitle">
          Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Donec
          adipiscing tristique risus nec feugiat. Vitae congue eu consequat ac.
        </p>
        <div className="agents-grid">
          {agents.map((agent) => (
            <div key={agent.id} className="agent-card">
              <img
                src={agent.image}
                alt={agent.name}
                className="agent-image "
              />
              <h2 className="agent-name">{agent.name}</h2>
              <p className="agent-title">{agent.title}</p>
              <p className="agent-description">“{agent.description}”</p>
            </div>
          ))}
        </div>
      </div>


      <div className="flex flex-col w-full h-full bg-black">
            <div className="flex  flex-col-reverse sm:flex-row items-center m-2 sm:m-16  text-center bg-white rounded-3xl  ">
              <div className=" text-left p-3 sm:p-20 ">
              <h1 className=" text-xl sm:text-3xl font-bold text-blue-900 ">💡 Thinking of buying or selling a home?
              </h1>
              <p className="sm:pl-14 sm:w-3/4 mt-3">
            Our state-of-the-art ML model delivers accurate property price
            predictions with cutting-edge technology. Designed for precision,
            powered by innovation.
          </p>
          <ul className="list-disc list-inside mt-4 text-sm space-y-2 sm:pl-14">
            <li>🚀 High accuracy with real-time adaptability</li>
            <li>🏠 Perfect for property buyers, sellers, and agents</li>
            <li>📊 Backed by advanced AI algorithms</li>
          </ul>
              {/* Error message */}
              {error && (
                <p className="text-red-500 mt-4">
                  Please enter a city name before searching.
                </p>
              )}
              <form
                onSubmit={handleSearch}
                className="bg-blue-900  p-3 rounded-3xl w-full sm:w-96 justify-between  flex items-center z-10 mt-5 sm:ml-14"
              >
                <input
                  type="text"
                  placeholder="Enter your city..."
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="bg-transparent focus:outline-none w-full text-white"
                  required
                />
                {/* <Link to='/propValue'> */}
               <button onSubmit={handleSearch} className="mr-2">
                    <FaSearch className="text-white text-xl" />
              </button>
                {/* </Link> */}
              </form>
              </div>
              <div className="">
              <img
                alt="house image"
                className="hidden md:flex"
                // src="https://media-hosting.imagekit.io//8388f62f9dfc4f03/pngtree-housing-price-rising-up-png-image_6377590-removebg-preview%20(1).png?Expires=1832097264&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UByE-M11vkyTgn60hGe0e1WJc8OrjxuLPBmhrdF8aBgSfHht2t5vux3emi-X9QwhwrUcLWtdnEEpqoGXEEaQ00GFkcdjDbfXwsnW8DjCCEpnJeDHS70Tjo5W-y0-Wkmb5MsDmeb59MFU1EPmh2hWKRRTRMUZTHaHucP1r0uQyZUzxRqK~BFNidWgGXbWpjyH0HCLHrEO9c-REfpnoZqS4e7Ir1wDr8C5pNffMpvDkKMSCxEjkB-AAENdslYH7qu0jvqbIDLV01qci4JbJBuCAsQRoG310SJidRcTEwBHZkFMBVybKcnV0CGq1ItnJ5~SsfKMd2wPE9B9l7OnhzdVzg__"
                src={propimage}
              />
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
                className="font-bold text-3xl sm:text-4xl flex flex-wrap mb-2"
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
                <span className="text-base text-">customer.support@ibuyr.in</span>
              </div>
              <div className="flex flex-row gap-4">
                <FaLocationArrow className="mt-2 text-blue-400 text-xl" />
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
              <a
                href="https://www.linkedin.com/in/nishitsharma128"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="hover:scale-125" />
              </a>
              <a
                href="https://www.linkedin.com/in/nishitsharma128"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:scale-125" />
              </a>
              <a
                href="https://www.linkedin.com/in/nishitsharma128"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:scale-125" />
              </a>
              <a
                href="https://www.linkedin.com/company/105792170/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:scale-125" />
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
                <li className="cursor-pointer hover:underline mt-2 text-base">
                  About us
                </li>
              </Link>
              <Link to="/contact-us">
                <li className="cursor-pointer hover:underline mt-2 text-base">
                  Contact us
                </li>
              </Link>
              <Link to="/term&condition">
                <li className="cursor-pointer hover:underline mt-2 text-base">
                  Privacy Policy
                </li>
              </Link>
            </ul>
            <ul className="space-y-2 p-5 flex-1">
              <li className="text-xl font-bold text-blue-400">
                Buy your dream home
              </li>
              <Link to="/property-dashboard">
                <li className="cursor-pointer hover:underline mt-2 text-base">
                  properties in Noida
                </li>
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
                <li className="cursor-pointer hover:underline mt-2 text-base ">
                  PropValue
                </li>
              </Link>
              <Link to="">
                <li className="cursor-pointer hover:underline mt-2 text-base">
                  Get instant offer
                </li>
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
}
