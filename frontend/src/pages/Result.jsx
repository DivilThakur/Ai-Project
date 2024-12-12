import React, { useContext, useEffect, useState } from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import { assets } from '../assets/assets'
import Login from "../components/Login"
import { motion } from 'motion/react'
import { AppContext } from '../context/AppContext'
import { Download } from 'lucide-react'
import GenerateImg from '../components/GenerateImg'
import toast from 'react-hot-toast'



function Result() {

    const { showLogin, credit, generateImage, token } = useContext(AppContext)
    const [image, setImage] = useState(assets.sample)
    const [imageLoaded, setImageloaded] = useState(true)
    const [input, setInput] = useState("");



    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if(!token){
            return toast.error("Not login");
        }
        if (input) {
            setImageloaded(false);
            const image = await generateImage(input)
            if (image) {
                setImageloaded(true);
                setImage(image);
            }
        } else {
            setImageloaded(true);
            toast.error("Empty prompt");
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='flex flex-col bg-black/90'>
            <Navbar />
            {showLogin && <Login />}
            <motion.form 
                initial={{opacity:0,y:100}}
                animate={{opacity:1,y:0}}
                transition={{duration:0.4,delay:0.2}}
                onSubmit={onSubmitHandler} className='flex flex-col relative mt-32 mb-10 justify-center items-center z-10'>
                <img src={assets.star} className='absolute top-0 -left-36 sm:-left-28 z-0' alt="" />


                <div className=' sm:mt-10 w-2/3'>
                    <motion.h1
                        initial={{opacity:0,y:100}}
                        animate={{opacity:1,y:0}}
                        transition={{duration:0.6,delay:0.2}}
                    className='leading-tight text-4xl sm:text-5xl md:text-[70px] font-Plus-Jakarta-Sans font-bold text-center gradient-text '>Create beautiful art with Artificial Intelligence</motion.h1>
                    <motion.p
                        initial={{opacity:0,y:100}}
                        animate={{opacity:1,y:0}}
                        transition={{duration:0.6,delay:0.4}}
                     className=' text-sm sm:text-lg  font-medium font-Syne mt-2 sm:mt-5  text-center text-neutral-600'>Be advised that image generation requires an active OpenAI, Stability AI or Stable Diffusion token.</motion.p>
                </div>

                <div className=' my-10 sm:my-14 flex space-x-3  items-center mx-20  px-7 py-4  sm:mx-32 rounded-full bg-gradient-to-l from-yellow-200 to-green-200'>
                    <img src={assets.creditstar} alt="" />
                    <p className='  text-xs sm:text-sm  font-Syne font-medium'>
                        Credits left :  <span className=''>{credit}</span>
                    </p>
                </div>

                <motion.div
                    initial={{opacity:0,y:-100}}
                    animate={{opacity:1,y:0}}
                    transition={{duration:0.8 ,delay:0.2}}
                className=' w-full xl:w-2/3 flex flex-col  items-center'>
                    <div className=' bg-neutral-200 rounded-xl  p-2 w-[90%] flex'>
                        <input
                            onChange={(e) => setInput(e.target.value)} value={input}
                            type="text " placeholder='Describe what you want or hit a tag below' className='flex-1 bg-transparent px-4 w-[50%] border-black outline-none text-neutral-600' />
                        <button type='submit' className='  px-2 py-1 sm:px-5 sm:py-3  rounded-lg bg-[#60b386] text-white font-medium hover:bg-green-500 '>Generate</button>
                    </div>
                    <div className='text-white flex space-x-2 mt-10'>
                        <div className=' py-2 '>
                            <p className='text-[#60b386]'>Popular Tags:</p>
                        </div>
                        <motion.div 
                            
                        className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5  flex-1 justify-center gap-4 px-4'>
                            <p onClick={() => setInput("Generate Creative image")}
                                className='text-sm md:text-lg text-center bg-[#282e35] text-white py-2 px-1 rounded-lg cursor-pointer hover:bg-neutral-700 transition-all duration-300'>Creative</p>

                            <p onClick={() => setInput("Generate Hyperreality image")}
                                className='text-sm md:text-lg text-center bg-[#282e35] text-white py-2 px-1  rounded-lg cursor-pointer hover:bg-neutral-700 transition-all duration-300'>Hyperreality</p>

                            <p onClick={() => setInput("Generate Steampunk image")}
                                className='text-sm md:text-lg text-center bg-[#282e35] text-white py-2 px-1 rounded-lg cursor-pointer hover:bg-neutral-700 transition-all duration-300'>Steampunk</p>

                            <p onClick={() => setInput("Generate Animation image")}
                                className='text-sm md:text-lg text-center bg-[#282e35] text-white py-2 px-1 rounded-lg cursor-pointer hover:bg-neutral-700 transition-all duration-300'>Animation</p>

                            <p onClick={() => setInput("Generate Business image")}
                                className='text-sm md:text-lg text-center bg-[#282e35] text-white py-2 px-1 rounded-lg cursor-pointer hover:bg-neutral-700 transition-all duration-300'>Business</p>
                        </motion.div>
                    </div>
                </motion.div>

                {
                    imageLoaded ?
                        <div className='mt-16'>
                            < motion.img 
                                initial={{opacity:0,scaleX:0}}
                                whileInView={{opacity:1,scaleX:1}}
                                transition={{duration:0.6,delay: 0.2 }}
                                viewport={{once:true , amount:0.3}}
                            src={image} alt="" className='max-w-xs sm:max-w-sm md:max-w-xl' />
                            <div className=' bg-[#60b386] mx-24 px-2 py-2 flex gap-2 items-center text-xl justify-center text-white mt-4 rounded-md hover:bg-green-400'>
                                <Download width={20} />
                                <a href={image} download
                                    className=''
                                >Download</a>
                            </div>
                        </div>
                        :
                        <div className='mt-16 relative'>
                            <p className='text-3xl text-neutral-400 mb-1'>Loading...</p>
                        </div>

                }
            </motion.form>

            <GenerateImg />
            <motion.div
                initial={{ opacity: 0, filter: "blur(30px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                className='mt-20 flex items-end justify-center space-x-5 '>
                <p className='stroke-text text-4xl sm:text-6xl md:text-9xl text-stroke font-bold font-Roboto text-center '>AI IMAGE GENERATOR</p>
            </motion.div>
            <Footer />
        </div>
    )
}

export default Result