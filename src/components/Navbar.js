import React, { useState } from 'react'
// font awesome icons
import {FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  // array for each of the buttons on the navbar
  const links = [
    {
      id:1,
      link:'About'
    },
    {
      id:2,
      link:'Projects'
    },
    {
      id:3,
      link:'Skills'
    },
    {
      id:4,
      link:'Contact Me'
    }
  ]
  return (
    <div className='flex justify-between items-center w-full h-20 text-white  px-4 bg-black  fixed'>
        <div>
            {/* name in the top right subject to be changed */}
            <h1 className=' text-5xl font-signature ml-2'>Nicholas Webb</h1>
        </div>
        
        <ul className='hidden md:flex'>
          {/* This will map through the array and auto fill the information */}
          {links.map(({ id, link }) => (
              <li key={id}className='px-4 cursor-pointer font-medium text-amber-900 hover:scale-105 duration-200'>
                {link}
              </li>
          ))}
          
        </ul>

        <div 
        onClick={() => setNav(!nav)} 
        className='cursor-pointer pr-4 z-10 text-amber-900'>
          {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
          
        </div>
    </div>
  )
}

export default Navbar