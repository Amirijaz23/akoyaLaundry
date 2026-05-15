import React, { useEffect, useRef, useState } from 'react'
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

const SignUpForm = () => {
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
      <div className='w-120 rounded-2xl overflow-hidden shadow-md shadow-gray-400'>
        <div className='bg-[#1C1C1C] text-white flex flex-col justify-center items-center p-6 gap-3'>
          <h2 className='system-font text-[24px] font-light text-[#d4af37]'>AKOYA LUXURY LAUNDRY</h2>
          <div className='w-[80%] h-px bg-[#d4af37]'></div>
          <p className='system-font text-[14px]'>Create your premimum account</p>
        </div>
        <div className='p-4 lg:p-6 bg-white flex flex-col gap-3'>
          <form className='flex flex-col gap-4' onSubmit={HandleLoginSubmission} ref={form}>
            <div className='flex flex-col gap-3'>
              <label htmlFor="" className='system-font font-medium text-[#364153]'>Full Name</label>
              <div className='flex items-center border border-gray-300 rounded gap-2  p-3 focus-within:border-2 focus-within:border-amber-300'>
                <CiUser className='text-gray-400 text-[26px]' />
                <input type="text" placeholder='Enter your full name' className='w-full focus:outline-none' required name='fullName' />
              </div>
            </div>

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
                <input type="password" placeholder='*******' className='w-full focus:outline-none' required name='password' onChange={(e) => setPassword(prev => ({ ...prev, firstPassword: e.target.value }))} />
              </div>
            </div>

            <div className='flex flex-col gap-3'>
              <label htmlFor="" className='system-font font-medium text-[#364153]'>Confirm Password</label>
              <div className='flex items-center border border-gray-300 rounded gap-2  p-3 focus-within:border-2 focus-within:border-amber-300'>
                <FaCheck className='text-gray-400 text-[26px]' />
                <input type="password" placeholder='*******' className='w-full focus:outline-none' required name='confirmPassword' onChange={(e) => setPassword(prev => ({ ...prev, confirmPassword: e.target.value }))} />
              </div>
              {password.firstPassword != password.confirmPassword && <p className='text-red-500'>Both Passwords are Not same</p>}
            </div>

            <div className='flex flex-col gap-3'>
              <label htmlFor="" className='system-font font-medium text-[#364153]'>Whatsapp Phone Number</label>
              <div className='flex items-center border border-gray-300 rounded gap-2  p-3 focus-within:border-2 focus-within:border-amber-300'>
                <IoCallOutline className='text-gray-400 text-[26px]' />
                <input type="number" placeholder='+1234567890' className='w-full focus:outline-none' required name='phoneNumber' />
              </div>
            </div>
            <p className='text-[12px]'>Enter your full WhatsApp number with country code (e.g., +1234567890)</p>

            <div className='flex justify-between'>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className='system-font'>I agree to the  <Link to={"/sign-up"} className='system-font text-[#cb8900] text-[14px] hover:underline'>terms and conditions</Link> </label>
              </div>

            </div>
            <div>
              <button type='submit' className='bg-[#CFA829] py-4 text-center rounded text-white w-full system-font font-medium cursor-pointer hover:scale-[1.02] active:scale-[1] '>Create Account</button>
            </div>
          </form>
          <label htmlFor="" className='text-center'>Already Have an account?
            <Link to={"/client-login"} className='system-font text-[#cb8900] text-[16px] hover:underline font-medium text-center' >Sign in</Link>
          </label>
        </div>
      </div>
    </div>
  )
}

export default SignUpForm
