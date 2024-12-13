import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets.js'
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext.jsx';

function Navbar() {

    
    const [scrolled, setScrolled] = useState(false);
    const { setShowLogin , logout , user } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [])

    return (
        <div className={` w-full p-0 m-0 ${scrolled ? 'bg-black' : ' bg-transparent'} fixed z-20`} >

            <div className=' flex items-center justify-around sm:justify-between p-4 sm:mx-20'>
                <div className=''>
                    <img src={assets.logo} onClick={() => navigate("/")} className='text-white cursor-pointer  w-16 sm:w-20 md:w-28' alt="" />
                </div>
                <div className=''>
                    <ul className=' flex text-xs sm:text-md md:text-lg space-x-3 sm:space-x-8 md:space-x-14 lg:space-x-20 p-2 sm:font-semibold text-white'>
                        <NavLink to={"/"} className='cursor-pointer '>Home</NavLink>
                        <NavLink to={"/about"} className='cursor-pointer'>About</NavLink>
                        <NavLink to={"/pricing"} className='cursor-pointer'>Pricing</NavLink>
                    </ul>
                </div>
                {
                    user ?
                        <div className='flex space-x-2 sm:space-x-4 items-center'>
                            <p className='text-neutral-400 text-xs sm:text-sm md:text-lg sm:font-medium'>Hi, {user.name.charAt(0).toUpperCase()+user.name.slice(1)}</p>
                            <div className='relative group'>
                                <img src={assets.profile_icon} className='w-6 md:w-10' alt="" />
                                <div onClick={logout} className='text-xs md:text-lg p-2 absolute hidden group-hover:block top-10 z-20 sm:p-3  right-1 rounded-lg text-black bg-white cursor-pointer'>
                                    Logout
                                </div>
                            </div>
                        </div>
                        :
                        <button onClick={() => setShowLogin(true)} className='bg-white px-2 py-1 text-xs md:text-lg sm:px-6 sm:py-1 rounded-full font-semibold'>Login</button>
                }



            </div>
        </div>
    )
}

export default Navbar