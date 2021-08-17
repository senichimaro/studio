

import {
  nav,
  preloader,
  header,
  about,
  services,
  projects,
  team,
  testimonial,
  contact,
  map,
  footer
} from '../data/data'


import Nav from '../components/Nav'
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



const HomePage = () => {

  return (
    <>
      <Nav visibility={nav.visibility} />
      <PreLoader visibility={preloader.visibility} />
      <Header visibility={header.visibility} />
      <About visibility={about.visibility} />
      <Service visibility={services.visibility} />
      <Project visibility={projects.visibility} />
      <Team visibility={team.visibility} />
      <Testimonial visibility={testimonial.visibility} />
      <Contact visibility={contact.visibility} />
      <Map visibility={map.visibility} />
      <Footer visibility={footer.visibility} />
    </>
  )
}

export default HomePage
