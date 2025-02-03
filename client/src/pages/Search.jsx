// import e from "express";
import React, { useEffect, useState } from "react";
import { use } from "react";
import {useNavigate} from 'react-router-dom';
import nolisting from '../data/nolisting.png';
import ListingItem from "../components/ListingItem";

export default function () {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [listings, setListings] = useState([]);
    const [showMore, setShowMore] = useState(false);
  const [sidebardata, setSidebardata] = useState({
    searchTerm: "",
    type: "all",
    propertyAuthOption: "allproperty",
    offer: false,
    sort: "createdAt",
    order: "desc",
  });
//   console.log(sidebardata);
// console.log(listings);
useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const typeFromUrl = urlParams.get("type");
    const propertyAuthOptionFromUrl = urlParams.get("propertyAuthOption");
    const offerFromUrl = urlParams.get("offer");
    const sortFromUrl = urlParams.get("sort");
    const orderFromUrl = urlParams.get("order");
    if(
        searchTermFromUrl ||
        typeFromUrl ||
        propertyAuthOptionFromUrl ||
        offerFromUrl ||
        sortFromUrl ||
        orderFromUrl
    ){
        setSidebardata({
            searchTerm: searchTermFromUrl || "",
            type: typeFromUrl || "all",
            propertyAuthOption: propertyAuthOptionFromUrl || "allproperty",
            offer: offerFromUrl === 'true' ? true : false,
            sort: sortFromUrl || "createdAt",
            order: orderFromUrl || "desc",
        });
    }

    const fetchListings = async () => {

        setLoading(true);
        setShowMore(false);
        const searchQuery = urlParams.toString();
        const res = await fetch(`/api/listing/get?${searchQuery}`);
        const data = await res.json();
        if(data.length>8){
          setShowMore(true);
        }else{
          setShowMore(false);
        }
        setListings(data);
        setLoading(false);
    };
    fetchListings();
},[location.search]);




  const handleChange = (e) => {
    if (
      e.target.id === "all" ||
      e.target.id === "sale" ||
      e.target.id === "rent"
    ) {
      setSidebardata({ ...sidebardata, type: e.target.id });
    }
    if (
      e.target.id === "allproperty" ||
      e.target.id === "certified" ||
      e.target.id === "owned"
    ) {
      setSidebardata({ ...sidebardata, propertyAuthOption: e.target.id });
    }
    if (e.target.id === "offer") {
      setSidebardata({
        ...sidebardata,
        [e.target.id]:
          e.target.checked || e.target.checked === "true" ? true : false,
      });
    }
    if (e.target.id === "sort_order") {
        const sort = e.target.value.split('_')[0] || "createdAt";
        const order = e.target.value.split('_')[1] || "desc";
      setSidebardata({ ...sidebardata, sort, order });
    }
    if (e.target.id === "searchTerm") {
      setSidebardata({ ...sidebardata, searchTerm: e.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set("searchTerm", sidebardata.searchTerm);
    urlParams.set("type", sidebardata.type);
    urlParams.set("propertyAuthOption", sidebardata.propertyAuthOption);
    urlParams.set("offer", sidebardata.offer);
    urlParams.set("sort", sidebardata.sort);
    urlParams.set("order", sidebardata.order);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);

  };
const onShowMoreClick = async () => {
  const numberOfListings = listings.length;
  const startIndex = numberOfListings;
  const urlParams = new URLSearchParams(location.search);
  urlParams.set('startIndex', startIndex)
  const searchQuery = urlParams.toString();
  const res = await fetch(`/api/listing/get?${searchQuery}`);
  const data = await res.json();
  if(data.length<9){
    setShowMore(false);
  }
  setListings([...listings, ...data]);



};
  return (
    <div className="flex bg-blue-100 min-h-screen">
      <div className=" flex flex-col sm:flex-row gap-10  w-full">
        <div className=" pt-20 sm:w-[450px] bg-blue-300 border-b-2 md:border-r-2 border-blue-500 w-full sm:fixed sm:min-h-screen">
          <h1 className="text-white text-3xl font-bold text-center">Filters</h1>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex flex-row gap-4 m-3 sm:p-4 items-center">
              <label className="whitespace-nowrap font-bold">
                Search Term:
              </label>
              <input
                type="text"
                id="searchTerm"
                placeholder="search....."
                className="w-full p-2 rounded-lg"
                value={sidebardata.searchTerm}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-row flex-wrap gap-4 m-3 sm:p-4 items-center">
              <label className="whitespace-nowrap font-bold">Type:</label>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-5 whitespace-nowrap"
                  id="all"
                  onChange={handleChange}
                  checked={sidebardata.type === "all"}
                />
                <span>Rent & Sale</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-5 whitespace-nowrap"
                  id="sale"
                  onChange={handleChange}
                  checked={sidebardata.type === "sale"}
                />
                <span>Sale</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-5 whitespace-nowrap"
                  id="rent"
                  onChange={handleChange}
                  checked={sidebardata.type === "rent"}
                />
                <span>Rent</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-5 whitespace-nowrap"
                  id="offer"
                  onChange={handleChange}
                  checked={sidebardata.offer}
                />
                <span>Offer</span>
              </div>
            </div>

            <div className="flex flex-row flex-wrap gap-4 m-3 sm:p-4 items-center">
              <label className="whitespace-nowrap font-bold">Property:</label>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-5 whitespace-nowrap"
                  id="allproperty"
                  onChange={handleChange}
                  checked={sidebardata.propertyAuthOption === "allproperty"}
                />
                <span>Certified & Owned by us</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-5 whitespace-nowrap"
                  id="certified"
                  onChange={handleChange}
                  checked={sidebardata.propertyAuthOption === "certified"}
                />
                <span>Certified by us</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-5 whitespace-nowrap"
                  id="owned"
                  onChange={handleChange}
                  checked={sidebardata.propertyAuthOption === "owned"}
                />
                <span>Owned by us</span>
              </div>
            </div>

            <div className="flex flex-row flex-wrap gap-4 m-3 sm:p-4 items-center">
              <label className="whitespace-nowrap font-bold">Sort:</label>
              <select
                onChange={handleChange}
                defaultValue={"created_at_desc"}
                className="w-1/2 p-2 rounded-lg"
                id="sort_order"
              >
                <option value="Price_desc">Price high to low</option>
                <option value="Price_asc">Price low to high</option>
                <option value="createdAt_desc">Latest</option>
                <option value="createdAt_asc">Oldest</option>
              </select>
            </div>
            <button className="bg-slate-700 m-3 sm:m-5 text-white p-3 rounded-lg uppercase hover:opacity-95">
              Search
            </button>
          </form>
        </div>
        <div className=" flex flex-col w-full sm:ml-[500px]">
          <h1 className="sm:pt-20 text-3xl font-bold text-center sm:text-left">Listing results:</h1>
          <div className="flex flex-col m-auto sm:flex-row gap-5 flex-wrap pt-10 mb-10">
          {!loading && listings.length === 0 && (
            <div className="text-3xl font-bold m-auto sm:h-[700px] sm:w-[700px] items-center ">
              <img src={nolisting} className="m-auto h-[200px] sm:h-[300px]"/>
              <h1 className="text-center">No listing found!</h1>
              <p className=" text-center text-gray-500 font-thin text-base">Please try with another keywords</p>
              </div>
          )}
          {loading && (
            <p className="text-xl text-slate-500 text-center w-full">loading...</p>
          )}
          {!loading && listings && listings.map((listing) => (
              <ListingItem key={listing._id} listing={listing}/>
          ))}
          
          </div>
          {showMore && (
            <button className="bg-blue-500 mb-10 w-48 m-auto p-4 rounded-lg text-white font-bold hover:opacity-80" onClick={onShowMoreClick}>Show more</button>)}
        </div>
      </div>
    </div>
  );
}
