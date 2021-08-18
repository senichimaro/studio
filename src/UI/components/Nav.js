import { useState, useEffect } from 'react'
import {
  Link,
  useRouteMatch
} from 'react-router-dom'
import { nav } from '../data/data'


const Nav = ({ visibility }) => {

  /** # Serve routes dynamicly
   * depend of their availability on  current path
  */
  const [ isRoutes, setIsRoutes ] = useState([])
  const { path } = useRouteMatch()
  const loadRoutes = async ( nav , path ) => {
    let routes = []
    const rawRoutes = nav.routes.map( item =>
      item.location.map( ( child , key ) => {
        if ( child.isPage === path ) routes.push( {...item, location: item.location[key]} )
      })
     )
     setIsRoutes( routes )
  }

  useEffect(() => {
    loadRoutes( nav , path )
  },[])

  function _handleClick( event ){
    const url = event.target.getAttribute( 'href' )
    loadRoutes( nav , url )
  }

  if ( visibility ){
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
                                  isRoutes.map(({location}) => (
                                    <NavItems _handleClick={_handleClick} location={location} key={location.name} />
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
  else {
    return false
  }

}



function NavItems({location, _handleClick}){
  return (
    <li className="nav-item">
      <Link onClick={_handleClick} className={location.name === 'Home' ? "page-scroll active" : "page-scroll"} to={location.route}>{location.name}</Link>
    </li>
  )
}



export default Nav
