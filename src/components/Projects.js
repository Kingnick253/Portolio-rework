import React from 'react'
import PaperBoy from "../images/paperboy.png";
import ProjectsData from './ProjectsData';
const Projects = () => {
  return (
        <div name ="projects" className='bg-gradient-to-b from-FrostOne to-FrostTwo text-white md:h-screen'>
            <div className='max-w-screen-lg flex flex-col p-4 mx-auto w-full h-full justify-center'>
                <div className='pb-8'>

                    <p className='text-4xl font-bold inline border-b-4'>Portfolio</p>
                    <p></p>
                </div>
                <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8
                px-12 sm:px-0'>
                {
                    ProjectsData.map(({id, title, image, github, link  }) => (

                    <div key={id} className=' shadow-md shadow-gray-600 roudned-lg'>
                        {/* need to make hover Affect show title and description */}
                        <img src={image} alt='' className='rounded-md duration-200 hover:scale-105 '/>    
                        <div className='flex items-center justify-center'>
                            <a  href={github} target="_blank" rel="noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover: scale-105'>Github</a >
                            <a href={link} target="_blank" rel="noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover: scale-105'> App</a>
                        </div>
                    </div>

                ))}
            </div>
                


            </div>
        



         </div>
  )
}

export default Projects