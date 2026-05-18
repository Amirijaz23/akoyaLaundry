import React, { useContext, useRef } from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Home from '../../pages/Home';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import SignUpForm from './SignUpForm';
import { MyContext } from '../usecontext/UseContext';

const Login = () => {
    const {profile}=useContext(MyContext)
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
                    <p className='system-font text-[14px]'>{profile.language=="eng"?"Sign in to your account":"تسجيل الدخول إلى حسابك"}</p>
                </div>
                <div className='p-4 md:p-6 lg:p-8 bg-white flex flex-col gap-6'>
                    <form className={`flex flex-col gap-6 ${profile.language=="eng"?"":"text-right"}`} onSubmit={HandleLoginSubmission} ref={form} >
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="" className='system-font font-medium text-[#364153]'>{profile.language=="eng"?"Email Address":"البريد الإلكتروني"}</label>
                            <div className='flex items-center border border-gray-300 rounded gap-2  p-3 focus-within:border-2 focus-within:border-amber-300'>
                                <MdOutlineMailOutline className='text-gray-400 text-[26px]' />
                                <input type="email" placeholder='your@email.com' className={`w-full focus:outline-none ${profile.language=="eng"?"":"text-right"}`} required name='email'  />
                            </div>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <label htmlFor="" className='system-font font-medium text-[#364153]'>{profile.language=="eng"?"Password":"كلمة المرور"}</label>
                            <div className='flex items-center border border-gray-300 rounded gap-2  p-3 focus-within:border-2 focus-within:border-amber-300'>
                                <CiLock className='text-gray-400 text-[26px]' />
                                <input type="password" placeholder='*******' className={`w-full focus:outline-none ${profile.language=="eng"?"":"text-right"}`} required name='password' />
                            </div>
                        </div>

                        <div className={`flex justify-between ${profile.language=="eng"?"":"flex-row-reverse"}`}>
                            <div className={`flex gap-2 items-center ${profile.language=="eng"?"":"flex-row-reverse"}`}>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="" className='system-font'>{profile.language=="eng"?"Remember me":"تذكرني"}</label>
                            </div>
                            <Link to={"/forget-password"} className='system-font text-[#cb8900] font-medium'>{profile.language=="eng"?"Forget passwrod":"هل نسيت كلمة المرور؟"}</Link>
                        </div>
                        <div>
                            <button type='submit' className='bg-[#CFA829] py-4 text-center rounded text-white w-full system-font font-medium cursor-pointer hover:scale-[1.02] active:scale-[1] '>{profile.language=="eng"?"Sign in":"تسجيل الدخول"}</button>
                        </div>
                    </form>

                    <div className='flex flex-col items-center'>
                        <div className='bg-gray-400 h-px w-full translate-y-3'></div>
                        <p className='px-2 bg-white z-10'>{profile.language=="eng"?"New to Akoya":"جديد على AKOYA"}</p>
                    </div>
                    <Link to={"/sign-up"} path={<SignUpForm />} className='system-font text-[#cb8900] text-[16px] hover:underline font-medium text-center' >{profile.language=="eng"?"Create your account":"أنشئ حسابك"}</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
