import { Link } from 'react-router-dom'


import image1 from "../assets/images/project/p-1.jpg"
import image2 from "../assets/images/project/p-2.jpg"
import image3 from "../assets/images/project/p-3.jpg"
import image4 from "../assets/images/project/p-4.jpg"
import image5 from "../assets/images/project/p-5.jpg"




const Project = () => {



  return (

    <section id="project" className="project-area pt-125 pb-130">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="section-title text-center pb-50">
                        <h5 className="sub-title mb-15">Featured Works</h5>
                        <h2 className="title">Projects You May Love</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row project-active">
                <div className="col-lg-4">
                    <div className="single-project">
                        <div className="project-image">
                            <img src={image1} alt="Project" />
                        </div>
                        <div className="project-content">
                            <Link className="project-title" to="#">Home Interior Design</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="single-project">
                        <div className="project-image">
                            <img src={image2} alt="Project" />
                        </div>
                        <div className="project-content">
                            <Link className="project-title" to="#">Home Interior Design</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="single-project">
                        <div className="project-image">
                            <img src={image3} alt="Project" />
                        </div>
                        <div className="project-content">
                            <Link className="project-title" to="#">Home Interior Design</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="single-project">
                        <div className="project-image">
                            <img src={image4} alt="Project" />
                        </div>
                        <div className="project-content">
                            <Link className="project-title" to="#">Home Interior Design</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="single-project">
                        <div className="project-image">
                            <img src={image5} alt="Project" />
                        </div>
                        <div className="project-content">
                            <Link className="project-title" to="#">Home Interior Design</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="single-project">
                        <div className="project-image">
                            <img src={image4} alt="Project" />
                        </div>
                        <div className="project-content">
                            <Link className="project-title" to="#">Home Interior Design</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="single-project">
                        <div className="project-image">
                            <img src={image2} alt="Project" />
                        </div>
                        <div className="project-content">
                            <Link className="project-title" to="#">Home Interior Design</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Project
