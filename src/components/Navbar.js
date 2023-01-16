import React from 'react'
// font awesome icons
import {FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full h-20 text-white  px-4 bg-black  fixed'>
        <div>
            {/* name in the top right subject to be changed */}
            <h1 className=' text-5xl font-signature ml-2'>Nicholas Webb</h1>
        </div>
        
        <ul className='flex'>
            <li className='px-4 cursor-pointer font-medium text-gray-500'>About</li>
            <li className='px-4'>Projects</li>

        </ul>
    </div>
  )
}

export default Navbar