

import { contact } from '../data/data'

import Contact from '../components/Contact'
import Map from '../components/Map'
import Footer from '../components/Footer'



const ContactPage = () => {

  return (
    <>
      <Contact visibility={true} contact={contact.contact} />
      <Map visibility={true} map={contact.map} />
      <Footer visibility={true} footer={contact.footer} />
    </>
  )
}

export default ContactPage
