import React from 'react'

const About = () => {
  return (
    <div name= 'About' className='w-full h-screen bg-gradient-to-b from-FrostTwo to-FrostOne text-white'>
        <div className='flex max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full ' >
            <div className='pb-8'>

                <p className='text-4xl font-bold inline border-b-4 '>
                    About
                </p>

            </div>
            <div className=' '>
            <p className='text-xl lg:text-3xl mt-10'>
            Hello, my name is Nicholas Webb. I'm a 25 year old Web Developer, and recent graduate from the University of Washington Full-Stack Coding BootCamp. I am currently pursuing an opportunity to exhibit my Front-end and Back-end Skills. 
            </p>

            <br />
            <p className='text-xl lg:text-3xl'> 
            I have strong inclination to create and develop efficient, secure, and user friendly application. Goal oriented and easy to work with, and would make me a useful asset to the team. 
            </p>
            <br />
            <p className='text-xl lg:text-3xl'> 
             Outside of coding, I try to stay fairly active. Whether that be going to the gym, on a hike or playing basketball with friends. In my free time I enjoy playing video, cooking, watching anime and making music.
            </p>
            </div>

        </div>
        
    </div>
  )
}

export default About