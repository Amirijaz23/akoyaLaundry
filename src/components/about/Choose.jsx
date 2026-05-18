import React, { useContext } from 'react'
import { FaShieldAlt } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import {MyContext} from '../usecontext/UseContext'


const Choose = () => {
    const {profile}=useContext(MyContext)
    const ChoosingProperties = [
        {
            Icon: FaShieldAlt,
            Heading: "Premium Quality",
            Description: "We use only the finest eco-friendly detergents and state-of-the-art equipment",
            ArbHeading:"جودة فاخرة",
            ArbDescription:"نستخدم أفضل المنظفات الصديقة للبيئة وأحدث الأجهزة",
        },
        {
            Icon: FaUserCheck,
            Heading: "Personalized Service",
            Description: "Tailored solutions for each garment with our expert fabric specialists",
            ArbHeading:"خدمة مخصصة",
            ArbDescription:"حلول مخصصة لكل قطعة مع متخصصي الأقمشة",
        },
        {
            Icon: FaClock,
            Heading: "Convenience",
            Description: "24/7 booking with flexible pickup and delivery options",
            ArbHeading:"الراحة",
            ArbDescription:"حجز 24/7 مع خيارات استلام وتسليم مرنة",
        },
    ]
    return (
        <div className='w-[90%] lg:w-[80%] mx-auto'>
            <h1 className='system-font font-light text-[36px] text-center my-4'>{profile.language=="eng"?"Why Choose":"لماذا تختار"}<span className='text-[#D4AF37]'>{profile.language=="eng"?" Akoya":" أكويا"}</span></h1>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6 ${profile.language=="eng"?"[direction:ltr]":"[direction:rtl]"}`}>
                {
                    ChoosingProperties.map((item, index) => (
                        <div key={index} className={`bg-linear-to-b rounded-3xl from-[#F8F5F2] to-[#F8F5F2]  flex flex-col justify-center items-center gap-4 text-center py-10 px-8`}>
                            <item.Icon className='text-[#D4AF37] text-[50px]' />
                            <h2 className='text-[20px] font-medium'>{profile.language=="eng"?item.Heading:item.ArbHeading}</h2>
                            <p>{profile.language=="eng"?item.Description:item.ArbDescription}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Choose
