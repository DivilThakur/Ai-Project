import React from 'react'
import { motion } from 'motion/react'

function AboutMain() {
    return (
        <div className='text-white my-28'>
            <div className=' mx-10 sm:mx-20 lg:mx-36'>
                {/* top  */}
                <div className='flex flex-col md:flex-row p-2 space-y-10 lg:space-y-0'>

                    <div className='flex flex-col space-y-4 flex-1 md:ml-20'>
                        <h1 className='text-neutral-600 text-sm'>OUR PRACTICE</h1>
                        <h1 className=' md:text-3xl lg:text-5xl font-bold  font-Syne'>Our Strength</h1>
                        <p className='font-Inter text-xs md:text-sm font-medium md:w-3/4'>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                        <p className='font-Inter text-xs md:text-sm font-medium md:w-3/4 '>Interactively foster 24/365 "outside the box" thinking after interoperable infomediaries. Phosfluorescently predominate reliable value with open-source interfaces. Authoritatively orchestrate customized potentialities whereas timely core competencies.</p>
                    </div>

                    <div className='flex flex-col flex-1 justify-center space-y-5 '>
                        <div>
                            <h1 className='text-xl font-Syne font-bold'>Design</h1>
                            <input type="range" className='w-2/3  custom-slider' defaultValue={80} /> 80%
                        </div>
                        <div>
                            <h1 className='text-xl font-Syne font-bold' >Technology</h1>
                            <input type="range" className='w-2/3 custom-slider' defaultValue={90} /> 90%
                        </div>
                        <div>
                            <h1 className='text-xl font-Syne font-bold' >Animation</h1>
                            <input type="range" className='w-2/3 custom-slider' defaultValue={70} /> 70%
                        </div>
                    </div>
                </div>
                {/* bottom  */}
                <motion.div
                    initial={{ opacity: 0, filter: "blur(30px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1 }}

                    className=' flex items-end justify-center my-28 '>
                    <p className='stroke-text text-4xl 
                    sm:text-6xl md:text-8xl text-stroke font-bold font-Roboto text-center '>AI IMAGE GENERATOR</p>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutMain