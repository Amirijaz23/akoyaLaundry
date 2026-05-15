import React, { useCallback, useContext, useEffect, useState } from 'react'
import { MyContext } from '../usecontext/UseContext'

const Step1 = () => {
    const { profile, setProfile } = useContext(MyContext)
    const [serviceTypeSelection, setServiceTypeSelection] = useState(null)
    function HandleServiceSelection(item) {
        setServiceTypeSelection(item.Heading)
        setProfile(prev => ({ ...prev, serviceType: item.Icon + item.Heading, selectedOption: true }))
    }

    const ServicesTypes = [
        {
            Icon: "👕",
            Heading: "Washing & Ironing",
            Description: "Complete washing with ironing"
        },
        {
            Icon: "✨",
            Heading: "Washing, Ironing, and Perfume Services",
            Description: "Complete washing with ironing and perfume services"
        },
        {
            Icon: "👔",
            Heading: "Dry Clean",
            Description: "Professional dry cleaning"
        }
    ]
    useEffect(() => {
        if (profile.servicePage == 1) {
            serviceTypeSelection ? setProfile(prev => ({ ...prev, selectedOption: true })) : setProfile(prev => ({ ...prev, selectedOption: false }))
        }
    }, [profile.servicePage])
    return (
        profile.servicePage == 1 &&
        <div className='relative h-full'>
            <h1 className='text-[20px] font-light'>Choose Service Type</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6 px-0 md:px-6'>
                {
                    ServicesTypes.map((item, index) => (
                        <div key={index} className={`border flex flex-col items-center px-4 rounded-2xl py-6 active:scale-100 gap-3 text-center hover:scale-[1.03] transition-all duration-300 ease-in-out ${serviceTypeSelection == item.Heading ? "border-[#D4AF37] bg-[#fff9e68c]" : "border-gray-300"}`} onClick={() => HandleServiceSelection(item)} >
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
