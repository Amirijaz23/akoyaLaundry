import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../usecontext/UseContext'
import { useTranslation } from 'react-i18next'
import engTranlation from './Translation/Eng/Step1.json'
import arbTranslation from './Translation/Arb/Step1.json'

const Step1 = () => {
    const { t, i18n } = useTranslation()
    const { profile, setProfile } = useContext(MyContext)
    const [serviceTypeSelection, setServiceTypeSelection] = useState(null)
    const translation = profile.language == "eng" ? engTranlation : arbTranslation
    useEffect(() => {
        const translation = profile.language == "eng" ? engTranlation : arbTranslation
        const current_item = translation.choose_section.ServiceTypes[serviceTypeSelection]
        if (current_item) {
            setProfile(prev => ({ ...prev, serviceType: current_item.Icon + current_item.Heading, selectedOption: true }))
        }
        if (profile.servicePage == 1) {
            serviceTypeSelection ? setProfile(prev => ({ ...prev, selectedOption: true })) : setProfile(prev => ({ ...prev, selectedOption: false }))
        }
    }, [profile.language,profile.servicePage])

    function HandleServiceSelection(item, index) {
        setServiceTypeSelection(index)
        setProfile(prev => ({ ...prev, serviceType: item.Icon + item.Heading, selectedOption: true }))
    }

    return (
        profile.servicePage == 1 &&
        <div className='relative h-full'>
            <h1 className={`text-[20px] font-light lg:px-6 ${profile.language=="eng"?"":"text-right"}`}>{translation.choose_section.heading}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6 px-0 md:px-6'>
                {
                    translation.choose_section.ServiceTypes.map((item, index) => (
                        <div key={index} className={`border flex flex-col items-center px-4 rounded-2xl py-6 active:scale-100 gap-3 text-center hover:scale-[1.03] transition-all duration-300 ease-in-out ${serviceTypeSelection == index ? "border-[#D4AF37] bg-[#fff9e68c]" : "border-gray-300"}`} onClick={() => HandleServiceSelection(item, index)} >
                            <p className='text-[24px]'>{item.Icon}</p>
                            <h2 className='text-[18px] font-semibold'>{item.Heading}</h2>
                            <p>{item.Description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Step1
