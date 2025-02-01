import React from 'react'
import { Link } from 'react-router-dom'
import {FaBuilding, FaChartArea, FaMapMarkerAlt, FaParking, FaRupeeSign, FaTags} from "react-icons/fa";
export default function ListingItem({listing}) {
  return (
    <div className=''>
        <Link to={`/listing/${listing._id}`}>
            <div className=" mt-5 card bg-white w-80 h-[500px] rounded-2xl pt-3 transition-all duration-300 hover:scale-110 shadow-md">
                <div className="card-image w-72 h-60 m-auto overflow-hidden rounded-2xl">
                    <div className="text-xs bg-gradient-to-r from-blue-500 to-purple-600 text-white ml-3 mt-3 absolute p-1 rounded-lg w-fit">{listing.propertyAuth}</div>
                    <img src={listing.imageUrls[0]} alt="property-image" className='rounded-2xl m-auto w-72 h-60 object-cover transition-all duration-300 hover:scale-125' />
                
                </div>
                <div className="card-content w-72 p-4">
                    <p className='text-3xl flex flex-row items-center font-bold'><FaRupeeSign className='font-bold text-green-500 text-3xl'/>{listing.regularPrice} {listing.regularPrice_tag}</p>
                    <h2 className='text-lg truncate'>{listing.title}</h2>
                    {/* <p>{listing.description}</p> */}
                    
                </div>
                <div className='w-72 pl-4'>
                    <h2 className=' flex flex-row gap-3 items-center font-semibold text-blue-500 '><FaMapMarkerAlt className='text-xl '/>{listing.address}</h2>
                <h2 className=' flex flex-row gap-3 items-center font-thin text-gray-600'><FaChartArea className='text-xl '/>{listing.houseArea} sqrft</h2>
                <h2 className=' flex flex-row gap-3 items-center font-thin text-gray-600'><FaBuilding className='text-xl'/>{listing.bhk} bhk</h2>
                <h2 className='flex flex-row gap-3 items-center font-thin text-gray-600'><FaParking className='text-xl '/>Parking: {listing.parking}</h2>
                </div>
            </div>
        </Link>
    </div>
  )
}
