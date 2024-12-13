import React from 'react'
import { assets } from '../assets/assets'

import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
function Header() {

    const navigate = useNavigate();

    return (

        <div className='outer-box flex flex-col justify-center bg-gradient-bg bg-no-repeat h-full'>
            <motion.div
                initial={{ opacity: 0.2, y: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                className='flex flex-col items-center justify-center pt-20 space-y-10 pb-5 mt-24'>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 2 }}
                    className=' text-3xl lg:text-7xl text-white text-center font-Syne font-bold w-2/4 '>Generate image with Zex.ai</motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className=' mx-2 text-sm sm:text-xl text-white text-center font-Syne font-semibold'>Create Anything - AI With No Restrictions.</motion.p>
                <motion.button
                onClick={()=>navigate("/generate")}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className='btn-grad'>Get Started
                </motion.button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className='slider mt-10 bg-gradient-to-b from-black/5 to-[#111111] '>
                <div className='slider-track flex items-end space-x-2 sm:space-x-8   '>
                    <div className="slide">
                        <img src={assets.item0} className='scaleanimate' alt="" />
                    </div>
                    <div className="slide flex flex-col space-y-2 sm:space-y-10">
                        <img src={assets.item1} className='scaleanimate' alt="" />
                        <img src={assets.item2} className='scaleanimate' alt="" />
                    </div>
                    <div className="slide">
                        <img src={assets.item3} className='scaleanimate' alt="" />
                    </div>
                    <div className="slide">
                        <img src={assets.item4} className='scaleanimate' alt="" />
                    </div>
                    <div className="slide">
                        <img src={assets.item5} className='scaleanimate' alt="" />
                    </div>
                    <div className="slide">
                        <img src={assets.item6} className='scaleanimate' alt="" />
                    </div>
                    <div className="slide flex flex-col space-y-2 sm:space-y-10">
                        <img src={assets.item8} className='scaleanimate' alt="" />
                        <img src={assets.item7} className='scaleanimate' alt="" />
                    </div>

                </div>
            </motion.div>


        </div>
    )
}

export default Header