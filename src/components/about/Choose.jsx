import React from 'react'
import { FaShieldAlt } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";


const Choose = () => {
    const ChoosingProperties = [
        {
            Icon: FaShieldAlt,
            Heading: "Premium Quality",
            Description: "We use only the finest eco-friendly detergents and state-of-the-art equipment",
        },
        {
            Icon: FaUserCheck,
            Heading: "Personalized Service",
            Description: "Tailored solutions for each garment with our expert fabric specialists",
        },
        {
            Icon: FaClock,
            Heading: "Convenience",
            Description: "24/7 booking with flexible pickup and delivery options",
        },
    ]
    return (
        <div data-aos="fade-up" className='w-[90%] lg:w-[80%] mx-auto'>
            <h1 className='system-font font-light text-[36px] text-center my-4'>Why Choose <span className='text-[#D4AF37]'>Akoya</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6'>
                {
                    ChoosingProperties.map((item, index) => (
                        <div key={index} className='bg-linear-to-b rounded-3xl from-[#F8F5F2] to-[#F8F5F2]  flex flex-col justify-center items-center gap-4 text-center py-10 px-8'>
                            <item.Icon className='text-[#D4AF37] text-[50px]' />
                            <h2 className='text-[20px] font-medium'>{item.Heading}</h2>
                            <p>{item.Description}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Choose
