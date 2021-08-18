import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/data'

import image1 from "../assets/images/project/p-1.jpg"
import image2 from "../assets/images/project/p-2.jpg"
import image3 from "../assets/images/project/p-3.jpg"
import image4 from "../assets/images/project/p-4.jpg"
import image5 from "../assets/images/project/p-5.jpg"






const Project = ({visibility}) => {

  const images = {
    image1: image1,
    image2: image2,
    image3: image3,
    image4: image4,
    image5: image5
  }

  if ( visibility ){
    return (

      <section id="project" className="project-area pt-125 pb-130">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-6">
                      <div className="section-title text-center pb-50">
                          <h5 className="sub-title mb-15">{projects.h5}</h5>
                          <h2 className="title">{projects.h2}</h2>
                      </div>
                  </div>
              </div>
          </div>
          <div className="container-fluid">
              <div className="row project-active">

                  {
                    projects.cards.map(({image, link, hash}, key) => (
                      <CardItem image={images[image]} link={link} hash={hash} key={key} />
                    ))
                  }

              </div>
          </div>
      </section>

    )
  }
  else {
    return false
  }

}

function CardItem({image, link, hash}){
  return (
    <div className="col-lg-4">
        <div className="single-project">
            <div className="project-image">
                <img src={image} alt="Project" />
            </div>
            <div className="project-content">
                <Link className="project-title" to={hash}>{link}</Link>
            </div>
        </div>
    </div>
  )
}

export default Project
