import React, { useEffect, useState } from 'react'
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
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 300,
      once: true,
    });

    const waitForAllResources = async () => {
      // Wait for window load event first
      await new Promise(resolve => {
        if (document.readyState === 'complete') {
          resolve()
        } else {
          window.addEventListener('load', () => resolve())
        }
      })

      // Wait for all images and videos to load
      const images = document.querySelectorAll('img')
      const videos = document.querySelectorAll('video')

      const imagePromises = Array.from(images).map(img => {
        return new Promise(resolve => {
          if (img.complete) {
            resolve()
          } else {
            img.addEventListener('load', () => resolve())
            img.addEventListener('error', () => resolve()) // Resolve even on error
          }
        })
      })

      const videoPromises = Array.from(videos).map(video => {
        return new Promise(resolve => {
          if (video.readyState >= 2) { // HAVE_CURRENT_DATA or more
            resolve()
          } else {
            video.addEventListener('canplay', () => resolve())
            video.addEventListener('error', () => resolve()) // Resolve even on error
          }
        })
      })

      await Promise.all([...imagePromises, ...videoPromises])
      setIsLoaded(true)
    }

    waitForAllResources()
  }, [])

  if (!isLoaded) {
    return (
      <div className="app-loader">
        <div className="loader-ring" />
        <p>Loading...</p>
      </div>
    )
  }

  function AppsRouting() {
    return (
      <div>
        <ScrollFromTop />
        <ToastContainer />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }
  function RegisterationRouting() {
    return (
      <div>
        <ScrollFromTop />
        <Outlet />
      </div >
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
      <GlobalData>
        <ToastContainer />
        <RouterProvider router={RoutingFuction} />
      </GlobalData>
    </div>
  )
}
export default App
