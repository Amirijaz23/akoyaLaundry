import React from 'react'
import AhmadPic from '../../assets/about/ahmad.png'
import LaylaPic from '../../assets/about/layla.png'
import YousifPic from '../../assets/about/yousif.png'

const Specialist = () => {
    const TeamMembers = [
        {
            Img: AhmadPic,
            name: "Ahmed Al-Mansoori",
            designtaion: "Head of Couture Care",
            experience: "20+ years in luxury garment care"
        },
        {
            Img: LaylaPic,
            name: "Layla Hassan",
            designtaion: "Fabric Technology Expert",
            experience: "Fabric scientist and preservation expert"
        },
        {
            Img: YousifPic,
            name: "Yousef Ibrahim",
            designtaion: "Operations Director",
            experience: "Ensuring seamless service delivery"
        },
    ]
    return (
        <div className=' w-[90%] lg:w-[80%] mx-auto py-8'>
            <div className='flex flex-col items-center gap-4 justify-centent text-center'>
                <h2 className='text-[36px] font-light system-font'>Meet Our Fabric Specialists</h2>
                <div className='bg-[#D4AF37] h-px w-25 mx-auto'></div>
                <p className='w-full md:w-[50%] text-center mx-auto'>Our team of garment care experts brings decades of combined experience in handling luxury fabrics</p>
            </div>
            <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 my-6 gap-6'>
                {
                    TeamMembers.map((item,index) => (
                        <div data-aos="fade-up" key={index} className='bg-linear-to-b from-[#d1ceca] to-[#f5f4f3] rounded-2xl overflow-hidden flex flex-col justify-center items-center p-6 gap-2'>
                            <div className='w-40 h-40 rounded-full overflow-hidden border-3 border-yellow-500'>
                                <img src={item.Img} alt="" className='w-full h-full object-cover' />
                            </div>
                            <h1 className='system-font text-[20px] font-medium'>{item.name}</h1>
                            <p className='text-[#D4AF37] text-[18px] font-medium mb-2'>{item.designtaion}</p>
                            <p className='text-[14px] system-font text-center'>{item.experience}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Specialist
