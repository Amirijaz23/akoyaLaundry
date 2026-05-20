import React, { useContext, useState, useEffect } from 'react'
import { MyContext } from '../usecontext/UseContext'
import Oud from '../../assets/book-now/oud.png'
import EngTranslation from '../booknow/Translation/Eng/Step3.json'
import ArbTranslation from '../booknow/Translation/Arb/Step3.json'
const Step3 = () => {
    const { profile, setProfile } = useContext(MyContext)
    const translation = profile.language == "eng" ? EngTranslation : ArbTranslation
    useEffect(() => {
        if (profile.servicePage == 3 && !profile.selectedOption) {
            setProfile(prev => ({ ...prev, selectedOption: true }))
        }
    }, [profile.servicePage, profile.selectedOption])
    return (
        profile.servicePage == 3 &&
        <div>
            <h1 className={`text-[20px] font-light ${profile.language == "eng" ? "" : "text-right"}`}>{translation.steam_section.heading}</h1>
            <div className='grid grid-col-1 md:grid-cols-2 gap-4 my-4'>
                <p className={`system-font font-medium  p-4 rounded text-center  hover:scale-105 transition-all duration-300 ease-in-out border ${profile.steamFinishing ? "border-yellow-400" : " border-gray-400"}`} onClick={() => setProfile(prev => ({ ...prev, steamFinishing: true }))}>{translation.steam_section.options[0]}</p>
                <p className={`system-font font-medium border p-4 rounded text-center  hover:scale-105 transition-all duration-300 ease-in-out ${!profile.steamFinishing ? "border-yellow-400" : " border-gray-400"}`} onClick={() => setProfile(prev => ({ ...prev, steamFinishing: false }))}>{translation.steam_section.options[1]}</p>
            </div>

            <h1 className={`text-[20px] font-light ${profile.language == "eng" ? "" : "text-right"}`}>{translation.oud_section.heading}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>
                <p className={`system-font font-medium  p-4 rounded text-center  hover:scale-105 transition-all duration-300 ease-in-out border ${profile.Incense ? "border-yellow-400" : " border-gray-400"}`} onClick={() => setProfile(prev => ({ ...prev, Incense: true, selectedOption: false }))}>{translation.steam_section.options[0]}</p>
                <p className={`system-font font-medium border p-4 rounded text-center  hover:scale-105 transition-all duration-300 ease-in-out ${!profile.Incense ? "border-yellow-400" : " border-gray-400"}`} onClick={() => setProfile(prev => ({ ...prev, Incense: false, selectedOption: true }))} >{translation.steam_section.options[1]}</p>
            </div>
            {
                profile.Incense &&
                <div >
                    <div className={`flex flex-col ${profile.language == "eng" ? "" : "items-end"}`}>
                        <h1 className={`text-[20px] font-light ${profile.language == "eng" ? "" : "text-right"}`}>{translation.oud_section.OudObject.Choose_oud}</h1>
                        <div className={`h-70 w-70 border  rounded-2xl my-4 flex items-center flex-col p-2 gap-3  ${profile.Incense ? "border-yellow-400" : "border-gray-400"}`} onClick={() => setProfile(prev => ({ ...prev, Incense: true, selectedOption: false }))}>
                            <img src={Oud} alt="" className='h-[70%]  object-cover' />
                            <h2 className='text-[14px] font-semibold'>{translation.oud_section.OudObject.Oud_title}</h2>
                            <p className='text-[12px] px-6 text-center'>{translation.oud_section.OudObject.Oud_Description}</p>
                        </div>
                    </div>
                    <div className={`flex items-center gap-3 border py-2 mb-4 px-4  border-[#193cb8be] rounded bg-[#193cb80e] text-[#193cb8] ${profile.language == "eng" ? "" : "flex-row-reverse text-right"}`}>
                        <div>
                            <input type="checkbox" name="" id="" onChange={(e) => setProfile(prev => ({ ...prev, selectedOption: e.target.checked }))} />
                        </div>
                        <div className='text-[14px] font-medium'>
                            <h1>{translation.check_box.check_heading}</h1>
                            <p className='text-[12px]'>{translation.check_box.check_description}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Step3
