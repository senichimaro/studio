import { useState, useEffect } from 'react'
import {
  Link,
  useRouteMatch
} from 'react-router-dom'
import { nav } from '../data/data'


// import logo from "../assets/images/logo.png"


const Nav = ({ visibility }) => {

  const [ isRoutes, setIsRoutes ] = useState([])
  const [ isPath, setIsPath ] = useState('')

  const { path } = useRouteMatch();
  // console.log("Nav path",path);


  const loadRoutes = async ( nav , path ) => {
    // console.log( "loadRoutes nav" , nav );
    console.log( "loadRoutes nav.routes" , nav.routes );

    let routes = []
    const rawRoutes = nav.routes.map( item => mapItems( item ) )
    function mapItems( item ){
      console.log( "item" , item );
      console.log( "item.location" , item.location );
      if ( Array.isArray( item.location )  ){
        item.location.map( child => { return childItems( child ) } )
        function childItems( child ){
          console.log( "child.isPage" , child.isPage );
          if ( child.isPage === path ){
            console.log( "child" , child );
            routes.push( item )
            // item.location = child
            // console.log( "item" , item );
            // routes.push( item )
          }
        }
      }
      else {
        console.log( "else item.location" , item.location );
        console.log( "item.location.isPage === path" , item.location.isPage === path );
        console.log( "else" , path );
        console.log( "item.location.isPage" , item.location.isPage );
        if ( item.location.isPage === path ){
          // item.location = child
          console.log( "item" , item );
          routes.push( item )
        }
      }
    }
    console.log( "loadRoutes routes" , routes );
    setIsRoutes( routes )
  }

  useEffect(() => {

    loadRoutes( nav , path )


  },[])

  function _handleClick( event ){
    // console.log( "_handleClick event", event.target );
    const url = event.target.getAttribute( 'href' )
    console.log( "_handleClick url", url );
    loadRoutes( nav , url )
  }

  if ( true ){
    // console.log( "isRoutes", isRoutes );
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
                                    <NavItems _handleClick={_handleClick} location={location[0]} key={location[0].name} />
                                  ))
                                }

                              </ul>
                          </div>
                          <div className="navbar-btn ml-20 d-none d-sm-block">
                              {/* <Link className="main-btn" to="#"><i className="lni-phone"></i> {nav.phone}</Link> */}
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
  console.log("location Element", location);
  return (
    <li className="nav-item">
      <Link onClick={_handleClick} className={location.name === 'Home' ? "page-scroll active" : "page-scroll"} to={location.route}>{location.name}</Link>
    </li>
  )
}



export default Nav
