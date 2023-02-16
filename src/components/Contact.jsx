import React from 'react'

export default function Contact() {
  return (
    <div id='contact' className='max-w-[1040px] m-h-screen m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#8297E4]'>Contact</h1>
        <form action='https://getform.io/f/c1cec883-ab61-47c0-8b6a-d420a9c10354' method='POST' encType='multipart/form-data'>
           <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
            <div className='flex flex-col'>
                <label className='uppercase font-bold text-sm py-2 text-[#8297E4]'>Name</label>
                <input className='border-2 rounded-lg p-3 flex border-pink-300 outline-0' type='text' name='name'/>
            </div>
            <div className='flex flex-col'>
                <label className='uppercase font-bold text-sm py-2 text-[#8297E4]'>Phone Number</label>
                <input className='border-2 rounded-lg p-3 flex border-pink-300 outline-0' type='text' name='phone'/>
            </div>
           </div>
           <div className='flex flex-col py-2'>
            <label className='uppercase font-bold text-sm py-2 text-[#8297E4]'>Email</label>
            <input className='border-2 rounded-lg p-3 flex border-pink-300 outline-0' type='email' name='email'/>
           </div>
           <div className='flex flex-col py-2'>
            <label className='uppercase font-bold text-sm py-2 text-[#8297E4]'>Subject</label>
            <input className='border-2 rounded-lg p-3 flex border-pink-300 outline-0' type='text' name='subject'/>
           </div>
           <div className='flex flex-col py-2'>
            <label className='uppercase font-bold text-sm py-2 text-[#8297E4]'>Message</label>
            <textarea className='border-2 resize-none rounded-lg p-3 border-pink-300 outline-0' rows='10' name='message'></textarea>
           </div>
           <button className='bg-[#8297E4] text-white font-bold mt-4 w-full p-4 rounded-lg'>
            Send Message
           </button>
        </form>
    </div>
  )
}
