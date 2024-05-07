import React from 'react'
import { Cta, Navbar, Brand } from '@/components/index'
import { Footer, Blog, Header, Possibility, Whatgpt3, Features } from '@/components/Landingcomps/index'
import './App.css'
const Home = () => {
  return (

    <div className='App bg-[#040C18]'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt3 />
      <Features />
      <Possibility />

      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default Home

