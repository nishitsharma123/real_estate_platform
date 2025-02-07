import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
export default function ShowListing() {
  const { currentUser } = useSelector((state) => state.user);
  const [ShowListingsError, setShowListingsError] = useState(false);
  const [userListings, setUserListings] = useState([]);

  const handleShowListings = async () => {
    try {
      setShowListingsError(false);
      const res = await fetch(`/api/user/listings/${currentUser._id}`);
      const data = await res.json();
      if (data.success === false) {
        setShowListingsError(true);
        return;
      }
      setUserListings(data);
    } catch (error) {
      setShowListingsError(true);
    }
  };

  const handleListingDelete = async (listingId) => {
    try {
      // setShowListingsError(false);
      const res = await fetch(`/api/listing/delete/${listingId}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (data.success === false) {
        // setShowListingsError(true);
        console.log(data.message);
        return;
      }
      setUserListings((prev) =>
        prev.filter((listing) => listing._id !== listingId)
      );
      // setUserListings(data);
    } catch (error) {
      // setShowListingsError(true);
      console.log(error.message);
    }
  };
  if (currentUser.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">
          Only admins are allowed to access this page.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen w-full bg-blue-100">
      <Helmet>
                  <title>Show listings</title>
                  <meta name="description" content="show-listings" />
              </Helmet>
      <div className="mt-20 sm:mt-20 bg-blue-200 p-5  sm:w-3/4 rounded-2xl flex flex-row items-center gap-10 m-2 sm:m-auto h-fit">
        <div className="m-auto">
          <h1 className="font-bold text-3xl">Listing operations</h1>
          <p>you can delete and edit your existing listings here.</p>
        </div>
        <button
          onClick={handleShowListings}
          className="p-3 bg-blue-100 rounded-2xl font-semibold hover:bg-blue-300 m-auto"
        >
          show listings
        </button>
        <p className="text-red-700 ">
          {ShowListingsError ? "Error showing listings" : ""}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-5 mt-10 flex-wrap m-auto  sm:m-5">
        {userListings &&
          userListings.length > 0 &&
          userListings.map((listing) => (
            <div
              key={listing._id}
              className=" bg-blue-100 border-2 border-solid border-blue-200 p-5 rounded-3xl flex flex-col w-64 gap-1 sm:gap-10"
            >
              <Link to={`/listing/${listing._id}`}>
                <div>
                  <img
                    src={listing.imageUrls[0]}
                    alt="listing cover image"
                    className="w-full sm:w-60 h-60 object-cover rounded-3xl"
                  />
                </div>
              </Link>
              <div className=" flex flex-col justify-between">
                <div className="">
                  <h1 className="text-lg font-semibold mb-3 text-gray-800 truncate">
                    {listing.title}
                  </h1>
                  {/* <p className="text-gray-600">{listing.description}</p> */}
                </div>
                <div className="flex flex-row justify-between">
                  <Link to={`/update-listing/${listing._id}`}>
                    <button className="p-2   bg-blue-200 w-20 rounded-3xl font-semibold hover:bg-blue-300 text-green-600">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleListingDelete(listing._id)}
                    className="p-2 bg-blue-200 w-20  rounded-3xl font-semibold hover:bg-blue-300 text-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
