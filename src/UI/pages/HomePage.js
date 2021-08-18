
import { home } from '../data/data'


import About from '../components/About'
import Service from '../components/Service'
import Team from '../components/Team'
import Footer from '../components/Footer'



const HomePage = () => {

  return (
    <>
      <About visibility={true} about={home.about}/>
      <Service visibility={true} services={home.services}/>
      <Team visibility={true} team={home.team}/>
      <Footer visibility={true} footer={home.footer}/>
    </>
  )
}

export default HomePage
