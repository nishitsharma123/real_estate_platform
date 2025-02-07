import React from "react";
import freepik__adjust__89929 from "../data/freepik__adjust__89929.png";
import { FaRupeeSign } from "react-icons/fa";
import propimage from "../data/propimage.png";
import logoCard from "../data/logoCard.png";
import { Link } from "react-router-dom";
const PricePredictionModal = ({ isOpen, onClose, predictedPrice, error }) => {
  if (!isOpen) return null; // Hide modal if not open

  function formatPriceRange(price) {
  if (price >= 10000000) {
    const min = (price / 10000000).toFixed(1); // Convert to crore
    const max = (price / 10000000 + 0.2).toFixed(1); // Add 0.4 crore for range
    return `${min} Cr - ${max} Cr`;
  } else if (price >= 100000) {
    const min = (price / 100000).toFixed(1); // Convert to lakh
    const max = (price / 100000 + 0.4).toFixed(1); // Add 0.4 lakh for range
    return `${min} lakh - ${max} lakh`;
  } else if (price >= 1000) {
    const min = (price / 1000).toFixed(1); // Convert to thousand
    const max = (price / 1000 + 0.4).toFixed(1); // Add 0.4 thousand for range
    return `${min} K - ${max} K`;
  } else {
    const min = price.toFixed(1); // If it's less than 1000, no unit
    const max = (price + 400).toFixed(1); // Add 400 for range
    return `${min} - ${max}`;
  }
}

  return (
    // <div className="modal-overlay">
    //   <div className="modal-content">
    //     <button className="close-btn" onClick={onClose}>&times;</button>
    //     <h2 className="text-xl font-bold">Price Prediction Result</h2>

    //     {predictedPrice !== null && (
    //       <div className="mt-5 p-6 bg-gradient-to-r from-green-100 to-green-50 text-green-800 rounded-xl shadow-inner text-center"
    //            style={{ animation: "fadeIn 1s ease-in-out" }}>
    //         <h2 className="text-lg font-bold">Predicted Price:</h2>
    //         <p className="text-3xl font-extrabold">{predictedPrice}</p>
    //       </div>
    //     )}

    //     {error && (
    //       <p className="mt-4 text-red-600 text-center font-medium animate-pulse bg-white rounded-2xl p-2">
    //         {error}
    //       </p>
    //     )}

    //     <button onClick={onClose} className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-lg">
    //       Close
    //     </button>
    //   </div>
    // </div>
    <div className=" modal-overlay bottom-0 sm:top-0 left-0 sm:h-full sm:w-full sm:min-h-screen bg-gray-50 sm:p-6 flex flex-col rounded-3xl">
      <button
        className="close-btn text-white  font-bold text-6xl bg-blue-300 p-2 sm:p-3 rounded-full bg-opacity-20 hover:opacity-60"
        onClick={onClose}
      >
        X
      </button>
      {/* Header Section */}
      {/* <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Opendoor</h1>
        <p className="text-gray-500">9644 N 32nd Pl</p>
      </header> */}

      {/* Hero Section */}
      <section className="mt-14 relative bg-white rounded-3xl shadow-sm shadow-sky-200 overflow-hidden mb-10 w-full">
        <img
          className=" w-full rounded-3xl object-cover h-96 brightness-10 contrast-100"
          src={freepik__adjust__89929}
        />
        <div className="absolute inset-0 bg-opacity-10  backdrop-blur-sm flex flex-col sm:flex-row items-center justify-end p-8 ">
          <div className="flex-1 hidden sm:flex"><img src={propimage}/></div>
          <div className="text-right text-white flex-1">
            <div className="bg-black h-52 w-96 rounded-2xl ml-auto pr-5">
              
              <div className=" text-left  w-full p-5"><span className="p-2 bg-white bg-opacity-20 rounded-3xl">Cash offer</span></div>
                          <h2 className="text-sm ">Current estimate price</h2>
            <div className="">
              {predictedPrice !== null && (
                // <div
                //   className="mt-5 p-6 bg-gradient-to-r from-green-100 to-green-50 text-green-800 rounded-xl shadow-inner text-center"
                //   style={{ animation: "fadeIn 1s ease-in-out" }}
                // >
                //   <h2 className="text-lg font-bold">Predicted Price:</h2>
                <div className="flex flex-row gap-2 items-center">
                  <FaRupeeSign className="ml-auto text-3xl text-green-500"/>
                  {/* <span className="text-4xl font-thin text-green-500">{predictedPrice}</span> */}
                  <span className="text-4xl font-thin text-green-500">{formatPriceRange(predictedPrice)}</span>
                </div>
              )}

              {error && (
                <p className=" text-red-600 text-center ml-auto w-fit text-sm animate-pulse bg-white rounded-2xl p-2">
                  {error}
                </p>
              )}
              <p className="text-sm w-80 ml-auto mt-5">This price estimation becomes more accurate after a home inspection.</p>
            </div>
            
            </div>
            <p className="mt-2 text-md text-slate-900 font-bold">
              This includes our cash offer and listing price. Upload photos and
              videos of your home to get a more accurate offer.
            </p>
            <Link to="/sell-home">
            <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded-lg hover:opacity-60">
              Show us your home
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Selling Options Section */}
      <section className="">
        <h2 className="text-xl font-bold mb-6 text-white">
          💡 We are providing two options
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Option 1 */}
          <div className="bg-white p-6 rounded-3xl shadow">
            <h3 className="text-lg font-bold">Option 1</h3>
            <h4 className="text-2xl font-bold mt-2">Sell to Ibuyr</h4>
            <p className="text-gray-600 mt-2">
              Sell right away without listing your home.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span className="bg-green-100 text-green-600 p-1 rounded-full mr-2">
                  ✔
                </span>
                No agent or showings
              </li>
              <li className="flex items-center">
                <span className="bg-green-100 text-green-600 p-1 rounded-full mr-2">
                  ✔
                </span>
                All-cash offer included
              </li>
            </ul>
            <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg">
              View details
            </button>
          </div>

          {/* Option 2 */}
          <div className="bg-white p-6 rounded-3xl shadow mb-5 sm:m-auto">
            <h3 className="text-lg font-bold">Option 2</h3>
            <h4 className="text-2xl font-bold mt-2">
              List with Ibuyr <span className="text-green-600">(New)</span>
            </h4>
            <p className="text-gray-600 mt-2">
              List your home for sale in a traditional sale.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span className="bg-green-100 text-green-600 p-1 rounded-full mr-2">
                  ✔
                </span>
                Agent and showings required
              </li>
              <li className="flex items-center">
                <span className="bg-green-100 text-green-600 p-1 rounded-full mr-2">
                  ✔
                </span>
                All-cash backup offer
              </li>
            </ul>
            <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg">
              View details
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricePredictionModal;
