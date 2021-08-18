import { useState } from 'react'
import { Link } from 'react-router-dom'
import { footer } from '../data/data'


// import logo from '../assets/images/logo.png'


const Footer = ({visibility}) => {
  const [isEmail, setIsEmail] = useState({
    email:''
  })


  const _handleSubmit = event => {
    event.preventDefault();
    console.log("isEmail",isEmail);
  }
  const handleInput = event => {
    const {name, value} = event.target
    setIsEmail({...isEmail,[name]:value})
    console.log("isEmail",isEmail);
  }


  if ( visibility ){
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

                                  {
                                    footer.cardsLeft.info.map(({icon, content}, key) => (
                                      <CardInfo icon={icon} content={content} key={key} />
                                    ))
                                  }

                              </ul>

                              <ul className="footer-social mt-20">

                                {
                                  footer.cardsLeft.social.map(({hash, icon}, key) => (
                                    <CardSocial hash={hash} icon={icon} key={key} />
                                  ))
                                }

                              </ul>

                          </div>
                      </div>

                      <div className="col-lg-3 col-md-4 col-sm-6">
                          <div className="footer-link mt-45">
                              <div className="f-title">
                                  <h4 className="title">{footer.cardsCenterLeft.title}</h4>
                              </div>
                              <ul className="mt-15">

                                {
                                  footer.cardsCenterLeft.links.map(({hash, name}, key) => (
                                    <CardLink hash={hash} name={name} key={key} />
                                  ))
                                }

                              </ul>

                          </div>
                      </div>

                      <div className="col-lg-3 col-md-4 col-sm-6">
                          <div className="footer-link mt-45">
                              <div className="f-title">
                                  <h4 className="title">{footer.cardsCenterRight.title}</h4>
                              </div>
                              <ul className="mt-15">

                                {
                                  footer.cardsCenterRight.links.map(({hash, name}, key) => (
                                    <CardLink hash={hash} name={name} key={key} />
                                  ))
                                }

                              </ul>

                          </div>
                      </div>

                      <div className="col-lg-3 col-md-5 col-sm-8">
                          <div className="footer-newsleter mt-45">
                              <div className="f-title">
                                  <h4 className="title">{footer.cardRight.title}</h4>
                              </div>
                              <p className="mt-15">{footer.cardRight.para}</p>
                              <form onSubmit={_handleSubmit}>
                                  <div className="newsleter mt-20">
                                      <input onChange={handleInput} name="email" type="email" placeholder="info@contact.com" />
                                      <button><i className={footer.cardRight.formIcon}></i></button>
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
  else {
    return false
  }


}



function CardInfo({icon, content}){
  return (
    <li>
        <div className="single-info">
            <div className="info-icon">
                <i className={icon}></i>
            </div>
            <div className="info-content">
                <p>{content}</p>
            </div>
        </div>
    </li>
  )
}

function CardSocial({hash, icon}){
  return (
    <li>
      <Link to={hash}>
        <i className={icon}></i>
      </Link>
    </li>
  )
}

function CardLink({hash, name}){
  return (
    <li><Link to={hash}>{name}</Link></li>
  )
}









export default Footer
