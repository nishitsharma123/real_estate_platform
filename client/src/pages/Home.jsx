import React from "react";
import images from "../data/images.jsx";
import Loader from "../components/Loader";
import CustomSlider from "../components/custom.slider";
import { useState, useEffect } from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import stockvideo1 from "../data/stockvideo1.mp4";
import stockvideo3 from "../data/stockvideo3.mp4";
import { Helmet } from "react-helmet-async";
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
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [agents, setAgents] = useState([]);
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
    <div className="Home">
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
      <div className="w-full min-h-screen flex flex-col">
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
            className={`text-3xl ml-3 sm:ml-10 sm:text-6xl font-bold text-gray-800 leading-tight transition-all duration-[2000ms] ${
              animate
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
          >
            Find your perfect <br/><span className="text-teal-500">dream home</span>
          </h1>
          <p className="mt-4 ml-3 sm:ml-10 text-white text-sm sm:text-base sm:font-bold">
            Your Trusted Partner in Real Estate: Connecting Dreams to
            Destinations with Expertise, Innovation, and Integrity.
          </p>

          <div
            className={`mt-10 sm:mt-16 mr-5 grid grid-cols-3 md:grid-cols-3 ml-3 sm:ml-10 gap-4  bg-white rounded-3xl md:absolute shadow-lg md:z-10 transition-all duration-[2000ms] ${
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

      <div className="flex flex-col w-full h-screen bg-pink-500">
        <div className=" flex w-full h-screen">
          <img src="data:image/jpeg;base64,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" className="w-full object-cover"/>
          <div className=" flex items-center justify-center flex-col-reverse sm:flex-row absolute w-full h-full bg-opacity-20 bg-blue-900 backdrop-blur-md ">
            <div className="flex flex-row items-center w-full m-20 text-center bg-white rounded-3xl  ">
              <div className=" text-left p-20">
              <h1 className="text-3xl font-bold text-blue-900">💡 Thinking of buying or selling a home?
              </h1>
              <p className="pl-14 w-3/4 mt-3">
            Our state-of-the-art ML model delivers accurate property price
            predictions with cutting-edge technology. Designed for precision,
            powered by innovation.
          </p>
          <ul className="list-disc list-inside mt-4 text-sm space-y-2 pl-14">
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
                className="bg-blue-900  p-3 rounded-3xl w-2/3 sm:w-96 justify-between  flex items-center z-10 mt-5 ml-14"
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
              <div>
              <img
                alt="house image"
                className="h-[550px] w-[1100px]"
                src="https://media-hosting.imagekit.io//8388f62f9dfc4f03/pngtree-housing-price-rising-up-png-image_6377590-removebg-preview%20(1).png?Expires=1832097264&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UByE-M11vkyTgn60hGe0e1WJc8OrjxuLPBmhrdF8aBgSfHht2t5vux3emi-X9QwhwrUcLWtdnEEpqoGXEEaQ00GFkcdjDbfXwsnW8DjCCEpnJeDHS70Tjo5W-y0-Wkmb5MsDmeb59MFU1EPmh2hWKRRTRMUZTHaHucP1r0uQyZUzxRqK~BFNidWgGXbWpjyH0HCLHrEO9c-REfpnoZqS4e7Ir1wDr8C5pNffMpvDkKMSCxEjkB-AAENdslYH7qu0jvqbIDLV01qci4JbJBuCAsQRoG310SJidRcTEwBHZkFMBVybKcnV0CGq1ItnJ5~SsfKMd2wPE9B9l7OnhzdVzg__"
              />
            </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="agents-container w-full bg-blue-100">
        <h1 className="title">
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
