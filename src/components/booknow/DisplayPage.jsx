import React from 'react'
import Selection from './Selection'
import OrderSummary from './OrderSummary'
import Modal from '../booknow/Modal'

const DisplayPage = () => {
  return (
    <div className='-mt-20 bg-linear-to-r  py-4 from-[#463921] via-[#463921] to-[#5B4A33] pt-20'>
      <div className='w-[90%] lg:w-[95%] flex flex-col lg:flex-row mx-auto gap-2 lg:gap-4 relative'>
        <div className='w-full lg:w-[70%]'>
          <Selection />
        </div>
        <div className='w-full lg:w-[30%]  sticky border border-gray-400 bg-white rounded-2xl lg:top-40 h-fit'>
          <OrderSummary />
        </div>
      </div>
      <div>
        <Modal />
      </div>
    </div>
  )
}

export default DisplayPage
