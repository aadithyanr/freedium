import React from 'react'
import Navbar from '../components/Navbar'
import LandingPage from '../components/LandingPage'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div className='h-screen'>
        <Navbar />
        <LandingPage />
        <Footer />
    </div>
  )
}
