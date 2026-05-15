import React, { useContext, useState } from 'react'
import { MyContext } from '../usecontext/UseContext'
import AkoyaPlastic from '../../assets/home/images/akoyaplastic.png'
import AkoyaFabric from '../../assets/home/images/akoyafabric.png'
import AkoyaBox from '../../assets/home/images/akoyabox.png'
import { IoCheckmarkOutline } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Touch = () => {
    const { profile, setProfile } = useContext(MyContext)
    const [selectedCard, SetSelectedCard] = useState(null)
    const PackagingOptions = [
        {
            Img: AkoyaPlastic,
            bonusEng: "Included",
            headingEng: "Plastic Wrap",
            descriptionEng: "Crystal-clear protective wrapping with our embossed gold seal for discreet luxury.",
            bulletsEng: ["Medical-grade transparency", "Anti-static interior", "Recyclable material", "Tamper-evident closure"],

            bonusArb: "مجاني",
            headingArb: "تغليف بلاستيكي",
            descriptionArb: "تغليف شفاف بحماية مميزة وختم ذهبي لنقل الفخامة بكل أناقة.",
            bulletsArb: ["شفافية طبية", "داخل مقاوم للكهرباء الساكنة", "مادة قابلة لإعادة التدوير", "إغلاق آمن يظهر العبث"]

        },
        {
            Img: AkoyaFabric,
            bonusEng: "+10 QAR",
            headingEng: "Luxury Fabric Wrap",
            descriptionEng: "Cashmere-lined protective casing with magnetic closure and monogram option.",
            bulletsEng: ["Italian wool exterior", "Silk-lined interior", "Magnetic seal", "Reusable design"],

            bonusArb: "+١٠ ريال",
            headingArb: "تغليف قماشي فاخر",
            descriptionArb: "غلاف مبطن بالكشمير بإغلاق مغناطيسي وخيار إضافة الأحرف الأولى",
            bulletsArb: ["صوف إيطالي فاخر", "بطانة من الحرير", "إغلاق مغناطيسي", "تصميم قابل لإعادة الاستخدام"]
        },
        {
            Img: AkoyaBox,
            bonusEng: "+4 QAR",
            headingEng: "Premium Gift Box",
            descriptionEng: "Handcrafted wooden presentation case with velvet interior and scent capsule.",
            bulletsEng: ["Sandalwood construction", "French velvet lining", "Integrated scent capsule", "Heirloom quality"],

            bonusArb: "+٤ ريال",
            headingArb: "علبة هدية فاخرة",
            descriptionArb: "صندوق خشبي مصنوع يدويًا ببطانة مخملية وكبسولة عطرية",
            bulletsArb: ["مصنوع من خشب الصندل", "بطانة من المخمل الفرنسي", "كبسولة عطر مدمجة", "جودة تدوم للأجيال"]
        },
    ]
    return (
        <div className='my-6'>
            <div className='py-8' data-aos="fade-up">
                <h1 className='text-[36px] font-light text-center mb-4'>{profile.language == "eng" ? "The Final Touch" : "اللمسة النهائية"}</h1>
                <div className='w-[90%] sm:w-[70%] md:w-[40%] lg:w-[30%] mx-auto h-0.5 mb-10 bg-[#D4AF37] text-center'>
                    <p className='w-fit px-4 mx-auto text-[18px] text-[#D4AF37] tracking-widest font-medium -translate-y-4 bg-white'>{profile.language == "eng" ? "PACKAGING OPTIONS" : "خيارات التغليف"}</p>
                </div>
            </div>

            <div className='w-[90%] lg:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 '>
                {
                    PackagingOptions.map((item, index) => (
                        <div data-aos="fade-up" key={index} className={`border shadow-md shadow-gray-200 hover:shadow-gray-300 hover:scale-[1.03] rounded-2xl  transition-all  duration-300 ease-in-out relative ${selectedCard == index ? "border-4 border-[#D4AF37] scale-[1.04]" : "border-gray-300"}`} onClick={() => SetSelectedCard(index)}>
                            <div className='bg-linear-to-b from-gray-100 via-gray-300 to-gray-600  h-90 rounded-t-2xl  flex justify-center items-center relative'>
                                <img src={item.Img} alt="" className='h-90 rounded-t-2xl  ' />
                                <span className={`absolute text-[14px] font-medium bg-[#D4AF37] px-4 py-2 rounded-4xl bottom-3 bouns-element ${selectedCard == index ? "bg-black text-[#D4AF37]" : ""} ${profile.language == "eng" ? "left-3" : "right-3"}`}>{profile.language == "eng" ? item.bonusEng : item.bonusArb}</span>
                                <p className={`absolute text-[14px] -top-0.5  -right-1 lg:-right-10  -rotate-45 bg-[#D4AF37] px-6 py-1 text-white ${selectedCard == index ? "" : "hidden"}`}>Selected</p>
                            </div>

                            <div className={`p-6 ${profile.language == "eng" ? "" : "text-right"}`}>
                                <h3 className='text-[20px] font-medium'>{profile.language == "eng" ? item.headingEng : item.headingArb}</h3>
                                <p className='text-[14px]'>{profile.language == "eng" ? item.descriptionEng : item.descriptionArb}</p>
                                <ul className={`py-2 flex flex-col ${profile.language == "eng" ? "" : "items-end"}`}>
                                    {profile.language == "eng" && item.bulletsEng.map((bullet, index) => (
                                        <li key={index} className="text-[14px] flex items-center  gap-4 my-1">
                                            <IoCheckmarkOutline className='text-[#D4AF37] text-[20px]' />
                                            {bullet}
                                        </li>
                                    ))}

                                    {profile.language == "arb" && item.bulletsArb.map((bullet, index) => (
                                        <li key={index} className={`text-[14px] flex items-center  gap-4 my-1 ${profile.language == "eng" ? "" : "flex-row-reverse"}`}>
                                            <IoCheckmarkOutline className='text-[#D4AF37] text-[20px]' />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div data-aos="fade-up" className={`mt-8 flex  items-center gap-5 text-white bg-[#1C1C1C] text-[14px] py-4  px-8 rounded-4xl w-fit mx-auto font-medium hover:scale-105 transition-all duration-300 ease-in-out ${profile.language=="eng"?"":"flex-row-reverse"}`}>
                <Link to={'/book-now'}>{profile.language=="eng"?"Book Your Order":"احجز طلبك"} </Link>
                <FaBriefcase />
            </div>
        </div>
    )
}
export default Touch
