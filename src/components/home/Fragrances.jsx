import React, { useContext } from 'react'
import { MyContext } from '../../components/usecontext/UseContext'
import Maknoun from '../../assets/home/images/maknoun.png'
import Madd from '../../assets/home/images/madd.png'
import Lulwa from '../../assets/home/images/lulwa.png'
import Sadf from '../../assets/home/images/sadaf.png'
import { useNavigate } from 'react-router-dom'
const Fragrances = () => {
  const navigate=useNavigate()
  const { profile, setProfile } = useContext(MyContext)
  const shoppingCard = [
    {
      Id: 1,
      Img: Maknoun,
      headingEng: "Maknoun",
      descriptionEng: "A luxurious fragrance that embodies the charm of a confident man. A refined blend of fresh fruits, elegant florals, and a warm base of musk and amber, leaving an unforgettable signature.",
      priceEng: "7 QAR",
      headingArb: "مكنون",
      descriptionArb: "هو عطر الفخامة الذي يجسد حضور الرجل الواثق. مزيج أنيق من الفواكه المنعشة والزهور الراقية مع قاعدة دافئة من المسك والعنبر، ليمنحك توقيعًا عطريًا لا يُنسى.",
      priceArb: "7 QAR"
    },
    {
      Id: 2,
      Img: Madd,
      headingEng: "Mad",
      descriptionEng: "A powerful masculine fragrance that radiates prestige and luxury. Its unique composition blends saffron, jasmine, and incense, with a leathery amber base for a timeless presence.",
      priceEng: "7 QAR",
      headingArb: "مد",
      descriptionArb: "هو العطر الرجولي القوي الذي يعكس الهيبة والفخامة. تركيبته المميزة تمزج بين الزعفران والياسمين والبخور مع قاعدة جلدية وعنبرية تمنحك حضورًا أسطوريًا يدوم.",
      priceArb: "7 QAR"
    },
    {
      Id: 3,
      Img: Lulwa,
      headingEng: "Lulwa",
      descriptionEng: "The fragrance of radiant femininity, combining modern freshness with timeless elegance. A stunning blend of bergamot, ginger, and patchouli with a soft musky touch, leaving a memorable sparkle.",
      priceEng: "7 QAR",
      headingArb: "لولوه",
      descriptionArb: "هو عطر الأنوثة المتألقة، يجمع بين الانتعاش العصري والرقي الخالد. توليفة مبهرة من البرغموت والزنجبيل والباتشولي مع لمسة مسكية ناعمة تمنحك بريقًا لا يُنسى.",
      priceArb: "7 QAR"
    },
    {
      Id: 4,
      Img: Sadf,
      headingEng: "Sadf",
      descriptionEng: "A refreshing fragrance for both men and women, featuring bright citrus notes, warm ginger, and ambergris for an elegant and long-lasting touch.",
      priceEng: "7 QAR",
      headingArb: "صدف",
      descriptionArb: "هو العطر المنعش الذي يناسب الرجال والنساء، بتركيبته الحمضية المشرقة ولمسة الزنجبيل والعنبر التي تمنحه أناقة عصرية وثباتًا راقيًا.",
      priceArb: "7 QAR"
    },

  ]
  return (
    <div className=' bg-[#F3F4F6] py-6'>
      <div className='my-4' data-aos="fade-up">
        <h2 className='text-[30px] lg:text-[48px] font-bold text-center'>{profile.language == "eng" ? "Akoya Signature Fragrances" : "عطور أكويا المميزة"}</h2>
        <p className='text-[17px] text-center'>{profile.language == "eng" ? "Premium scents crafted to elevate your laundry experience" : "عطور فاخرة مصممة لتعزيز تجربة الغسيل الخاصة بك"}</p>
      </div>
      <div className='w-[90%]  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-6'>

        {
          shoppingCard.map((item) => (
            <div data-aos="fade-up" className='overflow-hidden rounded-2xl w-full relative shadow-md shadow-gray-200 hover:scale-105 transition-all duration-500 ease-in-ou hover:shadow-gray-300' key={item.Id} >
              <div className=''>
                <img src={item.Img} alt="" className='h-50 w-full object-cover' />
              </div>

              <div className={`p-2 pb-10 ${profile.language=="eng"?"":"text-right"}`}>
                <h2 className='text-[20px] font-semibold'>{profile.language=="eng"?item.headingEng:item.headingArb}</h2>
                <p className='text-[14px] mb-4'>{profile.language=="eng"?item.descriptionEng:item.descriptionArb}</p>

                <div className={`flex justify-between items-center absolute w-[92%]  left-[4%] bottom-2 ${profile.language=="eng"?"":"flex-row-reverse"}`} >
                  <p className='text-[18px] font-semibold text-[#D4B03D]'>{profile.language=="eng"?item.priceEng:item.priceArb}</p>
                  <p className='text-[14px] bg-[#D4B03D] text-white px-4 py-1 rounded-4xl' onClick={()=>navigate('/book-now')} >{profile.language=="eng"?"Add":"إضافة"}</p>
                </div>
              </div>
            </div>

          ))
        }
      </div>
    </div>
  )
}

export default Fragrances
