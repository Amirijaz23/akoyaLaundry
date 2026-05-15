import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/home/Hero'
import Signature from '../components/home/Signature'
import Like from '../components/home/Like'
import Fragrances from '../components/home/Fragrances'
import Touch from '../components/home/Touch'
import Works from '../components/home/Works'
import Exclusive from '../components/home/Exclusive'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Signature/>
      <Like/>
      <Fragrances/>
      <Touch/>
      <Works/>
      <Exclusive/>
    </div>
  )
}

export default Home
