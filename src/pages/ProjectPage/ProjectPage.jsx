import React, { useEffect, useReducer } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import projectReducer, { PROJECT_INITIAL_STATE } from '../../projectReducer'
import { motion } from 'framer-motion';

export default function ProjectPage() {

  const {projectId} = useParams();
  const navigate = useNavigate();
  const [project, dispatch] = useReducer(projectReducer, PROJECT_INITIAL_STATE);

  useEffect(() => {
    const fetchProject = async (id) => {
      dispatch({type: "isLoading"})
      return await fetch(`http://localhost:3000/projects/${id}`)
        .then((res) => res.json())
        .then((data) => dispatch({ type: "isSuccess", payload: data }))
        .catch((err) => dispatch({type: "isError"}))
    }
    fetchProject(projectId)
  }, [projectId])

  return (
    <motion.section className='w-full h-screen flex justify-center items-center flex-col gap-5 bg-no-repeat bg-cover' style={{
      backgroundImage: `url(https://images.unsplash.com/photo-1604937455095-ef2fe3d46fcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`
    }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div className='w-[400px] h-[500px] rounded-xl shadow-xl shadow-gray-400 overflow-hidden'
        initial={{ x: 2000 }}
        animate={{ x: 0, transition: {delay: 0.2}}}
      >
        <img src={project.data.image} alt="" className='w-full h-full' />
      </motion.div>
      <div className='flex justify-center items-center flex-col'>
        <motion.h1 className='text-[#F472B6] font-black text-[60px]'
          initial={{ x: -2000 }}
          animate={{ x: 0, transition: {delay: 0.4}}}
          >{project.data.title}</motion.h1>
        <motion.p className='text-[#F472B6] text-xl'
          initial={{x: -2000}}
          animate={{x: 0, transition: {delay: 0.6}}}
        >{project.data.description}</motion.p>
      </div>
      <motion.a href={project.data.url} target="_blank"
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {delay: 0.6}}}
      >
        <button className='px-10 py-2 rounded-[10px] text-base bg-[#F472B6] text-[white]'>Click to see project</button>
      </motion.a>
    </motion.section>
  )
}
