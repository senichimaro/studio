import { Link } from 'react-router-dom'


import image1 from "../assets/images/team/team-1.jpg"
import image2 from "../assets/images/team/team-2.jpg"
import image3 from "../assets/images/team/team-3.jpg"
import image4 from "../assets/images/team/team-4.jpg"




const Team = () => {



  return (

    <section id="team" className="team-area pt-125 pb-130 gray-bg">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="section-title text-center pb-20">
                        <h5 className="sub-title mb-15">Meet The Team</h5>
                        <h2 className="title">Our Expert Designers</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="single-team text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                        <div className="team-image">
                            <img src={image1} alt="Team" />
                        </div>
                        <div className="team-content">
                            <h4 className="team-name"><Link to="#">Rob Hope</Link></h4>
                            <span className="sub-title">CEO & Founder</span>
                            <ul className="social mt-25">
                                <li><Link to="#"><i className="lni-facebook-filled"></i></Link></li>
                                <li><Link to="#"><i className="lni-twitter-original"></i></Link></li>
                                <li><Link to="#"><i className="lni-linkedin-original"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="single-team text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                        <div className="team-image">
                            <img src={image2} alt="Team" />
                        </div>
                        <div className="team-content">
                            <h4 className="team-name"><Link to="#">Patric Green</Link></h4>
                            <span className="sub-title">Chief Designer</span>
                            <ul className="social mt-25">
                                <li><Link to="#"><i className="lni-facebook-filled"></i></Link></li>
                                <li><Link to="#"><i className="lni-twitter-original"></i></Link></li>
                                <li><Link to="#"><i className="lni-linkedin-original"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="single-team text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.2s">
                        <div className="team-image">
                            <img src={image3} alt="Team" />
                        </div>
                        <div className="team-content">
                            <h4 className="team-name"><Link to="#">Daryl Dixon</Link></h4>
                            <span className="sub-title">Consultant</span>
                            <ul className="social mt-25">
                                <li><Link to="#"><i className="lni-facebook-filled"></i></Link></li>
                                <li><Link to="#"><i className="lni-twitter-original"></i></Link></li>
                                <li><Link to="#"><i className="lni-linkedin-original"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="single-team text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.6s">
                        <div className="team-image">
                            <img src={image4} alt="Team" />
                        </div>
                        <div className="team-content">
                            <h4 className="team-name"><Link to="#">Mark Parker</Link></h4>
                            <span className="sub-title">Intern</span>
                            <ul className="social mt-25">
                                <li><Link to="#"><i className="lni-facebook-filled"></i></Link></li>
                                <li><Link to="#"><i className="lni-twitter-original"></i></Link></li>
                                <li><Link to="#"><i className="lni-linkedin-original"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Team
