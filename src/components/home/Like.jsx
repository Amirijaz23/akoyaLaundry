import React, { useContext } from 'react'
import { FaSoap } from "react-icons/fa6";
import { MyContext } from '../usecontext/UseContext';
import { Link } from 'react-router-dom';


const Like = () => {
  const { profile, setProfile } = useContext(MyContext)
  const ExperinceData = [
    {
      Icon: "🧼",
      headingEng: "Standard Wash",
      descriptionEng: "Our signature 48-hour service with gentle cleaning, eco-friendly detergents, and basic folding.",
      priceEng: "From 50 QAR",
      headingArb: "غسيل عادي",
      descriptionArb: "خدمتنا المميزة خلال ٤٨ ساعة بالتنظيف اللطيف والمنظفات البيئية والطي الأساسي.",
      priceArb: "ابتداءً من ٥٠ ريال"
    },
    {
      Icon: "⚡",
      headingEng: "Express Wash",
      descriptionEng: "Need it fast? Get 24-hour turnaround, priority processing, and premium care.",
      priceEng: "From 80 QAR",
      headingArb: "غسيل سريع",
      descriptionArb: "تحتاجها بسرعة؟ خدمة خلال ٢٤ ساعة مع معالجة ذات أولوية ورعاية مميزة.",
      priceArb: "ابتداءً من ٨٠ ريال"
    },
  ]
  return (
    <div className='my-8'>
      <div className='flex flex-col py-6' data-aos="fade-up">
        <h1 className='text-[36px] lg:text-[48px] font-bold text-center'>{profile.language == "eng" ? "How Would You Like It Washed?" : "كيف تود غسيل ملابسك؟"}</h1>
        <p className='text-[18px] font-semibold text-center text-[#D4AF37]'>
          {profile.language == "eng" ? "CHOOSE YOUR EXPERIENCE" : "اختر تجربتك"}</p>
      </div>

      <div className={`w-[90%] mx-auto flex flex-col md:flex-row gap-10 my-6 ${profile.language == "eng" ? "" : "md:flex-row-reverse"}`}>
        {
          ExperinceData.map((item, index) => (
            <div data-aos="fade-up" key={index} className={`w-full md:w-[50%] bg-[#F5E1DA] gap-4 px-4 py-4 md:px-8 rounded-2xl shadow-gray-200 hover:shadow-gray-300 shadow-lg ${profile.language == "eng" ? "" : "text-right"}`}>
              <p className='text-[48px]'>{item.Icon}</p>
              <h3 className='text-[24px] font-bold'>{profile.language == "eng" ? item.headingEng : item.headingArb}</h3>
              <p className='text-[16px]'>{profile.language == "eng" ? item.descriptionEng : item.descriptionArb}</p>
              <p className='text-[18px] font-medium my-4 text-[#D4AF37]'>{profile.language == "eng" ? item.priceEng : item.priceArb}</p>
            </div>
          ))
        }
      </div>
      <div data-aos="fade-up" className='flex justify-center mt-10'>
        <Link to={'/services'} className='text-[16px] font-semibold px-6 py-4 rounded-4xl bg-[#D4AF37] text-center hover:scale-105 transition-all duration-300 ease-in-out'>{profile.language=="eng"?"Continue To Garment Selection":"الاستمرار لاختيار الملابس"}</Link>
      </div>
    </div>
  )
}

export default Like
