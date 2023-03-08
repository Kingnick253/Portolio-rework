import React from 'react'

const About = () => {
  return (
    <div name= 'About' className='w-full h-screen bg-gradient-to-b from-FrostTwo to-FrostOne text-white'>
        <div className='flex max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full' >
            <div className='pb-8'>

                <p className='text-4xl font-bold inline border-b-4 '>
                    About
                </p>

            </div>
            <p className='text-xl mt-20'>
                Hi, my name is Nicholas Webb, recent gradute from the Universty of Washington's Full Stack coding bootcamp. I am 25 years old, and currently employeed with the Unviersty of Washington Medicine Laboratory Medicine & Pathology as a PTA Lead. 
            </p>

            <br />
            <p className='text-xl'>
            As far as my coding experience I took a Java class while I was in college and have been independently learning Python, through coursera a google ran coding class. Out of the languages I have learned thus far, my favorite would have to be Javascript/react. I think react paired with a CSS framework such as Tailwind, makes for a seamlessly smooth webpage that can meet the needs of creator and the user.
            </p>

        </div>
        
    </div>
  )
}

export default About