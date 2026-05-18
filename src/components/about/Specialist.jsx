import React, { useContext } from 'react'
import {MyContext} from '../usecontext/UseContext'
import AhmadPic from '../../assets/about/ahmad.png'
import LaylaPic from '../../assets/about/layla.png'
import YousifPic from '../../assets/about/yousif.png'


const Specialist = () => {
    const {profile}=useContext(MyContext)
    const TeamMembers = [
        {
            Img: AhmadPic,
            name: "Ahmed Al-Mansoori",
            designtaion: "Head of Couture Care",
            experience: "20+ years in luxury garment care",
            ArbName:"أحمد المنصوري",
            ArbDesignation:"رئيس قسم العناية بالأزياء",
            Arbexperience:"أكثر من 20 سنة في العناية الفاخرة بالملابس",
        },
        {
            Img: LaylaPic,
            name: "Layla Hassan",
            designtaion: "Fabric Technology Expert",
            experience: "Fabric scientist and preservation expert",
            ArbName:"ليلى حسن",
            ArbDesignation:"خبيرة تقنية الأقمشة",
            Arbexperience:"عالمة أقمشة وخبيرة حفظ",
        },
        {
            Img: YousifPic,
            name: "Yousef Ibrahim",
            designtaion: "Operations Director",
            experience: "Ensuring seamless service delivery",
            ArbName:"يوسف إبراهيم",
            ArbDesignation:"مدير العمليات",
            Arbexperience:"ضمان تقديم خدمات بلا عناء",
        },
    ]
    return (
        <div className=' w-[90%] lg:w-[80%] mx-auto py-8'>
            <div className='flex flex-col items-center gap-4 justify-centent text-center'>
                <h2 className='text-[36px] font-light system-font'>{profile.language=="eng"?"Meet Our Fabric Specialists":"تعرف على خبراء الأقمشة"}</h2>
                <div className='bg-[#D4AF37] h-px w-25 mx-auto'></div>
                <p className='w-full md:w-[50%] text-center mx-auto'>{profile.language=="eng"?"Our team of garment care experts brings decades of combined experience in handling luxury fabrics":"فريقنا من خبراء العناية بالملابس يمتلك عقودًا من الخبرة في التعامل مع الأقمشة الفاخرة"}</p>
            </div>
            <div className={`grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 my-6 gap-6 ${profile.language=="eng"?"[direction-ltr]":"[direction:rtl]"}`}>
                {
                    TeamMembers.map((item,index) => (
                        <div data-aos="fade-up" key={index} className='bg-linear-to-b from-[#d1ceca] to-[#f5f4f3] rounded-2xl overflow-hidden flex flex-col justify-center items-center p-6 gap-2'>
                            <div className='w-40 h-40 rounded-full overflow-hidden border-3 border-yellow-500'>
                                <img src={item.Img} alt="" className='w-full h-full object-cover' />
                            </div>
                            <h1 className='system-font text-[20px] font-medium'>{profile.language=="eng"?item.name:item.ArbName}</h1>
                            <p className='text-[#D4AF37] text-[18px] font-medium mb-2'>{profile.language=="eng"?item.designtaion:item.ArbDesignation}</p>
                            <p className='text-[14px] system-font text-center'>{profile.language=="eng"?item.experience:item.Arbexperience}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Specialist
