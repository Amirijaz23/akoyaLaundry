import React, { useContext, useState, useEffect } from 'react'
import { MyContext } from '../usecontext/UseContext'
import { FaCheck } from "react-icons/fa6";
import EngTranslation from '../booknow/Translation/Eng/Step4.json'
import ArbTranslation from '../booknow/Translation/Arb/Step4.json'
import Lulwa from '../../assets/home/images/lulwa.png'
import Sadf from '../../assets/home/images/sadaf.png'
import Maknoum from '../../assets/home/images/maknoun.png'
import Mad from '../../assets/home/images/madd.png'
const Step4 = () => {
    const { profile, setProfile } = useContext(MyContext)
    const [perfumedClothes, setPerfumedClothes] = useState(false)
    const [checkbox, setCheckbox] = useState(false)
    const translation = profile.language == "eng" ? EngTranslation : ArbTranslation
    const menPerfumes = translation.perfumed_section.mens_perfumed
    const womenPerfumes = translation.perfumed_section.womens_perfumed
    function HandlePerfumesSelection() {
        profile.Fragrance ?
            setProfile(prev => ({ ...prev, Fragrance: false, selectedFragrance: null, FragranceId: null, selectedOption: perfumedClothes, selectedOption: true })) :
            setProfile(prev => ({ ...prev, Fragrance: true, selectedOption: false }))
    }
    useEffect(() => {
        if (profile.FragranceId) {
            const allPerfumes = [...womenPerfumes, ...menPerfumes]
            const selected = allPerfumes.find((item) => item.id == profile.FragranceId)
            if (selected && profile.selectedFragrance !== selected.Heading) {
                setProfile(prev => ({ ...prev, selectedFragrance: selected.Heading }))
            }
        }
        if (profile.servicePage == 4 && !profile.selectedOption) {
            setProfile(prev => ({ ...prev, selectedOption: true }))
        }
    }, [profile.servicePage, profile.language, profile.FragranceId, profile.selectedFragrance, profile.selectedOption])
    const PerfumedObjects = [
        {
            id: 1,
            Img: Lulwa
        },
        {
            id: 2,
            Img: Sadf
        },
        {
            id: 3,
            Img: Maknoum
        },
        {
            id: 4,
            Img: Mad
        },
        {
            id: 5,
            Img: Sadf
        },
    ]
    function ImageGetter(item) {
        let foundedImage = null
        PerfumedObjects.map((perfume) => {
            if (perfume.id == item.id) {
                foundedImage = perfume.Img
            }
        })
        return foundedImage
    }
    return (
        profile.servicePage == 4 &&
        <div>
            <div className='pb-4'>
                <h1 className={`text-[20px] font-light ${profile.language == "eng" ? "" : "text-right"}`}>{translation.perfumed_section.heading}</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 my-4'>
                    <p className={`system-font font-medium border p-4 rounded text-center  hover:scale-105 transition-all duration-300 ease-in-out ${profile.Fragrance ? "border-yellow-400" : "border-gray-400"}`} onClick=
                        {() => HandlePerfumesSelection()} >{translation.perfumed_section.options[0]}</p>

                    <p className={`system-font zfont-medium border p-4 rounded text-center  hover:scale-105 transition-all duration-300 ease-in-out ${!profile.Fragrance ? "border-yellow-400" : "border-gray-400"}`} onClick={() => HandlePerfumesSelection()}>{translation.perfumed_section.options[1]}</p>
                </div>
                {
                    profile.Fragrance &&
                    <div className='flex flex-col sm:flex-row gap-4 justify-around'>
                        <div className='w-full sm:w-[40%]'>
                            <h1 className='text-[18px] font-bold'>{profile.language == "eng" ? "Women's" : "نسائي"}</h1>
                            {
                                womenPerfumes.map((item, index) => (
                                    <div key={index} className={`border  flex flex-col justify-center rounded-2xl my-4 text-center gap-2 p-4 ${profile.selectedFragrance == item.Heading ? "border-yellow-400" : "border-gray-400"}`} onClick={() => setProfile(prev => ({ ...prev, selectedFragrance: item.Heading, FragranceId: item.id }))}>
                                        <img src={ImageGetter(item)} alt="" className='rounded-2xl' />
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
                            <h1 className='text-[18px] font-bold'>{profile.language == "eng" ? "Men's" : "رجالي"}</h1>
                            {
                                menPerfumes.map((item, index) => (
                                    <div key={index} className={`border flex flex-col justify-center rounded-2xl my-4 text-center gap-2 p-4 ${profile.selectedFragrance == item.Heading ? "border-yellow-400" : "border-gray-400"} `} onClick={() => setProfile(prev => ({ ...prev, selectedFragrance: item.Heading, FragranceId: item.id }))}>
                                        <img src={ImageGetter(item)} alt="" className='rounded-2xl' />
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

                    <div className={`flex items-center gap-3 border py-2 px-4  border-[#193cb8be] rounded bg-[#193cb80e] text-[#193cb8] ${profile.language == "eng" ? "" : "flex-row-reverse text-right"}`}>
                        <div>
                            <input type="checkbox" name="" id="" onChange={(e) => setProfile(prev => ({ ...prev, selectedOption: e.target.checked }))} />
                        </div>
                        <div className='text-[14px] font-medium'>
                            <h1>{translation.perfumed_section.check_box.check_heading}</h1>
                            <p className='text-[12px]'>{translation.perfumed_section.check_box.check_description}</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Step4
