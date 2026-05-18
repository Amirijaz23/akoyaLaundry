import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from '../../assets/common/logo.png'
import { useContext, useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { MyContext } from '../../components/usecontext/UseContext'
const Navbar = () => {
    const { profile, setProfile } = useContext(MyContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [navVisible, setnavVisible] = useState(false)
    const [scrolled, SetScrolled] = useState(false)
    useEffect(() => {
        setnavVisible(false)
    }, [location.pathname])
    function handleLanguageChange() {
        profile.language == "eng" ?
            setProfile(prev => ({ ...prev, language: "arb" })) :
            setProfile(prev => ({ ...prev, language: "eng" }))
    }
    function HandleScrolling() {
        SetScrolled(window.scrollY > 2)
    }
    window.addEventListener('scroll', HandleScrolling)
    const navbar_english = [
        {
            navNameEng: "HOME",
            navNameArb: "الرئيسية",
            link: "/",
        },
        {
            navNameEng: "SERVICES",
            navNameArb: "الخدمات",
            link: "/services"
        },
        {
            navNameEng: "ABOUT",
            navNameArb: "من نحن",
            link: "/about"
        },
        {
            navNameEng: "VISION & MISSION",
            navNameArb: "الرؤية والرسالة",
            link: "/vision"
        }, {
            navNameEng: "CONTACT",
            navNameArb: "اتصل بنا",
            link: "/contact"
        }
    ]

    return (
        <div className={`sticky top-0 w-full   flex items-center justify-between p-4 z-50  ${scrolled ? "bg-[#00000075] border-b border-[#11010157] backdrop-blur-lg" : ""} ${navVisible ? "backdrop-blur-none bg-[#140909]" : ""} ${location.pathname=='/vision'?"bg-black":""}`}>
            <div className={`${profile.language == "arb" ? "order-2" : "order-0"}`}>
                <img src={Logo} alt="" className="w-30 curosr-pointer" onClick={() => navigate('/')} />
            </div>

            <div className={`w-[95%] left-2 md:w-[90%] md:mx-[3%] p-6 lg:p-0 lg:mx-0 ${profile.language == "arb" ? "lg:me-[10%]" : "lg:ms-[10%]"}  rounded-2xl absolute top-full   lg:bg-transparent lg:relative lg:flex lg:gap-10 lg:items-center lg:justify-between  ${navVisible ? "backdrop-blur-md bg-[#706e6e9f]" : "hidden"}`}>

                <div className={`flex flex-col text-center lg:flex-row gap-8 mb-6 lg:mb-0 lg:gap-8 order-1  ${profile.language == "arb" ? "lg:flex-row-reverse" : ""}`}>
                    {
                        navbar_english.map((item, index) => (
                            <div  key={index} className="hover:scale-105" >
                                <Link className='system-font text-[15px] font-medium text-white' to={`${item.link}`}>{profile.language == "arb" ? item.navNameArb : item.navNameEng}</Link>
                            </div>
                        ))
                    }
                </div>

                <div className='h-px bg-[#d4af376b] my-6 lg:hidden'>
                </div>

                <div className={`flex flex-col lg:flex-row gap-4 ${profile.language == "arb" ? "order-0 lg:flex-row-reverse" : "order-2"}`}>
                    <button className='text-[14px] font-medium text-white  border border-[#D4AF37] px-4 py-4 lg:py-2 rounded lg:rounded-4xl' onClick={() => handleLanguageChange()} > {profile.language == "arb" ? "English" :
                        "العربية"}</button>
                    <button className='text-[14px] font-medium text-white  border border-[#D4AF37] px-4 py-4 lg:py-2 rounded lg:rounded-4xl cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out' onClick={()=>navigate('/client-login')} >{profile.language == "arb" ? "تسجيل الدخول" : "Client Login"}</button>
                    <button className='text-[14px] font-medium text-black px-4 py-4 lg:py-2 rounded lg:rounded-4xl bg-[#D4AF37] cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out' onClick={()=>navigate("/book-now")}>{profile.language == "arb" ? "احجز الآن" : "Book Now"} </button>
                </div>
            </div>

            {
                navVisible ?
                    (
                        <div onClick={() => setnavVisible(!navVisible)} className='lg:hidden  text-white text-[30px]'>
                            <RxCross2 />
                        </div>
                    ) :
                    (
                        <div onClick={() => setnavVisible(!navVisible)} className='lg:hidden  text-white text-[30px]'>
                            <FaBars />
                        </div>
                    )
            }
        </div>
    )
}
export default Navbar
