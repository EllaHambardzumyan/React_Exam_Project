import React from 'react'
import WorkItem from './WorkItem'

const data=[
    {
  year:'07.05.2022',
  title:'Lets explore and discover the world',
},
{
    year:'25.06.2022',
    title:'Google I/O Extended Yerevan',
  },
  {
    year:'30.07.2022',
    title:'ESN Yerevan Conference',
  },
  {
    year:'7-14.09.2022',
    title:'What is democracy and what is my role in its estabilishment?',
  },
  {
    year:'5-6.10.2022',
    title:'Global Innovation Forum',
  },
  {
    year:'30.11.2022',
    title:'MEntor-Me as a Mentor',  
  },
  {
    year:'24.12.2022',
    title:'Armenia Engineering Week 2022',
  },
  {
    year:'29.01.2023',
    title:'EIF Journey-Armenia Workforce Development Activity',
  },
  {
    year:'18.02.2023',
    title:'JavaScript Summit 2023',
  },
]

export default function Work() {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#8297E4]'>Experience</h1>
        {data.map((item,idx)=> (
            <WorkItem key={idx} year={item.year} title={item.title}/>
        ))}

    </div>
  )
}
