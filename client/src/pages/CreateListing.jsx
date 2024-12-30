import React from 'react'
import { useState } from 'react';
export default function CreateListing() {
    const [files, setFiles] = useState([]);
    console.log(files);
  return (
<div className= 'absolute bg-blue-100 w-screen h-screen'>
    <main className='p-3 max-w-6xl mx-auto bg-blue-100 mt-20 '>
        <h1 className='text-3xl font-semibold text-center my-7 '>Create a Listing</h1>
        
        <form className='flex flex-col sm:flex-row gap-4'>
            <div className='flex flex-col gap-4 flex-1'>
                <input type="text" placeholder="name" className='border-black border-2 p-3 rounded-lg' id='name' maxLength='62' minLength='10' required />
                <input type="text" placeholder="description" className='border-black border-2 p-3 rounded-lg' id='description' required />
                <input type="text" placeholder="address" className='border-black border-2 p-3 rounded-lg' id='address' required />

                <div className=' flex gap-6 flex-wrap'>
                <div className='flex gap-2'>
                    <input type="checkbox" id='sale' className='w-5 border-black border-2'/>
                    <span>Sell</span>
                </div>

                <div className='flex gap-2'>
                    <input type="checkbox" id='rent' className='w-5 border-black border-2'/>
                    <span>Rent</span>
                </div>

                <div className='flex gap-2'>
                    <input type="checkbox" id='parking' className='w-5 '/>
                    <span>Parking spot</span>
                </div>

                <div className='flex gap-2'>
                    <input type="checkbox" id='furnished' className='w-5'/>
                    <span>Furnished</span>
                </div>

                <div className='flex gap-2'>
                    <input type="checkbox" id='offer' className='w-5'/>
                    <span>Offer</span>
                </div>

            </div>


            <div className='flex gap-6 flex-wrap'>
                <div className='flex items-center gap-2'>
                    <input type="number" id="bedrooms" min='1' max='10' required className='p-3 border-black border-2 rounded-lg'/>
                    <span>Beds</span>
                </div>

                <div className='flex items-center gap-2'>
                    <input type="number" id="bathrooms" min='1' max='10' required className='p-3 border-black border-2 rounded-lg'/>
                    <span>Baths</span>
                </div>

                <div className='flex items-center gap-2'>
                    <input type="number" id="regularPrice" min='1' max='1000000' required className='p-3 border-black border-2 rounded-lg'/>
                    <div className='text-center'>
                        <p>Regular price</p> 
                        <span className='text-xs'>($ /month)</span>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <input type="number" id="discountPrice" min='1' max='10' required className='p-3 border-black border-2 rounded-lg'/>
                    <div className='text-center'>
                        <p>Discounted price</p> 
                        <span className='text-xs'>($ /month)</span>
                    </div>
                </div>
            </div>

            </div>

            <div className='flex flex-col flex-1 gap-4'>
                <p className='font-semibold'>Images:
                <span className='font-normal text-gray-600 ml-2'>The first image will be cover image (max 6 images allowed)</span>
                </p>

                <div className='flex gap-4'>
                    <input onChange={(e)=>setFiles(e.target.files)} className='p-3 border border-gray-300 rounded w-full' type="file" id='images' accept='image/*' multiple/>
                    <button className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'>Upload</button>
                </div>
                <button className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Create listing</button>
            </div>


            
        </form>
    
    
    
    
    </main>
    </div>
  )
}
