import React from 'react';

const BannerSection =() => {
  return(

    <div className="content fullwidth indent-col-none">
      <div className="container">
        <div className="row">
          <div className="banner-carousel slick-initialized slick-slider">
            <div aria-live="polite" className="slick-list draggable"><div className="slick-track" role="listbox" style={{opacity: 1, width: 1425, transform: 'translate3d(0px, 0px, 0px)'}}><div className="col-md-4 col-sm-4 col-xs-12 slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" tabIndex={-1} role="option" aria-describedby="slick-slide60" style={{width: 475}}>
              <a href="listing.html" className="banner zoom-in" tabIndex={0}>
                      <span className="figure">
                        <img src="assets/images/custom/banner-01.jpg" alt />
                        <span className="figcaption">
                          <span className="block-table">
                            <span className="block-table-cell">
                              <span className="banner__title size3">Hats</span>
                              <span className="text">GET UP TO</span>
                              <span className="text size3">20% OFF</span>
                            </span>
                          </span>
                        </span>
                      </span>
              </a>
            </div><div className="col-md-4 col-sm-4 col-xs-12 slick-slide slick-active" data-slick-index={1} aria-hidden="false" tabIndex={-1} role="option" aria-describedby="slick-slide61" style={{width: 475}}>
              <a href="listing.html" className="banner zoom-in" tabIndex={0}>
                      <span className="figure">
                        <img src="assets/images/custom/banner-02.jpg" alt />
                        <span className="figcaption">
                          <span className="block-table">
                            <span className="block-table-cell">
                              <span className="banner__title size3-1">15% OFF</span>
                              <span className="text size1"><em>on brand-new models</em></span>
                              <span className="btn btn--ys btn--xl">Shop now!</span>
                            </span>
                          </span>
                        </span>
                      </span>
              </a>
            </div><div className="col-md-4 col-sm-4 col-xs-12 slick-slide slick-active" data-slick-index={2} aria-hidden="false" tabIndex={-1} role="option" aria-describedby="slick-slide62" style={{width: 475}}>
              <a href="listing.html" className="banner zoom-in" tabIndex={0}>
                      <span className="figure">
                        <img src="assets/images/custom/banner-03.jpg" alt />
                        <span className="figcaption">
                          <span className="block-table">
                            <span className="block-table-cell">
                              <span className="banner__title size4">New<br /> collection</span>
                              <span className="text size2">OF FASHION CLOTHES</span>
                              <span className="btn btn--ys btn--xl offset-top">Shop now!</span>
                            </span>
                          </span>
                        </span>
                      </span>
              </a>
            </div></div></div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default BannerSection;
