import { Link } from 'react-router-dom'



// import backgroundImage from '../assets/images/banner/banner-image.png'
// import shape1 from "../assets/images/banner/shape/shape-1.png"
// import shape2 from "../assets/images/banner/shape/shape-2.png"
// import shape3 from "../assets/images/banner/shape/shape-3.png"
// import shape4 from "../assets/images/banner/shape/shape-4.png"

import building2 from "../assets/images/building2.jpg"
import bridge from "../assets/images/bridge.jpg"


const Header = ({visibility, header}) => {

  const images = {
    building2,
    bridge
  }

  if ( visibility ){
    return (

      <header id="home" className="header-area pt-100">

          <div className="shape header-shape-one">
              {/*<img src={shape1} alt="shape" />*/}
          </div>

          <div className="shape header-shape-tow animation-one">
              {/*<img src={shape2} alt="shape" />*/}
          </div>

          <div className="shape header-shape-three animation-one">
              {/*<img src={shape3} alt="shape" />*/}
          </div>

          <div className="shape header-shape-fore">
              {/*<img src={shape4} alt="shape" />*/}
          </div>

          {/* Navigation */}

          <div className="header-banner d-flex align-items-center">
              <div className="container">
                  <div className="row">
                      <div className="col-xl-8 col-lg-9 col-sm-10">
                          <div className="banner-content">
                              <h4 className="sub-title wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1s">{header.h4}</h4>
                              <h1 dangerouslySetInnerHTML={{__html:header.h1}} className="banner-title mt-10 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="2s"></h1>
                              {
                                header.link && (
                                  <Link id="elementCSS" className="banner-contact mt-25 page-scroll" data-wow-duration="1.5s" data-wow-delay="2.3s" to={header.link.hash}>{header.link.text}</Link>
                                )
                              }
                          </div>
                      </div>
                  </div>
              </div>
              <div className="banner-image bg_cover" style={{backgroundImage:`url(${images[header.image]})`}}></div>
          </div>

      </header>

    )
  }
  else {
    return false
  }

}










export default Header
