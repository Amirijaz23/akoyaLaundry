import React, { useEffect } from 'react'
import { BrowserRouter, createBrowserRouter, Outlet, Route, RouterProvider, Routes } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Vision from './pages/Vision'
import Contact from './pages/Contact'
import ClientLogin from './pages/ClientLogin'
import BookNow from './pages/BookNow'
import GlobalData from './components/usecontext/UseContext'
import Footer from './components/common/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import ScrollFromTop from './components/common/ScrollFromTop'
import AOS from 'aos'
import 'aos/dist/aos.css';
import SignUp from './components/registeration/SignUpForm'
import ForgetPassword from './components/registeration/ForgetPassword'

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 300,
      once: true,
    });
  }, [])
  function AppsRouting() {
    return (
      <div>
        <GlobalData>
          <ScrollFromTop />
          <ToastContainer />
          <Navbar />
          <Outlet />
          <Footer />
        </GlobalData>
      </div>
    )
  }
  function RegisterationRouting() {
    return (
      <div>
        <GlobalData>
          <ScrollFromTop />
          <Outlet />
        </GlobalData>
      </div>
    )
  }

  const RoutingFuction = createBrowserRouter(
    [
      {
        element: <AppsRouting />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/services", element: <Services /> },
          { path: "/about", element: <About /> },
          { path: "/vision", element: <Vision /> },
          { path: "/contact", element: <Contact /> },
          { path: "/book-now", element: <BookNow /> }
        ]
      },
      {
        element: <RegisterationRouting />,
        children: [
          { path: "/client-login", element: <ClientLogin /> },
          { path: "/sign-up", element: <SignUp /> },
          { path: "forget-password", element: <ForgetPassword /> }
        ]
      }
    ]
  )


  return (
    <div>
      <ToastContainer />
      <RouterProvider router={RoutingFuction} />
    </div>
  )
}
export default App
