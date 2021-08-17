import { useState } from 'react'





const Contact = ({visibility}) => {

  const [isData, setIsData] = useState({
    name:'',
    email:'',
    subject:'',
    phone:'',
    message:''
  })

  const _handleSubmit = event => {
    event.preventDefault()
    console.log("isData",isData);
  }

  const handleInput = event => {
    const {name, value} = event.target
    setIsData({...isData, [name]:value})
  }

  if( visibility ){

    return (

      <section id="contact" className="contact-area pt-125 pb-130 gray-bg">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-6">
                      <div className="section-title text-center pb-20">
                          <h5 className="sub-title mb-15">Contact us</h5>
                          <h2 className="title">Get In touch</h2>
                      </div>
                  </div>
              </div>
              <div className="row justify-content-center">
                  <div className="col-lg-8">
                      <div className="contact-form">
                          <form id="contact-form" onSubmit={_handleSubmit} data-toggle="validator">
                              <div className="row">
                                  <div className="col-md-6">
                                      <div className="single-form form-group">
                                          <input type="text" onChange={handleInput} value={isData.name} name="name" placeholder="Your Name" data-error="Name is required." required="required" />
                                          <div className="help-block with-errors"></div>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="single-form form-group">
                                          <input type="email" onChange={handleInput} value={isData.email} name="email" placeholder="Your Email" data-error="Valid email is required." required="required" />
                                          <div className="help-block with-errors"></div>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="single-form form-group">
                                          <input type="text" onChange={handleInput} value={isData.subject} name="subject" placeholder="Subject" data-error="Subject is required." required="required" />
                                          <div className="help-block with-errors"></div>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="single-form form-group">
                                          <input type="text" onChange={handleInput} value={isData.phone} name="phone" placeholder="Phone" data-error="Phone is required." required="required" />
                                          <div className="help-block with-errors"></div>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="single-form form-group">
                                          <textarea onChange={handleInput} value={isData.message} name="message" placeholder="Your Mesaage" data-error="Please,leave us a message." required="required"></textarea>
                                          <div className="help-block with-errors"></div>
                                      </div>
                                  </div>
                                  <p className="form-message"></p>
                                  <div className="col-md-12">
                                      <div className="single-form form-group text-center">
                                          <button type="submit" className="main-btn">send message</button>
                                      </div>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </section>

    )

  }
  else {
    return false
  }


}

export default Contact
