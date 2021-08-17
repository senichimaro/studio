import { Link } from 'react-router-dom'
import { testimonial } from '../data/data'





import shape from "../assets/images/testimonial/shape.png"
import t1 from "../assets/images/testimonial/t-1.jpg"
import t2 from "../assets/images/testimonial/t-2.jpg"
import t3 from "../assets/images/testimonial/t-3.jpg"

import bkImage from '../assets/images/testimonial/testimonial-bg.jpg'

const Testimonial = ({visibility}) => {

  const images = {
    t1,
    t2,
    t3
  }

  if( visibility ){
    return (

      <section id="testimonial" className="testimonial-area pt-130 pb-130">

          <div className="shape shape-one">
              {/*<img src={shape} alt="testimonial" />*/}
          </div>

          <div className="shape shape-tow">
              {/*<img src={shape} alt="testimonial" />*/}
          </div>

          <div className="shape shape-three">
              {/*<img src={shape} alt="testimonial" />*/}
          </div>

          <div className="container">
              <div className="testimonial-bg bg_cover pt-80 pb-80" style={{backgroundImage: `url(${bkImage})`}}>
                  <div className="row">
                      <div className="col-xl-4 offset-xl-7 col-lg-5 offset-lg-6 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                          <div className="testimonial-active">

                            {
                              testimonial.cards.map(({image, icon, para, h5, subtitle}) => (
                                <CardItem image={images[image]} icon={icon} para={para} h5={h5} subtitle={subtitle}key={image} />
                              ))
                            }

                          </div>
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



function CardItem({image, icon, para, h5, subtitle}){
  return (
    <div className="single-testimonial text-center">

        <div className="testimonial-image">
            <img src={image} alt="Testimonial" />
            <div className="quota">
                <i className={icon}></i>
            </div>
        </div>

        <div className="testimonial-content mt-20">
            <p>{para}</p>
            <h5 className="testimonial-name mt-15">{h5}</h5>
            <span className="sub-title">{subtitle}</span>
        </div>

    </div>
  )
}



export default Testimonial
