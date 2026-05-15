import React, { useContext } from 'react'
import Exec1 from '../../assets/home/images/hero1.png'
import Exec2 from '../../assets/home/images/hero2.png'
import Exec3 from '../../assets/home/images/hero3.png'
import { BsStars } from "react-icons/bs";
import { PiShirtFoldedThin } from "react-icons/pi";
import { GiHanger } from "react-icons/gi";
import { LiaAngleRightSolid } from "react-icons/lia";
import { MyContext } from '../usecontext/UseContext';
import { Link, useNavigate } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";

const Signature = () => {
  const navigate = useNavigate()
  const { profile, setProfile } = useContext(MyContext)
  const CardData = [
    {
      bgImg: Exec1,
      Icon: BsStars,
      headingEng: "The Platinum Care",
      descriptionEng: "Our highest tier service for your most precious garments. Hand-washed, steamed, and wrapped in protective tissue.",
      headingArb: "حفظ الأزياء الراقية",
      descriptionArb: "عناية متخصصة لقطع المصممين والأقمشة الحساسة. تنظيف بجودة المتاحف للحفاظ على النسيج واللون.",
    },
    {
      bgImg: Exec2,
      Icon: PiShirtFoldedThin,
      headingEng: "Executive Collection",
      descriptionEng: "Precision care for business attire. Perfect creases, stain removal, and fabric revitalization for your professional image.",
      headingArb: "مجموعة التنفيذيين",
      descriptionArb: "عناية دقيقة للملابس الرسمية. إزالة البقع، الكي المثالي، وإنعاش الأقمشة."
    },
    {
      bgImg: Exec3,
      Icon: GiHanger,
      headingEng: "Couture Preservation",
      descriptionEng: "Specialized care for designer pieces and delicate fabrics. Museum-quality cleaning to maintain texture and color integrity.",
      headingArb: "العناية البلاتينية",
      descriptionArb: "خدمتنا الأعلى للملابس الثمينة. تغسل باليد، تكوى بالبخار وتُلف بعناية."
    },
  ]


  return (
    <div>
      <h1 data-aos="fade-up"  className='text-[48px] font-light text-center mb-4'>{profile.language == "eng" ? "Signature Lines" : "خطوط التميز"}</h1>
      <div data-aos="fade-up" className='w-[90%] sm:w-[70%] md:w-[40%] lg:w-[30%] mx-auto h-0.5 mb-10 bg-[#D4AF37] text-center'>
        <p  className='w-fit px-4 mx-auto text-[18px] text-[#D4AF37] tracking-widest font-medium -translate-y-4 bg-white'>{profile.language == "eng" ? "THE AKOYA COLLECTION" : "مجموعة أكويا"}</p>
      </div>

      <div className={`w-[95%] md:w-[90%]  gap-4 lg:gap-8 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${profile.language=="eng"?"":"lft"}`}>
        {
          CardData.map((item, index) => (
            <div data-aos="fade-up" key={index} style={{ backgroundImage: `url(${item.bgImg})` }} className={`h-80 rounded-2xl bg-cover text-white p-6 flex justify-center flex-col bg-[#0a0a0a8a] bg-blend-overlay gap-1 hover:-translate-y-2 hover:bg-[#0a0a0a5e] transition-all duration-1000 ease-in-out relative ${profile.language == "eng" ? "" : "items-end"}`}>
              <div className='w-15 h-15 bg-[#D4AF37] flex justify-center items-center rounded-full'>
                <item.Icon className='text-[30px]' />
              </div>
              <h2 className='text-[24px] font-medium'>{profile.language == "eng" ? item.headingEng : item.headingArb}</h2>
              <p className={`text-[14px] ${profile.language == "eng" ? "" : "text-right"}`}>{profile.language == "eng" ? item.descriptionEng : item.descriptionArb}</p>
              <div className={`flex  gap-3 items-center bg-[#D4AF37] w-fit px-4 py-2 text-black rounded-4xl absolute bottom-6 hover:bg-black hover:text-[#D4AF37] ${profile.language == "eng" ? "" : "flex-row-reverse"}`} onClick={() => navigate('/services')} >
                <button className='text-[14px] font-medium '>{profile.language == "eng" ? "Discover" : "استكشاف"}</button>
                <LiaAngleRightSolid />
              </div>
            </div>
          ))
        }
      </div>
      <div data-aos="fade-up" className="flex justify-center my-6">
        <Link to={'/services'} className={`flex gap-4 items-center px-6 border w-fit py-3 rounded-4xl hover:bg-black hover:text-white  ${profile.language == "eng" ? "" : "flex-row-reverse"}`} >
          <p>{profile.language == "eng" ? "View All Collections" : "عرض جميع المجموعات"}</p>
          <GoArrowRight />
        </Link>
      </div>
    </div>
  )
}

export default Signature
