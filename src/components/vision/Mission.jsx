import React from 'react'
import { GoDotFill } from "react-icons/go";


const Mission = () => {
    const coreValues = [
        {
            heading: "Excellence",
            description: "Every item, every wash, every fragrance meets the highest standards.",
        },
        {
            heading: "Innovation",
            description: "We use advanced systems and smart logistics to deliver faster and cleaner results.",
        },
        {
            heading: "Sustainability",
            description: "We commit to eco-friendly methods and responsible operations.",
        },
        {
            heading: "Customer Focus",
            description: "Your satisfaction drives everything we do.",
        },
    ]
    return (
        <div>
            <div className='flex flex-col lg:flex-row shadow-md rounded-2xl overflow-hidden mb-10'>
                <div className='bg-[#D2AC34] w-full lg:w-[40%] flex justify-center items-center py-8 '>
                    <h1 className='system-font font-bold text-[32px] md:text-[48px] text-white w-[60%] text-center leading-tight'>Our Vision</h1>
                </div>
                <div className='bg-white w-full lg:w-[60%] p-6 lg:p-10'>
                    <p className='system-font text-[20px] leading-7.25  text-[#364153] '>To redefine fabric care and personal luxury in Qatar through innovation, fragrance, and flawless service — making Akoya Premium Laundry the symbol of elegance and trust in every home.</p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row shadow-md rounded-2xl overflow-hidden mb-10'>
                <div className='bg-white w-full lg:w-[60%] p-6 lg:p-10'>
                    <p className='system-font text-[20px] leading-7.25  text-[#364153] '>At Akoya Premium Laundry, we strive to offer premium laundry, delivery, and custom perfume solutions that combine technology, artistry, and care. Our mission is to transform daily routines into refined experiences through exceptional service, attention to detail, and sustainable practices.</p>
                </div>
                <div className='bg-[#131B2B] w-full lg:w-[40%] flex justify-center items-center py-8'>
                    <h1 className='system-font font-bold text-[32px] md:text-[48px] text-white w-[60%] text-center leading-tight'>Our Mission</h1>
                </div>
            </div>

            <div className='border border-gray-300 shadow-md shadow-gray-300 p-4 lg:p-8 rounded-2xl '>
                <h1 className='system-font text-[36px] font-bold text-center mb-6'>Our Core Values</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    {
                        coreValues.map((item, index) => (
                            <div key={index} className='flex gap-4 border border-transparent p-6 border-l-4 border-l-yellow-400 shadow-md rounded-2xl my-2 '>
                                <div className='w-15 h-15 flex justify-center items-center rounded-2xl bg-[#D4AF37] shrink-0'>
                                    <GoDotFill className='text-[30px] text-white' />
                                </div>
                                <div>
                                    <h2 className='text-[20px] font-bold'>{item.heading}</h2>
                                    <p className='text-[#364153]'>{item.description}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Mission
