import { Lock, Mail, Plus, User, X } from 'lucide-react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { motion } from 'motion/react'
import axios from 'axios'
import { toast } from 'react-hot-toast'

function Login() {

    const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);
    const [state, setState] = useState('Sign up');
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loader, setLoader] = useState(false);

    const [showVerification, setShowVerification] = useState(false);
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputRefs = useRef([]);

    const handleOtpChange = (e, index) => {
        const value = e.target.value;
        if (isNaN(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }

    }

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1].focus();
        }
    };

    const submitOtp = async (e) => {
        e.preventDefault();
        const Code = otp.join("");
        if (otp.length === 4 && /^\d{4}$/.test(Code)) {
            const { data } = await axios.post(backendUrl + '/api/user/verify-otp', { Code }, { withCredentials: true });
            if (data.success) {
                setToken(data.token);
                setUser(data.user)
                setShowVerification(false);
                setShowLogin(false);
                toast.success("login successfull");
            } else {
                toast.error("verification failed");
                setShowVerification(false);
            }
        }
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            setLoader(true);
            if (state === "Login") {
                const { data } = await axios.post(backendUrl + "/api/user/login", { email, password }, { withCredentials: true });
                if (data.success) {
                    setLoader(false);
                    setShowVerification(true);
                } else {
                    setLoader(false);
                    toast.error(data.message);
                }
            } else {
                const { data } = await axios.post(backendUrl + "/api/user/register", { name, email, password });
                if (data.success) {
                    setLoader(true);
                    setShowVerification(true)
                } else {
                    setLoader(false);
                    console.log(data);
                    toast.error(data.message);
                }
            }
        } catch (error) {
            console.log("error in form submission for login/signup", error);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "unset";
        }
    })


    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, [])

    return (
        <div className=' absolute top-0 left-0 right-0 bottom-0 z-30 backdrop-blur-sm bg-black/35 flex justify-center items-center' >

            {
                showVerification ?
                    <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
                        <header className="mb-8">
                            <h1 className="text-2xl font-bold mb-1">Email Verification</h1>
                            <p className="text-[15px] text-slate-500">Enter the 4-digit verification code that was sent to your Email.</p>
                        </header>
                        <form id="otp-form" onSubmit={submitOtp}>
                            <div className="flex items-center justify-center gap-3">
                                {otp.map((value, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        value={value}
                                        onChange={(e) => handleOtpChange(e, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                        ref={(input) => (inputRefs.current[index]) = input}
                                        className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                        maxLength="1"
                                        pattern="\d*"
                                        required
                                    />
                                ))}
                            </div>
                            <div className="max-w-[260px] mx-auto mt-4">
                                <button type="submit"
                                    className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150">Verify
                                    Account</button>
                            </div>
                        </form>
                        <div className="text-sm text-slate-500 mt-4">Didn't receive code? <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">Resend</a></div>
                    </div>
                    :


                    <motion.form
                        initial={{ opacity: 0, y: 500 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}

                        onSubmit={onSubmitHandler}

                        action="" className='relative bg-white p-6 sm:p-10 rounded-xl text-slate-500'>
                        <h1 className='text-center text-2xl text-neutral-700 font-medium ' >{state}</h1>
                        <p className='text-sm mt-2 ' >Welcome back! Please sign in to continue</p>

                        {
                            state !== "Login" &&
                            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                                <User />
                                <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='outline-none text-sm' placeholder='Full Name' required />
                            </div>
                        }
                        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                            <Mail />
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='outline-none text-sm' placeholder='Email' required />
                        </div>
                        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                            <Lock />
                            <input onChange={(e) => setPassword(e.target.value)} value={password} type="text" className='outline-none text-sm' placeholder='Password' required />
                        </div>

                        <p className='text-sm text-blue-600 my-4 cursor-pointer ' >Forgot Password?</p>
                        <button className='bg-blue-600 w-full text-white py-2 rounded-full' >{state === "Login" ? (loader ? "Loading..." : "Login") : (loader ? "Loading..." : "Create Account")} </button>

                        {
                            state === "Login" ?
                                <p className='mt-5 text-center'>Don't have an account?
                                    <span onClick={() => setState('Sign up')} className='text-blue-600 cursor-pointer'> Sign up</span>
                                </p>
                                :
                                <p className='mt-5 text-center'>Already have an account?
                                    <span onClick={() => setState('Login')} className='text-blue-600 cursor-pointer'> Login</span>
                                </p>
                        }

                        <X onClick={() => setShowLogin(false)} className='absolute top-5 right-5 cursor-pointer' />

                    </motion.form>
            }
        </div>
    )
}

export default Login