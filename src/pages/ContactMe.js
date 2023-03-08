import React from 'react'

const ContactMe = () => {
  return (
    <div name='Contact' className='w-full h-screen bg-gradient-to-b from-FrostOne to-FrostTwo  p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4'>Contact</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/61654e67-3887-44ab-9f1b-42317360efa8'  method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Name"
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input 
                    type="text" 
                    name="Email" 
                    placeholder="Email"
                    className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea 
                    name="message"
                    placeholder='Write Me A Message'
                    cols="30"
                    rows="10"
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <button className='text-white bg-gradient-to-b from-DeepOne to-DeepTwo px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Send</button>

                </form>
            </div>
        </div>

    </div>
  )
}

export default ContactMe