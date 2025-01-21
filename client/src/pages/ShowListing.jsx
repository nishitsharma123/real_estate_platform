import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
    <div className="absolute min-h-screen w-full bg-blue-100">
      <div className="mt-20 bg-blue-200 p-5 w-3/4 rounded-2xl flex flex-row items-center gap-10 m-auto ">
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
      <div className="">
        {userListings &&
          userListings.length > 0 &&
          userListings.map((listing) => (
            <div
              key={listing._id}
              className=" bg-blue-100 border-2 border-solid border-blue-200 p-5 m-10 rounded-3xl flex flex-row gap-10"
            >
              <Link to={`/listing/${listing._id}`}>
                <div>
                  <img
                    src={listing.imageUrls[0]}
                    alt="listing cover image"
                    className="w-60 h-60 object-cover rounded-3xl"
                  />
                </div>
              </Link>
              <div className="mt-5 flex flex-row justify-between w-3/4">
                <div className="p-2">
                  <h1 className="text-xl font-semibold mb-3 text-gray-800">
                    {listing.title}
                  </h1>
                  <p className="text-gray-600">{listing.description}</p>
                </div>
                <div className="flex flex-col gap-5 mt-auto mb-auto mr-10">
                  <Link to={`/update-listing/${listing._id}`}>
                    <button className="p-3 bg-blue-200 w-40 rounded-3xl font-semibold hover:bg-blue-300 text-green-600">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleListingDelete(listing._id)}
                    className="p-3 bg-blue-200 w-40 rounded-3xl font-semibold hover:bg-blue-300 text-red-600"
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
