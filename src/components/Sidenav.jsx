import React , {useEffect, useRef, useState} from 'react'
import {AiOutlineMenu , AiOutlineHome,AiOutlineContacts} from 'react-icons/ai'
import {MdWorkspacesOutline} from 'react-icons/md'
import {GiSkills} from 'react-icons/gi'
import {RxResume} from 'react-icons/rx'
import { Fade as Hamburger } from 'hamburger-react'
import { useNavigate } from 'react-router-dom'


const Sidenav = () => {

    const [nav, setNav] = useState(false);
    const navigate = useNavigate();
    const menuRef = useRef(null);
    const iconRef = useRef(null)
    
    const handleNav = () => {
        setNav(!nav)
        navigate('/')
    }

    const openMenu = () => setNav(!nav)

    useEffect(() => {
        document.addEventListener('mousedown', (e) => {
            if (menuRef.current && iconRef.current && !iconRef.current.contains(e.target) && !menuRef.current.contains(e.target)) {
                setNav(false)
            }
        });
        return () => document.removeEventListener('mousedown', (e) => {
            if (menuRef.current && iconRef.current && !iconRef.current.contains(e.target) && !menuRef.current.contains(e.target)) {
                setNav(false)
            }
        });
    }, [])

    nav ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto"
    const menuStyle = {right: nav ? '0' : '-1000px'}

    return(
        <>
            <header className='w-full h-[80px] bg-red-200/90 flex justify-between items-center px-4 fixed z-[9999] md:hidden'>
                <a href="#main" className='text-[#F472B6] text-[26px] font-bold'>My Portfolio</a>
                <button ref={iconRef} className='cursor-pointer text-[30px] text-[#F472B6]' onClick={openMenu}>
                    <Hamburger toggled={nav} toggle={openMenu}/>
                </button>
            </header>
            <div className='w-full h-screen fixed flex justify-center items-center bg-red-200 md:hidden z-[99] transition-all duration-300' style={menuStyle}>
                <div ref={menuRef} className='fixed w-[90%] rounded-[30px] pt-5 pb-20 bg-white/90 flex flex-col justify-center items-center z-20'>
                <h2 className='uppercase font-bold text-[22px] py-5'>Menu</h2>
                <a onClick={handleNav} href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100
                    shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineHome size={20} />
                    <span className='pl-4'>Home</span>
                </a>
                <a onClick={handleNav} href='#work' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100
                    shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <MdWorkspacesOutline size={20} />
                    <span className='pl-4'>Experience</span>
                </a>
                <a onClick={handleNav} href='#projects' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100
                    shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <GiSkills size={20} />
                    <span className='pl-4'>Projects</span>
                </a>
                <a onClick={handleNav} href='#contact' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100
                    shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineContacts size={25} />
                    <span className='pl-4'>Contact</span>
                </a>
                </div>
            </div>
            <div className='md:block hidden fixed top-[25%] z-10'>
            <div className='flex flex-col'>
                <a href='#main' onClick={() => navigate('/')} className='flex justify-center items-center rounded-full shadow-lg
                    bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineHome size={20}/>
                </a>
                <a href='#work' onClick={() => navigate('/')} className='flex justify-center items-center rounded-full shadow-lg
                    bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <MdWorkspacesOutline size={20}/>
                </a>
                <a href='#projects' onClick={() => navigate('/')} className='flex justify-center items-center rounded-full shadow-lg
                    bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <GiSkills size={20}/>
                </a>
                {/* <a href='#main' className='rounded-full shadow-lg
                    bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <RxResume size={20}/>
                </a> */}
                <a href='#contact' onClick={() => navigate('/')} className='flex justify-center items-center rounded-full shadow-lg
                    bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineContacts size={25}/>
                </a>
            </div>
            </div>
        </>
    )
}

export default Sidenav