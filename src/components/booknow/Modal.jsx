import React, { useContext, useRef, useState } from 'react'
import { MyContext } from '../usecontext/UseContext'
import {toast} from 'react-toastify'
import { CiUser } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import emailjs from '@emailjs/browser'

const Modal = () => {
    const { profile, setProfile, totalBill, clothes } = useContext(MyContext)
    const form = useRef()
    function HandleSubmission(e) {
        e.preventDefault();
        emailjs
            .sendForm("service_v98mwwi", "template_nlb08mn", form.current, {
                publicKey: "tmIH8zzuNSlCbOt5x"
            }).then(
                () => {
                    setProfile(prev => ({ ...prev, showModal: false }))
                    toast.success("Send Emails")
                },
                (error) => {
                    toast.warning("Error In Sending")
                },
            );
    }

    return (
        profile.showModal &&
        <div className='w-full px-4 md:px-0 h-full flex justify-center absolute top-20 backdrop-blur-[5px]'>

            <div className='bg-white h-140 md:h-100 w-140  mx-auto rounded-2xl overflow-hidden fixed top-40'>
                <div className='flex items-center gap-4 bg-linear-to-r from-[#2D2517] to-[#2d251794] p-6 pe-10 relative'>
                    <div className='bg-[#D4AF37] w-12 h-12 flex justify-center items-center rounded-full text-white shrink-0'>
                        <CiUser className='text-[22px]' />
                    </div>
                    <div className='text-white'>
                        <h2 className='text-[180x] font-bold'>Guest Order Information</h2>
                        <p className='text-[14px]'>Please provide your contact details to place the order</p>
                    </div>
                    <div className='absolute right-4 w-10 h-10 active:scale-95 shrink-0 bg-transparent hover:bg-gray-600 rounded-full flex justify-center items-center'>
                        <RxCross2 className='text-[22px] text-white' onClick={() => setProfile(prev => ({ ...prev, showModal: false }))} />
                    </div>
                </div>

                <div>
                    <form action="" onSubmit={HandleSubmission} ref={form} className='p-4 pb-0 h-110 md:h-70 overflow-auto' onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault() }}>
                        <input type="hidden" name="serviceType" value={profile.serviceType} />
                        <input type="hidden" name='steamFinishing' value={profile.steamFinishing} />
                        <input type="hidden" name='incense' value={profile.Incense} />
                        <input type="hidden" name='selectedFragrance' value={profile.selectedFragrance} />
                        <input type="hidden" name='packagingType' value={profile.packagingType} />
                        <input type="hidden" name='fromPerson' value={profile.fromPerson} />
                        <input type="hidden" name='toPerson' value={profile.toPerson} />
                        <input type="hidden" name='totalBill' value={totalBill} />
                        {
                            clothes.map((item, index) => (
                                <>
                                    <input type="hidden" name={`cloth${index}Name`} value={item.itemName} />
                                    <input type='hidden' name={`cloth${index}Quantity`} value={item.itemQuantity} />
                                    <input type="hidden" name={`cloth${index}Price`} value={item.totalPrice} />
                                </>
                            ))
                        }
                        <div className='flex flex-col md:flex-row gap-4'>
                            <div className='w-full md:w-[50%] flex flex-col gap-2'>
                                <p className='text-[#364153] text-[12px] font-semibold'>Full Name <span className='text-red-400'>*</span></p>
                                <input name='fname' type="text" className='w-full p-2 px-4 border border-gray-400 rounded-2xl focus:border-2 focus:border-yellow-400 focus:outline-0' placeholder='Enter your full name' required />
                            </div>
                            <div className='w-full md:w-[50%] flex flex-col gap-2'>
                                <p className='text-[#364153] text-[12px] font-semibold'>Email Address (Optional)</p>
                                <input type="text" className='w-full p-2 px-4 border border-gray-400 rounded-2xl focus:border-2 focus:border-yellow-400 focus:outline-0' placeholder='your@email.com (optional)' name='email' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 my-4 relative'>
                            <p className='text-[#364153] text-[12px] font-semibold'>Whatsapp Number <span className='text-red-400'>*</span></p>
                            <input type="number" className='w-full p-2  border border-gray-400 rounded-2xl focus:border-2 focus:border-yellow-400 ps-12 pe-4 focus:outline-0' required name='wappNumber' />
                            <p className='absolute top-10 px-2 w-fit' >+974</p>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-[#364153] text-[12px] font-semibold'>Delivery Address <span className='text-red-400'>*</span></p>
                            <p className='text-[#364153] text-[12px] font-semibold'>Unit Number (Optional)</p>
                            <input type="text" className='w-full p-2 px-4 border border-gray-400 rounded-2xl focus:border-2 focus:border-yellow-400 focus:outline-0' placeholder='e.g., 101' name='unitNumber' />
                        </div>
                        <div className='grid grid-col-1 md:grid-cols-3 gap-2 my-2'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[#364153] text-[12px] font-semibold'>Zone <span className='text-red-400'>*</span></p>
                                <input type="number" className='w-full p-2 px-4 border border-gray-400 rounded-2xl focus:border-2 focus:border-yellow-400 focus:outline-0' placeholder='e.g., zone 38' name='zoneNumber' required />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[#364153] text-[12px] font-semibold'>Street<span className='text-red-400'>*</span></p>
                                <input type="number" className='w-full p-2 px-4 border border-gray-400 rounded-2xl focus:border-2 focus:border-yellow-400 focus:outline-0' placeholder='e.g., Al Sadaad Street' name='streetNumber' required />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[#364153] text-[12px] font-semibold'>Building Number<span className='text-red-400'>*</span></p>
                                <input type="number" className='w-full p-2 px-4 border border-gray-400 rounded-2xl focus:border-2 focus:border-yellow-400 focus:outline-0' placeholder='e.g., 25' name='builidingNumber' required />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 my-2 gap-3'>
                            <button onClick={() => setProfile(prev => ({ ...prev, showModal: false }))} className='text-[14px] font-semibold border-2 border-gray-300 p-3 rounded-2xl hover:border-gray-400 system-font'>Cancel</button>
                            <button type='submit' className='text-[white] text-[14px] font-semibold system-font bg-[#d2ad35] rounded-2xl hover:bg-[#775f12]'>Proceed With Order</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal
