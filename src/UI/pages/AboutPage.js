
import { about } from '../data/data'


import Header from '../components/Header'
import About from '../components/About'
import Service from '../components/Service'
import Footer from '../components/Footer'



const AboutPage = () => {

  return (
    <>
      <Header visibility={true} header={about.header} />
      <About visibility={true} about={about.about} />
      <Service visibility={true} services={about.services} />
      <Footer visibility={true} footer={about.footer} />
    </>
  )
}

export default AboutPage
