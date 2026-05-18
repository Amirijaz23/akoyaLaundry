import React, { useContext, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import {MyContext} from '../usecontext/UseContext'
const MessageForm = () => {
  const {profile}=useContext(MyContext)
  const form = useRef()
  function HandleSubmission(e) {
    e.preventDefault()
    emailjs
      .sendForm("service_34c3qep", "template_fij9oss", form.current, {
        publicKey: "tmIH8zzuNSlCbOt5x"
      }).then(
        () => {
          toast.success("Successfully Send")
          e.target.reset()
        },
        (error) => {
          toast.warning("Error")
        },
      );
  }

  return (
    <div className='px-4'>
      <form ref={form} action="" className='p-6 rounded-2xl shadow-md bg-white' onSubmit={HandleSubmission}>
        <h2 className='system-font font-medium text-[20px]'>{profile.language=="eng"?"Send us a message":"أرسل لنا رسالة"}</h2>
        <div className='flex flex-col my-4 gap-2.5 '>
          <label htmlFor="" className='system-font text-[14px] font-medium'>{profile.language=="eng"?"Full Name":"الاسم الكامل"}</label>
          <input type="text" placeholder={`${profile.language=="eng"?"Enter your name ":"أدخل اسمك"}`} className={`py-3 border px-4 rounded border-gray-300 outline-2 outline-transparent  focus:outline-yellow-400 ${profile.language=="eng"?"":"text-right"}`}    name='fullName' required />
          <label htmlFor="" className='system-font text-[14px] font-medium'>{profile.language=="eng"?"Email Address":"عنوان البريد الإلكتروني"}</label>
          <input type="email" placeholder={`${profile.language=="eng"?"Enter your email":" أدخل بريدك الإلكتروني "}`} className= {`py-3 border px-4 rounded border-gray-300 outline-2 outline-transparent  focus:outline-yellow-400 ${profile.language=="eng"?"":"text-right"}`} name='email' required />
          <label htmlFor="" className='system-font text-[14px] font-medium'>{profile.language=="eng"?"Your Message":"رسالتك"}</label>
          <textarea type="text" placeholder={`${profile.language=="eng"?"How Can i help your?":" كيف يمكننا مساعدتك؟"}`} rows={6} className={`py-3 border px-4 rounded border-gray-300 outline-2 outline-transparent  focus:outline-yellow-400 ${profile.language=="eng"?"":"text-right"}`} name='message' required />
          <button type='submit' className='bg-black text-white rounded py-4 mt-3 font-medium'>{profile.language=="eng"?"Send Message":" إرسال الرسالة"}</button>
        </div>
      </form>
    </div>
  )
}

export default MessageForm
