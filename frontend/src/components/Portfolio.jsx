import React from 'react'
import { assets } from '../assets/assets'
import { Instagram } from 'lucide-react'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'

function Portfolio() {

    const navigate = useNavigate();

    return (
        <div className='text-white '>
            <div className='flex flex-col sm:flex-row justify-around mx-10 lg:mx-28 items-center my-16 lg:my-28 '>
                <div className='space-y-1'>
                    <h1 className='text-xs sm:text-sm text-neutral-600'>OUR PORTFOLIO</h1>
                    <h1 className=' text-xl lg:text-4xl font-Syne font-bold'>AI Images</h1>
                </div>
                <div className='lg:w-2/3 lg:ml-20 flex-1'>
                    <p className=' text-xs lg:text-2xl px-6 md:p-4 text-center  '>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                </div>
                <div className='block'>
                    <button onClick={() => navigate("/user")} className=' btn-grad'>Generate</button>
                </div>
            </div>

            <div className='flex p-2 justify-around gap-4 lg:mx-20 mb-32'>
                <div className='relative group'>
                    <motion.img
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        src={assets.portfolio4} className='rounded-3xl  ' alt="" />
                    <div className='overlay absolute inset-0 bg-black rounded-3xl bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-white text-xl font-bold'>
                        <Instagram />
                    </div>
                </div>
                <div className='relative group'>
                    <img
                        src={assets.portfolio2}
                        className='rounded-3xl translate-y-14 group-hover:translate-y-0 transition-all duration-500'
                        alt=""
                    />
                    <div
                        className='overlay absolute inset-0 rounded-3xl bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center text-white text-xl font-bold'
                    >
                        <Instagram />
                    </div>
                </div>
                <div className='relative group'>
                    <motion.img
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        src={assets.portfolio1} className='rounded-3xl' alt="" />
                    <div className='overlay absolute inset-0 rounded-3xl bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-white text-xl font-bold'>
                        <Instagram />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio