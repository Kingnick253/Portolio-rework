import React from 'react'

const ContactMe = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-FrostOne to-FrostTwo  p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p>Contact</p>
            </div>
            <div>
                <form action='' className=''>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Name"
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input 
                    type="text" 
                    name="Email" 
                    placeholder="Email"
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea 
                    name="message"
                    placeholder='Message'
                    cols="30"
                    rows="10"
                    className='p-2 bg-transparent rounded-md text-white focus:outline-none'
                    />
                    <button className='text-white bg-gradient-to-b from-DeepOne to-DeepTwo px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Send</button>

                </form>
            </div>
        </div>

    </div>
  )
}

export default ContactMe