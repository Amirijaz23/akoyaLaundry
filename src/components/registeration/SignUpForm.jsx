import React, { useContext, useEffect, useRef, useState } from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FaCheck } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import Home from '../../pages/Home';
import SignUp from './SignUpForm';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { MyContext } from '../usecontext/UseContext';

const SignUpForm = () => {
  const {profile}=useContext(MyContext)
  const [password, setPassword] = useState({ firstPassword: "", confirmPassword: "", })
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
        Navigate("/client-login")
      }
      ), (error) => {
        toast.warning("Error in Submitting")
      }
  }
  return (
    <div className='flex justify-center my-6  px-4 lg:px-8'>
      <div className={`w-120 rounded-2xl overflow-hidden shadow-md shadow-gray-400 ${profile.language=="eng"?"":"text-right"}`}>
        <div className='bg-[#1C1C1C] text-white flex flex-col justify-center items-center p-6 gap-3'>
          <h2 className='system-font text-[24px] font-light text-[#d4af37]'>AKOYA LUXURY LAUNDRY</h2>
          <div className='w-[80%] h-px bg-[#d4af37]'></div>
          <p className='system-font text-[14px]'>{profile.language=="eng"?"Create your premimum account":"أنشئ حسابك المميز"}</p>
        </div>
        <div className='p-4 lg:p-6 bg-white flex flex-col gap-3'>
          <form className='flex flex-col gap-4' onSubmit={HandleLoginSubmission} ref={form}>
            <div className='flex flex-col gap-3'>
              <label htmlFor="" className='system-font font-medium text-[#364153]'>{profile.language=="eng"?"Full Name":"الاسم الكامل"}</label>
              <div className='flex items-center border border-gray-300 rounded gap-2  p-3 focus-within:border-2 focus-within:border-amber-300'>
                <CiUser className='text-gray-400 text-[26px]' />
                <input type="text" placeholder={`${profile.language=="eng"?"Enter your full name":" أدخل اسمك"}`} className={`w-full focus:outline-none ${profile.language=="eng"?"":"text-right"}`} required name='fullName' />
              </div>
            </div>

            <div className='flex flex-col gap-3'>
              <label htmlFor="" className='system-font font-medium text-[#364153]'>{profile.language=="eng"?"Email Address":"البريد الإلكتروني"}</label>
              <div className='flex items-center border border-gray-300 rounded gap-2  p-3 focus-within:border-2 focus-within:border-amber-300'>
                <MdOutlineMailOutline className='text-gray-400 text-[26px]' />
                <input type="email" placeholder='your@email.com' className={`w-full focus:outline-none ${profile.language=="eng"?"":"text-right"}`}  required name='email' />
              </div>
            </div>

            <div className='flex flex-col gap-3'>
              <label htmlFor="" className='system-font font-medium text-[#364153]'>{profile.language=="eng"?"Password":"كلمة المرور"}</label>
              <div className='flex items-center border border-gray-300 rounded gap-2  p-3 focus-within:border-2 focus-within:border-amber-300'>
                <CiLock className='text-gray-400 text-[26px]' />
                <input type="password" placeholder='*******' className={`w-full focus:outline-none ${profile.language=="eng"?"":"text-right"}`}  required name='password' onChange={(e) => setPassword(prev => ({ ...prev, firstPassword: e.target.value }))} />
              </div>
            </div>

            <div className='flex flex-col gap-3'>
              <label htmlFor="" className='system-font font-medium text-[#364153]'>{profile.language=="eng"?"Confirm Password":"تأكيد كلمة المرور"}</label>
              <div className='flex items-center border border-gray-300 rounded gap-2  p-3 focus-within:border-2 focus-within:border-amber-300'>
                <FaCheck className='text-gray-400 text-[26px]' />
                <input type="password" placeholder='*******' className={`w-full focus:outline-none ${profile.language=="eng"?"":"text-right"}`}  required name='confirmPassword' onChange={(e) => setPassword(prev => ({ ...prev, confirmPassword: e.target.value }))} />
              </div>
              {password.firstPassword != password.confirmPassword && <p className='text-red-500'>Both Passwords are Not same</p>}
            </div>

            <div className='flex flex-col gap-3'>
              <label htmlFor="" className='system-font font-medium text-[#364153]'>{profile.language=="eng"?"Whatsapp Phone Number":"رقم الواتساب"}</label>
              <div className='flex items-center border border-gray-300 rounded gap-2  p-3 focus-within:border-2 focus-within:border-amber-300'>
                <IoCallOutline className='text-gray-400 text-[26px]' />
                <input type="number" placeholder='+1234567890' className={`w-full focus:outline-none ${profile.language=="eng"?"":"text-right"}`}  required name='phoneNumber' />
              </div>
            </div>
            <p className='text-[12px]'>{profile.language=="eng"?"Enter your full WhatsApp number with country code (e.g., +1234567890)":"أدخل رقم الواتساب الكامل مع رمز البلد (مثال: +1234567890)"}</p>

            <div className={`flex justify-between ${profile.language=="eng"?"":"justify-end"}`}>
              <div className={`flex gap-2 items-center ${profile.language=="eng"?"":"flex-row-reverse"}`}>
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className='system-font'>{profile.language=="eng"?"I agree to the  ":"أوافق على"}<Link to={"/sign-up"} className='system-font text-[#cb8900] text-[14px] hover:underline'>{profile.language=="eng"?"terms and conditions":" الشروط والأحكام"}</Link> </label>
              </div>
            </div>
            <div>
              <button type='submit' className='bg-[#CFA829] py-4 text-center rounded text-white w-full system-font font-medium cursor-pointer hover:scale-[1.02] active:scale-[1] '>{profile.language=="eng"?"Create Account":"إنشاء حساب"}</button>
            </div>
          </form>
          <label htmlFor="" className='text-center'>{profile.language=="eng"?"Already Have an account?":"هل لديك حساب بالفعل؟"}
            <Link to={"/client-login"} className='system-font text-[#cb8900] text-[16px] hover:underline font-medium text-center' >{profile.language=="eng"?"Sign in":"تسجيل الدخول"}</Link>
          </label>
        </div>
      </div>
    </div>
  )
}

export default SignUpForm
