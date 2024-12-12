import React from 'react'
import { motion } from 'motion/react'
import { assets, featuresData } from '../assets/assets'

function Features() {
    return (
        <div className='text-white mt-10'>
            <div className='flex flex-col justify-center items-center space-y-10'>
                <h1 className='font-Inter font-medium text-neutral-600'>FEATURES</h1>
                <h1 className=' text-2xl p-2 sm:text-4xl lg:text-5xl font-bold font-Syne text-center'>Create your dream with Ai</h1>
            </div>

            <div className=' grid  sm:grid-cols-2 lg:grid-cols-4 mx-10 xl:mx-28 gap-8 mt-14 mb-28 '>
                {
                    featuresData.map((item, index) => (
                        <div key={index}
                        className={` relative  bg-[#212121] p-4 flex flex-col  rounded-xl ${index % 2 != 0 ? `translate-y-7 hover:translate-y-0 transition-all duration-500 delay-50` : ` `} `}>

                            <div className='absolute inset-0 bg-gradient-to-r from-[#778832cb] to-green-500 rounded-xl -z-10'></div>

                            <img src={item.icon} className='w-20 my-10' alt="" />
                            <h1 className='text-4xl font-Inter font-medium items-center '>{item.title}</h1>
                            <p className='font-Inter font-medium text-lg p-2'>{item.description}</p>
                        </div>
                    ))
                }
            </div>

            <motion.div
                initial={{ opacity:0,filter: "blur(30px)"  }}
                whileInView={{ opacity:1, filter:"blur(0px)"}}
                transition={{duration:1}}
                viewport={{once:true,amount:0.8}}
            className=' flex items-end justify-center'>
                <p className='stroke-text text-4xl 
                sm:text-6xl md:text-9xl text-stroke font-bold font-Roboto text-center '>AI IMAGE GENERATOR</p>
            </motion.div>
        </div>
    )
}

export default Features