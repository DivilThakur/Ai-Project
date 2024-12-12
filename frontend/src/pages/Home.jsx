import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Introduction from '../components/Introduction';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';
import Login from '../components/Login';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Home() {

  const {showLogin} = useContext(AppContext); 
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <div className='bg-[#111111]'>
      <div className='bg-background bg-black/60' >
        <Navbar />
      {showLogin && <Login/>}
        <Header />
      </div>
      <Welcome />
      <Introduction/>
      <Features/>
      <Portfolio/>
      <Footer/>
    </div>
  )
}

export default Home;