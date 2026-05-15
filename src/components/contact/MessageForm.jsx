import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
const MessageForm = () => {
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
        <h2 className='system-font font-medium text-[20px]'>Send us a message</h2>
        <div className='flex flex-col my-4 gap-2.5 '>
          <label htmlFor="" className='system-font text-[14px] font-medium'>Full Name</label>
          <input type="text" placeholder='Enter your name' className='py-3 border px-4 rounded border-gray-300 outline-2 outline-transparent  focus:outline-yellow-400 ' name='fullName' required />
          <label htmlFor="" className='system-font text-[14px] font-medium'>Email Address</label>
          <input type="email" placeholder='Enter your email' className='py-3 border px-4 rounded border-gray-300 outline-2 outline-transparent  focus:outline-yellow-400' name='email' required />
          <label htmlFor="" className='system-font text-[14px] font-medium'>Your Message</label>
          <textarea type="text" placeholder='How Can i help your?' rows={6} className='py-3 border px-4 rounded border-gray-300 outline-2 outline-transparent  focus:outline-yellow-400' name='message' required />
          <button type='submit' className='bg-black text-white rounded py-4 mt-3 font-medium'>Send Message</button>
        </div>
      </form>
    </div>
  )
}

export default MessageForm
