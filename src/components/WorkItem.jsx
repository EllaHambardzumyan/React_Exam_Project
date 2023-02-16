import React from 'react'


export default function WorkItem({year,title}) {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-[#C0E3FF]'>
        <li className='mb-10 ml-4 mt-10'>
            <div className='absolute w-3 h-3 bg-[#C0E3FF] rounded-full mt-1.5 -left-1.5 border-white'/>
            <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-l md:text-s'>
                <span className='inline-block px-2 py-1 font semibold text-black bg-[#FFC0C3] rounded-md'>{year}</span>
                <span>{title}</span>
            </p>
        </li>
    </ol>
  )
}
