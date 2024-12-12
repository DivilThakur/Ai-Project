import React from 'react'
import { assets, generateImage } from '../assets/assets'
import { CircleCheckBig } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'

function GenerateImg() {

    const navigate = useNavigate();

    return (
        <div className='text-white '>
            <div className='flex flex-col gap-10 md:gap-0 my-10 md:my-40 sm:flex-row'>
                {
                    generateImage.map((item, index) => (
                        <motion.div key={index}
                            initial={{ opacity: 0, y: index === 1 ? -150 : 150 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className='flex flex-col justify-center items-center space-y-2  md:space-y-4'>
                            <img src={item.image} className='w-2/3 rounded-lg' alt="" />
                            <h1 className='text-2xl'>{item.heading}</h1>
                            <p className='  text-xs sm:text-sm md:text-lg w-[70%] text-center text-neutral-600'>{item.text}</p>
                        </motion.div>
                    ))
                }
            </div>
            <div className='flex flex-col md:flex-row mt-24 lg:mt-52 mb-20 xl:mx-28  items-center '>
                {/* left */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.7 }}
                    className='flex p-4 gap-2 sm:gap-5  items-center justify-center w-full'>
                    <img src={assets.about3} className='hidden md:block rounded-lg' alt="" />
                    <img src={assets.about5} className='rounded-lg md:hidden' alt="" />
                    <img src={assets.about4} className=' rounded-lg hidden lg:block' alt="" />
                </motion.div>

                {/* right  */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className='flex flex-col items-center p-4  '>
                    <div className='flex flex-col space-y-3 lg:space-y-5 w-[85%]'>
                        <h1 className='text-xs text-neutral-500'>ABOUT US</h1>
                        <h1 className='font-Syne font-semibold text-3xl lg:text-5xl md:w-[80%] gradient-text'>Create AI Arts in seconds by Text only</h1>
                        <p className='text-neutral-400 md:w-[70%] '>AI isn't here to replace human creativity but it can amplify it and take it even further. So whether you're creating fanart of your favorite anime</p>
                        <div className=' space-y-4 lg:space-y-7  pt-6'>
                            <div className='flex gap-2'>
                                <CircleCheckBig />
                                <p>Easily generate images with detailed text prompts</p>
                            </div>
                            <div className='flex gap-2'>
                                <CircleCheckBig />
                                <p>Customize your images with different styles, moods, colors</p>
                            </div>
                            <div className='flex gap-2'>
                                <CircleCheckBig />
                                <p>  Generate high-quality images with up to 8K resolution
                                </p>
                            </div>
                            <button
                                onClick={() => navigate("/about")}
                                className=' transition-all duration-300 bg-gradient-to-l from-yellow-300
                    to-green-400 hover:from-green-400 hover:to-yellow-300 hover:text-neutral-600 text-black font-medium text-lg font-Plus-Jakarta-Sans mt-10  px-4 py-2 rounded-lg '>About us</button>
                        </div>
                    </div>

                </motion.div>

            </div>

        </div>
    )
}

export default GenerateImg;