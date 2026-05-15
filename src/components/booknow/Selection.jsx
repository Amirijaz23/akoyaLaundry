import React, { useContext } from 'react'
import Step1 from './Step1'
import { MyContext } from '../usecontext/UseContext'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'
import Step6 from './Step6'

const Selection = () => {
  const { profile, setProfile } = useContext(MyContext)
  return (

    <div className='rounded-2xl overflow-hidden relative'>
      <div className='h-2 bg-white'>
        <div className={`h-full bg-[#C9A227]`} style={{width: `${(profile.servicePage / 6) * 100}%`}}></div>
      </div>
      <div className='flex justify-center items-center  flex-col  py-6 bg-linear-to-l from-[#312819] via-[#312819d3] to-[#312819]'>
        <h2 className='system-font text-[24px] font-light text-[#C9A227]'>AKOYA PREMIUM LAUNDRY</h2>
        <p className='text-white'>Step {profile.servicePage} of 6</p>
      </div>
      <div className='bg-gray-200 max-h-180 min-h-150 lg:h-140 overflow-auto  pb-14 p-6'>
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
        <Step5 />
        <Step6 />
      </div>
      <div className={`absolute bottom-3 w-full flex  px-4 ${profile.servicePage == 1 ? "justify-end" : "justify-between"}`}>
        {
          profile.servicePage > 1 &&
          <button className='font-medium bg-[#E5E7EB] px-8 py-3 rounded transition-all duration-300 ease-in-out border border-gray-400 hover:scale-[1.03] active:scale-95' onClick={() => setProfile(prev => ({ ...prev, servicePage: profile.servicePage - 1 }))}>Prev</button>
        }
        {
          profile.servicePage < 6 &&
          <button  disabled={!profile.selectedOption} className={`font-medium px-8 py-3 rounded   ${profile.selectedOption ? "bg-[#D4AF37] cursor-pointer active:scale-95" : "bg-gray-400 cursor-no-drop not-enabled"}`} onClick={() => setProfile(prev => ({ ...prev, servicePage: profile.servicePage + 1, selectedOption: false }))}>Next</button>
        }
      </div>
    </div>
  )
}

export default Selection
