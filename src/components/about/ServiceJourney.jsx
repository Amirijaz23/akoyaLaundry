import React, { useContext } from 'react'
import { FaTshirt } from "react-icons/fa";
import { LuPackageOpen } from "react-icons/lu";
import { PiSprayBottleBold } from "react-icons/pi";
import { FaSprayCan } from "react-icons/fa6";
import { VscPackage } from "react-icons/vsc";
import { IoIosGift } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import {MyContext} from '../usecontext/UseContext'

const ServiceJourney = () => {
    const {profile}=useContext(MyContext)
    const processCards = [
        {
            Icon: FaTshirt,
            Heading: "1. Select Wash Type",
            description: "Standard or Express wash options to suit your needs",
            ArbHeading:"1. اختر نوع الغسيل",
            ArbDescription:"خيارات غسيل عادية أو سريعة تناسب احتياجاتك",
        },
        {
            Icon: LuPackageOpen,
            Heading: "2. Choose Garments",
            description: "From daily wear to delicate couture - we handle all",
            ArbHeading:"2. اختر الملابس",
            ArbDescription:"من الملابس اليومية إلى الأزياء الحساسة - نتعامل معها جميعًا",
        },
        {
            Icon: PiSprayBottleBold,
            Heading: "3. Steam Finishing",
            description: "Professional pressing for impeccable results",
            ArbHeading:"3. الكي بالبخار",
            ArbDescription:"كي احترافي لنتائج لا تشوبها شائبة",
        },
        {
            Icon: FaSprayCan,
            Heading: "4. Fragrance Infusion",
            description: "Luxury scents for men and women",
            ArbHeading:"4. إضافة العطر",
            ArbDescription:"4. إضافة العطر"
        },
        {
            Icon: VscPackage,
            Heading: "5. Packaging",
            description: "Choose from our premium wrapping options",
            ArbHeading:"5. التغليف",
            ArbDescription:"اختر من خيارات التغليف المميزة",
        },
        {
            Icon: IoIosGift,
            Heading: "6. Personalization",
            description: "Add a custom card for gifts",
            ArbHeading:"6. التخصيص",
            ArbDescription:"أضف بطاقة مخصصة للهدايا",
        },
        {
            Icon: FaWhatsapp,
            Heading: "7. WhatsApp Checkout",
            description: "Easy confirmation via WhatsApp",
            ArbHeading:"7. الدفع عبر واتساب",
            ArbDescription:"تأكيد سهل عبر واتساب",
        },
        {
            Icon: MdSupportAgent,
            Heading: "8. AI Assistance",
            description: "3D avatars guide you in Arabic & English",
            ArbHeading:"8. المساعدة الذكية",
            ArbDescription:"شخصيات ثلاثية الأبعاد توفر الإرشاد بالعربية والإنجليزية",
        },
    ]
    return (
        <div className='bg-[#F8F5F2] py-10'>
            <div className='w-[90%] lg:w-[80%] mx-auto'>
                <h1 className='system-font text-[36px] font-light text-center'>{profile.language == "eng" ? "Our Service Journey" : "رحلة خدمتنا"}</h1>
                <div className={`grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-6 gap-4 ${profile.language=="eng"?"[direction:ltr]":"[direction:rtl]"}`}>
                    {
                        processCards.map((card, index) => (
                            <div data-aos="fade-up" key={index} className='flex flex-col gap-3 justify-center items-center py-8 px-6  text-center rounded-2xl shadow-md shadow-gray-200 border border-gray-300 hover:shadow-gray-300'>
                                <card.Icon className='self-start text-[40px] text-[#D4AF37]' />
                                <h2 className='system-font text-[18px] font-medium'>{profile.language=="eng"?card.Heading:card.ArbHeading}</h2>
                                <p>{profile.language=="eng"?card.description:card.ArbDescription}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default ServiceJourney
