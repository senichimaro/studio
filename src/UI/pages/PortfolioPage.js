

import { portfolio } from '../data/data'


import Header from '../components/Header'
import About from '../components/About'
import Service from '../components/Service'
import Team from '../components/Team'
import Footer from '../components/Footer'



const PortfolioPage = () => {

  return (
    <>
      <Header visibility={true} header={portfolio.header} />
      <Team visibility={true} team={portfolio.team} />
      <About visibility={true} about={portfolio.about} />
      <Service visibility={true} services={portfolio.services} />
      <Footer visibility={true} footer={portfolio.footer} />
    </>
  )
}

export default PortfolioPage
