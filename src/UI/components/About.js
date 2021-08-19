import { Link } from 'react-router-dom'


import blueprint from "../assets/images/blueprint3.jpg"
import empresa from "../assets/images/empresa3.jpg"
import bussines2 from "../assets/images/bussines2.jpg"
import meeting from "../assets/images/meeting.jpg"
import woman from "../assets/images/woman.jpg"
import beach from "../assets/images/beach.jpg"
import center from "../assets/images/center.jpg"


const About = ({visibility, about }) => {

  const images = {
    blueprint,
    empresa,
    bussines2,
    meeting,
    woman,
    beach,
    center
  }

  if ( visibility ){
    return (

      <section id="about" className="about-area pt-80 pb-130">
          <div className="container">
              <div className="row">
                  <div className="col-lg-6">
                      <div className="about-image mt-50 clearfix">
                          <div className="single-image float-left">
                              <img src={images[about.image1]} alt="About" />
                          </div>
                          <div data-aos="fade-right" className="about-btn">
                              <Link className="main-btn" to="#" dangerouslySetInnerHTML={{__html:about.cta}}></Link>
                          </div>
                          <div className="single-image image-tow float-right">
                              <img src={images[about.image2]} alt="About" />
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="about-content mt-45">
                          <h4 className="about-welcome">{about.h4} </h4>
                          <h3 className="about-title mt-10">{about.h3}</h3>
                          <p className="mt-25" dangerouslySetInnerHTML={{__html:about.para}}></p>
                          <Link className="main-btn mt-25" to={about.link.hash}>{about.link.text}</Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>

    )
  }
  else {
    return false
  }

}

export default About
