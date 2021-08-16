import { Link } from 'react-router-dom'
import { nav } from '../data/data'


import logo from "../assets/images/logo.png"


const PreLoader = () => {

  return (

    <div className="navigation-bar">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">

                    <nav className="navbar navbar-expand-lg">
                        <Link className="navbar-brand" to="#">
                            {/*<img src={logo} alt="Logo" />*/}
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="toggler-icon"></span>
                            <span className="toggler-icon"></span>
                            <span className="toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul id="nav" className="navbar-nav ml-auto">

                              {
                                nav.routes.map(({hash, name}) => (
                                  <NavItems hash={hash} name={name} key={hash} />
                                ))
                              }

                            </ul>
                        </div>
                        <div className="navbar-btn ml-20 d-none d-sm-block">
                            <Link className="main-btn" to="#"><i className="lni-phone"></i> {nav.phone}</Link>
                        </div>
                    </nav>

                </div>
            </div>
        </div>
    </div>

  )
}



function NavItems({hash, name}){
  return (
    <li className="nav-item" key={name}>
      <Link className={name === 'Home' ? "page-scroll active" : "page-scroll"} to={hash}>{name}</Link>
    </li>
  )
}



export default PreLoader
