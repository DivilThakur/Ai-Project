import React from 'react'
import { motion } from 'motion/react'
import { assets } from '../assets/assets'

function Introduction() {
    return (
        <div className='text-white relative  flex flex-col items-center '>
            <img src={assets.star} className=' z-0 absolute bottom-24  -left-20 ' alt="" />
            <div className='absolute w-full '>
                <img src="/gradient-bg2.svg" className='w-full z-0' alt="" />
            </div>
            {/* top  */}
            <div className='flex flex-col sm:flex-row mt-10 z-10  md:mx-20 lg:mx-40'>
                <div className='flex flex-col p-6 space-y-4 '>
                    <h1 className='text-sm '>INTRODUCTION</h1>
                    <p className=' text-2xl sm:text-5xl font-Syne font-bold '>Crafted with quality and creativity.</p>
                </div>
                <div className='flex  p-6 items-center '>
                    <p className='font-Inter font-medium text-white '>
                        Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.
                    </p>
                </div>
            </div>

            <div className=' flex justify-center w-[80%] '>
                <motion.img 
                     initial={{ opacity: 0, scaleY: 0 }} 
                     whileInView={{
                       opacity: 1,
                       scaleY: 1, 
                     }}
                     transition={{ duration: 1 }}
                     viewport={{ once: true, amount: 0.5 }}
                src={assets.introduction} className=' mt-4 z-10 rounded-3xl ' alt="" />
            </div>

            <div className='flex flex-col space-y-10 md:space-y-0 md:flex-row md:space-x-20 p-10 my-10  '>

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
            <hr className='h-[1px] border-gray-600 w-3/4 mb-10'/>

                
        </div>
    )
}

export default Introduction