import React from 'react'
import ProfilePic from '../images/profile-picture.jpg';
import { BsForwardFill } from "react-icons/bs"
const About = () => {
  return (
    <div name="About" className="h-screen w-full bg-gradient-to-b from-FrostOne to-FrostTwo text-white">
        <div className='max-w-sceen-lg mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row'>
            <div  className='flex flex-col justify-center h-full'>
                <img src={ProfilePic} alt="Profile picture of myself with the sun hitting my skin" className= " h-auto w-2/3 mx-auto md:w-full rounded-3xl"/>
            </div>
            <div> 
                <h2 className='text-4xl sm:text-7xl font-bold'>Software Engineer </h2>
                <p>I have a year of experience in creating and designing software. I am a recent graduate from University of Washington Coding BootCamp, and have completely falling in love with coding.</p>

                <div>
                    <button>
                        Projects 
                        <span>
                            <BsForwardFill />
                        </span>
                    </button>
                </div>
            </div>
        </div>
        </div>
  )
}

export default About