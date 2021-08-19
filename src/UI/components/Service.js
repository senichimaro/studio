// import { services } from '../data/data'





const Service = ({visibility, services}) => {

  if ( visibility ){
    return (

      <section id="service" className="services-area pt-125 pb-130 gray-bg">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-6">
                      <div className="section-title text-center pb-20">
                          <h5 className="sub-title mb-15">{services.h5}</h5>
                          <h2 className="title">{services.h2}</h2>
                      </div>
                  </div>
              </div>
              <div className="row justify-content-center">

                {
                  services.cards.map(({icon, title, para, delay, item}) => (
                    <CardElement icon={icon} title={title} para={para} delay={delay} item={item} key={title}/>
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


function CardElement({icon, title, para, delay, item}){
  return (
    <div className="col-lg-4 col-md-6 col-sm-8">
        <div className="single-services text-center mt-30 wow fadeIn----Up" data-wow-duration="1.5s" data-wow-delay={delay}>
            <div className="services-icon">
                <i className={icon}></i>
            </div>
            <div className="services-content mt-15">
                <h4 className="services-title">{title}</h4>
                {
                  para
                  ? <p className="mt-20">{para}</p>
                  : (
                    <ul class="list-group">
                      {
                        item.map( element => <CardItems element={element} />)
                      }
                    </ul>
                  )
                }
            </div>
        </div>
    </div>
  )
}

function CardItems({ element }){
  return <li className="mt-20">{ element }</li>
}

export default Service
