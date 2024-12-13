import React, { useContext, useEffect, useState } from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { plans } from '../assets/assets'
import { BadgeDollarSign, Currency } from 'lucide-react'
import { AppContext } from '../context/AppContext'
import Login from '../components/Login'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'

function Pricing() {


  useEffect(() => {
    window.scrollTo(0, 0);
  })

  const { showLogin, setShowLogin, user, backendUrl, token, loadUserCredits } = useContext(AppContext);
  const [loadingStates, setLoadingStates] = useState({});
  const navigate = useNavigate();

  const initPay = (order) => {
    setLoadingStates((prevState) => ({
      ...prevState,
      [order.id]: false, // Reset loading state for the specific plan
    }));
    const options = {
      key: import.meta.env.VITE_RAZORPAY_API_KEY,
      amount: order.amount,
      currency: order.currency,
      name: 'Credits Payment',
      description: 'Credits Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(backendUrl + "/api/user/verify-pay", response, { withCredentials: true });

          if (data.success) {
            loadUserCredits();
            navigate("/");
            toast.success(data.message);
          } else {
            setLoadingStates((prevState) => ({
              ...prevState,
              [order.id]: false, // Reset loading state for the specific plan
            }));
          }
        } catch (error) {
          console.log("error in initpay ", error.message);
        }
      }
    }
    const rzp = new window.Razorpay(options);
    rzp.open();
  }

  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true);
      }
      setLoadingStates((prevState) => ({
        ...prevState,
        [planId]: true, // Set loading state for the specific plan
      }));

      const { data } = await axios.post(backendUrl + '/api/user/razor-pay', { planId }, {
        withCredentials: true
      })
      if (data.success) {
        initPay(data.order);
      } else {
        setLoadingStates((prevState) => ({
          ...prevState,
          [planId]: false, // Reset loading state if something went wrong
        }));
      }
    } catch (error) {
      console.log("error", error.message)
      toast.error(error.message);
    }
    finally {
      setLoadingStates((prevState) => ({
        ...prevState,
        [planId]: false, // Reset loading state if something went wrong
      }));
    }
  }

  return (
    <div className='flex flex-col bg-black/90 '>
      <Navbar />
      {showLogin && <Login />}
      <div className=' mt-32 text-white flex flex-col justify-center items-center'>
        <div className=' space-y-5 w-full flex flex-col justify-center items-center'>
          <h1 className='text-2xl font-Syne  font-bold  text-center  '>Pricing </h1>
          <p className='text-4xl'>Choose the plan</p>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 mb-32  '>
          {
            plans.map((item, index) => (
              <motion.div key={index}
                initial={{ opacity: 0, x: index == 0 ? -100 : index == 1 ? 0 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                whileHover={{ scale: 1.08 }}
                className={`${index % 2 != 0 ?
                  ` bg-gradient-to-r text-neutral-800 from-green-500 to-[#6e8319]`
                  :
                  ` bg-[#212121]`}  p-10 justify-center rounded-lg  `}>
                <BadgeDollarSign className={`my-3 ${index % 2 !== 0 ? `text-neutral-600` : ` text-[#6e8319]`}`} />
                <h1 className='text-3xl font-Syne font-bold'>{item.id}</h1>
                <p className='text-lg font-Syne font-medium'>{item.desc}</p>
                <p className='font-Syne text-xl mt-3'>${item.price} / {item.credits} credits</p>
                <div className='space-y-4 mt-6 '>
                  <p>10,000 Monthly Word Limit</p>
                  <p>Cloud storage</p>
                  <p>Free Templates</p>
                </div>
                <button
                  onClick={() => paymentRazorpay(item.id)}
                  className={`my-8 rounded-md transition-all duration-500 font-medium ${index % 2 !== 0 ?
                    ` bg-transparent border border-neutral-700 hover:bg-neutral-700 hover:text-white `
                    :
                    `bg-gradient-to-r from-yellow-200 to-green-500 text-neutral-600 hover:text-black hover:from-yellow-500 hover:to-yellow-200 `} 
                   px-6 py-2 text-xl font-medium font-Syne `}>{loadingStates[item.id] ? 'Loading...' : 'Purchase'}</button>
              </motion.div>
            ))
          }
        </div>
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
    </div>
  )
}

export default Pricing