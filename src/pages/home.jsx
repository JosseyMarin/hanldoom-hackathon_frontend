import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LoginSection from '../components/LoginSection';
import InfoSection from '../components/InfoSection';
import WeaversSection from '../components/WeaversSection';
import Footer from '../components/Footer';

function toggleLogin(){

}


const HomePage = () => {
  return (
    <>
      <Navbar toggleLogin={toggleLogin} />
      <Hero />

      <InfoSection />
      <WeaversSection />
      <Footer />
    </>
  )
}

export default HomePage
