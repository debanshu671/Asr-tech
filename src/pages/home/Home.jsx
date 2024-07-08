import React from 'react'
import Herosec from './Herosec'
import Cardsec from './Cardsec'
import Header from '../../components/Header'
import Portpolio from './Portpolio'
import AboutHome from './AboutHome'
import Intership from './Intership'
import Testimonialhome from './Testimonialhome'
import Footer from '../../components/Footer'
const Home = () => {
  return (
    <>
    <Header />
    <Herosec />
    <Cardsec />
    <Portpolio />
    <AboutHome />
    <Intership />
    <Testimonialhome />
    <Footer />
    </>
  )
}

export default Home