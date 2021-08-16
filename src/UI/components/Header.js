import { Link } from 'react-router-dom'


import backgroundImage from '../assets/images/banner/banner-image.png'
import shape1 from "../assets/images/banner/shape/shape-1.png"
import shape2 from "../assets/images/banner/shape/shape-2.png"
import shape3 from "../assets/images/banner/shape/shape-3.png"
import shape4 from "../assets/images/banner/shape/shape-4.png"


const Header = () => {

  const $ = window.$;

  //===== Section Menu Active
  const scrollLink = $('.page-scroll');
      // Active link switching
      $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();

      scrollLink.each(function() {

        var sectionOffset = $(this.hash).offset().top - 90;

        if ( sectionOffset <= scrollbarLocation ) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      });
  });


  return (

    <header id="home" className="header-area pt-100">

        <div className="shape header-shape-one">
            <img src={shape1} alt="shape" />
        </div>

        <div className="shape header-shape-tow animation-one">
            <img src={shape2} alt="shape" />
        </div>

        <div className="shape header-shape-three animation-one">
            <img src={shape3} alt="shape" />
        </div>

        <div className="shape header-shape-fore">
            <img src={shape4} alt="shape" />
        </div>

        <div className="navigation-bar">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg">
                            <Link className="navbar-brand" href="#">
                                <img src="assets/images/logo.png" alt="Logo" />
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul id="nav" className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <Link className="page-scroll" href="#home">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="page-scroll" href="#about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="page-scroll" href="#service">Services</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="page-scroll" href="#project">Projects</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="page-scroll" href="#team">Team</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="page-scroll" href="#contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="navbar-btn ml-20 d-none d-sm-block">
                                <Link className="main-btn" href="#"><i className="lni-phone"></i> +98 222 4444</Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <div className="header-banner d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-9 col-sm-10">
                        <div className="banner-content">
                            <h4 className="sub-title wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1s">Your trusted</h4>
                            <h1 className="banner-title mt-10 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="2s"><span>Interior</span> Design Partner for Home or Office</h1>
                            <Link className="banner-contact mt-25 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="2.3s" href="#contact">Get a Free Quote</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-image bg_cover" style={{backgroundImage:`url(${backgroundImage})`}}></div>
        </div>

    </header>

  )
}

export default Header
