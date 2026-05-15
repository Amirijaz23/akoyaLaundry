import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../usecontext/UseContext'
import { RxCross2 } from "react-icons/rx";

const OrderSummary = () => {
    const [coupon, setCoupon] = useState(null)
    const { profile, setProfile, clothes, setClothes, totalBill, setTotalBill } = useContext(MyContext)
    useEffect(() => {
        
        let clothes_price = 0
        clothes.map((item) => {
            clothes_price += parseInt(item.totalPrice)
        })
        console.log(clothes_price)
        setTotalBill((profile.Incense ? 4 : 0) + (profile.selectedFragrance ? 4 : 0) + (profile.packagingPrice == "Free" ? 0 : parseInt(profile.packagingPrice))+(clothes.length>=1?clothes_price:0))
    }, [profile, clothes])

    function HandleAddColthes(item) {
        clothes.map((list_item) => {
            if (list_item.itemName == item.itemName) {
                item.itemQuantity = item.itemQuantity + 1
                item.totalPrice = item.itemQuantity * item.itemPrice
                setClothes(prev => [...prev])
            }
            return null
        })
    }

    function HandleSubtractClothes(item) {
        clothes.map((list_item) => {
            if (list_item.itemName == item.itemName) {
                item.itemQuantity > 1 ?
                    item.itemQuantity = item.itemQuantity - 1 : ""
                item.totalPrice = item.itemQuantity * item.itemPrice
                console.log(item.totalPrice)
                setClothes(prev => [...prev])
            }
            return null
        })
    }
    function DeleteItem(item, index) {
        const list = [...clothes]
        const updated_list = list.toSpliced(index, 1)
        setClothes(updated_list)
    }
    return (
        <div className='flex justify-center py-6 rounded-2xl overflow-hidden flex-col gap-4 p-4  max-h-120'>
            <h2 className='text-[20px] font-bold text-[#d4af37] text-center'>🧾 Order Summary</h2>
            <div className='h-px bg-gray-400'></div>
            <div className='overflow-auto'>
                {profile.serviceType != null &&
                    <>
                        <div className='flex justify-between'>
                            <h2 className='font-medium'>Service Type</h2>
                            <p>{profile.serviceType}</p>
                        </div>
                        <div className='h-px bg-black my-2'></div>
                    </>
                }
                {
                    <>
                        {
                            clothes.length >= 1 &&
                            <h1 className={`font-medium text-[16px]`}>Garments</h1>
                        }
                        {
                            clothes &&
                            clothes.map((item, index) => (
                                <div key={index} className='my-4'>
                                    <div className='flex justify-between'>
                                        <p>{item.itemName}</p>
                                        <RxCross2 className='text-red-500' onClick={() => DeleteItem(item, index)} />
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex gap-4'>
                                            <button className='bg-gray-400 px-2 rounded text-white hover:bg-gray-500 active:scale-95' onClick={() => HandleSubtractClothes(item)}>-</button>
                                            <p>{item.itemQuantity}</p>
                                            <button className='bg-gray-400 px-2 rounded text-white hover:bg-gray-500 active:scale-95' onClick={() => HandleAddColthes(item)}>+</button>
                                        </div>
                                        <p>{item.totalPrice}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </>
                }
                {
                    profile.steamFinishing &&
                    <>
                        <div className='h-px bg-gray-400 my-2'></div>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-semibold'>Steam Finishing:</h1>
                            <div className='flex items-center gap-3'>
                                <p className='text-green-500 font-medium'>Included</p>
                                <RxCross2 className='text-red-400' onClick={() => setProfile(prev => ({ ...prev, steamFinishing: false }))} />
                            </div>
                        </div>
                    </>
                }

                {
                    profile.Incense &&
                    <>
                        <div className='h-px bg-gray-400 my-2'></div>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-semibold'>Incense</h1>
                            <div className='flex items-center gap-3'>
                                <p className='font-medium'>+4 QAR</p>
                                <RxCross2 className='text-red-400' onClick={() => setProfile(prev => ({ ...prev, Incense: false }))} />
                            </div>
                        </div>
                    </>
                }
                {
                    profile.selectedFragrance &&
                    <>
                        <div className='h-px bg-gray-400 my-2'></div>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-semibold'>Fragrance</h1>
                            <div className='flex items-center gap-3'>
                                <p className='font-medium'>+4 QAR</p>
                                <RxCross2 className='text-red-400' onClick={() => setProfile(prev => ({ ...prev, selectedFragrance: null }))} />
                            </div>
                        </div>
                        <p>{profile.selectedFragrance}</p>
                    </>
                }
                {
                    profile.packagingType &&
                    <>
                        <div className='h-px bg-gray-400 my-2'></div>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-semibold'>Packaging: </h1>
                            <div className='flex items-center gap-3'>
                                <p className='font-medium'>{profile.packagingPrice}</p>
                                <RxCross2 className='text-red-400' onClick={() => setProfile(prev => ({ ...prev, packagingType: null, packagingPrice: 0 }))} />
                            </div>
                        </div>
                        <p>{profile.packagingType}</p>
                    </>
                }
                {
                    (profile.fromPerson || profile.toPerson) &&
                    <>
                        <div className='h-px bg-gray-400 my-2'></div>
                        <div className='flex flex-col'>
                            <h1>Personalized Card</h1>
                            {
                                profile.fromPerson &&
                                <p>From : {profile.fromPerson}</p>
                            }
                            {
                                profile.toPerson &&
                                <p>To: {profile.toPerson}</p>
                            }
                        </div>

                    </>
                }
            </div>
            <div className='h-px bg-gray-400'></div>
            <div className='flex flex-col sm:flex-row gap-3 justify-center'>
                <input type="text" className='p-2 text-[14px] rounded border text-black border-gray-400' placeholder="Enter Coupon Code" onChange={(e) => setCoupon(e.target.value)} />
                <button className={`text-[15px] font-medium p-2 rounded-md  text-white ${coupon ? "bg-[#C9A227] cursor-pointer" : "bg-[#c9a32796] cursor-no-drop"}`} disabled={!coupon} onClick={() => console.log("Coupon Applied")}>Apply Coupon</button>
            </div>
            <div className='flex  justify-between'>
                <p className='system-font text-[18px] font-bold'>Final Price</p>
                <p className='system-font text-[18px] font-bold text-[#d4af37]'>{totalBill} QAR</p>
            </div>

            <div>
                {
                    profile.fromPerson && profile.toPerson &&
                    <button className='bg-[#d4af37] font-bold hover:scale-[1.02] active:scale-[1.00] w-full py-3 rounded text-white' onClick={()=>setProfile(prev=>({...prev,showModal:true}))} >Buy Now</button>
                }
            </div>
        </div>
    )
}

export default OrderSummary
