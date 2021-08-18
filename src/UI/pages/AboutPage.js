

// import {
//   nav,
//   preloader,
//   header,
//   about,
//   services,
//   projects,
//   team,
//   testimonial,
//   contact,
//   map,
//   footer
// } from '../data/data'


// import Nav from '../components/Nav'
// import PreLoader from '../components/PreLoader'
import Header from '../components/Header'
import About from '../components/About'
import Service from '../components/Service'
import Project from '../components/Project'
import Team from '../components/Team'
import Testimonial from '../components/Testimonial'
import Contact from '../components/Contact'
import Map from '../components/Map'
import Footer from '../components/Footer'



const AboutPage = () => {

  return (
    <>
      <Header visibility={true} />
      <About visibility={true} />
      <Service visibility={true} />
      <Project visibility={true} />
      <Team visibility={true} />
      <Testimonial visibility={true} />
      <Contact visibility={true} />
      <Map visibility={true} />
      <Footer visibility={true} />
    </>
  )
}

export default AboutPage
