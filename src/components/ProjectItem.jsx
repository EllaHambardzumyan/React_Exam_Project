import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProjectsItem({ project }) {

  const navigate = useNavigate();

  const viewProject = () => {
    navigate(`/project/${project.id}/${project.title}`)
  }

  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-pink-300 cursor-pointer'>
      <img src={project.image} alt={project.title} className='rounded-xl group-hover:opacity-10' />
      <div className='hidden group-hover:block flex justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
          {project.title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>Project</p>
        <button className='w-[150px] h-[40px] text-center p-2 rounded-lg bg-white border-none text-gray-700 font-bold cursor-pointer text-lg' onClick={() => viewProject()}>More...</button>
      </div>
    </div>
  )
}
