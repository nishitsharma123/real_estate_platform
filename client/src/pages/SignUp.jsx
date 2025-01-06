import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import OAuth from '../components/OAuth';
import { useDispatch, useSelector } from 'react-redux';
import bgVideo from '../data/bgvideo.mp4';
import { FaUser } from 'react-icons/fa';
import { signUpFailure, signUpSuccess, signUpStart } from '../redux/user/userSlice';

export default function SignUp() {
  const [formData, setFormData] = useState({})
  const {loading, error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
const [animate, setAnimate] = useState(false);
 useEffect(() => {
    // Clear the error state when the component mounts
    dispatch(signUpFailure(null));
    const timer = setTimeout(() => {
    setAnimate(true);
    }, 100);
    return () => {
      clearTimeout(timer);
      setAnimate(false);
    };
  }, [dispatch]);

  const handleChange = (e)=>{
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value,
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.email || !formData.password || !formData.username){
          dispatch(signUpFailure('Please fill in all the fields'));
          return;
        }

    try {

      dispatch(signUpStart());
      const res = await fetch('/api/auth/signup',
      {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success===false){
        
        dispatch(signUpFailure(data.message));
        return;
      }
      
      dispatch(signUpSuccess(data));
      navigate('/sign-in');

    } catch (error) {
      dispatch(signUpFailure(data.message));
    }
      // console.log(data);
  };

  // console.log(formData);

  return (
  


  <div className="absolute h-screen w-screen bg-blue-100">
        {/* <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={bgVideo}
          autoPlay
          loop
          muted
        /> */}
  <div className={`bg-blue-200 relative flex  mt-24 w-fit m-auto rounded-3xl h-300px transition-all duration-[2000ms] ${animate ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
  <div className={`z-10 p-10 max-w-lg mx-auto bg-black flex-1 rounded-3xl m-2 ml-2 text-white transition-all duration-[2000ms] ${animate ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`} >
          <h1 className='text-3xl text-semibold'>Your Dream Home🏠 Awaits</h1>
          <br/>
          <p>Explore a vast collection of properties tailored to your lifestyle. From cozy apartments to luxurious villas, we make finding your perfect home effortless.</p>
          {/* <p>Access personalized recommendations, saved searches, and exclusive listings tailored for you.</p> */}
          <br/><h3 className='text-2xl'>✨ Key Features:</h3>
          <ul className='list-disc list-inside'>
            <li>Verified Listings</li>
            <li>AI-Powered Recommendations</li>
            <li>Expert Guidance at Every Step</li>
          </ul>
          <br/>
          <h4 className='text-xl'>Begin your journey to better living today!</h4>
        </div>

    <div className=' z-10 p-20 pt-5 max-w-lg mx-auto  flex-1 '>
  
      <div className='flex flex-row items-center'>
        <FaUser className="text-center text-3xl m-3"/>
        <span className={`text-3xl text-center font-semibold my-7 transition-all duration-[2000ms] ${animate ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>Sign Up</span>
      </div>
    
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='username' className='border-solid bg-blue-100 border-black border-2 p-3 rounded-lg' id='username' onChange={handleChange}/>
        <input type="text" placeholder='email' className='p-3 rounded-lg border-solid bg-blue-100 border-black border-2' id='email' onChange={handleChange}/>
  
        <input type="password" placeholder='password' className='border-solid border-black bg-blue-100 border-2 p-3 rounded-lg' id='password' onChange={handleChange}/>
  
        <button className='bg-black text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading...': 'Sign up'}</button>
        <OAuth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Already have an account?</p>
        <Link to={"/sign-in"}>
        <span className='text-blue-600 text-semibold rounded-lg text-center hover:bg-black p-1 hover:text-white '>Sign in</span>
        </Link>
        
    </div>
    {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
    
        
      </div>
    </div>
  )
}
