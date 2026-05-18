import React, { useContext } from 'react'
import { GoDotFill } from "react-icons/go";
import {MyContext} from '../usecontext/UseContext'


const Mission = () => {
    const {profile}=useContext(MyContext)
    const coreValues = [
        {
            heading: "Excellence",
            description: "Every item, every wash, every fragrance meets the highest standards.",
            Arbheading:"التميز",
            ArbDescription:"كل قطعة، كل غسلة، كل عطر يلبي أعلى المعايير.",
        },
        {
            heading: "Innovation",
            description: "We use advanced systems and smart logistics to deliver faster and cleaner results.",
            Arbheading:"الابتكار",
            ArbDescription:"نستخدم أنظمة متطورة وخدمات لوجستية ذكية لتقديم نتائج أسرع وأنظف.",
        },
        {
            heading: "Sustainability",
            description: "We commit to eco-friendly methods and responsible operations.",
            Arbheading:"الاستدامة",
            ArbDescription:"نلتزم بالطرق الصديقة للبيئة والعمليات المسؤولة.",
        },
        {
            heading: "Customer Focus",
            description: "Your satisfaction drives everything we do.",
            Arbheading:"التركيز على العميل",
            ArbDescription:"رضاك يدفع كل ما نقوم به.",
        },
    ]
    return (
        <div>
            <div className='flex flex-col lg:flex-row shadow-md rounded-2xl overflow-hidden mb-10'>
                <div className={`bg-[#D2AC34] w-full lg:w-[40%] flex justify-center items-center py-8 ${profile.language=="eng"?"":"order-2"}`}>
                    <h1 className='system-font font-bold text-[32px] md:text-[48px] text-white w-[60%] text-center leading-tight'>{profile.language=="eng"?"Our Vision":"رؤيتنا"}</h1>
                </div>
                <div className={`bg-white w-full lg:w-[60%] p-6 lg:p-10 ${profile.language=="eng"?"":"order-1"}`}>
                    <p className='system-font text-[20px] leading-7.25  text-[#364153] '>{profile.language=="eng"?"To redefine fabric care and personal luxury in Qatar through innovation, fragrance, and flawless service — making Akoya Premium Laundry the symbol of elegance and trust in every home.":"إعادة تعريف العناية بالملابس والفخامة الشخصية في قطر من خلال الابتكار والعطور والخدمة الخالية من العيوب - جعل أكويا لخدمات الغسيل الفاخرة رمزاً للأناقة والثقة في كل منزل."}</p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row shadow-md rounded-2xl overflow-hidden mb-10'>
                <div className={`bg-white w-full lg:w-[60%] p-6 lg:p-10 ${profile.language=="eng"?"":"order-2"}`}>
                    <p className='system-font text-[20px] leading-7.25  text-[#364153] '>{profile.language=="eng"?"At Akoya Premium Laundry, we strive to offer premium laundry, delivery, and custom perfume solutions that combine technology, artistry, and care. Our mission is to transform daily routines into refined experiences through exceptional service, attention to detail, and sustainable practices.":"في أكويا لخدمات الغسيل الفاخرة، نسعى لتقديم حلول الغسيل والتوصيل والعطور المخصصة المميزة التي تجمع بين التكنولوجيا والفن والعناية. مهمتنا هي تحويل الروتين اليومي إلى تجارب راقية من خلال الخدمة الاستثنائية والاهتمام بالتفاصيل والممارسات المستدامة."}</p>
                </div>
                <div className={`bg-[#131B2B] w-full lg:w-[40%] flex justify-center items-center py-8 ${profile.language=="eng"?"":"order-1"}`}>
                    <h1 className='system-font font-bold text-[32px] md:text-[48px] text-white w-[60%] text-center leading-tight'>{profile.language=="eng"?"Our Mission":"رسالتنا"}</h1>
                </div>
            </div>

            <div className='border border-gray-300 shadow-md shadow-gray-300 p-4 lg:p-8 rounded-2xl '>
                <h1 className='system-font text-[36px] font-bold text-center mb-6'>{profile.language=="eng"?"Our Core Values":"قيمنا الأساسية"}</h1>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 ${profile.language=="eng"?"[direction:ltr]":"[direction:rtl]"}`}>
                    {
                        coreValues.map((item, index) => (
                            <div key={index} className={`flex gap-4 border border-transparent p-6 border-l-4 border-l-yellow-400 shadow-md rounded-2xl my-2`}>
                                <div className='w-15 h-15 flex justify-center items-center rounded-2xl bg-[#D4AF37] shrink-0'>
                                    <GoDotFill className='text-[30px] text-white' />
                                </div>
                                <div>
                                    <h2 className='text-[20px] font-bold'>{profile.language=="eng"?item.heading:item.Arbheading}</h2>
                                    <p className='text-[#364153]'>{profile.language=="eng"?item.description:item.ArbDescription}</p>
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
