import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import ExclusiveImg from '../../assets/home/images/exclusive.png'
import { FaRegStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { MyContext } from '../usecontext/UseContext'
import { GoInfo } from "react-icons/go";

const Exclusive = () => {
  const { profile } = useContext(MyContext)
  const Eng_bullets = ["Priority scheduling with 2-hour pickup windows","Dedicated garment concierge","Complimentary fragrance infusion","Luxury packaging as standard","Bi-annual complimentary couture care"]
  const Arb_bullets = ["جدولة أولوية بإطار زمني لمدة ساعتين للاستلام", "كونسيرج خاص للملابس", "إضافة عطر مجانية", "تغليف فاخر كمعيار", "عناية بالأزياء الراقية مجانًا مرتين سنويًا", "عروض موسمية حصرية"]

  return (
    <div className='bg-[#1C1C1C] py-8'>
      <div  className='h-full w-[90%] md:w-[88%] mx-auto flex flex-col md:flex-row items-center gap-5 py-8'>
        <div data-aos="fade-up" className={`w-full mx-auto md:w-[50%] rounded-2xl  relative ${profile.language=="eng"?"order-1":"order-2"}`}>
          <img src={ExclusiveImg} alt="" className='w-full h-full rounded-2xl object-cover' />
          <div className='w-full h-50 absolute bottom-0 bg-linear-to-t from-[#0f0f0fc9] to-[#0f0f0f00] rounded-2xl'>
          </div>
          <div className={`absolute bg-[#D4B03D] px-6 rounded-4xl py-3 text-[16px] font-bold text-black -top-6 ${profile.language=="eng"?"md:-right-6 -right-2":"-left-2 md:-left-6"} `}>
            < FaRegStar className='inline-block align-middle me-2' />
            <p className='inline-block align-middle'>{profile.language == "eng" ? "EXCLUSIVE" : "حصري"}</p>
          </div>
        </div>

        <div data-aos="fade-up" className={`w-full mx-auto md:w-[50%] text-white p-4 ${profile.language=="eng"?"order-2":"order-1 text-right flex-wrap-reverse"}`}>
          <div className='flex flex-col gap-3'>
            <h1 className='text-[36px] font-light text-[#D4B03D]'>{profile.language == "eng" ? "Akoya Club" : "نادي أكويا"}</h1>
            <p className='text-[18px] font-medium'>{profile.language == "eng" ? "FOR THE FEW WHO KNOW" : "للقلة الذين يعرفون"}</p>
            <div className={`w-[15%] h-0.5 bg-[#D4B03D] ${profile.language=="eng"?"":"ms-[85%]"}`}></div>
            <p>{profile.language == "eng" ? "Our invitation-only membership program offers unparalleled benefits for those who demand the absolute best in garment care and convenience." : "برنامج العضوية الحصري بالدعوة فقط يقدّم مزايا لا مثيل لها لأولئك الذين يطالبون بأفضل رعاية ممكنة للملابس"}</p>
          </div>
          {
            profile.language == "eng" ?
             Eng_bullets.map((item, index) => (
                <div data-aos="fade-right" key={index} className='flex items-center gap-4 my-4'>
                  <FaCheck className='text-[#D4B03D]' />
                  <p>{item}</p>
                </div>))
              :
              Arb_bullets.map((item, index) => (
                <div key={index} className='flex flex-row-reverse items-center gap-4 my-4'>
                  <FaCheck className='text-[#D4B03D]' />
                  <p>{item}</p>
                </div>
              ))
          }
          <div data-aos="fade-up" className={`flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 py-4 ${profile.language=="eng"?"":"items-end sm:justify-center"}`}>
            <div className={`flex  items-center gap-5  border-2 border-[#D4B03D] text-[#D4B03D]  py-3 font-semibold px-8 rounded-4xl w-fit   hover:bg-[#D4B03D] hover:text-black ${profile.language == "eng" ? "" : "flex-row-reverse"}`}>
              <Link to={'/book-now'}>{profile.language == "eng" ? "Request Invitation" : "طلب دعوة"} </Link>
              <FaPlus />
            </div>
            <div className={`flex  items-center gap-5  border-2 border-[#D4B03D] text-black  bg-[#D4B03D] py-3 font-semibold px-8 rounded-4xl w-fit  hover:bg-[#D4B03D] hover:text-black ${profile.language == "eng" ? "" : "flex-row-reverse"}`}>
              <Link to={'/book-now'}>{profile.language == "eng" ? "Learn More" : "اعرف المزيد"} </Link>
              <GoInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Exclusive
