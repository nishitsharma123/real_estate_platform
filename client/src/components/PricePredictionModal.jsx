import React from "react";
import freepik__adjust__89929 from "../data/freepik__adjust__89929.png";
import { FaCross, FaCut, FaPhoenixSquadron, FaRemoveFormat } from "react-icons/fa";
const PricePredictionModal = ({ isOpen, onClose, predictedPrice, error }) => {
  if (!isOpen) return null; // Hide modal if not open

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
    <div className=" modal-overlay min-h-screen bg-gray-50 p-6 flex flex-col rounded-3xl">
      <button
        className="close-btn text-white font-bold text-6xl bg-blue-300 p-3 rounded-lg bg-opacity-20"
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
      <section className="relative bg-white rounded-3xl shadow-lg overflow-hidden mb-10 w-full">
        <img
          className="w-full rounded-3xl object-cover h-96 "
          src={freepik__adjust__89929}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-end p-8">
          <div className="text-right text-white">
            <h2 className="text-3xl font-bold">Estimated sale price</h2>
            <div className="text-4xl font-extrabold">
              {predictedPrice !== null && (
                // <div
                //   className="mt-5 p-6 bg-gradient-to-r from-green-100 to-green-50 text-green-800 rounded-xl shadow-inner text-center"
                //   style={{ animation: "fadeIn 1s ease-in-out" }}
                // >
                //   <h2 className="text-lg font-bold">Predicted Price:</h2>
                  <p className="text-3xl font-extrabold text-green-500">{predictedPrice}.0</p>
                // </div>
              )}

              {error && (
                <p className="mt-4 text-red-600 text-center font-medium animate-pulse bg-white rounded-2xl p-2">
                  {error}
                </p>
              )}
            </div>
            <p className="mt-2 text-sm">
              This includes our cash offer and listing price. Upload photos and
              videos of your home to get a more accurate offer.
            </p>
            <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded-lg">
              Show us your home
            </button>
          </div>
        </div>
      </section>

      {/* Selling Options Section */}
      <section className="">
        <h2 className="text-xl font-bold mb-6 text-white">
          Your selling options
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
          <div className="bg-white p-6 rounded-3xl shadow">
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
