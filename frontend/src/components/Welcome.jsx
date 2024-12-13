import React from 'react'
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

function Welcome() {

    const navigate = useNavigate();

    return (

        <div className=''>
            <div className=' sm:mt-20 flex flex-col sm:items-center lg:flex-row py-10 ' >

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.7 }}
                    className=' flex lg:justify-center space-x-6 flex-1 p-5  '>
                    <div>
                        <img src={assets.welcome1} className='rounded-xl' alt="" />
                    </div>
                    <div className='flex flex-col space-y-6'>
                        <img src={assets.welcome2} className='rounded-xl' alt="" />
                        <img src={assets.welcome3} className='rounded-xl' alt="" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className=' flex flex-col sm:w-3/4 space-y-2 sm:space-y-5 p-4 text-white flex-1 items-start ' >
                    <h1 className='font-Inter text-lg text-neutral-600 sm:text-xl font-medium'>Welcome</h1>
                    <h1 className='font-Syne font-bold text-3xl lg:text-5xl lg:w-3/4 '>Easy ways to use AI tools, and tools to build AI.</h1>
                    <p className='font-Inter sm:font-normal sm:text-xl lg:w-3/4'>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                    <button onClick={()=>navigate("/generate")} className='btn-grad'>Welcome</button>
                </motion.div>
            </div> 
            <motion.div
                initial={{ opacity: 0, filter: "blur(30px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                className='mt-10 flex items-end justify-center space-x-5 '>
                <p className='stroke-text text-4xl sm:text-6xl md:text-9xl text-stroke font-bold font-Roboto text-center '>AI IMAGE GENERATOR</p>
            </motion.div>
        </div>

    )
}

export default Welcome