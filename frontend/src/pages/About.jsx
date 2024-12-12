import React, { useContext, useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import ShortIntro from '../components/ShortIntro'
import AboutWelcome from '../components/AboutWelcome'
import Footer from "../components/Footer"
import AboutMain from '../components/AboutMain'
import Login from '../components/Login';
import { AppContext } from '../context/AppContext'

function About() {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  const {showLogin} = useContext(AppContext)

  return (
    <div className="flex flex-col bg-black/95">
      <Navbar />
      {showLogin && <Login/> }
      <div className="mt-32">
        <AboutWelcome />
        <AboutMain/>
        <ShortIntro />
      </div>
      <Footer />
    </div>
  )
}

export default About