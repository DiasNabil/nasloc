import '@/styles/index.css'


import Navbar  from '../components/Navbar.jsx'
import Hero from '@/components/Home comp/Hero.jsx'
import Services from '@/components/Home comp/Services comp/Services.jsx'
import Demo from '@/components/Home comp/Demo.jsx'
import About from '@/components/Home comp/About.jsx'
import Contact from '@/components/Home comp/Contact.jsx'
import Footer from '@/components/Footer.jsx'

import { getHomePage } from '@/lib/query.js'


export default async function Home() {
  const theme = 'light'
  const page = await getHomePage(57)


  const {heroSection , servicesSection , galerieSection , aboutSection , contactSection} = page

  return (
    <>
      <Navbar theme={theme}/>
      <Hero content={heroSection[0]}/>
      <Services content={servicesSection[0]}/>
      <Demo content={galerieSection}/>
      <About content={aboutSection[0]}/>
      <Contact content={contactSection[0]}/>
      <Footer theme={theme}/>
    </>
  )
}
