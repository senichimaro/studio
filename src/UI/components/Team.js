import { Link } from 'react-router-dom'

import office1 from "../assets/images/office1.jpg"
import office2 from "../assets/images/office2.jpg"
import office4 from "../assets/images/office4.jpg"
import office5 from "../assets/images/office5.jpg"

import buildingRed from "../assets/images/buildingRed.jpg"
import corp from "../assets/images/corp.jpg"
import wind from "../assets/images/wind.jpg"
import solar from "../assets/images/solar.jpg"





const Team = ({visibility, team}) => {

  const images = {
    office1,
    office2,
    office4,
    office5,
    buildingRed,
    corp,
    wind,
    solar
  }

  if ( visibility ) {
    return (

      <section id="team" className="team-area pt-125 pb-130 gray-bg">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-6">
                      <div className="section-title text-center pb-20">
                          <h5 className="sub-title mb-15">{team.h5}</h5>
                          <h2 className="title">{team.h2}</h2>
                      </div>
                  </div>
              </div>
              <div className="row">

                  {
                    team.cards.map(({delay, image, link, subtitle, social}) => (
                      <CardsItem delay={delay} image={images[image]} link={link} subtitle={subtitle} social={social} key={subtitle} />
                    ))
                  }

              </div>
          </div>
      </section>

    )
  }
  else {
    return false
  }


}

function CardsItem({delay, image, link, subtitle, social}){
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="single-team text-center mt-30 wow fadeIn----Up" data-wow-duration="1.5s" data-wow-delay={delay}>

            <div className="team-image">
                <img src={image} alt="Team" />
            </div>

            <div className="team-content">

                <h4 className="team-name">
                  <Link to="#">{link}</Link>
                </h4>

                <span className="sub-title">{subtitle}</span>

                <ul className="social mt-25">

                    {
                      social.map(({hash, icon}) => (
                        <SocialIcons hash={hash} icon={icon} key={icon} />
                      ))
                    }

                </ul>

            </div>
        </div>
    </div>
  )
}

function SocialIcons({hash, icon}){
  return (
    <li>
      <Link to={hash}>
        <i className={icon}></i>
      </Link>
    </li>
  )
}

export default Team
