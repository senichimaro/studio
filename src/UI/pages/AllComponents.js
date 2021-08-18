// import { useRouteMatch } from 'react-router-dom'
// import { useState, useEffect } from 'react'


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
      {/*<Nav visibility={false} />*/}
      {/*<PreLoader visibility={false} />*/}
      {/*<Header visibility={false} />*/}
      <About visibility={true} />
      {/*<Project visibility={false} />*/}
      <Service visibility={true} />
      <Team visibility={true} />
      {/*<Testimonial visibility={false} />*/}
      {/*<Contact visibility={false} />*/}
      {/*<Map visibility={false} />*/}
      <Footer visibility={true} />
    </>
  )
}

export default HomePage
