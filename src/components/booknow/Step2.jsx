import React, { useContext, useEffect } from 'react'
import { MyContext } from '../usecontext/UseContext'
import { FaPlus } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';

const Step2 = () => {
  const location = useLocation()
  const { profile, setProfile, clothes, setClothes } = useContext(MyContext)
  function HandlingClick(item) {
    setProfile(prev => ({ ...prev, selectedOption: true }))
    let isExist = false
    clothes.map((list_item) => {
      if (list_item.itemName == item.name) {
        isExist = true
        list_item.itemQuantity = list_item.itemQuantity + 1
        list_item.totalPrice = list_item.itemQuantity * list_item.itemPrice
        setClothes(prev => [...prev])
      }
      return null
    })
    !isExist &&
      setClothes(prev => [...prev, { "itemName": item.name, "itemPrice": item.price, "itemQuantity": 1, "totalPrice": item.price }])
  }

  useEffect(() => {
    if (profile.servicePage == 2) {
      clothes.length >= 1 ? setProfile(prev => ({ ...prev, selectedOption: true })) : setProfile(prev => ({ ...prev, selectedOption: false }))
    }
  }, [profile.servicePage,clothes])

  const Mens = [
    { Icon: "👔", name: "Thobe", price: 10, },
    { Icon: "🧥", name: "Bisht", price: 40, },
    { Icon: "🤵", name: "Men's Suit", price: 21, },
    { Icon: "👳", name: "Ghutra", price: 5, },
    { Icon: "👕", name: "Shirt", price: 5, },
    { Icon: "👔", name: "Tie", price: 5, },
    { Icon: "👕", name: "T-shirt", price: 5, },
    { Icon: "🦺", name: "Vest", price: 5, },
    { Icon: "🧥", name: "Coat", price: 23, },
    { Icon: "🩳", name: "Pajamas", price: 4, },
    { Icon: "🎖️", name: "Military Uniform", price: 9, },
    { Icon: "👷", name: "Overalls", price: 4, },
    { Icon: "🥼", name: "Lab Coat", price: 6, },
    { Icon: "👕", name: "Undershirt", price: 1, },
    { Icon: "👖", name: "Pants", price: 2, },
  ]
  const Womens = [
    { Icon: "🧕", name: "Abaya", price: 10, },
    { Icon: "👗", name: "Long Dress", price: 15, },
    { Icon: "👗", name: "Short Dress", price: 10, },
    { Icon: "👘", name: "Jalabiya", price: 6, },
    { Icon: "🧣", name: "Scarf", price: 2, },
    { Icon: "👚", name: "Silk Blouse", price: 4, },
    { Icon: "👗", name: "Women's Summer Suit", price: 16, },
  ]
  const HouseHoldItem = [
    { Icon: "🛏️", name: "Double Bed Cover", price: 18, },
    { Icon: "🛏️", name: "Single Bed Cover", price: 15, },
    { Icon: "🛏️", name: "Double Bed Sheet", price: 14, },
    { Icon: "🛏️", name: "Single Bed Sheet", price: 13, },
    { Icon: "🧸", name: "Double Blanket", price: 25, },
    { Icon: "🧸", name: "Single Blanket", price: 20, },
    { Icon: "🏖️", name: "Small Towel", price: 10, },
    { Icon: "🏖️", name: "Large Towel", price: 13, },
    { Icon: "😴", name: " Pillowcase", price: 4, },
    { Icon: "😴", name: " Large Feather Pillow", price: 15, },
  ]
  return (

    profile.servicePage == 2 &&
    < div >
      <h1 className='text-[20px] font-light'>What Clothes are you sending us?</h1>
      <div className='grid grid-col-1 sm:grid-cols-2 gap-4'>
        <div>
          <h2 className='text-[18px] font-medium system-font my-2'>Men's</h2>
          {
            Mens.map((item, index) => (
              <div key={index} className='border border-gray-300 flex items-center justify-between p-4 rounded my-3 hover:border-yellow-400 hover:scale-[1.02] active:scale-[0.98]' onClick={() => HandlingClick(item)}>
                <div className='flex gap-2'>
                  <p>{item.Icon}</p>
                  <p>{item.name}</p>
                </div>
                <FaPlus className='text-[#D4AF37]' />
              </div>
            ))
          }
        </div>
        <div>
          <h2 className='text-[18px] font-medium system-font my-2'>Women's</h2>
          {
            Womens.map((item, index) => (
              <div key={index} className='border border-gray-300 flex items-center justify-between p-4 rounded my-3 hover:border-yellow-400 hover:scale-[1.02] active:scale-[0.98]' onClick={() => HandlingClick(item)}>
                <div className='flex gap-2'>
                  <p>{item.Icon}</p>
                  <p>{item.name}</p>
                </div>
                <FaPlus className='text-[#D4AF37]' />
              </div>
            ))
          }
        </div>

        <div>
          <h2 className='text-[18px] font-medium system-font my-2'>Household Items</h2>
          {
            HouseHoldItem.map((item, index) => (
              <div key={index} className='border border-gray-300 flex items-center justify-between p-4 rounded my-3 hover:border-yellow-400 hover:scale-[1.02] active:scale-[0.98]' onClick={() => HandlingClick(item)}>
                <div className='flex gap-2'>
                  <p>{item.Icon}</p>
                  <p>{item.name}</p>
                </div>
                <FaPlus className='text-[#D4AF37]' />
              </div>
            ))
          }
        </div>

      </div>
    </div >

  )
}

export default Step2
