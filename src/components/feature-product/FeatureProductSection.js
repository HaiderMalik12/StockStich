import React from 'react';


const FeatureProductSection = () => {

  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-xl-8">
            {/* title */}
            <div className="title-box">
              <h2 className="text-center text-uppercase title-under">FEATURED PRODUCTS</h2>
            </div>
            {/* /title */}
            <div className="product-listing carousel-products-mobile row">
              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                {/* product */}
                <div className="product product--zoom">
                  <div className="product__inside">
                    {/* product image */}
                    <div className="product__inside__image">
                      {/* product image carousel */}
                      <div className="product__inside__carousel slide" data-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                          <div className="item active"><a href="product.html"><img
                            src="assets/images/product/product-1.jpg" alt/></a></div>
                          <div className="item"><a href="product.html"><img src="assets/images/product/product-2.jpg"
                                                                            alt/></a></div>
                          <div className="item"><a href="product.html"><img src="assets/images/product/product-3.jpg"
                                                                            alt/></a></div>
                        </div>
                        {/* Controls */}
                        <a className="carousel-control next"/> <a className="carousel-control prev"/>
                      </div>
                      {/* /product image carousel */}
                      {/* quick-view */}
                      <a href="#" data-toggle="modal" data-target="#quickViewModal" className="quick-view"><b><span
                        className="icon icon-visibility"/> Quick view</b> </a>
                      {/* /quick-view */}
                      {/* countdown_box */}
                      <div className="countdown_box">
                        <div className="countdown_inner">
                          <div id="countdown1" className="is-countdown"><span className="countdown-row countdown-show4"><span
                            className="countdown-section"><span className="countdown-amount">12</span><span
                            className="countdown-period">DAYS</span></span><span className="countdown-section"><span
                            className="countdown-amount">19</span><span
                            className="countdown-period">HRS</span></span><span className="countdown-section"><span
                            className="countdown-amount">46</span><span
                            className="countdown-period">MIN</span></span><span className="countdown-section"><span
                            className="countdown-amount">20</span><span
                            className="countdown-period">SEC</span></span></span></div>
                        </div>
                      </div>
                      {/* /countdown_box */}
                    </div>
                    {/* /product image */}
                    {/* label news */}
                    <div className="product__label product__label--right product__label--new"><span>new</span></div>
                    {/* /label news */}
                    {/* label sale */}
                    <div className="product__label product__label--left product__label--sale"> <span>Sale<br />
                          -20%</span>
                    </div>
                    {/* /label sale */}
                    {/* product name */}
                    <div className="product__inside__name">
                      <h2><a href="product.html">Mauris lacinia lectus</a></h2>
                    </div>
                    {/* /product name */}
                    {/* product description */}
                    {/* visible only in row-view mode */}
                    <div className="product__inside__description row-mode-visible"> Lorem ipsum dolor sit amet conse
                      ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam.
                    </div>
                    {/* /product description */}
                    {/* product price */}
                    <div className="product__inside__price price-box">$26.00<span
                      className="price-box__old">$28.00</span></div>
                    {/* /product price */}
                    {/* product review */}
                    {/* visible only in row-view mode */}
                    <div className="product__inside__review row-mode-visible">
                      <div className="rating row-mode-visible"><span className="icon-star"/> <span
                        className="icon-star"/> <span className="icon-star"/> <span className="icon-star"/> <span
                        className="icon-star empty-star"/></div>
                      <a href="#">1 Review(s)</a> <a href="#">Add Your Review</a>
                    </div>
                    {/* /product review */}
                    <div className="product__inside__hover">
                      {/* product info */}
                      <div className="product__inside__info">
                        <ul className="options-swatch options-swatch--color">
                          <li><a href="#"><span className="swatch-label"><img src="assets/images/colors/blue.png" alt/></span></a>
                          </li>
                          <li><a href="#"><span className="swatch-label"><img src="assets/images/colors/yellow.png"
                                                                              alt/></span></a></li>
                          <li><a href="#"><span className="swatch-label"><img src="assets/images/colors/red.png"
                                                                              alt/></span></a></li>
                        </ul>
                        <div className="product__inside__info__btns"><a href="#" className="btn btn--ys btn--xl"><span
                          className="icon icon-shopping_basket"/> Add to cart</a>
                          <a href="#" className="btn btn--ys btn--xl visible-xs"><span
                            className="icon icon-favorite_border"/></a>
                          <a href="#" className="btn btn--ys btn--xl visible-xs"><span className="icon icon-sort"/></a>
                          <a href="#" className="btn btn--ys btn--xl  row-mode-visible hidden-xs"><span
                            className="icon icon-visibility"/> Quick view</a></div>
                        <ul className="product__inside__info__link hidden-xs">
                          <li className="text-right"><span className="icon icon-favorite_border  tooltip-link"/><a
                            href="#"><span className="text">Add to wishlist</span></a></li>
                          <li className="text-left"><span className="icon icon-sort  tooltip-link"/><a href="#"
                                                                                                       className="compare-link"><span
                            className="text">Add to compare</span></a></li>
                        </ul>
                      </div>
                      {/* /product info */}
                      {/* product rating */}
                      <div className="rating row-mode-hide"><span className="icon-star"/> <span className="icon-star"/>
                        <span className="icon-star"/> <span className="icon-star"/> <span
                          className="icon-star empty-star"/></div>
                      {/* /product rating */}
                    </div>
                  </div>
                </div>
                {/* /product */}
              </div>
              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                {/* product */}
                <div className="product product--zoom">
                  <div className="product__inside">
                    {/* product image */}
                    <div className="product__inside__image">
                      <a href="product.html"> <img src="assets/images/product/product-2.jpg" alt/> </a>
                      {/* quick-view */}
                      <a href="#" data-toggle="modal" data-target="#quickViewModal" className="quick-view"><b><span
                        className="icon icon-visibility"/> Quick view</b> </a>
                      {/* /quick-view */}
                    </div>
                    {/* /product image */}
                    {/* product name */}
                    <div className="product__inside__name">
                      <h2><a href="product.html">Mauris lacinia lectus</a></h2>
                    </div>
                    {/* /product name */} {/* product description */}
                    {/* visible only in row-view mode */}
                    <div className="product__inside__description row-mode-visible"> Lorem ipsum dolor sit amet conse
                      ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam.
                    </div>
                    {/* /product description */} {/* product price */}
                    <div className="product__inside__price price-box">$46.00</div>
                    {/* /product price */}
                    {/* product review */}
                    {/* visible only in row-view mode */}
                    <div className="product__inside__review row-mode-visible">
                      <div className="rating row-mode-visible"><span className="icon-star"/> <span
                        className="icon-star"/> <span className="icon-star"/> <span className="icon-star"/> <span
                        className="icon-star empty-star"/></div>
                      <a href="#">1 Review(s)</a> <a href="#">Add Your Review</a>
                    </div>
                    {/* /product review */}
                    <div className="product__inside__hover">
                      {/* product info */}
                      <div className="product__inside__info">
                        <div className="product__inside__info__btns"><a href="#" className="btn btn--ys btn--xl"><span
                          className="icon icon-shopping_basket"/> Add to cart</a>
                          <a href="#" className="btn btn--ys btn--xl visible-xs"><span
                            className="icon icon-favorite_border"/></a>
                          <a href="#" className="btn btn--ys btn--xl visible-xs"><span className="icon icon-sort"/></a>
                          <a href="#" className="btn btn--ys btn--xl  row-mode-visible hidden-xs"><span
                            className="icon icon-visibility"/> Quick view</a></div>
                        <ul className="product__inside__info__link hidden-xs">
                          <li className="text-right"><span className="icon icon-favorite_border  tooltip-link"/><a
                            href="#"><span className="text">Add to wishlist</span></a></li>
                          <li className="text-left"><span className="icon icon-sort  tooltip-link"/><a href="#"
                                                                                                       className="compare-link"><span
                            className="text">Add to compare</span></a></li>
                        </ul>
                      </div>
                      {/* /product info */}
                      {/* product rating */}
                      <div className="rating row-mode-hide"><span className="icon-star"/> <span className="icon-star"/>
                        <span className="icon-star"/> <span className="icon-star"/> <span
                          className="icon-star empty-star"/></div>
                      {/* /product rating */}
                    </div>
                  </div>
                </div>
                {/* /product */}
              </div>
              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                {/* product */}
                <div className="product product--zoom">
                  <div className="product__inside">
                    {/* product image */}
                    <div className="product__inside__image">
                      <a href="product.html"> <img src="assets/images/product/product-3.jpg" alt/> </a>
                      {/* quick-view */}
                      <a href="#" data-toggle="modal" data-target="#quickViewModal" className="quick-view"><b><span
                        className="icon icon-visibility"/> Quick view</b> </a>
                      {/* /quick-view */}
                    </div>
                    {/* /product image */}
                    {/* product name */}
                    <div className="product__inside__name">
                      <h2><a href="product.html">Mauris lacinia lectus</a></h2>
                    </div>
                    {/* /product name */} {/* product description */}
                    {/* visible only in row-view mode */}
                    <div className="product__inside__description row-mode-visible"> Lorem ipsum dolor sit amet conse
                      ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam.
                    </div>
                    {/* /product description */} {/* product price */}
                    <div className="product__inside__price price-box">$143.00</div>
                    {/* /product price */} {/* product review */}
                    {/* visible only in row-view mode */}
                    <div className="product__inside__review row-mode-visible">
                      <div className="rating row-mode-visible"><span className="icon-star"/> <span
                        className="icon-star"/> <span className="icon-star"/> <span className="icon-star"/> <span
                        className="icon-star empty-star"/></div>
                      <a href="#">1 Review(s)</a> <a href="#">Add Your Review</a>
                    </div>
                    {/* /product review */}
                    <div className="product__inside__hover">
                      {/* product info */}
                      <div className="product__inside__info">
                        <div className="product__inside__info__btns"><a href="#" className="btn btn--ys btn--xl"><span
                          className="icon icon-shopping_basket"/> Add to cart</a>
                          <a href="#" className="btn btn--ys btn--xl visible-xs"><span
                            className="icon icon-favorite_border"/></a>
                          <a href="#" className="btn btn--ys btn--xl visible-xs"><span className="icon icon-sort"/></a>
                          <a href="#" className="btn btn--ys btn--xl  row-mode-visible hidden-xs"><span
                            className="icon icon-visibility"/> Quick view</a></div>
                        <ul className="product__inside__info__link hidden-xs">
                          <li className="text-right"><span className="icon icon-favorite_border  tooltip-link"/><a
                            href="#"><span className="text">Add to wishlist</span></a></li>
                          <li className="text-left"><span className="icon icon-sort  tooltip-link"/><a href="#"
                                                                                                       className="compare-link"><span
                            className="text">Add to compare</span></a></li>
                        </ul>
                      </div>
                      {/* /product info */}
                      {/* product rating */}
                      <div className="rating row-mode-hide"><span className="icon-star"/> <span className="icon-star"/>
                        <span className="icon-star"/> <span className="icon-star"/> <span
                          className="icon-star empty-star"/></div>
                      {/* /product rating */}
                    </div>
                  </div>
                </div>
                {/* /product */}
              </div>
              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                {/* product */}
                <div className="product product--zoom">
                  <div className="product__inside">
                    {/* product image */}
                    <div className="product__inside__image">
                      <a href="product.html"> <img src="assets/images/product/product-4.jpg" alt/> </a>
                      {/* quick-view */}
                      <a href="#" data-toggle="modal" data-target="#quickViewModal" className="quick-view"><b><span
                        className="icon icon-visibility"/> Quick view</b> </a>
                      {/* /quick-view */}
                    </div>
                    {/* /product image */}
                    {/* product name */}
                    <div className="product__inside__name">
                      <h2><a href="product.html"> Mauris lacinia lectus</a></h2>
                    </div>
                    {/* /product name */} {/* product description */}
                    {/* visible only in row-view mode */}
                    <div className="product__inside__description row-mode-visible"> Lorem ipsum dolor sit amet conse
                      ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam.
                    </div>
                    {/* /product description */} {/* product price */}
                    <div className="product__inside__price price-box">$587.00</div>
                    {/* /product price */} {/* product review */}
                    {/* visible only in row-view mode */}
                    <div className="product__inside__review row-mode-visible">
                      <div className="rating row-mode-visible"><span className="icon-star"/> <span
                        className="icon-star"/> <span className="icon-star"/> <span className="icon-star"/> <span
                        className="icon-star empty-star"/></div>
                      <a href="#">1 Review(s)</a> <a href="#">Add Your Review</a>
                    </div>
                    {/* /product review */}
                    <div className="product__inside__hover">
                      {/* product info */}
                      <div className="product__inside__info">
                        <ul className="options-swatch options-swatch--color">
                          <li><a href="#"><span className="swatch-label"><img src="assets/images/colors/blue.png" alt/></span></a>
                          </li>
                          <li><a href="#"><span className="swatch-label"><img src="assets/images/colors/yellow.png"
                                                                              alt/></span></a></li>
                          <li><a href="#"><span className="swatch-label"><img src="assets/images/colors/red.png"
                                                                              alt/></span></a></li>
                        </ul>
                        <div className="product__inside__info__btns"><a href="#" className="btn btn--ys btn--xl"><span
                          className="icon icon-shopping_basket"/> Add to cart</a>
                          <a href="#" className="btn btn--ys btn--xl visible-xs"><span
                            className="icon icon-favorite_border"/></a>
                          <a href="#" className="btn btn--ys btn--xl visible-xs"><span className="icon icon-sort"/></a>
                          <a href="#" className="btn btn--ys btn--xl  row-mode-visible hidden-xs"><span
                            className="icon icon-visibility"/> Quick view</a></div>
                        <ul className="product__inside__info__link hidden-xs">
                          <li className="text-right"><span className="icon icon-favorite_border  tooltip-link"/><a
                            href="#"><span className="text">Add to wishlist</span></a></li>
                          <li className="text-left"><span className="icon icon-sort  tooltip-link"/><a href="#"
                                                                                                       className="compare-link"><span
                            className="text">Add to compare</span></a></li>
                        </ul>
                      </div>
                      {/* /product info */} {/* product rating */}
                      <div className="rating row-mode-hide"><span className="icon-star"/> <span className="icon-star"/>
                        <span className="icon-star"/> <span className="icon-star"/> <span
                          className="icon-star empty-star"/></div>
                      {/* /product rating */}
                    </div>
                  </div>
                </div>
                {/* /product */}
              </div>
              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                {/* product */}
                <div className="product product--zoom">
                  <div className="product__inside">
                    {/* product image */}
                    <div className="product__inside__image">
                      <a href="product.html"> <img src="assets/images/product/product-5.jpg" alt/> </a>
                      {/* quick-view */}
                      <a href="#" data-toggle="modal" data-target="#quickViewModal" className="quick-view"><b><span
                        className="icon icon-visibility"/> Quick view</b> </a>
                      {/* /quick-view */}
                    </div>
                    {/* /product image */}
                    {/* product name */}
                    <div className="product__inside__name">
                      <h2><a href="product.html">Mauris lacinia lectus</a></h2>
                    </div>
                    {/* /product name */} {/* product description */}
                    {/* visible only in row-view mode */}
                    <div className="product__inside__description row-mode-visible"> Lorem ipsum dolor sit amet conse
                      ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam.
                    </div>
                    {/* /product description */} {/* product price */}
                    <div className="product__inside__price price-box">$54.00</div>
                    {/* /product price */} {/* product review */}
                    {/* visible only in row-view mode */}
                    <div className="product__inside__review row-mode-visible">
                      <div className="rating row-mode-visible"><span className="icon-star"/> <span
                        className="icon-star"/> <span className="icon-star"/> <span className="icon-star"/> <span
                        className="icon-star empty-star"/></div>
                      <a href="#">1 Review(s)</a> <a href="#">Add Your Review</a>
                    </div>
                    {/* /product review */}
                    <div className="product__inside__hover">
                      {/* product info */}
                      <div className="product__inside__info">
                        <div className="product__inside__info__btns"><a href="#" className="btn btn--ys btn--xl"><span
                          className="icon icon-shopping_basket"/> Add to cart</a>
                          <a href="#" className="btn btn--ys btn--xl visible-xs"><span
                            className="icon icon-favorite_border"/></a>
                          <a href="#" className="btn btn--ys btn--xl visible-xs"><span className="icon icon-sort"/></a>
                          <a href="#" className="btn btn--ys btn--xl  row-mode-visible hidden-xs"><span
                            className="icon icon-visibility"/> Quick view</a></div>
                        <ul className="product__inside__info__link hidden-xs">
                          <li className="text-right"><span className="icon icon-favorite_border  tooltip-link"/><a
                            href="#"><span className="text">Add to wishlist</span></a></li>
                          <li className="text-left"><span className="icon icon-sort  tooltip-link"/><a href="#"
                                                                                                       className="compare-link"><span
                            className="text">Add to compare</span></a></li>
                        </ul>
                      </div>
                      {/* /product info */} {/* product rating */}
                      <div className="rating row-mode-hide"><span className="icon-star"/> <span className="icon-star"/>
                        <span className="icon-star"/> <span className="icon-star"/> <span
                          className="icon-star empty-star"/></div>
                      {/* /product rating */}
                    </div>
                  </div>
                </div>
                {/* /product */}
              </div>
              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                {/* product */}
                <div className="product product--zoom">
                  <div className="product__inside">
                    {/* product image */}
                    <div className="product__inside__image">
                      <a href="product.html"> <img src="assets/images/product/product-6.jpg" alt/> </a>
                      {/* quick-view */}
                      <a href="#" data-toggle="modal" data-target="#quickViewModal" className="quick-view"><b><span
                        className="icon icon-visibility"/> Quick view</b> </a>
                      {/* /quick-view */}
                    </div>
                    {/* /product image */}
                    {/* product name */}
                    <div className="product__inside__name">
                      <h2><a href="product.html">Mauris lacinia lectus</a></h2>
                    </div>
                    {/* /product name */} {/* product description */}
                    {/* visible only in row-view mode */}
                    <div className="product__inside__description row-mode-visible"> Lorem ipsum dolor sit amet conse
                      ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam.
                    </div>
                    {/* /product description */} {/* product price */}
                    <div className="product__inside__price price-box">$66.00</div>
                    {/* /product price */} {/* product review */}
                    {/* visible only in row-view mode */}
                    <div className="product__inside__review row-mode-visible">
                      <div className="rating row-mode-visible"><span className="icon-star"/> <span
                        className="icon-star"/> <span className="icon-star"/> <span className="icon-star"/> <span
                        className="icon-star empty-star"/></div>
                      <a href="#">1 Review(s)</a> <a href="#">Add Your Review</a>
                    </div>
                    {/* /product review */}
                    <div className="product__inside__hover">
                      {/* product info */}
                      <div className="product__inside__info">
                        <div className="product__inside__info__btns"><a href="#" className="btn btn--ys btn--xl"><span
                          className="icon icon-shopping_basket"/> Add to cart</a>
                          <a href="#" className="btn btn--ys btn--xl visible-xs"><span
                            className="icon icon-favorite_border"/></a>
                          <a href="#" className="btn btn--ys btn--xl visible-xs"><span className="icon icon-sort"/></a>
                          <a href="#" className="btn btn--ys btn--xl  row-mode-visible hidden-xs"><span
                            className="icon icon-visibility"/> Quick view</a></div>
                        <ul className="product__inside__info__link hidden-xs">
                          <li className="text-right"><span className="icon icon-favorite_border  tooltip-link"/><a
                            href="#"><span className="text">Add to wishlist</span></a></li>
                          <li className="text-left"><span className="icon icon-sort  tooltip-link"/><a href="#"
                                                                                                       className="compare-link"><span
                            className="text">Add to compare</span></a></li>
                        </ul>
                      </div>
                      {/* /product info */} {/* product rating */}
                      <div className="rating row-mode-hide"><span className="icon-star"/> <span className="icon-star"/>
                        <span className="icon-star"/> <span className="icon-star"/> <span
                          className="icon-star empty-star"/></div>
                      {/* /product rating */}
                    </div>
                  </div>
                </div>
                {/* /product */}
              </div>
              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                {/* product */}
                <div className="product product--zoom sold-out">
                  <div className="product__inside">
                    {/* product image */}
                    <div className="product__inside__image">
                      <a href="product.html"> <img src="assets/images/product/product-7.jpg" alt/> </a>
                      {/* label sold-out */}
                      <div className="product__label--sold-out"> <span>sold<br />
                            out</span>
                      </div>
                      {/* /label sold-out */}
                    </div>
                    {/* /product image */}
                    {/* product name */}
                    <div className="product__inside__name">
                      <h2><a href="product.html">Mauris lacinia lectus</a></h2>
                    </div>
                    {/* /product name */} {/* product description */}
                    {/* visible only in row-view mode */}
                    <div className="product__inside__description row-mode-visible"> Lorem ipsum dolor sit amet conse
                      ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam.
                    </div>
                    {/* /product description */} {/* product price */}
                    <div className="product__inside__price price-box">$73.00</div>
                    {/* /product price */} {/* product review */}
                    {/* visible only in row-view mode */}
                    <div className="product__inside__review row-mode-visible">
                      <div className="rating row-mode-visible"><span className="icon-star"/> <span
                        className="icon-star"/> <span className="icon-star"/> <span className="icon-star"/> <span
                        className="icon-star empty-star"/></div>
                      <a href="#">1 Review(s)</a> <a href="#">Add Your Review</a>
                    </div>
                    {/* /product review */}
                    <div className="product__inside__hover">
                      {/* product info */}
                      <div className="product__inside__info">
                        <div className="product__inside__info__btns"><a href="#" className="btn btn--ys btn--xl"><span
                          className="icon icon-shopping_basket"/> Add to cart</a>
                          <a href="#" className="btn btn--ys btn--xl visible-xs"><span
                            className="icon icon-favorite_border"/></a>
                          <a href="#" className="btn btn--ys btn--xl visible-xs"><span className="icon icon-sort"/></a>
                          <a href="#" className="btn btn--ys btn--xl  row-mode-visible hidden-xs"><span
                            className="icon icon-visibility"/> Quick view</a></div>
                        <ul className="product__inside__info__link hidden-xs">
                          <li className="text-right"><span className="icon icon-favorite_border  tooltip-link"/><a
                            href="#"><span className="text">Add to wishlist</span></a></li>
                          <li className="text-left"><span className="icon icon-sort  tooltip-link"/><a href="#"
                                                                                                       className="compare-link"><span
                            className="text">Add to compare</span></a></li>
                        </ul>
                      </div>
                      {/* /product info */} {/* product rating */}
                      <div className="rating row-mode-hide"><span className="icon-star"/> <span className="icon-star"/>
                        <span className="icon-star"/> <span className="icon-star"/> <span
                          className="icon-star empty-star"/></div>
                      {/* /product rating */}
                    </div>
                  </div>
                </div>
                {/* /product */}
              </div>
              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                {/* product */}
                <div className="product product--zoom">
                  <div className="product__inside">
                    {/* product image */}
                    <div className="product__inside__image">
                      <a href="product.html"> <img src="assets/images/product/product-8.jpg" alt/> </a>
                      {/* quick-view */}
                      <a href="#" data-toggle="modal" data-target="#quickViewModal" className="quick-view"><b><span
                        className="icon icon-visibility"/> Quick view</b> </a>
                      {/* /quick-view */}
                    </div>
                    {/* /product image */}
                    {/* product name */}
                    <div className="product__inside__name">
                      <h2><a href="product.html">Mauris lacinia lectus</a></h2>
                    </div>
                    {/* /product name */} {/* product description */}
                    {/* visible only in row-view mode */}
                    <div className="product__inside__description row-mode-visible"> Lorem ipsum dolor sit amet conse
                      ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam.
                    </div>
                    {/* /product description */} {/* product price */}
                    <div className="product__inside__price price-box">$73.00</div>
                    {/* /product price */} {/* product review */}
                    {/* visible only in row-view mode */}
                    <div className="product__inside__review row-mode-visible">
                      <div className="rating row-mode-visible"><span className="icon-star"/> <span
                        className="icon-star"/> <span className="icon-star"/> <span className="icon-star"/> <span
                        className="icon-star empty-star"/></div>
                      <a href="#">1 Review(s)</a> <a href="#">Add Your Review</a>
                    </div>
                    {/* /product review */}
                    <div className="product__inside__hover">
                      {/* product info */}
                      <div className="product__inside__info">
                        <div className="product__inside__info__btns"><a href="#" className="btn btn--ys btn--xl"><span
                          className="icon icon-shopping_basket"/> Add to cart</a>
                          <a href="#" className="btn btn--ys btn--xl visible-xs"><span
                            className="icon icon-favorite_border"/></a>
                          <a href="#" className="btn btn--ys btn--xl visible-xs"><span className="icon icon-sort"/></a>
                          <a href="#" className="btn btn--ys btn--xl  row-mode-visible hidden-xs"><span
                            className="icon icon-visibility"/> Quick view</a></div>
                        <ul className="product__inside__info__link hidden-xs">
                          <li className="text-right"><span className="icon icon-favorite_border  tooltip-link"/><a
                            href="#"><span className="text">Add to wishlist</span></a></li>
                          <li className="text-left"><span className="icon icon-sort  tooltip-link"/><a href="#"
                                                                                                       className="compare-link"><span
                            className="text">Add to compare</span></a></li>
                        </ul>
                      </div>
                      {/* /product info */} {/* product rating */}
                      <div className="rating row-mode-hide"><span className="icon-star"/> <span className="icon-star"/>
                        <span className="icon-star"/> <span className="icon-star"/> <span
                          className="icon-star empty-star"/></div>
                      {/* /product rating */}
                    </div>
                  </div>
                </div>
                {/* /product */}
              </div>
            </div>
          </div>
          {/* lookbook */}
          <div className="col-xl-4 visible-xl">
            {/* title */}
            <div className="title-box">
              <h2 className="text-left text-uppercase title-under pull-left">LOOKBOOK</h2>
            </div>
            {/* /title */}
            <a className="link-img-hover" href="lookbook.html"><img src="assets/images/custom/lookbook.jpg"
                                                                    className="img-responsive" alt/></a>
          </div>
          {/* /lookbook */}
        </div>
      </div>
    </div>
  );
};
export default FeatureProductSection;
