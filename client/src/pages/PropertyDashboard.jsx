import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function PropertyDashboard() {
  return (
    <div className='bg-blue-100 min-h-screen'>
      <div className='bg-pink-400 w-full flex flex-col items-center'>
        <img className="w-full object-cover h-96" src="https://img.pikbest.com/wp/202344/light-blue-gradient-wallpaper-smooth-blur-with-simple-plain-background-texture_9930252.jpg!sw800"/>
      <div className='absolute mt-36 gap-5 flex flex-col w-full  items-center'>
        <h1 className='text-3xl sm:text-6xl '>Find the best home</h1>
        <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, pariatur!</p>
      <form className="bg-white p-3 rounded-3xl w-2/3 sm:w-96 justify-between  flex items-center z-10">
          <input
            type="text"
            id="search"
            placeholder="Enter your city...."
            className="bg-transparent focus:outline-none  text-black"
          />
          <FaSearch className="text-black" />
        </form>
        <div className='z-10 bg-white rounded-3xl w-4/5 h-28 text-center'>filters</div>
        </div>
      </div>
    </div>
  )
}
