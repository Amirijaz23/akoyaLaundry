import React, { useContext } from 'react'
import Flickity from 'react-flickity-component'
import "flickity/css/flickity.css";
import { Link } from 'react-router-dom'
import Hero1 from '../../assets/services/hero1.png'
import Hero2 from '../../assets/services/hero2.png'
import Hero3 from '../../assets/services/hero3.png'


const Hero = () => {
    const HeroSectionData = [
        {
            id: 1,
            Img: Hero1,
            heading: "Contact Akoya Laundry",
            description: "Luxury laundry services tailored to your needs in Doha, Qatar",
        },
        {
            id: 2,
            Img: Hero2,
            heading: "Professional Care",
            description: "Expert fabric handling with eco-friendly detergents",

        },
        {
            id: 3,
            Img: Hero3,
            heading: "Express Service",
            description: "Quick turnaround without compromising quality",
        }
    ]
    const flickityOptions = {
        wrapAround: true,
        autoPlay: true,
        prevNextButtons: false
    }
    return (
        <div className='-mt-20' >
            <Flickity
                className={'carousel'}
                elementType={'div'}
                options={flickityOptions}
            >
                {
                    HeroSectionData.map((item, index) => (
                        <div key={index} className='h-150 lg:h-screen lg:w-screen  bg-blend-overlay bg-[#0f0f0f75] carousel-cell text-center' style={{ backgroundImage: `url(${item.Img})`, backgroundSize: 'cover' }} >
                            <div className='w-full lg:w-[90%]  mx-auto flex justify-center items-center flex-col'>
                                <h1 className='text-[36px] lg:text-[60px] text-white font-light'>{item.heading}</h1>
                                <p className='text-[20px] lg:text-[24px] mb-7 text-[#D4B03D]'>
                                  {item.description}
                                </p>
                               <div className='w-25 md:w-50 h-0.5 bg-yellow-400'></div>
                            </div>
                        </div>
                    ))
                }
            </Flickity>
        </div>
    )
}

export default Hero
