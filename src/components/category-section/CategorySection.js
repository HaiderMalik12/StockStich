import React from 'react';

const CategorySection = () => {
  return (

    <div className="content">
      <div className="container">
        <div className="row">
          <div className="category-carousel slick-initialized slick-slider">
            <div aria-live="polite" className="slick-list draggable">
              <div className="slick-track" role="listbox"
                   style={{opacity: 1, width: 1200, transform: 'translate3d(0px, 0px, 0px)'}}>
                <div className="col-sm-4 col-md-4 col-lg-4 slick-slide slick-current slick-active" data-slick-index={0}
                     aria-hidden="false" tabIndex={-1} role="option" aria-describedby="slick-slide70"
                     style={{width: 400}}>
                  <a href="listing.html" className="banner zoom-in" tabIndex={0}>
                      <span className="figure">
                        <img src="assets/images/custom/category-3.jpg" alt/>
                        <span className="figcaption">
                          <span className="block-table">
                            <span className="block-table-cell">
                              <span className="banner__title size5">women’s</span>
                              <span className="btn btn--ys btn--xl">Shop now!</span>
                            </span>
                          </span>
                        </span>
                      </span>
                  </a>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 slick-slide slick-active" data-slick-index={1}
                     aria-hidden="false" tabIndex={-1} role="option" aria-describedby="slick-slide71"
                     style={{width: 400}}>
                  <a href="listing.html" className="banner zoom-in" tabIndex={0}>
                      <span className="figure">
                        <img src="assets/images/custom/category-2.jpg" alt/>
                        <span className="figcaption">
                          <span className="block-table">
                            <span className="block-table-cell">
                              <span className="banner__title size5">aCCESSORIES</span>
                              <span className="btn btn--ys btn--xl">Shop now!</span>
                            </span>
                          </span>
                        </span>
                      </span>
                  </a>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 slick-slide slick-active" data-slick-index={2}
                     aria-hidden="false" tabIndex={-1} role="option" aria-describedby="slick-slide72"
                     style={{width: 400}}>
                  <a href="listing.html" className="banner zoom-in" tabIndex={0}>
                      <span className="figure">
                        <img src="assets/images/custom/category-1.jpg" alt/>
                        <span className="figcaption">
                          <span className="block-table">
                            <span className="block-table-cell">
                              <span className="banner__title size5">men’s</span>
                              <span className="btn btn--ys btn--xl">Shop now!</span>
                            </span>
                          </span>
                        </span>
                      </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export  default  CategorySection;
