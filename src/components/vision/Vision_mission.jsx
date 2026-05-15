import React from 'react'
import MissionImg from '../../assets/vision/mission.png'
import Mission from './Mission'
const Vision_mission = () => {
    return (
        <div className='w-[90%] lg:w-[95%] mx-auto py-10'>
            <div className='w-fit text-center mx-auto py-8'>
                <h1 className='text-[36px] md:text-[48px] font-bold system-font'>Vision & Mission</h1>
                <p className='text-[20px] font-semibold text-[#d4af37]'>Akoya Premium Laundry</p>
                <p className='text-[#4a5565] italic'>Redefining Fabric Care and Personal Luxury in Qatar</p>
                <div className='text-[#4a5565] w-30 h-1 bg-[#d4af37] mx-auto my-3'></div>
            </div>
            <div className='flex flex-col lg:flex-row py-6 gap-10'>
                <div className='w-full  lg:w-[35%] flex flex-col gap-4'>
                    <div className='w-full h-80 lg:h-[85%] relative bg-center object-cover rounded-2xl overflow-hidden' style={{ backgroundImage: `url(${MissionImg})` }}>
                        <div className='absolute top-0 px-5 h-full w-full text-white bg-linear-to-t from-[#0c0b0b6e] via-[#0c0b0b6e] to-[#0c0b0b2f] flex flex-col justify-end py-4'>
                            <h2 className='system-font font-bold text-[24px]'>Excellence in Every Detail</h2>
                            <p className='text-[14px]'>Technology, Artistry, and Care</p>
                        </div>
                    </div>
                    <div className='h-[15%] bg-[#D4AF37] rounded-2xl flex flex-col justify-center p-8 gap-4 text-white'>
                        <h1 className='text-[18px] font-bold'>Experience Excellence Today</h1>
                        <button className='font-bold bg-white py-4 rounded w-full text-center text-[#D4AF37] cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.05]'>Book Now</button>
                    </div>
                </div>
                <div className='w-full lg:w-[65%]'>
                    <Mission />
                </div>
            </div>
        </div>
    )
}

export default Vision_mission
