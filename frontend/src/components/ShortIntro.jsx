import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

function ShortIntro() {
    return (
        <div className='text-white relative  flex flex-col items-center mt-20'>

            {/* top  */}
            <div className='flex flex-col justify-center items-center my-10 space-y-5'>
                <h1 className='text-sm text-neutral-600'>INTRODUCTION</h1>
                <p className=' text-2xl sm:text-5xl w-2/3 text-center font-Syne font-bold '>Crafted with quality and creativity.</p>
            </div>

            <div className=' flex justify-center w-[80%] '>
                <motion.img
                    initial={{opacity:0 , scaleX:0}}
                    whileInView={{opacity:1 , scaleX:1}}
                    transition={{duration:0.5 , delay:0.2}} 
                    viewport={{once:false,amount:0.5}}
                
                src={assets.portfolio1} className=' mt-4 z-10 rounded-3xl ' alt="" />
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 p-10 md:my-10   '>

                <div className='flex flex-col justify-center items-center space-y-1'>
                    <h1 className='font-Syne text-4xl font-bold'>30Days</h1>
                    <h1 className='w-3/4 h-2 bg-white'></h1>
                    <h1>Average saved / Week</h1>
                </div>
                <div className='flex flex-col justify-center items-center space-y-1'>
                    <h1 className='font-Syne text-4xl font-bold'>20 m</h1>
                    <h1 className='w-3/4 h-2 bg-white'></h1>
                    <h1>Worldwide Clients</h1>
                </div>
                <div className='flex flex-col justify-center items-center space-y-1'>
                    <h1 className='font-Syne text-4xl font-bold'>$40000</h1>
                    <h1 className='w-3/4 h-2 bg-white'></h1>
                    <h1>Trained AI Model</h1>
                </div>
                <div className='flex flex-col justify-center items-center space-y-1'>
                    <h1 className='font-Syne text-4xl font-bold'>$3000 +</h1>
                    <h1 className='w-3/4 h-2 bg-white'></h1>
                    <h1>Powerful AI Business Tools</h1>
                </div>
            </div>

        </div>
    )
}

export default ShortIntro