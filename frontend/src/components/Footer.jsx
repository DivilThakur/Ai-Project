import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'
import { Facebook, Instagram, Twitter } from 'lucide-react'

function Footer() {
    return (

        <div className='bg-[#212121] text-white flex flex-col justify-center items-center'>
            <div className=' sm:grid-cols-2 grid lg:grid-cols-4 gap-14 p-16 md:p-32   '>
                <div className='flex flex-col space-y-5'>
                    <motion.img
                        whileInView={{ rotate: 360 }}
                        transition={{
                            duration: 0.5,
                            ease: "linear",  
                        }}
                        viewport={{once:true}}
                        src={assets.logo} className='w-40' alt="" />
                    <p className='w-2/3 text-neutral-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div className='flex space-x-4'>
                        <Facebook className='cursor-pointer hover:scale-125 transition-all duration-300 delay-100' />
                        <Instagram className='cursor-pointer hover:scale-125 transition-all duration-300 delay-100' />
                        <Twitter className='cursor-pointer hover:scale-125 transition-all duration-300 delay-100' />
                    </div>
                </div>
                <div className=''>
                    <h1 className='text-2xl'>Company</h1>
                    <ul className='text-neutral-600 space-y-1 font-medium mt-2'>
                        <li>About</li>
                        <li>Hosting</li>
                        <li>Domain</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className=''>
                    <h1 className='text-2xl'>Customer</h1>
                    <ul className='text-neutral-600 space-y-1 font-medium mt-2' >
                        <li>Client support</li>
                        <li>Help center</li>
                        <li>System status</li>
                        <li>Feedback</li>
                    </ul>
                </div>
                <div className='flex flex-col space-y-5'>
                    <div className='space-y-1'>
                        <h1>Say Hello</h1>
                        <p className='text-neutral-600'>Need Support?</p>
                        <p className='underline underline-offset-4 cursor-pointer'>hi@domain.com</p>
                    </div>
                    <div className='space-y-1'>
                        <h1 className='text-neutral-600'>Customer care</h1>
                        <p>+ 1 234 567 8910</p>
                    </div>
                </div>
            </div>

            <hr className='border-neutral-600 h-1 w-3/4 ' />
            <div className='w-2/3 text-center my-10'>
                <p className='text-xs sm:text-sm lg:text-lg text-neutral-600 font-Syne'>This site is protected by reCAPTCHA and the Google <span className='text-white underline underline-offset-4 cursor-pointer'>privacy policy</span>  and <span className='text-white underline underline-offset-4 cursor-pointer'>terms of service </span> apply. You must not use this website if you disagree with any of these website standard terms and conditions.</p>
            </div>
        </div>
    )
}

export default Footer