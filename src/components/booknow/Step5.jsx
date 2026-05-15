import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../usecontext/UseContext'
import AkoyaPlastic from '../../assets/book-now/akoyaplastic.png'
import AkoyaFabric from '../../assets/book-now/akoyafabric.png'
import AkoyaBox from '../../assets/book-now/akoyabox.png'
const Step5 = () => {
    const { profile, setProfile } = useContext(MyContext)
    function HandleSelectedPackage(item, index) {
        setProfile(prev => ({ ...prev, selectedOption: true, packagingType: item.Heading, packagingPrice: item.price }))
    }
 
    const packagingData = [
        {
            Img: AkoyaPlastic,
            Heading: "Plastic Packaging",
            description: "Standard plastic bag packaging",
            price: "Free"
        },
        {
            Img: AkoyaFabric,
            Heading: "Premium Fabric Packaging",
            description: "Luxury fabric bag packaging - Choose your preferred color",
            price: "10"
        },
        {
            Img: AkoyaBox,
            Heading: "Luxury Gift Box",
            description: "Elegant gift box packaging",
            price: "4"
        },
    ]
    useEffect(()=>{
        if (profile.servicePage==5){
            profile.packagingType?
            setProfile(prev=>({...prev,selectedOption:true})):setProfile(prev=>({...prev,selectedOption:false}))
        }
    })
    return (
        profile.servicePage == 5 &&
        <div>
            <h1 className='text-[20px] font-light'>How would you like us to package your garments?</h1>
            <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 my-4 gap-3'>
                {
                    packagingData.map((item, index) => (
                        <div key={index} className={`border flex items-center flex-col min-h-100 rounded-[20px]  overflow-hidden ${profile.packagingType == item.Heading ? "border-yellow-400" : "border-gray-400"}`} onClick={() => HandleSelectedPackage(item, index)}>
                            <div>
                                <img src={item.Img} alt="" className='h-60' />
                            </div>
                            <div className='text-center p-4 flex flex-col gap-3'>
                                <h2 className='font-medium'>{item.Heading}</h2>
                                <p className='text-[14px]'>{item.description}</p>
                                <p>{item.price == "Free" ? "Free" : `+ ${item.price} QAR`}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Step5
