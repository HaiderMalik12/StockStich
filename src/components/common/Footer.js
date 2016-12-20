import React from 'react';

const Footer = () => {


      return (

        <footer>
          {/* footer-data */}
          <div className="container inset-bottom-60">
            <div className="row">
              <div className="col-sm-12 col-md-5 col-lg-6 border-sep-right">
                <div className="footer-logo hidden-xs">
                  {/*  Logo  */}
                  <a className="logo" href="index.html"> <img className="replace-2x" src="assets/images/logo.png" alt="YOURStore" /> </a>
                  {/* /Logo */}
                </div>
                <div className="box-about">
                  <div className="mobile-collapse">
                    <h4 className="mobile-collapse__title visible-xs">ABOUT US</h4>
                    <div className="mobile-collapse__content">
                      <p> No more need to look for other ecommerce themes. We provide huge number of different layouts. Yourstore comes packed with free and useful features developed to make your website creation easier. Innovative clean design, advanced functionality, UI made for humans, extensive documenta- tion and support i continue this list infinitely... </p>
                    </div>
                  </div>
                </div>
                {/* subscribe-box */}
                <div className="subscribe-box offset-top-20">
                  <div className="mobile-collapse">
                    <h4 className="mobile-collapse__title">NEWSLETTER SIGNUP</h4>
                    <div className="mobile-collapse__content">
                      <form className="form-inline">
                        <input className="subscribe-form__input" type="text" name="subscribe" />
                        <button type="submit" className="btn btn--ys btn--xl">SUBSCRIBE</button>
                      </form>
                    </div>
                  </div>
                </div>
                {/* /subscribe-box */}
              </div>
              <div className="col-sm-12 col-md-7 col-lg-6 border-sep-left">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="mobile-collapse">
                      <h4 className="text-left  title-under  mobile-collapse__title">INFORMATION</h4>
                      <div className="v-links-list mobile-collapse__content">
                        <ul>
                          <li><a href="about.html">About Us</a></li>
                          <li><a href="support-24.html">Customer Service</a></li>
                          <li><a href="faq.html">Privacy Policy</a></li>
                          <li><a href="site-map.html">Site Map</a></li>
                          <li><a href="typography.html">Search Terms</a></li>
                          <li><a href="warranty.html">Advanced Search</a></li>
                          <li><a href="delivery-page.html">Orders and Returns</a></li>
                          <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="mobile-collapse">
                      <h4 className="text-left  title-under  mobile-collapse__title">WHY BUY FROM US</h4>
                      <div className="v-links-list mobile-collapse__content">
                        <ul>
                          <li><a href="warranty.html">Shipping &amp; Returns</a></li>
                          <li><a href="typography.html">Secure Shopping</a></li>
                          <li><a href="about.html">International Shipping</a></li>
                          <li><a href="delivery-page.html">Affiliates</a></li>
                          <li><a href="support-24.html">Group Sales</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="mobile-collapse">
                      <h4 className="text-left  title-under  mobile-collapse__title">MY ACCOUNT</h4>
                      <div className="v-links-list mobile-collapse__content">
                        <ul>
                          <li><a href="login_form.html">Sign In</a></li>
                          <li><a href="shopping_cart.html">View Cart</a></li>
                          <li><a href="wishlist.html">My Wishlist</a></li>
                          <li><a href="support-24.html">Track My Order</a></li>
                          <li><a href="faq.html">Help</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /footer-data */}
          <div className="divider divider-md visible-xs visible-sm visible-md" />
          {/* social-icon */}
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="social-links social-links--large">
                  <ul>
                    <li><a className="icon fa fa-facebook" href="http://www.facebook.com/" /></li>
                    <li><a className="icon fa fa-twitter" href="http://www.twitter.com/" /></li>
                    <li><a className="icon fa fa-google-plus" href="http://www.google.com/" /></li>
                    <li><a className="icon fa fa-instagram" href="https://instagram.com/" /></li>
                    <li><a className="icon fa fa-youtube-square" href="https://www.youtube.com/" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /social-icon */}
          {/* footer-copyright */}
          <div className="container footer-copyright">
            <div className="row">
              <div className="col-lg-12"> <a href="index.html"><span>Your</span>Store</a> © 2016 . All Rights Reserved. </div>
            </div>
          </div>
          {/* /footer-copyright */}
          <a href="#" className="btn btn--ys btn--full visible-xs" id="backToTop">Back to top <span className="icon icon-expand_less" /></a>
        </footer>

  );
};

export  default Footer;
