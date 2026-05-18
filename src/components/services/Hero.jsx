import React, { useContext } from 'react'
import Flickity from 'react-flickity-component'
import "flickity/css/flickity.css";
import { MyContext } from '../usecontext/UseContext'
import { Link } from 'react-router-dom'
import Hero1 from '../../assets/services/hero1.png'
import Hero2 from '../../assets/services/hero2.png'
import Hero3 from '../../assets/services/hero3.png'


const Hero = () => {
    const { profile } = useContext(MyContext)
    const EngHeroSectionData = [
        {
            id: 1,
            Img: Hero1,
            heading: "Premium Garment Care",
            description: "Tailored to your garment's needs",
        },
        {
            id: 2,
            Img: Hero2,
            heading: "Luxury Laundry Services",
            description: "Experience the Akoya difference",

        },
        {
            id: 3,
            Img: Hero3,
            heading: "Precision Fabric Care",
            description: "For the most discerning clients",
        }
    ]
    const ArbHeroSectionData = [
        {
            id: 1,
            Img: Hero1,
            heading: "عناية دقيقة بالأقمشة",
            description: "مصممة خصيصًا لاحتياجات ملابسك",
        },
        {
            id: 2,
            Img: Hero2,
            heading: "خدمات غسيل فاخرة",
            description: "للعملاء الأكثر تميزًا",

        },
        {
            id: 3,
            Img: Hero3,
            heading: "رعاية فاخرة للملابس",
            description: "اختبر الفرق مع أكويا",
        }
    ]
    const flickityOptions = {
        wrapAround: true,
        autoPlay: true,
        prevNextButtons: false
    }
    return (
        <>
            {profile.language == "eng" && <div className='-mt-20' >
                <Flickity
                    className={'carousel'}
                    elementType={'div'}
                    options={flickityOptions}
                >
                    {
                        EngHeroSectionData.map((item, index) => (
                            <div key={index} className='h-150 lg:h-screen lg:w-screen  bg-blend-overlay bg-[#0f0f0f75] carousel-cell' style={{ backgroundImage: `url(${item.Img})`, backgroundSize: 'cover' }} >
                                <div className='w-[70%] lg:w-[90%]  mx-auto flex justify-center items-center flex-col'>
                                    <h1 className='text-[36px] lg:text-[60px] text-white font-light'>{item.heading}</h1>
                                    <p className='text-[20px] lg:text-[24px] mb-7 text-[#D4B03D]'>
                                        {item.description}
                                    </p>
                                    <Link to={'/book-now'} className='text-[18px] font-medium bg-[#D4B03D] text-black px-6 py-3 rounded-4xl'>Book a Collection</Link>
                                </div>
                            </div>
                        ))
                    }
                </Flickity>
            </div>}


            {profile.language == "arb" &&
                <div className='-mt-20' >
                    <Flickity
                        className={'carousel'}
                        elementType={'div'}
                        options={flickityOptions}
                    >
                        {
                            ArbHeroSectionData.map((item, index) => (
                                <div key={index} className='h-150 lg:h-screen lg:w-screen  bg-blend-overlay bg-[#0f0f0f75] carousel-cell' style={{ backgroundImage: `url(${item.Img})`, backgroundSize: 'cover' }} >
                                    <div className='w-[70%] lg:w-[90%]  mx-auto flex justify-center items-center flex-col'>
                                        <h1 className='text-[36px] lg:text-[60px] text-white font-light'>{item.heading}</h1>
                                        <p className='text-[20px] lg:text-[24px] mb-7 text-[#D4B03D]'>
                                            {item.description}
                                        </p>
                                        <Link to={'/book-now'} className='text-[18px] font-medium bg-[#D4B03D] text-black px-6 py-3 rounded-4xl'>
                                            احجز موعد الاستلام</Link>
                                    </div>
                                </div>
                            ))
                        }
                    </Flickity>
                </div>
            }
        </>
    )
}

export default Hero
