import React, { useContext } from 'react'
import Flickity from 'react-flickity-component'
import "flickity/css/flickity.css";
import { Link } from 'react-router-dom'
import { MyContext } from '../../components/usecontext/UseContext'
import Hero1 from '../../assets/home/images/hero1.png'
import Hero2 from '../../assets/home/images/hero2.png'
import Hero3 from '../../assets/home/images/hero3.png'
const Hero = () => {
  const { profile, setProfile } = useContext(MyContext)
  const HeroSectionData = [
    {
      id: 1,
      Img: Hero1,
      EngData: {
        heading: "Premium Garment Care",
        description: "Expert cleaning for your most delicate fabrics",
      },
      ArbData: {
        heading: "رعاية متميزة للملابس",
        description: "طرق مستدامة دون المساس بالجودة"
      },
    },
    {
      id: 2,
      Img: Hero2,
      EngData: {
        heading: "Eco-Conscious Cleaning",
        description: "Sustainable methods without compromising quality",
      },
      ArbData: {
        heading: "تنظيف صديق للبيئة",
        description: "طرق مستدامة دون المساس بالجودة"
      },
    },
    {
      id: 3,
      Img: Hero3,
      EngData: {
        heading: "Precision Pressing",
        description: "Impeccable finishes for business and formalwear",
      },
      ArbData: {
        heading: "تنظيف صديق للبيئة",
        description: "طرق مستدامة دون المساس بالجودة"
      },
    }
  ]
  const flickityOptions = {
    wrapAround: true,
    autoPlay: true
  }
  return (
    <div className='-translate-y-20' >
      <Flickity
        className={'carousel'}
        elementType={'div'}
        options={flickityOptions}
      >
        {
          HeroSectionData.map((item, index) => (
            <div key={index} className='h-150 lg:h-screen lg:w-screen  bg-blend-overlay bg-[#0f0f0f75] carousel-cell' style={{ backgroundImage: `url(${item.Img})`,backgroundSize:'cover'}} >
              <div className='w-[70%] lg:w-[90%]  mx-auto'>
                <h1 className='text-[36px] lg:text-[60px] text-white font-light'>{profile.language == "eng" ? item.EngData.heading : item.ArbData.heading}</h1>
                <p className='text-[20px] lg:text-[24px] mb-7 text-[#D4B03D]'>{profile.language == "eng" ? item.EngData.description : item.ArbData.description}</p>
                <Link to={'/book-now'} className='text-[18px] font-medium bg-[#D4B03D] text-black px-6 py-3 rounded-4xl'>{profile.language == "eng" ? "Schedule Pickup" : "جدولة الاستلام"}</Link>
              </div>
            </div>
          ))
        }
      </Flickity>
    </div>
  )
}

export default Hero
