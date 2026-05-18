import React, { useContext, useEffect, useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../usecontext/UseContext'

const ServicesCard = () => {
    const navigate = useNavigate()
    const { profile, setProfile } = useContext(MyContext)
    const category_indexes = {
        "Dry Cleaning": 1,
        "Pressing": 2,
        "Speciality": 3,
        "Traditional": 4,
        "Express": 5,
        "Add-On": 6
    }
    const ServicesCardData = [
        {
            id: 1,
            Img: "https://lundary.vercel.app/home/dryCleaning.jpg",
            Icon: "🧥",
            heading: "Dry Cleaning",
            price: "From 6 QAR",
            description: "Expert care for suits and delicate fabrics using eco-friendly solvents",
            category: "Dry Cleaning",

            headingArb: "التنظيف الجاف",
            priceArb: "ابتداءً من 6 ريال",
            descriptionArb: "عناية متخصصة للبدلات والأقمشة الحساسة باستخدام مذيبات صديقة للبيئة",
        },
        {
            id: 2,
            Img: "https://lundary.vercel.app/home/exectivePressing.jpg",
            Icon: "👔",
            heading: "Executive Pressing",
            price: "From 3 QAR",
            description: "Crisp finishes for business attire with precision steam technology",
            category: "Pressing",

            headingArb: "الكي التنفيذي",
            priceArb: "ابتداءً من 3 ريال",
            descriptionArb: "تشطيبات دقيقة للملابس الرسمية باستخدام تقنية البخار المتقدمة",
        },
        {
            id: 3,
            Img: "https://lundary.vercel.app/home/care.jpg",
            Icon: "👗",
            heading: "Couture Care",
            price: "From 7 QAR",
            description: "Hand-cleaning for designer garments and delicate fabrics",
            category: "Speciality",

            headingArb: "عناية الأزياء الفاخرة",
            priceArb: "ابتداءً من 7 ريال",
            descriptionArb: "تنظيف يدوي للملابس المصممة والأقمشة الحساسة",
        },
        {
            id: 4,
            Img: "https://lundary.vercel.app/home/resturation.jpg",
            Icon: "🕌",
            heading: "Bisht Restoration",
            price: "From 25 QAR",
            description: "Traditional cleaning and pressing for Qatari formal wear",
            category: "Speciality",

            headingArb: "ترميم البشت",
            priceArb: "ابتداءً من 25 ريال",
            descriptionArb: "تنظيف وكي تقليدي للأزياء الرسمية القطرية",
        },
        {
            id: 5,
            Img: "https://lundary.vercel.app/home/sehedulePickup.jpg",
            Icon: "⚡",
            heading: "Express Service",
            price: "+30% Premium",
            description: "3-hour turnaround for urgent garment needs",
            category: "Express",

            headingArb: "خدمة عاجلة",
            priceArb: "بزيادة 30٪",
            descriptionArb: "معالجة خلال 3 ساعات لاحتياجات الملابس المستعجلة",
        },
        {
            id: 6,
            Img: "https://lundary.vercel.app/home/fragrance.jpg",
            Icon: "🌸",
            heading: " Fragrance Infusion",
            price: "5 QAR",
            description: "Luxury scent options for your garments",
            category: "Add-On",

            headingArb: "إضافة عطر",
            priceArb: "5 ريال",
            descriptionArb: "خيارات عطرية فاخرة لملابسك",
        },
        {
            id: 7,
            Img: "https://lundary.vercel.app/services/dishdasha.webp",
            Icon: "👳‍♂️",
            heading: "Dishdasha",
            price: "From 4 QAR",
            description: "Professional care for men's traditional Qatari garment",
            category: "Traditional",

            headingArb: "الدشداشة",
            priceArb: "ابتداءً من 4 ريال",
            descriptionArb: "عناية احترافية للزي القطري التقليدي الرجالي",
        },
        {
            id: 8,
            Img: "https://lundary.vercel.app/services/child_dishdasha.jpg",
            Icon: "👦",
            heading: "Child Dishdasha",
            price: "From 3 QAR",
            description: "Specialized care for children's traditional garments",
            category: "Traditional",

            headingArb: "دشداشة الأطفال",
            priceArb: "ابتداءً من 3 ريال",
            descriptionArb: "عناية متخصصة لأزياء الأطفال التقليدية",
        },
        {
            id: 9,
            Img: "https://lundary.vercel.app/services/bisht.jpg",
            Icon: "🪔",
            heading: "Bisht",
            price: "From 25 QAR",
            description: "Premium care for ceremonial cloak with gold detailing",
            category: "Traditional",

            headingArb: "بشت",
            priceArb: "ابتداءً من 25 ريال",
            descriptionArb: "عناية مميزة للبشت الاحتفالي بتفاصيل ذهبية",
        },
        {
            id: 10,
            Img: "https://lundary.vercel.app/services/ghutra.jpg",
            Icon: "🧕",
            heading: " Ghutra",
            price: "From 25 QAR",
            description: "Premium care for ceremonial cloak with gold detailing",
            category: "Traditional",

            headingArb: "الغطرة",
            priceArb: "ابتداءً من 3 ريال",
            descriptionArb: "تنظيف ناعم للغطاء التقليدي للرأس",

        },
        {
            id: 11,
            Img: "https://lundary.vercel.app/services/kurta.jpg",
            Icon: "👘",
            heading: "Kurta",
            price: "From 4 QAR",
            description: "Care for traditional South Asian tunic",
            category: "Traditional",

            headingArb: "الكورتا",
            priceArb: "ابتداءً من 4 ريال",
            descriptionArb: "عناية للزي التقليدي الجنوب آسيوي",
        },
        {
            id: 12,
            Img: "https://lundary.vercel.app/services/kurtaPajama.jpg",
            Icon: "👖",
            heading: "Kurta Pyjama(Set)",
            price: "From 6 QAR",
            description: "Complete set cleaning for traditional attire",
            category: "Traditional",

            headingArb: "طقم كورتا بيجاما",
            priceArb: "ابتداءً من 6 ريال",
            descriptionArb: "تنظيف شامل للزي التقليدي",
        },
        {
            id: 13,
            Img: "https://lundary.vercel.app/services/kameez.jpg",
            Icon: "👕",
            heading: "Kameez",
            price: "From 4 QAR",
            description: "Professional care for traditional long shirts",
            category: "Traditional",

            headingArb: "القميص (كميز)",
            priceArb: "ابتداءً من 4 ريال",
            descriptionArb: "عناية احترافية للقميص الطويل التقليدي",
        },
        {
            id: 14,
            Img: "https://lundary.vercel.app/services/jalabiya.jpg",
            Icon: "👚",
            heading: "Jalabiya",
            price: "From 6 QAR",
            description: "Specialized care for flowing traditional gowns",
            category: "Traditional",

            headingArb: "جلابية",
            priceArb: "ابتداءً من 6 ريال",
            descriptionArb: "عناية متخصصة للفساتين التقليدية الفضفاضة",
        },
        {
            id: 15,
            Img: "https://lundary.vercel.app/services/abaya.jpg",
            Icon: "🧕",
            heading: "Abaya",
            price: "From 10 QAR",
            description: "Professional cleaning for everyday abayas",
            category: "Traditional",

            headingArb: "عباية",
            priceArb: "ابتداءً من 10 ريال",
            descriptionArb: "تنظيف احترافي للعبايات اليومية",
        },
        {
            id: 16,
            Img: "https://lundary.vercel.app/services/abaya_special.jpg",
            Icon: "✨",
            heading: "Abaya Special",
            price: "From 12 QAR",
            description: "Premium care for embellished abayas",
            category: "Traditional",

            headingArb: "عباية مميزة",
            priceArb: "ابتداءً من 12 ريال",
            descriptionArb: "رعاية فاخرة للعبايات المطرزة",
        },
        {
            id: 17,
            Img: "https://lundary.vercel.app/services/hijab.png",
            Icon: "🧣",
            heading: "Hijab",
            price: "From 3 QAR",
            description: "Delicate cleaning for headscarves",
            category: "Traditional",

            headingArb: "الحجاب",
            priceArb: "ابتداءً من 3 ريال",
            descriptionArb: "تنظيف لطيف للأوشحة الرأسية",
        },
        {
            id: 18,
            Img: "https://lundary.vercel.app/services/gent_suit.jpg",
            Icon: "👔",
            heading: "Gent Suit (3pcs)",
            price: "From 12 QAR",
            description: "Complete care for 3-piece suits",
            category: "Dry Cleaning",

            headingArb: "بدلة رجال (3 قطع)",
            priceArb: "ابتداءً من 12 ريال",
            descriptionArb: "رعاية شاملة للبدل الثلاث قطع",
        },
        {
            id: 19,
            Img: "https://lundary.vercel.app/services/dress.jpg",
            Icon: "👗",
            heading: "Dress (Short)",
            price: "From 10 QAR",
            description: "Care for cocktail and summer dresses",
            category: "Dry Cleaning",

            headingArb: "فستان (قصير)",
            priceArb: "ابتداءً من 10 ريال",
            descriptionArb: "عناية لفساتين الكوكتيل والصيف",
        },
        {
            id: 20,
            Img: "https://lundary.vercel.app/services/dressLong.jpg",
            Icon: "👰",
            heading: "Dress (Long)",
            price: "From 15 QAR",
            description: "Specialized care for evening gowns",
            category: "Dry Cleaning",

            headingArb: "فستان (طويل)",
            priceArb: "ابتداءً من 15 ريال",
            descriptionArb: "عناية متخصصة لفساتين السهرة",
        },
        {
            id: 21,
            Img: "https://lundary.vercel.app/services/overcoat.jpg",
            Icon: "🧥",
            heading: "Overcoat",
            price: "From 11 QAR",
            description: "Winter coat cleaning and preservation",
            category: "Dry Cleaning",

            headingArb: "معطف",
            priceArb: "ابتداءً من 11 ريال",
            descriptionArb: "تنظيف وحفظ للمعاطف الشتوية",
        },
        {
            id: 22,
            Img: "https://lundary.vercel.app/services/military_suite.jpg",
            Icon: "🎖️",
            heading: "Military Uniform",
            price: "From 9 QAR",
            description: "Regimental standard cleaning and pressing",
            category: "Speciality",

            headingArb: "زي عسكري",
            priceArb: "ابتداءً من 9 ريال",
            descriptionArb: "تنظيف وكي حسب المعيار العسكري",
        },
        {
            id: 23,
            Img: "https://lundary.vercel.app/services/blouse.jpg",
            Icon: "👚",
            heading: "Blouse (Special)",
            price: "From 4 QAR",
            description: "Delicate care for embellished tops",
            category: "Speciality",

            headingArb: "بلوزة (مميزة)",
            priceArb: "ابتداءً من 4 ريال",
            descriptionArb: "رعاية دقيقة للبلوزات المطرّزة",
        },
        {
            id: 24,
            Img: "https://lundary.vercel.app/services/bathrob.jpg",
            Icon: "🛁",
            heading: "Bath Robe",
            price: "From 4 QAR",
            description: "Deep cleaning for plush bathrobes",
            category: "Speciality",

            headingArb: "روب حمام",
            priceArb: "ابتداءً من 4 ريال",
            descriptionArb: "تنظيف عميق للروباش الناعمة",
        },
    ]
    const Data = ServicesCardData.filter((item) => {
        const filteredResults = profile.cardCategory == 0 ? true : category_indexes[item.category] == profile.cardCategory
        return filteredResults
    })

    return (
        <div>
            <div className='w-[90%] md:w-[82%] mx-auto grid-cols-1 grid  md:grid-cols-2 lg:grid-cols-3 gap-8 my-4'>
                {
                    Data.map((item) => (
                        <div data-aos="fade-up" key={item.id} className='card h-110 lg:h-auto  overflow-hidden shadow-md shadow-gray-300 rounded-2xl my-4'>
                            <div className='image-section h-60 relative overflow-hidden'>
                                <img src={item.Img} alt="" className='w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out' />
                                <div className='bg-[#D4AF37] w-12 h-12 absolute top-4 right-4 rounded-full flex justify-center items-center'>
                                    <p className='text-[28px]'>{item.Icon}</p>
                                </div>
                            </div>
                            <div className='text-section p-6 flex flex-col gap-3'>
                                <div className={`flex justify-between items-center ${profile.language=="eng"?"":"flex-row-reverse"}`}>
                                    <h2 className='text-[20px] font-medium'>{profile.language == "eng" ? item.heading: item.headingArb}</h2>
                                    <p className='text-[16px] font-medium text-[#D4AF37]'>{profile.language == "eng" ? item.price : item.priceArb}</p>
                                </div>
                                <p className={`${profile.language=="eng"?"":"text-right"}`}>{profile.language == "eng" ? item.description : item.descriptionArb}</p>
                                <div className='h-px bg-[#D4AF37]'></div>
                                <div className={`bg-[#D4AF37] flex items-center justify-center gap-3 transition-all duration-300 ease-in-out font-medium rounded py-3 hover:bg-black hover:text-[#D4AF37] active:scale-95 ${profile.language=="eng"?"":"flex-row-reverse"}`} onClick={() => navigate('/book-now')}>
                                    <p>{profile.language=="eng"?"Order":"اطلب الآن"}</p>
                                    <IoMdAdd />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default ServicesCard