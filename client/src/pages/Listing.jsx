import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { marked } from 'marked';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
// import ShowMore from '../components/ShowMore'; // Import the ShowMore component
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import '../styles.css';
import { Helmet } from "react-helmet-async";
import {
  FaBuilding,
  FaGoogleDrive,
  FaHome,
  FaMapMarkerAlt,
  FaParking,
  FaRupeeSign,
} from "react-icons/fa";
export default function Listing() {
  SwiperCore.use([Navigation]);
  const params = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  // const formattedDescription = marked(listing.description);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        // console.log(data);
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);
  if (!listing) {
    return <p>Loading data...</p>;
  }

  const formattedDescription = listing.description.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
  const toggleShowMore = () => {
    setIsExpanded(!isExpanded);
  };

  const getDisplayText = () => {
    if (isExpanded) {
      return formattedDescription;
    }
   return formattedDescription.slice(0, 5); // Show only the first 5 lines initially
  };


  return (
    <div className="bg-white flex flex-col min-h-screen w-full">
       <Helmet>
  <title>{listing.title} - Buy & Sell on ibuyr</title>
  <meta name="description" content={`Explore ${listing.title} with AI-driven insights. Get the best deals on properties with ibuyr.`} />
  <meta property="og:title" content={listing.title} />
  <meta property="og:description" content={`Find the perfect property: ${listing.title} with AI-powered price analysis.`} />
</Helmet>
      <div className="mt-16 sm:mt-9">
        {loading && <p className="text-center my-7 text-2xl">Loading...</p>}
        {error && (
          <p className="text-center my-7 text-2xl">Something went wrong</p>
        )}
        {listing && !loading && !error && (
          <div className=" flex flex-col sm:flex-row gap-5 sm:p-10 pt-0  ">
            <Swiper
            modules={[Autoplay]}
              navigation
              autoplay={true}
              className="sm:mt-10 sm:rounded-3xl w-full sm:w-5/6"
            >
              {listing.imageUrls.map((url) => (
                <SwiperSlide key={url}>
                  <div
                    className=" h-[300px] sm:h-[550px] rounded-3xl"
                    style={{
                      background: `url(${url}) center no-repeat`,
                      backgroundSize: "cover",
                    }}
                  ><div className=" bg-gradient-to-r from-blue-500 to-purple-600 bg-opacity-65 text-white ml-10 m-5 absolute p-1 rounded-3xl w-fit">{listing.propertyAuth}</div></div>
                  
                </SwiperSlide>
                
              ))}
            </Swiper>
            
            <div className="bg-white sm:border-0 sm:border-solid sm:border-gray-400 sm:mt-10 sm:rounded-3xl w-full sm:w-[500px] flex flex-col justify-between sm:shadow-2xl shadow-gray-400 ">
              <div className="m-3 sm:m-10 ">
                <div className="text-xl flex flex-row gap-1 items-center font-bold sm:mb-5">
                  <span className="flex flex-row gap-3">
                    <FaRupeeSign className="text-4xl text-green-500" />{" "}
                    <div className="flex flex-row gap-1 font-bold text-3xl">
                    <span className="">{listing.regularPrice}</span> <h1 className="">{listing.regularPrice_tag}</h1>
                  </div>
                  </span>
                </div>
                <div className="flex flex-row gap-3 ">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs sm:text-sm font-bold text-center   p-2 rounded-2xl mt-1  bg-opacity-70">
                    Property for {listing.type}
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-xs sm:text-sm text-center  p-2 rounded-2xl mt-1 bg-opacity-70">
                    Ready to move in
                  </div>
                </div>
                <h1 className="text-xl mt-3">{listing.title}</h1>
                <ul className="mt-5 flex flex-col gap-2">
                  <li className="text-black  text-2xl font-bold flex gap-2">
                    <FaMapMarkerAlt className="mt-1"/>
                    {/* <FaLocationArrow className="mt-1"/>{" "} */}
                    <span className="text-lg text-gray-400 font-thin">
                      {listing.address}
                    </span>
                  </li>
                  <li className=" flex items-center gap-1">
                    <FaHome className="text-2xl" />
                    House area: {listing.houseArea}{" "}
                    <span className="text-sm">sqrft</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <FaBuilding className="text-2xl" />
                    Bhk: {listing.bhk}
                  </li>
                  <li className="flex items-center gap-1">
                    <FaParking className="text-2xl" />
                    Parking: <span className="text-green-500">{listing.parking}</span>
                  </li>
                  {/* <li className="">House area:</li> */}
                </ul>
              </div>
              {/* <div>hello</div> */}
              <div className="flex flex-row justify-between mt-6 gap-2 m-3 sm:m-5">
                <div className="bg-blue-600 p-3 text-sm sm:text-base rounded-xl text-bold text-white w-40 text-center">
                  enquire now
                </div>
                <div className="bg-blue-600 p-3 rounded-xl text-sm sm:text-base text-bold text-white w-40 text-center">
                  schedule a visit
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className=" items-center border-solid border-gray-500  rounded-3xl p-5 m-2 sm:m-10 border-2 sm:shadow-2xl">
        
          <h1 className="text-2xl sm:text-3xl sm:p-5  pb-0">Key features</h1>

          <div className="grid grid-cols-1 sm:grid-cols-6 m-5 text-base sm:text-xl">
            <div className="mb-5  text-gray-700  flex gap-2 items-center ">
              {" "}
              <FaGoogleDrive className="text-2xl" />
              {listing.key_feature1}
            </div>
            <div className="mb-5 text-gray-700 flex gap-2 items-center ">
              {" "}
              <FaGoogleDrive className="text-2xl" />
              {listing.key_feature2}
            </div>
            <div className="mb-5  text-gray-700 flex gap-2 items-center">
              {" "}
              <FaGoogleDrive className="text-2xl" />
              {listing.key_feature3}
            </div>
            <div className="mb-5  text-gray-700 flex gap-2 items-center">
              {" "}
              <FaGoogleDrive className="text-2xl" />
              {listing.key_feature4}
            </div>
            <div className="mb-5  text-gray-700 flex gap-2 items-center">
              {" "}
              <FaGoogleDrive className="text-2xl" />
              {listing.key_feature5}
            </div>
            <div className="mb-5  text-gray-700 flex gap-2 items-center">
              {" "}
              <FaGoogleDrive className="text-2xl" />
              {listing.key_feature6}
            </div>
            <div className="mb-5  text-gray-700 flex gap-2 items-center">
              {" "}
              <FaGoogleDrive className="text-2xl" />
              {listing.key_feature7}
            </div>
            <div className="mb-5  text-gray-700 flex gap-2 items-center">
              {" "}
              <FaGoogleDrive className="text-2xl" />
              {listing.key_feature8}
            </div>
            <div className="mb-5  text-gray-700 flex gap-2 items-center">
              {" "}
              <FaGoogleDrive className="text-2xl" />
              {listing.key_feature9}
            </div>
            <div className="mb-5 text-gray-700 flex gap-2 items-center ">
              {" "}
              <FaGoogleDrive className="text-2xl" />
              {listing.key_feature10}
            </div>
            <div className="mb-5  text-gray-700 flex gap-2 items-center">
              {" "}
              <FaGoogleDrive className="text-2xl" />
              {listing.key_feature11}
            </div>
            <div className="mb-5  text-gray-700 flex gap-2 items-center">
              {" "}
              <FaGoogleDrive className="text-2xl" />
              {listing.key_feature12}
            </div>
          </div>
        
      </div>

      <div className=" min-h-screen flex  flex-col sm:flex-row">
        <div className="flex-1 bg-white m-10 sm:p-10 text-lg sm:text-xl rounded-3xl">
          <h1 className="text-2xl sm:text-3xl">Description</h1>
          {/* <div className="text-xl">{formattedDescription}</div> */}
           {/* <ShowMore text={formattedDescription} /> Use the ShowMore component */}
           <div className="description-container mt-5 sm:mt-10 font-thin text-gray-600">
            <p>{getDisplayText()}</p>
            {!isExpanded && formattedDescription.length > 5 && (
              <div className="description-overlay"></div>
            )}
          </div>
           {formattedDescription.length > 5 && (
            <button onClick={toggleShowMore} className="text-blue-500 mt-2">
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
          )}
        </div>

        <div className="flex-1 bg-white m-2 sm:m-10 flex flex-col gap-5 rounded-3xl">
          <div className="border-solid border-gray-500 rounded-3xl border-0 p-5 sm:p-10 shadow-2xl">
          <h1 className="text-2xl sm:text-3xl text-gray-600">Amenities</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 mt-10 text-base sm:text-lg">
            <div className="mb-5  text-gray-500 flex gap-2 items-center">
              {" "}
              <FaGoogleDrive className="text-2xl" />
              {listing.amenities1}
            </div>
            <div className="mb-5  text-gray-500 flex gap-2 items-center">
              {" "}
              <FaGoogleDrive className="text-2xl" />
              {listing.amenities2}
            </div>
            <div className="mb-5  text-gray-500 flex gap-2 items-center">
              {" "}
              <FaGoogleDrive className="text-2xl" />
              {listing.amenities3}
            </div>
            <div className="mb-5  text-gray-500 flex gap-2 items-center">
              {" "}
              <FaGoogleDrive className="text-2xl" />
            {listing.amenities4}
            </div>
            <div className="mb-5  text-gray-500 flex gap-2 items-center">
              {" "}
              <FaGoogleDrive className="text-2xl" />
            {listing.amenities5}
            </div>
            <div className="mb-5  text-gray-500 flex gap-2 items-center">
              {" "}
              <FaGoogleDrive className="text-2xl" />
              {listing.amenities6}
            </div>
            <div className="mb-5  text-gray-500 flex gap-2 items-center">
              {" "}
              <FaGoogleDrive className="text-2xl" />
              {listing.amenities7}
            </div>
            <div className="mb-5  text-gray-500 flex gap-2 items-center">
              {" "}
              <FaGoogleDrive className="text-2xl" />
              {listing.amenities8}
            </div>
            <div className="mb-5  text-gray-500 flex gap-2 items-center">
              {" "}
              <FaGoogleDrive className="text-2xl" />
              {listing.amenities9}
            </div>
            <div className="mb-5  text-gray-500 flex gap-2 items-center">
              {" "}
              <FaGoogleDrive className="text-2xl" />
              {listing.amenities10}
            </div>
            <div className="mb-5  text-gray-500 flex gap-2 items-center">
              {" "}
              <FaGoogleDrive className="text-2xl" />
              {listing.amenities11}
            </div>
            <div className="mb-5  text-gray-500 flex gap-2 items-center">
              {" "}
              <FaGoogleDrive className="text-2xl" />
              {listing.amenities12}
            </div>
            <div className="mb-5  text-gray-500 flex gap-2 items-center">
              {" "}
              <FaGoogleDrive className="text-2xl" />
              {listing.amenities13}
            </div>
            <div className="mb-5  text-gray-500 flex gap-2 items-center">
              {" "}
              <FaGoogleDrive className="text-2xl" />
              {listing.amenities14}
            </div>
            <div className="mb-5  text-gray-500 flex gap-2 items-center">
              {" "}
              <FaGoogleDrive className="text-2xl" />
              {listing.amenities15}
            </div>
            
            </div>
            
          </div>
          <div className="bg-pink-500 border-solid border-gray-500 rounded-3xl border-2 p-5 sm:p-10 flex flex-col">hello</div>
        <div className="bg-pink-500 border-solid border-gray-500 rounded-3xl border-2 p-5 sm:p-10 flex flex-col">hello</div>
        </div>
      </div>
    </div>
  );
}
