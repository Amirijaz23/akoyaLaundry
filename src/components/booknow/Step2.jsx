import React, { useContext, useEffect } from 'react'
import { MyContext } from '../usecontext/UseContext'
import { FaPlus } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';
import engTranslation from '../booknow/Translation/Eng/Step2.json'
import arbTranslation from '../booknow/Translation/Arb/Step2.json'

const Step2 = () => {
  const location = useLocation()
  const { profile, setProfile, clothes, setClothes } = useContext(MyContext)
  const translation = profile.language == "eng" ? engTranslation : arbTranslation
  const all_clothes = translation.clothes_section.clothes
  const men_clothes = all_clothes.men_clothes
  const women_clothes = all_clothes.womens_clothes
  const household_items = all_clothes.household_items
  function HandlingClick(item, index) {
    setProfile(prev => ({ ...prev, selectedOption: true }))
    let isExist = false
    clothes.map((object_item) => {
      if (object_item.itemId == item.id) {
        isExist = true
        object_item.itemQuantity = object_item.itemQuantity + 1
        object_item.totalPrice = object_item.itemQuantity * object_item.itemPrice
        setClothes(prev => [...prev])
      }
      return null
    })
    !isExist &&
      setClothes(prev => [...prev, { "itemName": item.name, "itemPrice": item.price, "itemQuantity": 1, "totalPrice": item.price, "itemId": item.id }])
  }
  function languageChangeHandler() {
    men_clothes.map((item) => {
      clothes.map((list_item) => {
        if (list_item.itemId === item.id) {
          list_item.itemName = item.name
        }
      })
    })
    women_clothes.map((item) => {
      clothes.map((list_item) => {
        if (list_item.itemId === item.id) {
          list_item.itemName = item.name
        }
      })
    })
   household_items.map((item) => {
      clothes.map((list_item) => {
        if (list_item.itemId === item.id) {
          list_item.itemName = item.name
        }
      })
    })
    setClothes(prev => [...prev])
  }
  useEffect(() => {
    if (profile.servicePage == 2) {
      clothes.length >= 1 ? setProfile(prev => ({ ...prev, selectedOption: true })) : setProfile(prev => ({ ...prev, selectedOption: false }))
    }
    languageChangeHandler()
  }, [profile.servicePage, clothes, profile.language])
  return (

    profile.servicePage == 2 &&
    < div >
      <h1 className='text-[20px] font-light'>{translation.clothes_section.heading}</h1>
      <div className='grid grid-col-1 sm:grid-cols-2 gap-4'>
        <div>
          <h2 className='text-[18px] font-medium system-font my-2'>{profile.language=="eng"?"Men's":"رجالي"}</h2>
          {
            men_clothes.map((item, index) => (
              <div key={index} className='border border-gray-300 flex items-center justify-between p-4 rounded my-3 hover:border-yellow-400 hover:scale-[1.02] active:scale-[0.98]' onClick={() => HandlingClick(item, index)}>
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
          <h2 className='text-[18px] font-medium system-font my-2'>{profile.language=="eng"?"Women's":"نسائي"}</h2>
          {
            women_clothes.map((item, index) => (
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
          <h2 className='text-[18px] font-medium system-font my-2'>{profile.language=="eng"?"Household Items":"الأدوات المنزلية"}</h2>
          {
            household_items.map((item, index) => (
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
