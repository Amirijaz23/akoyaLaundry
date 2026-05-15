import React, { useContext, useEffect, useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../usecontext/UseContext'

const ServicesCard = () => {
    const navigate = useNavigate()
    const { profile, setProfile } = useContext(MyContext)
    const ServicesCardData = [
        {
            id: 1,
            Img: "https://lundary.vercel.app/home/dryCleaning.jpg",
            Icon: "🧥",
            heading: "Dry Cleaning",
            price: "From 6 QAR",
            description: "Expert care for suits and delicate fabrics using eco-friendly solvents",
            category: "Dry Cleaning",
        },
        {
            id: 2,
            Img: "https://lundary.vercel.app/home/exectivePressing.jpg",
            Icon: "👔",
            heading: "Executive Pressing",
            price: "From 3 QAR",
            description: "Crisp finishes for business attire with precision steam technology",
            category: "Pressing"
        },
        {
            id: 3,
            Img: "https://lundary.vercel.app/home/care.jpg",
            Icon: "👗",
            heading: "Couture Care",
            price: "From 7 QAR",
            description: "Hand-cleaning for designer garments and delicate fabrics",
            category: "Speciality",
        },
        {
            id: 4,
            Img: "https://lundary.vercel.app/home/resturation.jpg",
            Icon: "🕌",
            heading: "Bisht Restoration",
            price: "From 25 QAR",
            description: "Traditional cleaning and pressing for Qatari formal wear",
            category: "Speciality",
        },
        {
            id: 5,
            Img: "https://lundary.vercel.app/home/sehedulePickup.jpg",
            Icon: "⚡",
            heading: "Express Service",
            price: "+30% Premium",
            description: "3-hour turnaround for urgent garment needs",
            category: "Express",
        },
        {
            id: 6,
            Img: "https://lundary.vercel.app/home/fragrance.jpg",
            Icon: "🌸",
            heading: " Fragrance Infusion",
            price: "5 QAR",
            description: "Luxury scent options for your garments",
            category: "Add-On",
        },
        {
            id: 7,
            Img: "https://lundary.vercel.app/services/dishdasha.webp",
            Icon: "👳‍♂️",
            heading: "Dishdasha",
            price: "From 4 QAR",
            description: "Professional care for men's traditional Qatari garment",
            category: "Traditional",
        },
        {
            id: 8,
            Img: "https://lundary.vercel.app/services/child_dishdasha.jpg",
            Icon: "👦",
            heading: "Child Dishdasha",
            price: "From 3 QAR",
            description: "Specialized care for children's traditional garments",
            category: "Traditional",
        },
        {
            id: 9,
            Img: "https://lundary.vercel.app/services/bisht.jpg",
            Icon: "🪔",
            heading: "Bisht",
            price: "From 25 QAR",
            description: "Premium care for ceremonial cloak with gold detailing",
            category: "Traditional",
        },
        {
            id: 10,
            Img: "https://lundary.vercel.app/services/ghutra.jpg",
            Icon: "🧕",
            heading: " Ghutra",
            price: "From 25 QAR",
            description: "Premium care for ceremonial cloak with gold detailing",
            category: "Traditional",

        },
        {
            id: 11,
            Img: "https://lundary.vercel.app/services/kurta.jpg",
            Icon: "👘",
            heading: "Kurta",
            price: "From 4 QAR",
            description: "Care for traditional South Asian tunic",
            category: "Traditional",
        },
        {
            id: 12,
            Img: "https://lundary.vercel.app/services/kurtaPajama.jpg",
            Icon: "👖",
            heading: "Kurta Pyjama(Set)",
            price: "From 6 QAR",
            description: "Complete set cleaning for traditional attire",
            category: "Traditional",
        },
        {
            id: 13,
            Img: "https://lundary.vercel.app/services/kameez.jpg",
            Icon: "👕",
            heading: "Kameez",
            price: "From 4 QAR",
            description: "Professional care for traditional long shirts",
            category: "Traditional",
        },
        {
            id: 14,
            Img: "https://lundary.vercel.app/services/jalabiya.jpg",
            Icon: "👚",
            heading: "Jalabiya",
            price: "From 6 QAR",
            description: "Specialized care for flowing traditional gowns",
            category: "Traditional",
        },
        {
            id: 15,
            Img: "https://lundary.vercel.app/services/abaya.jpg",
            Icon: "🧕",
            heading: "Abaya",
            price: "From 10 QAR",
            description: "Professional cleaning for everyday abayas",
            category: "Traditional",
        },
        {
            id: 16,
            Img: "https://lundary.vercel.app/services/abaya_special.jpg",
            Icon: "✨",
            heading: "Abaya Special",
            price: "From 12 QAR",
            description: "Premium care for embellished abayas",
            category: "Traditional",
        },
        {
            id: 17,
            Img: "https://lundary.vercel.app/services/hijab.png",
            Icon: "🧣",
            heading: "Hijab",
            price: "From 3 QAR",
            description: "Delicate cleaning for headscarves",
            category: "Traditional",
        },
        {
            id: 18,
            Img: "https://lundary.vercel.app/services/gent_suit.jpg",
            Icon: "👔",
            heading: "Gent Suit (3pcs)",
            price: "From 12 QAR",
            description: "Complete care for 3-piece suits",
            category: "Dry Cleaning",
        },
        {
            id: 19,
            Img: "https://lundary.vercel.app/services/dress.jpg",
            Icon: "👗",
            heading: "Dress (Short)",
            price: "From 10 QAR",
            description: "Care for cocktail and summer dresses",
            category: "Dry Cleaning",
        },
        {
            id: 20,
            Img: "https://lundary.vercel.app/services/dressLong.jpg",
            Icon: "👰",
            heading: "Dress (Long)",
            price: "From 15 QAR",
            description: "Specialized care for evening gowns",
            category: "Dry Cleaning",
        },
        {
            id: 21,
            Img: "https://lundary.vercel.app/services/overcoat.jpg",
            Icon: "🧥",
            heading: "Overcoat",
            price: "From 11 QAR",
            description: "Winter coat cleaning and preservation",
            category: "Dry Cleaning",
        },
        {
            id: 22,
            Img: "https://lundary.vercel.app/services/military_suite.jpg",
            Icon: "🎖️",
            heading: "Military Uniform",
            price: "From 9 QAR",
            description: "Regimental standard cleaning and pressing",
            category: "Speciality",
        },
        {
            id: 23,
            Img: "https://lundary.vercel.app/services/blouse.jpg",
            Icon: "👚",
            heading: "Blouse (Special)",
            price: "From 4 QAR",
            description: "Delicate care for embellished tops",
            category: "Speciality",
        },
        {
            id: 24,
            Img: "https://lundary.vercel.app/services/bathrob.jpg",
            Icon: "🛁",
            heading: "Bath Robe",
            price: "From 4 QAR",
            description: "Deep cleaning for plush bathrobes",
            category: "Speciality",
        },
    ]
    const Data = ServicesCardData.filter((item) => {
        const filteredResults = profile.cardCategory == "All" ? true : item.category == profile.cardCategory
        return filteredResults
    })
  
    return (
        <div>
            <div className='w-[90%] md:w-[82%] mx-auto grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-4'>
                {
                    Data.map((item) => (
                        <div data-aos="fade-right" key={item.id} className='card h-110 lg:h-auto  overflow-hidden shadow-md shadow-gray-300 rounded-2xl my-4'>

                            <div className='image-section h-60 relative overflow-hidden'>
                                <img src={item.Img} alt="" className='w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out' />
                                <div className='bg-[#D4AF37] w-12 h-12 absolute top-4 right-4 rounded-full flex justify-center items-center'>
                                    <p className='text-[28px]'>{item.Icon}</p>
                                </div>
                            </div>

                            <div className='text-section p-6 flex flex-col gap-3'>
                                <div className='flex justify-between items-center'>
                                    <h2 className='text-[20px] font-medium'>{item.heading}</h2>
                                    <p className='text-[16px] font-medium text-[#D4AF37]'>{item.price}</p>
                                </div>
                                <p>{item.description}</p>
                                <div className='h-px bg-[#D4AF37]'></div>
                                <div className='bg-[#D4AF37] flex items-center justify-center gap-3 transition-all duration-300 ease-in-out font-medium rounded py-3 hover:bg-black hover:text-[#D4AF37] active:scale-95' onClick={() => navigate('/book-now')}>
                                    <p>Order</p>
                                    <IoMdAdd />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ServicesCard
