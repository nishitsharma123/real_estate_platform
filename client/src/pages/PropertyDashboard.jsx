import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaSearch, FaTwitter, FaPhone, FaEnvelope,FaLocationArrow } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import stockvideo from '../data/stockvideo.mp4';
import ListingItem from "../components/ListingItem";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet-async";
// import Listing from "./Listing";
export default function PropertyDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);
  const dispatch = useDispatch();
  // const [propertyAuthListings, setpropertyAuthListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  // console.log(saleListings);
  useEffect(()=>{
    const fetchSaleListings = async () => {
      try {
        const res = await fetch(`/api/listing/get?type=sale&limit=8`);
        const data = await res.json();
        setSaleListings(data);

      } catch (error) {
        console.log(error);
      }
    }
    
    fetchSaleListings();


  }, []);
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

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);

  };
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);


  return (
    <div className="bg-blue-100 min-h-screen">
       <Helmet>
  <title>Property Dashboard | ibuyr</title>
  <meta name="description" content="Track the properties, monitor AI-driven price predictions, and manage your real estate transactions on ibuyr." />
</Helmet>
      <div className="w-full flex flex-col items-center">
        {/* <img
          className="w-full object-cover h-96"
          src="https://img.pikbest.com/wp/202344/light-blue-gradient-wallpaper-smooth-blur-with-simple-plain-background-texture_9930252.jpg!sw800"
        /> */}
        <video
        className="object-cover w-full h-[500px]"
        src={stockvideo}
        autoPlay
        loop
        muted
      />
       
        <div className="absolute mt-28 gap-5 flex flex-col w-full  items-center ">
          <h1 className="text-3xl sm:text-6xl text-white font-bold">Find the best one for you</h1>
          <p className="text-center text-white font-semibold  m-5 sm:w-[400px]">
            Explore the best homes tailored to your needs with expert guidance, seamless browsing, and smart recommendations—your perfect home is just a click away!
          </p>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-3 rounded-3xl w-2/3 sm:w-96 justify-between  flex items-center z-10"
          >
            <input
              type="text"
              id="search"
              placeholder="Enter keyword for best...."
              className="bg-transparent focus:outline-none  text-black w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />
            <button>
              <FaSearch className="text-black" />
            </button>
          </form>
          <div className="z-10 bg-white rounded-3xl h-48 text-center">
           </div>
        </div>
        
      </div>

      <div className="">
        <div className="flex flex-col gap-10 items-center">
            <h1 className="text-2xl sm:text-4xl mt-10 font-bold text-center m-auto font-mono">Properties for sale</h1>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 ">
              {
              saleListings.map((listing)=>(
                <ListingItem listing={listing} key={listing._id} />
              ))
              }
              
            </div>
        <Link to={'/search?type=sale'}>
        <button className="rounded-lg text-white p-3 bg-blue-400 m-auto hover:opacity-80 mb-10">show more property</button>
        </Link>
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
                      href="https://www.linkedin.com/in/nishitsharma128"
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
