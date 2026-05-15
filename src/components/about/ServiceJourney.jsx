import React from 'react'
import { FaTshirt } from "react-icons/fa";
import { LuPackageOpen } from "react-icons/lu";
import { PiSprayBottleBold } from "react-icons/pi";
import { FaSprayCan } from "react-icons/fa6";
import { VscPackage } from "react-icons/vsc";
import { IoIosGift } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

const ServiceJourney = () => {
    const processCards = [
        {
            Icon: FaTshirt,
            Heading: "1. Select Wash Type",
            description: "Standard or Express wash options to suit your needs",
        },
        {
            Icon: LuPackageOpen,
            Heading: "2. Choose Garments",
            description: "From daily wear to delicate couture - we handle all",
        },
        {
            Icon: PiSprayBottleBold,
            Heading: "3. Steam Finishing",
            description: "Professional pressing for impeccable results",
        },
        {
            Icon: FaSprayCan,
            Heading: "4. Fragrance Infusion",
            description: "Luxury scents for men and women",
        },
        {
            Icon: VscPackage,
            Heading: "5. Packaging",
            description: "Choose from our premium wrapping options",
        },
        {
            Icon: IoIosGift,
            Heading: "6. Personalization",
            description: "Add a custom card for gifts",
        },
        {
            Icon: FaWhatsapp,
            Heading: "7. WhatsApp Checkout",
            description: "Easy confirmation via WhatsApp",
        },
        {
            Icon: MdSupportAgent,
            Heading: "8. AI Assistance",
            description: "3D avatars guide you in Arabic & English",
        },
    ]
    return (
        <div className='bg-[#F8F5F2] py-10'>
            <div className='w-[90%] lg:w-[80%] mx-auto'>
                <h1 className='system-font text-[36px] font-light text-center'>Our Service Journey</h1>
                <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-6 gap-4'>
                    {
                        processCards.map((card, index) => (
                            <div data-aos="fade-up" key={index} className='flex flex-col gap-3 justify-center items-center py-8 px-6  text-center rounded-2xl shadow-md shadow-gray-200 border border-gray-300 hover:shadow-gray-300'>
                                <card.Icon className='self-start text-[40px] text-[#D4AF37]' />
                                <h2 className='system-font text-[18px] font-medium'>{card.Heading}</h2>
                                <p>{card.description}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default ServiceJourney
