import React from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero-img/Hero'
import Beats from './components/Beats/Beats'
import SoundHeading from './components/soundheading/SoundHeading'
import Meetimg from './components/meet-img/Meetimg'
import Beatpag from './components/Beatstwopag/Beatpag'
import Wonderimg from './components/wonder-img/Wonderimg'
import Startpag from './components/starttestpag/Startpag'
import Footer from './components/footer/Footer'


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Beats/>
      <SoundHeading/>
      <Meetimg/>
      <Beatpag/>
      <Wonderimg/>
      <Startpag/>
      <Footer/>
    </div>
  )
}


export default App
