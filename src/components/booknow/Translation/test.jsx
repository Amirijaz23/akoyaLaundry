import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../usecontext/UseContext'
import engTranslation from './Translation/Eng/Step1.json'
import arbTranslation from './Translation/Arb/Step1.json'

const Step1 = () => {
    const { profile, setProfile } = useContext(MyContext)
    const [serviceTypeSelection, setServiceTypeSelection] = useState(null)
    const translation = profile.language === 'eng' ? engTranslation : arbTranslation
    function HandleServiceSelection(item, index) {
        setServiceTypeSelection(index)
        setProfile(prev => ({ ...prev, serviceType: item.Icon + item.ServiceName, selectedOption: true }))
    }

    useEffect(() => {
        if (profile.servicePage == 1) {
            serviceTypeSelection !== null
                ? setProfile(prev => ({ ...prev, selectedOption: true }))
                : setProfile(prev => ({ ...prev, selectedOption: false }))
        }
    }, [profile.servicePage, serviceTypeSelection, setProfile])

    return (
        profile.servicePage == 1 &&
        <div className='relative h-full'>
            <h1 className='text-[20px] font-light'>{translation.choose_section.heading}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6 px-0 md:px-6'>
                {
                    translation.choose_section.ServiceTypes.map((item, index) => (
                        <div
                            key={index}
                            className={`border flex flex-col items-center px-4 rounded-2xl py-6 active:scale-100 gap-3 text-center hover:scale-[1.03] transition-all duration-300 ease-in-out ${serviceTypeSelection === index ? 'border-[#D4AF37] bg-[#fff9e68c]' : 'border-gray-300'}`}
                            onClick={() => HandleServiceSelection(item, index)}
                        >
                            <p className='text-[24px]'>{item.Icon}</p>
                            <h2 className='text-[18px] font-semibold'>{item.ServiceName}</h2>
                            <p>{item.ServiceDescription}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Step1
