import React from 'react'
import Hero from '../../components/Home/HeroSection-1/Hero'
import HeroSectionTwo from '../../components/Home/HeroSection-2/HeroSectionTwo'
import HeroSectionThree from '../../components/Home/HeroSection-3/HeroSectionThree'
import Newsteller from '../../components/Home/newsTaller/Newsteller'
import HelloSection from '../../components/Home/talkSection/HelloSection'

const Home = () => {
  return (
    <div>
      <Hero />
      <HeroSectionTwo />
      <HeroSectionThree />
      <HelloSection />
      <Newsteller />
    </div>
  )
}

export default Home