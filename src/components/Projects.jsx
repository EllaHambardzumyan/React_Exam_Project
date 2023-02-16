import React from 'react'
import ProjectItem from './ProjectItem'

export default function Projects({projects}) {
  return (
    <div id='projects' className='flex justify-center w-full min-h-screen md:min-h-screen md:pl-20 p-4 py-16'>
      <div className='w-[90%] h-full'>
        <h1 className='text-4xl font-bold text-center text-[#8297E4]'>Projects</h1>
        <p  className='text-center py-8 font-bold text-gray-500' >“Experience is the name everyone gives to their mistakes.” – Oscar Wilde</p>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-12 w-100% py-10'>
          {
            projects.data.map((project) => {
              return <ProjectItem key={project.id} project={project} />
            })
          }
        </div>
      </div>
    </div>
  )
}
