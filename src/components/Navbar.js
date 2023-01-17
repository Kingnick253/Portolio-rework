import React from 'react'
// font awesome icons
import {FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

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
        
        <ul className='flex'>
          {/* This will map through the array and auto fill the information */}
          {links.map(({ id, link }) => (
              <li key={id}className='px-4 cursor-pointer font-medium text-amber-900 hover:scale-105 duration-200'>
                {link}
              </li>
          ))}
          
            
            

        </ul>
    </div>
  )
}

export default Navbar