import { Link } from 'react-router-dom'
import { AiOutlineMinus } from "react-icons/ai";

const Hero = () => {
    return (
        <div className='bg-linear-to-r from-[#4F4F4F] via-[#A2A2A2] to-[#E5E5E5] -translate-y-20' >
            <div className='h-150 lg:h-screen'>
                <div className='w-full md:w-[85%] lg:w-[90%] h-full  mx-auto flex justify-center items-center flex-col text-center'>
                    <h1 className='text-[36px] md:text-[60px] text-white font-light'>Luxury Laundry. Reimagined.</h1>
                    <div className='flex justify-center items-center text-[#D4B03D] mb-5 gap-6'>
                        <AiOutlineMinus className='scale-x-[3] md:scale-x-[6]' />
                        <p className='text-[20px] lg:text-[24px]  text-[#D4B03D] text-center px-2'>AKOYA COLLECTION</p>
                        <AiOutlineMinus  className='scale-x-[3] md:scale-x-[6]' />
                    </div>
                    <Link to={'/book-now'} className='text-[18px] font-medium bg-[#D4B03D] text-black px-4 py-3 md:px-10 md:py-4 rounded-4xl'>Schedule Your Pickup</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
