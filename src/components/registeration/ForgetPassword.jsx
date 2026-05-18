import { MdOutlineMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { Link } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import { useContext } from "react";
import { MyContext } from "../usecontext/UseContext";

const ForgetPassword = () => {
    const {profile}=useContext(MyContext)
    return (
        <div className='flex justify-center px-4  lg:px-8 my-6'>
            <div className='w-120 rounded-2xl overflow-hidden shadow-md shadow-gray-400'>
                <div className='bg-[#1C1C1C] text-white flex flex-col justify-center items-center p-6 gap-3 text-center'>
                    <h2 className='system-font text-[24px] font-light text-[#d4af37]'>AKOYA LUXURY LAUNDRY</h2>
                    <div className='w-[80%] h-px bg-[#d4af37]'></div>
                    <p className='system-font text-[14px]'>{profile.language=="eng"?"Reset your password":"إعادة تعيين كلمة المرور"}</p>
                </div>

                <div className='p-4 md:p-6 lg:py-6 lg:px-8 bg-white flex flex-col gap-4 '>
                    <div className='gap-2 flex flex-col text-center items-center'>
                        <div className='bg-[#e7e3d5] w-15 h-15 rounded-full flex justify-center items-center'>
                            <CiLock className="text-amber-600 text-[28px]"/>
                        </div>
                        <h2 className='system-font text-[20px] font-medium'>{profile.language=="eng"?"Forgot Password?":"هل نسيت كلمة المرور؟"}</h2>
                        <p>{profile.language=="eng"?"Enter your email address and we'll send you a verification code to reset your password.":"أدخل بريدك الإلكتروني وسنرسل لك رمز تحقق لإعادة تعيين كلمة المرور."}</p>
                    </div>
                    <form className='flex flex-col gap-6'>
                        <div className={`flex flex-col gap-3 ${profile.language=="eng"?"":"text-right"}`}>
                            <label htmlFor="" className='system-font font-medium text-[#364153]'>{profile.language=="eng"?"Email Address":"البريد الإلكتروني"}</label>
                            <div className='flex items-center border border-gray-300 rounded gap-2  p-3 focus-within:border-2 focus-within:border-amber-300'>
                                <MdOutlineMailOutline className='text-gray-400 text-[26px]' />
                                <input type="email" placeholder='your@email.com' className={`w-full focus:outline-none ${profile.language=="eng"?"":"text-right"}`} required name='email' />
                            </div>
                        </div>
                        <div>
                            <button type='submit' className='bg-[#CFA829] py-4 text-center rounded text-white w-full system-font font-medium cursor-pointer hover:scale-[1.02] active:scale-[1] '>{profile.language=="eng"?"Send Code":"إرسال رمز التحقق"}</button>
                        </div>
                    </form>

                    <div className='flex flex-col items-center'>
                        <div className='bg-gray-400 h-px w-full translate-y-3'></div>
                        <p className='px-2 bg-white z-10'>{profile.language=="eng"?"Remember Your Password":"هل تذكرت كلمة المرور؟"}</p>
                    </div>
                    <Link to={"/client-login"} path={<SignUpForm />} className='system-font text-[#cb8900] text-[16px] hover:underline font-medium text-center' >{profile.language=="eng"?"Back to Sign In":"العودة لتسجيل الدخول"}</Link>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword
