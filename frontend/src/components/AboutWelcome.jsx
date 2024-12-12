import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

function AboutWelcome() {
    return (
        <div className='flex flex-col text-white space-y-5'>
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className=' flex justify-center items-center flex-col mx-auto space-y-5'>
                <h1 className='font-Syne text-sm text-neutral-400 font-medium'>WELCOME</h1>
                <h1 className='font-Syne font-bold text-2xl sm:text-5xl w-[60%] text-center'>Easy ways to use AI tools, and tools to build AI.</h1>
                <p className='font-Inter font-medium text-xs sm:text-sm w-[45%] text-center'>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
            </motion.div>
            <div className='flex flex-col md:flex-row gap-10 justify-center'>
                <motion.img
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    src={assets.about1} className='rounded-3xl md:w-1/3  p-4' alt="" />
                <motion.img
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2    }}
                    src={assets.about2} className='rounded-3xl md:w-1/3  p-4' alt="" />
            </div>
        </div>
    )
}

export default AboutWelcome