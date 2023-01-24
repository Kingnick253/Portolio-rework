import React from 'react'
import ProfilePic from '../images/profile-picture.jpg';
import { BsForwardFill } from "react-icons/bs"
const About = () => {
  return (
    <div name="About" className="h-screen w-full bg-gradient-to-b from-FrostOne to-FrostTwo text-white">
        <div className='max-w-sceen-lg mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row'>
            <div  className='flex flex-col justify-center h-full'>
                <img src={ProfilePic} alt="Profile picture of myself with the sun hitting my skin" className= "  h-auto w-96 mx-auto pr-4 pt-4 rounded-3xl md:min-h"/>
            </div>
            <div> 
                <h2 className='text-4xl sm:text-7xl font-bold'>Software Engineer </h2>
                <p className= " text-gray-500  py-6 max-w-md">I have a year of experience in creating and designing software. I am a recent graduate from University of Washington Coding BootCamp, and have completely falling in love with coding.</p>

                <div>
                    <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-DeepOne to-DeepTwo  hover:from-OrangeOne hover:to-OrangeTwo">
                        Projects  
                        <span className='group-hover:rotate-90 duration-300'>
                            <BsForwardFill  size={20} className="ml-1"/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
        </div>
  )
}

export default About