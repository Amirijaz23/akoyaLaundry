import React, { useContext } from 'react'
import Logo from '../../assets/common/logo.png'
import { FaXTwitter, FaInstagram, FaFacebook, FaAngleRight } from "react-icons/fa6";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

import { Link } from 'react-router-dom';
import { MyContext } from '../usecontext/UseContext'

const Footer = () => {
    const { profile } = useContext(MyContext)
    const SerArb = ["غسيل ممتاز", "التنظيف الجاف", "الكي بالبخار", "تعطير الملابس", "رعاية الأزياء الراقية", "نادي كبار الشخصيات"]
    const SerEng = ["Premium Laundry", "Dry Cleaning", "Steam Pressing", "Fragrance Infusion", "Couture Care", "VIP Club"]
    const Addresses = [
        {
            Icons: [IoLocationOutline, IoCallOutline, MdOutlineMailOutline],
            InfoEng: ["West Bay, Doha, Qatar", "+974 3368 9993", "Akoyaluxurylaundry@gmail.com"],
            InfoArb: ["غرب الخليج، الدوحة، قطر", "+٩٧٤ ٣٣٦٨ ٩٩٩٣", "Akoyaluxurylaundry@gmail.com"]
        }
    ]
    return (
        <div className='bg-[#1C1C1C] py-2'>
            <div className='border  border-y-[#d4af3770]'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-[#ffffffb3] w-[90%] mx-auto py-10'>

                    <div className={`flex flex-col p-4  items-center gap-4 ${profile.language == "eng" ? "" : "md:order-2 lg:order-4"}`}>
                        <img src={Logo} alt="" className='w-35' />
                        <p className={`${profile.language == "eng" ? "" : "text-right"}`}>{profile.language == "eng" ? "Luxury garment care redefined. Serving Doha's discerning clients with unparalleled quality and service." : "رعاية فاخرة للملابس. نخدم عملاء الدوحة المميزين بجودة وخدمة لا مثيل لها."}</p>
                        <div className={`flex  gap-4 ${profile.language == "eng" ? "self-start" : "flex-row-reverse self-end"}`}>
                            <Link to={"/"}><FaXTwitter className='text-[25px]' /></Link>
                            <Link to={"/"}><FaInstagram className='text-[25px]' /></Link>
                            <Link to={"/"}><FaFacebook className='text-[25px]' /></Link>
                        </div>
                    </div>

                    <div className={`md:mb-10 lg:mb-0 ${profile.language == "eng" ? "" : "text-right md:order-1 lg:order-3"}`}>
                        <h2 className='text-[#d4af37] font-medium system-font pb-4 tracking-widest text-[18px]'>{profile.language == "eng" ? "OUR SERVICES" : "خدماتنا"}</h2>
                        {
                            profile.language == "eng" ?
                                SerEng.map((bullet, index) => (
                                    <Link key={index} className='flex items-center gap-3 my-4 hover:translate-x-2 w-fit transition-all duration-300 ease-in-out' to={'/services'}>
                                        <FaAngleRight className='text-[#d4af37]' />
                                        <p className='hover:text-[#d4af37]'>{bullet}</p>
                                    </Link>
                                ))
                                :
                                SerArb.map((bullet, index) => (
                                    <Link key={index} className='flex items-center gap-3 my-3 hover:-translate-x-2 transition-all duration-300 ease-in-out flex-row-reverse float-right w-full' to={'/services'}>
                                        <FaAngleRight className='text-[#d4af37]' />
                                        <p className='hover:text-[#d4af37]'>{bullet}</p>
                                    </Link>
                                ))
                        }
                    </div>

                    <div className={`${profile.language == "eng" ? "" : "text-right md:order-4 lg:order-2"}`}>
                        <h2 className='text-[#d4af37] font-medium system-font pb-4 tracking-widest text-[18px]'>{profile.language == "eng" ? "CONTACT US" : "اتصل بنا"}</h2>
                        {
                            Addresses.map((item, index) => (
                                item.Icons.map((Icon, index) => (
                                    <div key={index} className={`flex items-center gap-3 my-4 ${profile.language == "eng" ? "" : "flex-row-reverse"} `}>
                                        <Icon className='text-[#d4af37] text-[20px]' />
                                        <p>{profile.language == "eng" ? item.InfoEng[index] : item.InfoArb[index]}</p>
                                    </div>
                                ))

                            ))
                        }
                    </div>

                    <div className={`flex flex-col px-2 ${profile.language == "eng" ? "" : "text-right md:order-3  lg:order-1"}`}>
                        <h2 className='text-[#d4af37] font-medium system-font pb-4 tracking-widest text-[18px]'>{profile.language == "eng" ? "NEWSLETTER" : "النشرة الإخبارية"}</h2>
                        <p className='my-2'>{profile.language == "eng" ? "Subscribe for exclusive offers and garment care tips." : "اشترك للحصول على عروض حصرية ونصائح للعناية بالملابس."}</p>
                        <input type="email" placeholder={`${profile.language == "eng" ? "Your Email Address" : " أدخل بريدك الإلكتروني"}`} className={`my-2 border border-[#d4af378a] rounded p-3  ${profile.language == "eng" ? "" : "text-right"} `} />
                        <button className='my-2 bg-[#d4af37] text-black font-medium p-3 rounded hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out'>{profile.language == "eng" ? "Subscribe" : "اشترك"}</button>
                    </div>
                </div>
            </div>
            <div className={`w-[90%] mx-auto flex md:justify-end ${profile.language == "eng" ? "" : "md:justify-start"}`}>
                <div className='my-4 flex gap-4 text-[#ffffffb3]  float-righ '>
                    <Link to={"/"} className='hover:text-[#d4af37]'>{profile.language == "eng" ? "Privacy Policy" : "سياسة الخصوصية"}</Link>
                    <Link to={"/"} className='hover:text-[#d4af37]'>{profile.language == "eng" ? "Term of Service" : "شروط الخدمة"}</Link>
                    <Link to={"/"} className='hover:text-[#d4af37]'>{profile.language == "eng" ? "Sitemap" : "خريطة الموقع"}</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
