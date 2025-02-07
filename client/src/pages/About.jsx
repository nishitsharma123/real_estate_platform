import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import freepik__adjust__89929 from "../data/freepik__adjust__89929.png";
import { Helmet } from "react-helmet-async";
import { FaEnvelope, FaFacebook, FaHandHolding, FaHandPointRight, FaHandshakeSlash, FaInstagram, FaLinkedin, FaLocationArrow, FaPhone, FaTwitter } from "react-icons/fa";
export default function About() {
  const [animate, setAnimate] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => {
      clearTimeout(timer);
      setAnimate(false);
    };
  }, [dispatch]);
  return (
    
    <div className="bg-blue-100 flex flex-col items-center justify-center w-full min-h-screen">
        <Helmet>
  <title>About ibuyr | AI-Powered Real Estate Solutions</title>
  <meta name="description" content="Learn about ibuyr, the AI-powered real estate platform revolutionizing property price predictions, buying, and selling." />
  <meta property="og:title" content="About ibuyr | AI-Powered Real Estate" />
  <meta property="og:description" content="Discover the story behind ibuyr and how our AI-driven platform is changing the real estate industry." />
</Helmet>

      <section className="w-full flex flex-col mt-24 ">
        <img className="sm:m-10 rounded-3xl object-cover h-96 " src={freepik__adjust__89929}/>
        <div className=" absolute w-full items-center flex flex-col">
          <Link to="/contact-us" className="ml-auto">
          <button className={`bg-white rounded-2xl p-2  text-xs sm:text-base sm:p-2 ml-auto mr-5 mt-5 sm:mr-14 sm:mt-14 gap-2 flex flex-row items-center transition-all duration-[2000ms] ${
              animate
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}>Need help?  <span className="bg-blue-500 hover:bg-blue-400 p-1 sm:p-2 rounded-lg bg-blue text-white"> Contact us</span></button>
          </Link>
          </div>
      <div className=" sm:w-3/4 absolute p-5 sm:p-10 sm:ml-20 flex flex-col gap-5 mt-36">
      <h1 className={`text-3xl sm:text-6xl text-blue-700 font-bold transition-all duration-[2000ms] ${
              animate
                ? "translate-x-0 opacity-100"
                : "translate-x-60 opacity-0"
            }`}>About us</h1>
      <p className={`text-sm sm:text-base text-gray-800 font-semibold transition-all duration-[2000ms] ${
              animate
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            }`}>Welcome to iBuyr, where real estate innovation meets human connection. We're more than just a real estate company—we're your trusted partner in navigating the exciting world of property buying, selling, and investing.</p>
      </div>
      </section>

 <section className='flex flex-col sm:flex-row mt-20 sm:mt-32 ml-5 sm:ml-auto'>
        <div className={`text-3xl sm:text-5xl font-semibold flex-auto sm:flex-1 text-left sm:text-center text-blue-700 transition-all duration-[2000ms] ${
              animate
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}>ibuyr's Mission:</div>
        <div className='flex-auto sm:flex-1 sm:pr-20 '>
           
           <p className='text-lg text-gray-500 ml-7'>At iBuyr, our mission is simple: to make real estate easy, efficient, and empowering.
We're dedicated to creating a platform where buyers and sellers feel confident and supported at every step. By harnessing the power of advanced technology, robust data analytics, and human expertise, we aim to transform the real estate experience into one that's not only seamless but also rewarding.</p>
           
           
        </div>
    </section>

    <section className='flex flex-col sm:flex-row mt-20 sm:mt-32 ml-5 sm:ml-auto'>
        <div className='text-3xl sm:text-5xl font-semibold flex-auto sm:flex-1 text-left sm:text-center text-blue-700'>Founder's Vision:</div>
        <div className='flex-auto sm:flex-1 sm:pr-20 '>
           
           <p className='text-lg text-gray-500 ml-7'>We envision a future where buying and selling real estate is as effortless as browsing your favorite online store. Our goal is to become a global leader in innovative real estate solutions, building a platform where technology and trust converge to make every transaction smooth, transparent, and successful. At iBuyr, we dream of reshaping the real estate landscape into one that's inclusive, accessible, and future-focused.</p>
           
           
        </div>
    </section>


      <div className=" mt-10 w-full rounded-lg sm:p-16">
        <h1 className="text-4xl font-bold text-blue-600 mb-4 text-center">
          ibuyr's founder
        </h1>
        <p className="text-slate-900 text-lg mb-6 text-center">
          We are passionate about providing innovative solutions to empower
          individuals and businesses. Our team is dedicated to delivering
          excellence in everything we do.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-100 rounded-3xl shadow-xl p-6 text-center">
            <div className="w-36 h-36 mx-auto mb-4  relative overflow-hidden rounded-full ">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQHuHGVqw5eQfA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723689369673?e=1740614400&v=beta&t=QDgi4U7OEjmYKiGgEOThPPXRJt_jPPKnvamMQxcw9Lw"
                alt="Team member"
                className="w-full h-auto relative z-0 rounded-full transition-all duration-300 hover:scale-150"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-700">
              Saurabh choudhary
            </h3>
            <p className="text-gray-500">Founder & CEO</p>
            <p className="text-gray-500 mt-2 sm:m-10">
              Saurabh Choudhary, the visionary behind iBuyr, is dedicated to revolutionizing real estate through innovation and technology. With a focus on transparency, efficiency, and accessibility, he aims to simplify property transactions and create lasting value for clients and communities.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 rounded-3xl shadow-xl p-6 text-center">
            <div className="w-36 h-36 mx-auto mb-4  relative overflow-hidden rounded-full ">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQE221Eal7Hg9Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728107546810?e=1740614400&v=beta&t=DqPi1Zgz6ELc5i31zQ2FlWYP-HmdO2ITYhqynNqAc_0"
                alt="Team member"
                className="w-full h-auto relative z-0 rounded-full transition-all duration-300 hover:scale-150"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-700">
              Nishit Sharma
            </h3>
            <p className="text-gray-500">Co-Founder & CTO</p>
            <p className="text-gray-500 mt-2 sm:m-10">
             Nishit Sharma, the tech mastermind behind iBuyr, leads innovation as the Co-Founder and CTO. With a passion for cutting-edge technology and a drive for excellence, Nishit oversees the development of iBuyr's advanced platforms, ensuring seamless, secure, and efficient real estate solutions.             </p>
          </div>

          {/* Card 3 */}
          {/* <div className="bg-gray-100 rounded-lg shadow-xl p-6 text-center">
            <div className="w-24 h-24 mx-auto mb-4  relative overflow-hidden rounded-full ">
              <img
                src="https://via.placeholder.com/96"
                alt="Team member"
                className="w-full h-auto relative z-0 rounded-full transition-all duration-300 hover:scale-150"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-700">xyz</h3>
            <p className="text-gray-500">Head of Operations</p>
            <p className="text-gray-500 mt-2">
              "Ensuring seamless workflows and growth."
            </p>
          </div> */}
        </div>
      </div>

      <div className="max-w-6xl rounded-lg p-8 sm:m-7 mt-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          What we are providing to our customer?
        </h1>
        <p className="text-gray-600 text-lg mb-6 text-center">
          At iBuy, we are revolutionizing the real estate experience with fast,
          accurate, and reliable services designed to meet your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-100 rounded-lg shadow-xl p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700">
              Property Dealing in 7 Days
            </h3>
            {/* <p className="text-gray-500">Founder & CEO</p> */}
            <p className="text-gray-500 mt-2">
              "We offer fast, seamless property transactions, ensuring that
              deals are closed within just 7 days."
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 rounded-lg shadow-xl p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700">
              AI/ML-Based Property Valuation
            </h3>
            {/* <p className="text-gray-500">CO-FOUNDER & CTO</p> */}
            <p className="text-gray-500 mt-2">
              "Our advanced AI and ML algorithms provide accurate property
              valuations by integrating historical data and real-time market
              trends."
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 rounded-lg shadow-xl p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700">
              Reliable and Efficient Dealing
            </h3>
            {/* <p className="text-gray-500">Head of Operations</p> */}
            <p className="text-gray-500 mt-2">
              "We prioritize trust and efficiency, delivering reliable property
              dealings with transparent processes and quick turnarounds."
            </p>
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
}
