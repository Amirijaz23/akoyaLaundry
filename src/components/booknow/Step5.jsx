import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../usecontext/UseContext'
import EngTranslation from '../booknow/Translation/Eng/Step5.json'
import ArbTranslation from '../booknow/Translation/Arb/Step5.json'
import AkoyaPlastic from '../../assets/book-now/akoyaplastic.png'
import AkoyaFabric from '../../assets/book-now/akoyafabric.png'
import AkoyaBox from '../../assets/book-now/akoyabox.png'
const Step5 = () => {
    const { profile, setProfile } = useContext(MyContext)
    const translation = profile.language == "eng" ? EngTranslation : ArbTranslation
    const all_packages = translation.choose_package.packaging_types

    function HandleSelectedPackage(item, index) {
        setProfile(prev => ({ ...prev, selectedOption: true, packagingType: item.packaging_heading, packagingPrice: item.packaging_price, packagingId: item.id }))
    }

    const packagingData = [
        {
            id: 1,
            Img: AkoyaPlastic,
        },
        {
            id: 2,
            Img: AkoyaFabric,
        },
        {
            id: 3,
            Img: AkoyaBox,
        },
    ]
    function ImageGetter(item) {
        var loadImage
        packagingData.map((pkg) => {
            if (pkg.id == item.id) {
                loadImage = pkg.Img
            }
        })
        return loadImage
    }
    useEffect(() => {
        if (profile.packagingId) {
            const selected = all_packages.find((item) => item.id == profile.packagingId)
            if (selected && (profile.packagingType !== selected.packaging_heading || profile.packagingPrice !== selected.packaging_price)) {
                setProfile(prev => ({ ...prev, packagingType: selected.packaging_heading, packagingPrice: selected.packaging_price }))
            }
        }
        if (profile.servicePage == 5) {
            const shouldSelect = Boolean(profile.packagingType)
            if (profile.selectedOption !== shouldSelect) {
                setProfile(prev => ({ ...prev, selectedOption: shouldSelect }))
            }
        }
    }, [profile.packagingId, profile.packagingType, profile.packagingPrice, profile.language, profile.servicePage, profile.selectedOption])
    return (
        profile.servicePage == 5 &&
        <div>
            <h1 className={`text-[20px] font-light ${profile.language == "eng" ? "" : "text-right"}`}>{translation.choose_package.heading}</h1>
            <div className={`grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 my-4 gap-3 ${profile.language == "eng" ? "" : "[direction:rtl]"}`}>
                {
                    all_packages.map((item, index) => (
                        <div key={index} className={`border flex items-center flex-col min-h-100 rounded-[20px]  overflow-hidden ${profile.packagingId == item.id ? "border-yellow-400" : "border-gray-400"}`} onClick={() => HandleSelectedPackage(item, index)}>
                            <div>
                                <img src={ImageGetter(item)} alt="" className='h-60' />
                            </div>
                            <div className='text-center p-4 flex flex-col gap-3'>
                                <h2 className='font-medium'>{item.packaging_heading}</h2>
                                <p className='text-[14px]'>{item.packaging_description}</p>
                                <p>{item.price == "Free" ? "Free" : `+ ${item.packaging_price} QAR`}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Step5
