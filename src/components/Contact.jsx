import React from 'react'

export const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-zinc-900 to-zinc-800
    p-4 text-white'>
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className='text-4xl font-bold border-b-4 pb-2 w-fit tracking-widest border-purple-500'>Contact</p>
          <p className='py-6'>Submit the form bellow to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/aolgvyxb" method='POST' className='flex flex-col w-full md:w-1/2'>
            <input className='p-2 bg-transparent border-2 rounded-md text-zinc-50 focus:outline-none' type="text" name='name' placeholder='Enter Your Name'/>
            <input className='my-6 p-2 bg-transparent border-2 rounded-md text-zinc-50 focus:outline-none' type="email" name='email' placeholder='Enter Your Email'/>
            <textarea placeholder='Enter Your Message' name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-zinc-50 focus:outline-none'></textarea>
            <button className='text-zinc-50 bg-gradient-to-b from-violet-500 to-purple-500 px-6 py-3 my-8 
            mx-auto flex items-center rounded-md hover:scale-110 duration-200 font-bold'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}
