
import PreLoader from '../components/PreLoader'
import Header from '../components/Header'
import About from '../components/About'
import Service from '../components/Service'
import Project from '../components/Project'
import Team from '../components/Team'
import Testimonial from '../components/Testimonial'
import Contact from '../components/Contact'
import Map from '../components/Map'
import Footer from '../components/Footer'
import Nav from '../components/Nav'



const HomePage = () => {

  return (
    <>
      <Nav />
      <PreLoader />
      <Header />
      <About />
      <Service />
      <Project />
      <Team />
      <Testimonial />
      <Contact />
      <Map />
      <Footer />
    </>
  )
}

export default HomePage
