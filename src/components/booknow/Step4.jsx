import React, { useContext, useState,useEffect } from 'react'
import { MyContext } from '../usecontext/UseContext'
import { FaCheck } from "react-icons/fa6";
import Lulwa from '../../assets/home/images/lulwa.png'
import Sadf from '../../assets/home/images/sadaf.png'
import Maknoum from '../../assets/home/images/maknoun.png'
import Mad from '../../assets/home/images/madd.png'
const Step4 = () => {
    const { profile, setProfile } = useContext(MyContext)
    const [perfumedClothes,setPerfumedClothes]=useState(false)
    const [checkbox,setCheckbox]=useState(false)
    function HandlePerfumesSelection() {
        profile.Fragrance?
        setProfile(prev => ({ ...prev, Fragrance: false,selectedFragrance:null,selectedOption:perfumedClothes,selectedOption:true })):
        setProfile(prev => ({ ...prev, Fragrance: true,selectedOption:false }))
    }
     useEffect(() => {
        if (profile.servicePage == 4) {
            setProfile(prev => ({ ...prev, selectedOption: true }))
        }
    }, [profile.servicePage])
    const womensPerfumes = [
        {
            Img: Lulwa,
            Heading: "Lulwa",
            description: "Where Sparkle Meets Scent",
        },
        {
            Img: Sadf,
            Heading: "Sadf(F)",
            description: "Your Unique Presence",
        },
    ]
    const MenPerfumes = [
        {
            Img: Maknoum,
            Heading: "Maknoun",
            description: "The Secret of Your Allure"
        },
        {
            Img: Mad,
            Heading: "Mad",
            description: "A Wave of Presence That Never Fades"
        },
        {
            Img: Sadf,
            Heading: "Sadf (M)",
            description: "Your Unique Presence",
        },
    ]
    return (
        profile.servicePage == 4 &&
        <div>
            <div className='pb-4'>
                <h1 className='text-[20px] font-light'>Would you like your clothes to be perfumed?</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 my-4'>
                    <p className={`system-font font-medium border p-4 rounded text-center  hover:scale-105 transition-all duration-300 ease-in-out ${profile.Fragrance ? "border-yellow-400" : "border-gray-400"}`} onClick=
                    {() =>HandlePerfumesSelection()} >Yes</p>

                    <p className={`system-font font-medium border p-4 rounded text-center  hover:scale-105 transition-all duration-300 ease-in-out ${!profile.Fragrance ? "border-yellow-400" : "border-gray-400"}`} onClick={() => HandlePerfumesSelection()}>No</p>
                </div>
                {
                    profile.Fragrance &&
                    <div className='flex flex-col sm:flex-row gap-4 justify-around'>
                        <div className='w-full sm:w-[40%]'>
                            <h1 className='text-[18px] font-bold'>Women's</h1>
                            {
                                womensPerfumes.map((item, index) => (
                                    <div key={index} className={`border  flex flex-col justify-center rounded-2xl my-4 text-center gap-2 p-4 ${profile.selectedFragrance == item.Heading ? "border-yellow-400" : "border-gray-400"}`} onClick={() => setProfile(prev => ({ ...prev, selectedFragrance: item.Heading }))}>
                                        <img src={item.Img} alt="" className='rounded-2xl' />
                                        <h1 className='text-[14px] font-semibold'>{item.Heading}</h1>
                                        <p className='text-[12px]'>{item.description}</p>
                                        {
                                            profile.selectedFragrance == item.Heading &&
                                            <div className='flex items-center gap-2 text-[12px] text-[#d4af37] justify-center'>
                                                <FaCheck />
                                                <p>Selected</p>
                                            </div>
                                        }
                                    </div>
                                ))
                            }
                        </div>

                        <div className='w-full sm:w-[40%]'>
                            <h1 className='text-[18px] font-bold'>Men's</h1>
                            {
                                MenPerfumes.map((item, index) => (
                                    <div key={index} className={`border flex flex-col justify-center rounded-2xl my-4 text-center gap-2 p-4 ${profile.selectedFragrance == item.Heading ? "border-yellow-400" : "border-gray-400"} `} onClick={() => setProfile(prev => ({ ...prev, selectedFragrance: item.Heading }))}>
                                        <img src={item.Img} alt="" className='rounded-2xl' />
                                        <h1 className='text-[14px] font-semibold'>{item.Heading}</h1>
                                        <p className='text-[12px]'>{item.description}</p>
                                        {
                                            profile.selectedFragrance == item.Heading &&
                                            <div className='flex items-center gap-2 text-[12px] text-[#d4af37] justify-center'>
                                                <FaCheck />
                                                <p>Selected</p>
                                            </div>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                }

                {
                    profile.Fragrance &&

                    <div className='flex items-center gap-3 border py-2 px-4  border-[#193cb8be] rounded bg-[#193cb80e] text-[#193cb8]'>
                        <div>
                            <input type="checkbox" name="" id="" onChange={(e) => setProfile(prev => ({ ...prev, selectedOption: e.target.checked }))} />
                        </div>
                        <div className='text-[14px] font-medium'>
                            <h1>I confirm that I do not have any allergy to Oud and its components.</h1>
                            <p className='text-[12px]'>This confirmation is required for your safety</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Step4
