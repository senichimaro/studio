


import $ from 'jquery/dist/jquery.min.js'



const PreLoader = ({visibility}) => {

  //===== Prealoder
  $(window).on('load', function(event) {
      $('.preloader').delay(500).fadeOut(500);
  });

  if ( visibility ){
    return (

      <div className="preloader">
          <div className="loader_34">
              <div className="ytp-spinner">
                  <div className="ytp-spinner-container">
                      <div className="ytp-spinner-rotator">
                          <div className="ytp-spinner-left">
                              <div className="ytp-spinner-circle"></div>
                          </div>
                          <div className="ytp-spinner-right">
                              <div className="ytp-spinner-circle"></div>
                          </div>
                      </div>
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

export default PreLoader
