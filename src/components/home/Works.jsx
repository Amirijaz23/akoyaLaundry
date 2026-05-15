import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../usecontext/UseContext'
import Video1 from '../../assets/home/videos/Pickup.mp4'
import Video2 from '../../assets/home/videos/professional_collection.mp4'
import Video3 from '../../assets/home/videos/ExpertProcessing.mp4'
import Video4 from '../../assets/home/images/workflow4.png'
import { CiCalendar } from "react-icons/ci";
import { IoMdBriefcase } from "react-icons/io";
import { FaBoltLightning,FaPlus } from "react-icons/fa6";
import { FiCheck } from "react-icons/fi";
import { FaBriefcase } from "react-icons/fa";


const Works = () => {
    const { profile } = useContext(MyContext)
    const WorkFlowData = [
        {
            id: 1,
            video: Video1,
            Icon: CiCalendar,
            headingEng: "Schedule Your Pickup",
            descriptionEng: "Book through our app, WhatsApp, or website. We offer flexible 2-hour pickup windows.",
            bulletEng: ["24/7 booking availability", "Recurring pickup scheduling available"],

            headingArb: "جدول الاستلام",
            descriptionArb: "احجز من خلال التطبيق أو الواتساب أو الموقع. نقدم نوافذ مرنة مدتها ساعتان.",
            bulletArb: ["حجوزات متاحة 24/7", "جدولة استلام متكررة متاحة"]
        },
        {
            id: 2,
            video: Video2,
            Icon: IoMdBriefcase,
            headingEng: "Professional Collection",
            descriptionEng: "Our uniformed valets arrive in discreet luxury vehicles with garment bags.",
            bulletEng: ["Contactless pickup available", "Digital receipt provided"],

            headingArb: "جمع احترافي",
            descriptionArb: "يصل موظفونا بزي رسمي في مركبات فاخرة مزودة بحقائب الملابس.",
            bulletArb: ["استلام بدون تلامس متاح", "إيصال رقمي مقدم"]
        },
        {
            id: 3,
            video: Video3,
            Icon: FaBoltLightning,
            headingEng: "Expert Processing",
            descriptionEng: "Your garments receive specialized care at our state-of-the-art facility.",
            bulletEng: ["Individual garment tracking", "Quality control at every stage"],

            headingArb: "معالجة احترافية",
            descriptionArb: "تُعالج الملابس بعناية في منشأتنا الحديثة ذات التقنية العالية.",
            bulletArb: ["تتبع فردي لكل قطعة", "مراقبة جودة في كل مرحلة"]
        },
        {
            id: 4,
            video: Video4,
            Icon: FiCheck,
            headingEng: "Luxury Delivery",
            descriptionEng: "Impeccably packaged garments returned at your preferred time.",
            bulletEng: ["Same-day delivery available", "Hanger-ready with protective covers"],

            headingArb: "توصيل فاخر",
            descriptionArb: "إرجاع الملابس المغلفة بأناقة في الوقت الذي يناسبك.",
            bulletArb: ["توصيل في نفس اليوم متاح", "جاهزة على الشماعة مع أغلفة واقية"]
        },

    ]
    return (
        <div className='py-8'>
            <div data-aos="fade-up" className='py-8'>
                <h1 className='text-[36px] font-light text-center mb-4'>{profile.language == "eng" ? "How It Works" : "كيف يعمل"}</h1>
                <div className='w-[90%] sm:w-[70%] md:w-[40%] lg:w-[30%] mx-auto h-0.5 mb-10 bg-[#D4AF37] text-center'>
                    <p className='w-fit px-4 mx-auto text-[18px] text-[#D4AF37] tracking-widest font-medium -translate-y-4 bg-white'>{profile.language == "eng" ? "SEAMLESS PICKUP PROCESS" : "عملية الاستلام السلسة"}</p>
                </div>
            </div>

            <div  className='w-[98%] mx-auto'>
                {
                    WorkFlowData.map((item) => (
                        <div data-aos="fade-up" key={item.id} className={`w-full card flex flex-col items-center py-5 md:py-0 gap-4 md:px-4 lg:px-8 ${profile.language == "eng" && item.id % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"} ${profile.language != "eng" && item.id % 2 != 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>

                            <div className={`w-full md:w-[50%] video-div  flex justify-center items-center relative `}>
                                {
                                    item.id != 4 ? <video src={item.video} autoPlay muted loop className='h-70 md:h-80 w-[90%] rounded-2xl object-cover'></video> : <img src={item.video} className='h-70  md:h-90 w-[90%] rounded-2xl object-cover'></img>
                                }
                                <span className='absolute text-white text-[20px] font-bold py-3 px-5 rounded-full bg-[#D4AF37] left-0'>{item.id}</span>
                            </div>

                            <div className='w-0.5 h-100 bg-yellow-600 hidden md:block'></div>

                            <div className={`w-full md:w-[50%] text-div flex justify-center items-center`}>
                                <div className={`bg-white shadow-md shadow-gray-300 border border-gray-300 p-6 w-[90%] rounded-2xl`}>
                                    <div className={`text-[24px] font-medium flex items-center gap-3 ${profile.language == "eng" ? "" : "flex-row-reverse"}`}>
                                        <item.Icon className='text-[#D4AF37] text-[30px]' />
                                        <p>{profile.language == "eng" ? item.headingEng : item.headingArb}</p>
                                    </div>
                                    <p className={`${profile.language=="eng"?"":"text-right"}`}>{profile.language == "eng" ? item.descriptionEng : item.headingArb}</p>
                                    <div className='h-px bg-gray-300 my-5'></div>

                                    <div>
                                        {
                                            profile.language == "eng" ?
                                                item.bulletEng.map((bullet, index) => (
                                                    <div key={index} className="flex items-center gap-4 $">
                                                        <FiCheck className='text-[#D4AF37]' />
                                                        <p className='text-[14px]'>{bullet}</p>
                                                    </div>
                                                )) :
                                                item.bulletArb.map((bullet, index) => (
                                                    <div key={index} className={`flex items-center gap-4 ${profile.language == "eng" ? "" : "flex-row-reverse"}`}>
                                                        <FiCheck className='text-[#D4AF37]' />
                                                        <p className='text-[14px]'>{bullet}</p>
                                                    </div>
                                                ))
                                        }

                                    </div>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={`mt-8 flex  items-center gap-5 text-white bg-[#1C1C1C] text-[14px] py-4  px-8 rounded-4xl w-fit mx-auto font-medium hover:scale-105 transition-all duration-300 ease-in-out ${profile.language == "eng" ? "" : "flex-row-reverse"}`}>
                <Link to={'/book-now'}>{profile.language == "eng" ? "Schedule Your Pickup" : "جدول استلامك"} </Link>
                <FaPlus />
            </div>
        </div>
    )
}
export default Works
