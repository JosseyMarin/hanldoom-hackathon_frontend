import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LoginSection from '../components/LoginSection';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';

function toggleLogin(){

}


const HomePage = () => {
  return (
    <>
      <Navbar toggleLogin={toggleLogin} />
      <Hero />
      <InfoSection />
      <Footer />
    </>
  )
}

export default HomePage
