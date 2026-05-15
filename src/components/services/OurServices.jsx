import React, { useContext} from 'react'
import {MyContext} from '../usecontext/UseContext'

const OurServices = () => {
    const {profile,setProfile}=useContext(MyContext)
    const category_list = ["All", "Dry Cleaning", "Pressing", "Speciality", "Traditional", "Express", "Add-On"]
    return (
        <div className='py-6' data-aos="fade-up">

            <div>
                <h1 className='text-[36px] font-light text-center mb-4'>Our Services</h1>
                <div className='w-[90%] sm:w-[70%] md:w-[40%] lg:w-[30%] mx-auto h-0.5 mb-10 bg-[#D4AF37] text-center'>
                    <p className='w-fit px-4 mx-auto text-[18px] text-[#D4AF37] tracking-widest font-medium -translate-y-4 bg-white'>LUXURY GARMENT CARE</p>
                </div>
            </div>

            <div className='flex justify-center gap-4 flex-wrap w-[90%] md:w-[80%] mx-auto'>
                {
                    category_list.map((bullet, index) => (
                        <p key={index} className={`text-[14px] font-medium px-6 py-3 rounded-4xl hover:scale-105 active:scale-95 ${profile.cardCategory==bullet?"bg-black text-[#D4AF37] hover:bg-black":"hover:bg-gray-300 "}`} onClick={()=>setProfile(prev=>({...prev,cardCategory:bullet}))}>{bullet}</p>
                        
                    ))
                }
            </div>
        </div>
    )
}

export default OurServices
