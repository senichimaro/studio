

import { contact } from '../data/data'


import Header from '../components/Header'
import About from '../components/About'
import Service from '../components/Service'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Map from '../components/Map'
import Footer from '../components/Footer'



const ContactPage = () => {

  return (
    <>
      <Map visibility={true} map={contact.map} />
      <Header visibility={true} header={contact.header} />
      <About visibility={true} about={contact.about} />
      <Service visibility={true} services={contact.services} />
      <Team visibility={true} team={contact.team} />
      <Contact visibility={true} contact={contact.contact} />
      <Footer visibility={true} footer={contact.footer} />
    </>
  )
}

export default ContactPage
