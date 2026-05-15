import React from 'react'
import MessageForm from './MessageForm'
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const ContactForm = () => {
  const myInfo = [
    {
      Icon: CiLocationOn,
      infoHeading: "Location",
      infoValue: "West Bay, Doha, Qatar"
    },
    {
      Icon: IoCallOutline,
      infoHeading: "Phone",
      infoValue: "+974 1234 5678"
    },
    {
      Icon: MdOutlineMailOutline,
      infoHeading: "Email",
      infoValue: "info@akoyalaundry.com"
    },
  ]
  const SocialLinks = [
    {
      Icon: FaInstagram,
      link: "/"
    },
    {
      Icon: FaTwitter,
      link: "/"
    },
    {
      Icon: FaWhatsapp,
      link: "/"
    },
  ]
  return (

    <div className='text-center bg-[#F7F4EE] py-3'>
      <h1 className='text-[36px] font-light my-3'>Contact Us</h1>
      <div className='relative flex justify-center'>
        <p className='text-[18px] btext-[#d4af37] z-10 bg-[#F7F4EE] px-4'>GET IN TOUCH</p>
        <div className='absolute h-0.5 bg-amber-400 w-60 mx-auto bottom-2.5'></div>
      </div>

      <div className='w-[95%]  lg:w-[85%] mx-auto flex flex-col md:flex-row md:gap-2 text-left py-4 md:py-8'>
        <div className='w-full md:w-[50%]  p-4 mb-4' data-aos="fade-right">
          <h2 className='system-font font-medium text-[20px] mb-4'>How to reach us</h2>
          <p>Our concierge team is available to assist you with any inquiries about our luxury laundry services. Reach out via your preferred method and we'll respond promptly.</p>
          {
            myInfo.map((item, index) => (
              <div key={index} className='my-4 flex items-center gap-3'>
                <div className='bg-[#F5EEDF] flex w-15 h-15 justify-center items-center rounded-2xl'>
                  <item.Icon className='text-[20px] text-[#D4AF37]' />
                </div>
                <div>
                  <h2 className='text-[18px] font-medium'>{item.infoHeading}</h2>
                  <p>{item.infoValue}</p>
                </div>
              </div>
            ))
          }
          <h1 className='text-[18px] font-medium'>Follow Us</h1>
          <div className='flex gap-3 my-5'>
            {
              SocialLinks.map((item, index) => (
                <div key={index} className='w-13 h-13 bg-black rounded-full flex justify-center items-center text-white hover:bg-[#D4AF37] hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer'>
                  <a href={item.link}><item.Icon className='text-[22px] ' /></a>
                </div>
              ))
            }
          </div>
        </div>

        <div className='w-full md:w-[50%]' data-aos="fade-left">
          <MessageForm />
        </div>
      </div>
    </div>

  )
}

export default ContactForm
