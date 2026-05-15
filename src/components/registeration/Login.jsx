import React, { useRef } from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Home from '../../pages/Home';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import SignUpForm from './SignUpForm';

const Login = () => {
    const form = useRef()
    function HandleLoginSubmission(e) {
        e.preventDefault()
        emailjs
            .sendForm("service_v98mwwi", "template_nlb08mn", form.current, {
                publicKey: "tmIH8zzuNSlCbOt5x"
            })
            .then(() => {
                toast.success("Data Submitted")
                e.target.reset()
            }
            ), (error) => {
                toast.warning("Error in Submitting")
            }
    }
    return (
        <div className='flex justify-center my-6 px-4 lg:px-8'>
            <div className='w-120 rounded-2xl overflow-hidden shadow-md shadow-gray-400'>
                <div className='bg-[#1C1C1C] text-white flex flex-col justify-center items-center p-6 gap-3 text-center'>
                    <h2 className='system-font text-[24px] font-light text-[#d4af37]'>AKOYA LUXURY LAUNDRY</h2>
                    <div className='w-[80%] h-px bg-[#d4af37]'></div>
                    <p className='system-font text-[14px]'>Sign in to your account</p>
                </div>
                <div className='p-4 md:p-6 lg:p-8 bg-white flex flex-col gap-6'>
                    <form className='flex flex-col gap-6' onSubmit={HandleLoginSubmission} ref={form}>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="" className='system-font font-medium text-[#364153]'>Email Address</label>
                            <div className='flex items-center border border-gray-300 rounded gap-2  p-3 focus-within:border-2 focus-within:border-amber-300'>
                                <MdOutlineMailOutline className='text-gray-400 text-[26px]' />
                                <input type="email" placeholder='your@email.com' className='w-full focus:outline-none' required name='email' />
                            </div>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <label htmlFor="" className='system-font font-medium text-[#364153]'>Password</label>
                            <div className='flex items-center border border-gray-300 rounded gap-2  p-3 focus-within:border-2 focus-within:border-amber-300'>
                                <CiLock className='text-gray-400 text-[26px]' />
                                <input type="password" placeholder='*******' className='w-full focus:outline-none' required name='password' />
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="" className='system-font'>Remember me</label>
                            </div>
                            <Link to={"/forget-password"} className='system-font text-[#cb8900] font-medium'>Forget passwrod</Link>
                        </div>
                        <div>
                            <button type='submit' className='bg-[#CFA829] py-4 text-center rounded text-white w-full system-font font-medium cursor-pointer hover:scale-[1.02] active:scale-[1] '>Sign in</button>
                        </div>
                    </form>

                    <div className='flex flex-col items-center'>
                        <div className='bg-gray-400 h-px w-full translate-y-3'></div>
                        <p className='px-2 bg-white z-10'>New to Akoya</p>
                    </div>
                    <Link to={"/sign-up"} path={<SignUpForm />} className='system-font text-[#cb8900] text-[16px] hover:underline font-medium text-center' >Create your account</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
