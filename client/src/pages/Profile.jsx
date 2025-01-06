// import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { deleteUserFailure, deleteUserStart, deleteUserSuccess, signOutUserFailure, signOutUserStart, signOutUserSuccess } from '../redux/user/userSlice';
import {Link} from 'react-router';
// import { supabase } from '../supabaseClient';
import {FaLocationArrow, FaShare}  from 'react-icons/fa';
import { Checkmark } from 'react-checkmark'
// import { animate } from 'framer-motion';
import { useEffect,useState } from 'react';
export default function Profile() {
  const {currentUser} = useSelector((state)=>state.user);
  const fileRef = useRef(null);
  const dispatch = useDispatch();
  const [animate, setAnimate] = useState(false);
useEffect(() => {
  // Clear the error state when the component mounts
  // dispatch(deleteUserFailure(null));
  // dispatch(signOutUserFailure(null));
  const timer = setTimeout(() => {
  setAnimate(true);
  }, 100);

  return () => {
    clearTimeout(timer);
    // dispatch(deleteUserFailure(null));
    // dispatch(signOutUserFailure(null));
    setAnimate(false);
  };
  
}, [dispatch]);


const handleDeleteUser = async () => {
try {
  dispatch(deleteUserStart());
  const res = await fetch(`/api/user/delete/${currentUser._id}`,{
    method: 'DELETE',
  });
  const data = await res.json();
  if(data.success === false){
    dispatch(deleteUserFailure(data.message));
    return;
  }
  dispatch(deleteUserSuccess(data));
} catch (error) {
  dispatch(deleteUserFailure(error.message));
}
  };

const handleSignOut = async ()=>{
  try {
    dispatch(signOutUserStart());
    const res = await fetch('/api/auth/signout');
    const data = await res.json();
    if(data.success === false){
      dispatch(signOutUserFailure(data.message));
      return;
    }
    dispatch(signOutUserSuccess(data));
  } catch (error) {
    dispatch(signOutUserFailure(data.message));
  }
}
// const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Use a proxy to bypass CORS
//   const avatarUrl = `${proxyUrl}${currentUser.avatar}`;
  return (
    <div className='absolute bg-blue-100 w-full min-h-screen'>
      <div className='flex  gap-10 m-auto w-11/12 md:w-3/4 rounded-lg  h-auto mt-20 md:mt-36 flex-col md:flex-row '>
        <div className='flex flex-col items-center md:m-auto md:mr-5 '>
        <input type="file" ref={fileRef} hidden accept='image/*'/>
        <img onClick={()=>fileRef.current.click()} className={`rounded-full h-40 w-40 object-cover cursor-pointer transition-all duration-[2000ms] ${animate ? 'translate-x-0 opacity-full' : '-translate-x-full opacity-0'}`} src={currentUser?.avatar||"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} style={{ imageRendering: 'auto' }} alt="Profile" onError={(e) => (e.target.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")}/>
        </div>
        <div className='flex flex-col gap-2 text-slate-800  text-center md:text-left md:m-auto md:ml-0'>
          <h1 className={`text-3xl transition-all duration-[2000ms] ${animate ? 'translate-x-0 opacity-full' : 'translate-x-60 opacity-0'}`}>{currentUser.username}</h1>
          <span className='flex flex-wrap gap-2 text-center md:text-left m-auto md:m-0'>
          <span className='flex gap-2'><FaLocationArrow className='mt-1 text-blue-500'/>India</span>
          <span className='flex gap-2'><FaShare className='mt-1 text-blue-500'/>{currentUser.username}.in</span></span>
          <p>"Turning Dreams into Reality, One Property at a Time."</p>
          <div className='flex gap-2 p-2 pl-0 text-white m-auto md:m-0'>
            <p className='p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl backdrop-blur-lg bg-opacity-50'>Home</p>
            <p className='p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl backdrop-blur-lg bg-opacity-50'>Real Estate</p>
            <p className='p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl backdrop-blur-lg bg-opacity-50'>Properties</p>
          </div>
          <div className='flex w-full md:w-72 items-center'>
          <input type="text" placeholder='email' autoComplete='additional-name' className='border p-2 w-60 rounded-lg text-green-700 m-auto' id='email' defaultValue={currentUser.email}/>
          <Checkmark size='medium'/>
          </div>
        </div>
      </div>




     <div className='p-2 flex h-auto md:h-72 m-auto items-center justify-center gap-5 rounded-3xl text-white flex-col md:flex-row mt-5'>

      {/* <div className={` h-64 w-full md:w-96 rounded-3xl flex flex-col items-center border-solid border-4 border-white transition-all duration-[2000ms] ${animate ? 'translate-x-0 opacity-full' : '-translate-x-full opacity-0'}`}>
        <h1 className='mt-3 text-2xl font-bold items-center'>Want to sell your property🏠?</h1>
        <div className='items-center text-center'>
          <p className=''>Make the first step with us.</p>
          <p> At iBuy, we are revolutionizing the real estate experience with fast, accurate, and reliable services designed to meet your needs.
          </p>
        </div>
        
        <Link className=' m-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-3 text-center uppercase font-semibold text-white hover:opacity-95 disabled:opacity-85 items-center' to={"/create-listing"}>
        create listing
        </Link>
      </div> */}


        <div className=' mb-5 flex flex-col md:flex-row items-center h-auto md:h-64 w-auto gap-5 rounded-3xl'>
        <div className={`bg-blue-300 m-auto rounded-3xl h-32 w-full md:w-96 flex flex-col items-center text-slate-900 transition-all duration-[2000ms] ${animate ? 'translate-y-0 opacity-full' : 'translate-y-60 opacity-0'}`}>
          <p className='items-center p-2'>Do you want to delete your Account? </p>
        <button onClick={handleDeleteUser} className='text-red-700 cursor-pointer bg-white p-3  rounded-3xl m-auto'>
          Delete account
        </button>
        </div>
        <div className={`bg-blue-300 m-auto rounded-3xl h-32 w-full md:w-96 flex flex-col text-slate-900 items-center transition-all duration-[2000ms] ${animate ? 'translate-y-0 opacity-full' : '-translate-y-60 opacity-0'}`}>
          <p className='items-center p-2'> Sign-out from  your account.</p>
        <button onClick={handleSignOut} className='text-red-700 cursor-pointer bg-white p-3 rounded-3xl m-auto '>
          Sign Out
        </button>
        </div>
      </div>


      {/* <div className={`h-64 w-full md:w-96 rounded-3xl flex flex-col items-center border-solid border-4 border-white transition-all duration-[2000ms] ${animate ? 'translate-x-0 opacity-full' : 'translate-x-full opacity-0'}`}>
        <h1 className='mt-3 text-2xl font-bold'>Use our advance AI model?</h1>
        <div className='items-center text-center'>
          <p className=''>Find the best price for your property🏠.</p>
          <p> At iBuy, we are revolutionizing the real estate experience with fast, accurate, and reliable services designed to meet your needs.
          </p>
        </div>
       
        <Link className='m-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-3 text-center uppercase font-semibold text-white hover:opacity-95 disabled:opacity-85 items-center' to={"/price-prediction"}>
        Price evaluator
        </Link>
      </div> */}

      </div>

     
    </div>
  );
}
