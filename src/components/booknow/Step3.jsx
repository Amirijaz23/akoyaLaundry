import React, { useContext, useState, useEffect } from 'react'
import { MyContext } from '../usecontext/UseContext'
import Oud from '../../assets/book-now/oud.png'

const Step3 = () => {
    const { profile, setProfile } = useContext(MyContext)
    useEffect(() => {
        if (profile.servicePage == 3) {
            setProfile(prev => ({ ...prev, selectedOption: true }))
        }
    }, [profile.servicePage])
    return (
        profile.servicePage == 3 &&
        <div>
            <h1 className='text-[20px] font-light'>Do you want us to steam the garments?</h1>
            <div className='grid grid-col-1 md:grid-cols-2 gap-4 my-4'>
                <p className={`system-font font-medium  p-4 rounded text-center  hover:scale-105 transition-all duration-300 ease-in-out border ${profile.steamFinishing ? "border-yellow-400" : " border-gray-400"}`} onClick={() => setProfile(prev => ({ ...prev, steamFinishing: true }))}>Yes</p>
                <p className={`system-font font-medium border p-4 rounded text-center  hover:scale-105 transition-all duration-300 ease-in-out ${!profile.steamFinishing ? "border-yellow-400" : " border-gray-400"}`} onClick={() => setProfile(prev => ({ ...prev, steamFinishing: false }))}>No</p>
            </div>

            <h1 className='text-[20px] font-light'>Would you like your clothes to be incensed with Oud?</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>
                <p className={`system-font font-medium  p-4 rounded text-center  hover:scale-105 transition-all duration-300 ease-in-out border ${profile.Incense ? "border-yellow-400" : " border-gray-400"}`} onClick={() => setProfile(prev => ({ ...prev, Incense: true, selectedOption: false }))}>Yes</p>
                <p className={`system-font font-medium border p-4 rounded text-center  hover:scale-105 transition-all duration-300 ease-in-out ${!profile.Incense ? "border-yellow-400" : " border-gray-400"}`} onClick={() => setProfile(prev => ({ ...prev, Incense: false, selectedOption: true }))} >No</p>
            </div>
            {
                profile.Incense &&
                <div >
                    <h1 className='text-[20px] font-light'>Choose your preferred Oud type:</h1>
                    <div className={`h-70 w-70 border  rounded-2xl my-4 flex items-center flex-col p-2 gap-3 ${profile.Incense ? "border-yellow-400" : "border-gray-400"}`} onClick={() => setProfile(prev => ({ ...prev, Incense: true, selectedOption: false }))}>
                        <img src={Oud} alt="" className='h-[70%]  object-cover' />
                        <h2 className='text-[14px] font-semibold'>Premium Cambodian Oud</h2>
                        <p className='text-[12px] px-6 text-center'>Authentic Cambodian oud with rich, deep aroma</p>
                    </div>

                    <div className='flex items-center gap-3 border py-2 mb-4 px-4  border-[#193cb8be] rounded bg-[#193cb80e] text-[#193cb8]'>
                        <div>
                            <input type="checkbox" name="" id="" onChange={(e) => setProfile(prev => ({ ...prev, selectedOption: e.target.checked }))} />
                        </div>
                        <div className='text-[14px] font-medium'>
                            <h1>I confirm that I do not have any allergy to Oud and its components.</h1>
                            <p className='text-[12px]'>This confirmation is required for your safety</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Step3
