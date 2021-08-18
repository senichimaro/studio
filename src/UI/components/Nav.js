import {
  Link,
  useRouteMatch
} from 'react-router-dom'
import { nav } from '../data/data'


import logo from "../assets/images/logo.png"


const Nav = ({visibility}) => {

  const { path } = useRouteMatch();
  console.log("path",path);
  // const routes = nav.routes.filter( route => route.location[0].location === path )
  const routes = nav.routes.filter( route => locationFilter( route ) )
  function locationFilter( item ){
    // item.location.map( location => {
    //   if ( location.location === path ){
    //     console.log("location",location)
    //     console.log("item",item)
    //     return item
    //   }
    // })

    // let els = item.location.map( location => {
    //   if ( location.location === path ){
    //     console.log("location",location)
    //     console.log("item",item)
    //     return item
    //   }
    //   else { return null }
    // })
    // console.log("els",els)
    // if ( els ){ return els }

    // console.log("item.location",item.location)
    // let els = item.location.forEach( location => console.log("location",location) )
    let els = item.location.forEach( location => {
      if ( location.location === path ){
        console.log("location",location)
        console.log("item",item)
        return item
      }
      // else { return null }
    })
    console.log("let els",els)
    if ( els ){
      console.log("if els",els)
      return els
    }

    // const el = item.location.filter( location => location === path )
    // console.log("el",el);
    // item.location.map( location => console.log("location",location) )
    // if ( item.location[0].location === path ) return item
    // if ( el.location[0].location === path ) return item
    // console.log("item",item);
  }
  console.log("routes",routes);

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
                                  routes.map(({hash, name}) => (
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
  else {
    return false
  }

}



function NavItems({hash, name}){
  return (
    <li className="nav-item" key={name}>
      <Link className={name === 'Home' ? "page-scroll active" : "page-scroll"} to={hash}>{name}</Link>
    </li>
  )
}



export default Nav
