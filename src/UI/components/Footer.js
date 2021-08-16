import { Link } from 'react-router-dom'


import logo from '../assets/images/logo.png'


const Footer = () => {

  return (

    <footer id="footer" className="footer-area">
        <div className="footer-widget pt-80 pb-130">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-8">
                        <div className="footer-logo mt-50">
                            <Link to="#">
                                {/*<img src={logo} alt="Logo" />*/}
                            </Link>
                            <ul className="footer-info">
                                <li>
                                    <div className="single-info">
                                        <div className="info-icon">
                                            <i className="lni-phone-handset"></i>
                                        </div>
                                        <div className="info-content">
                                            <p>+1880 123 456 789</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="single-info">
                                        <div className="info-icon">
                                            <i className="lni-envelope"></i>
                                        </div>
                                        <div className="info-content">
                                            <p>contact@yourmail.com</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="single-info">
                                        <div className="info-icon">
                                            <i className="lni-map"></i>
                                        </div>
                                        <div className="info-content">
                                            <p>1234 Avenue New York, US</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="footer-social mt-20">
                                <li><Link to="#"><i className="lni-facebook-filled"></i></Link></li>
                                <li><Link to="#"><i className="lni-twitter-original"></i></Link></li>
                                <li><Link to="#"><i className="lni-google"></i></Link></li>
                                <li><Link to="#"><i className="lni-instagram"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="footer-link mt-45">
                            <div className="f-title">
                                <h4 className="title">Essential Links</h4>
                            </div>
                            <ul className="mt-15">
                                <li><Link to="#">About</Link></li>
                                <li><Link to="#">Projects</Link></li>
                                <li><Link to="#">Support</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="footer-link mt-45">
                            <div className="f-title">
                                <h4 className="title">Services</h4>
                            </div>
                            <ul className="mt-15">
                                <li><Link to="#">Product Design</Link></li>
                                <li><Link to="#">Research</Link></li>
                                <li><Link to="#">Office Management</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-5 col-sm-8">
                        <div className="footer-newsleter mt-45">
                            <div className="f-title">
                                <h4 className="title">Newsleter</h4>
                            </div>
                            <p className="mt-15">Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</p>
                            <form action="#">
                                <div className="newsleter mt-20">
                                    <input type="email" placeholder="info@contact.com" />
                                    <button><i className="lni-angle-double-right"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </footer>

  )
}

export default Footer
