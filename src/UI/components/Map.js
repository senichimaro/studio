


import backMap from '../assets/images/tower.jpg'


const Map = ({visibility, map}) => {
  console.log("map", map);

  if ( visibility ){

    return (

      <section id="map" className="map-area">
          <div className="mapouter">
              <div className="gmap_canvas">
                  {
                    map.source
                    ? <iframe id="gmap_canvas" title="location_map" src={map.source} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    : <iframe id="gmap_canvas" title="location_map" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                  }
              </div>
          </div>
          <div className="map-bg bg_cover d-none d-lg-block" style={{backgroundImage: `url(${backMap})`}}></div>
      </section>

    )

  }
  else {
    return false
  }


}

export default Map
