import React, { useContext } from 'react'
import MissionImg from '../../assets/vision/mission.png'
import Mission from './Mission'
import {MyContext} from '../usecontext/UseContext'
const Vision_mission = () => {
    const {profile}=useContext(MyContext)
    return (
        <div className='w-[90%] lg:w-[95%] mx-auto py-10'>
            <div className='w-fit text-center mx-auto py-8'>
                <h1 className='text-[36px] md:text-[48px] font-bold system-font'>{profile.language=="eng"?"Vision & Mission":"الرؤية والرسالة"}</h1>
                <p className='text-[20px] font-semibold text-[#d4af37]'>{profile.language=="eng"?"Akoya Premium Laundry":"أكويا لخدمات الغسيل الفاخرة"}</p>
                <p className='text-[#4a5565] italic'>{profile.language=="eng"?"Redefining Fabric Care and Personal Luxury in Qatar":"إعادة تعريف العناية بالملابس والفخامة الشخصية في قطر"}</p>
                <div className='text-[#4a5565] w-30 h-1 bg-[#d4af37] mx-auto my-3'></div>
            </div>
            <div className='flex flex-col lg:flex-row py-6 gap-10'>
                <div className={`w-full  lg:w-[35%] flex flex-col gap-4 ${profile.language=="eng"?"":"lg:order-2"}`}>
                    <div className='w-full h-80 lg:h-[85%] relative bg-center object-cover rounded-2xl overflow-hidden' style={{ backgroundImage: `url(${MissionImg})` }}>
                        <div className={`absolute top-0 px-5 h-full w-full text-white bg-linear-to-t from-[#0c0b0b6e] via-[#0c0b0b6e] to-[#0c0b0b2f] flex flex-col justify-end py-4 ${profile.language=="eng"?"":"items-end"}`}>
                            <h2 className='system-font font-bold text-[24px]'>{profile.language=="eng"?"Excellence in Every Detail":"التميز في كل تفصيلة"}</h2>
                            <p className='text-[14px]'>{profile.language=="eng"?"Technology, Artistry, and Care":"تكنولوجيا، فن، وعناية"}</p>
                        </div>
                    </div>
                    <div className='h-[15%] bg-[#D4AF37] rounded-2xl flex flex-col justify-center p-8 gap-4 text-white'>
                        <h1 className={`text-[18px] font-bold ${profile.language=="eng"?"":"text-right"}`}>{profile.language=="eng"?"Experience Excellence Today":"اختبر التميز اليوم"}</h1>
                        <button className='font-bold bg-white py-4 rounded w-full text-center text-[#D4AF37] cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.05]'>{profile.language=="eng"?"Book Now":"احجز الآن"}</button>
                    </div>
                </div>
                <div className={`w-full lg:w-[65%] ${profile.language=="eng"?"":"lg:order-1"}`}>
                    <Mission />
                </div>
            </div>
        </div>
    )
}

export default Vision_mission
