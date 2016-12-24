import React, {PropTypes} from 'react';

import LeftNavBar from './LeftNavBar';
import RightNavBar from './RightNavBar';
import {Link,IndexLink} from 'react-router';


const NavbarPage = ({isAuthenticated}) => {


    return(
      <div className="row">

        <div className="pull-left col-sm-9 col-md-9 col-lg-10">
          {/* navigation start */}
          <nav className="navbar">
            <div className="responsive-menu mainMenu">
              {/* Mobile menu Button*/}
              <div className="col-xs-2 visible-mobile-menu-on">
                <div className="expand-nav compact-hidden">
                  <a href="#off-canvas-menu" className="off-canvas-menu-toggle cboxElement">
                    <div className="navbar-toggle">
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="menu-text">MENU</span>
                    </div>
                  </a>
                </div>
              </div>
              {/* //end Mobile menu Button */}
              <ul className="nav navbar-nav">
                <li className="dl-close"><a href="#"><span className="icon icon-close" />close</a></li>
                <li className="dropdown dropdown-mega-menu">
                  <IndexLink to="/" activeClassName="active"><span className="act-underline">Home</span></IndexLink>

                </li>
                <li className="dropdown dropdown-mega-menu">
                  <span className="dropdown-toggle extra-arrow" />
                  <Link to = "category/women" className="dropdown-toggle"><span className="act-underline">WOMEN’s<span className="badge badge--menu">NEW</span></span></Link>
                  <ul className="dropdown-menu megamenu" role="menu">
                    <li className="dl-back"><a href="#"><span className="icon icon-chevron_left" />back</a></li>
                    <li className="col-sm-3">
                      <a href="listing.html" className="megamenu__subtitle"><span>Replicas</span></a>
                      <ul className="megamenu__submenu">
                        <li className="dl-back"><a href="#"><span className="icon icon-chevron_left" />back</a></li>
                        <li className="level2"><a href="listing.html">Sana Safinaz</a></li>
                        <li className="level2"><a href="listing.html">Asim Jofa</a></li>
                        <li className="level2"><a href="listing.html">Maria B</a></li>
                        <li className="level2"><a href="listing.html">Khadhi</a></li>
                        <li className="level2"><a href="listing.html">Eden Robe</a></li>
                        <li className="level2"><a href="listing.html">AUJ</a></li>
                        <li className="level2"><a href="listing.html">Chariza</a></li>
                        <li className="level2"><a href="listing.html">Cross Stitch</a></li>
                        <li className="level2"><a href="listing.html">Itehad</a></li>
                        <li className="level2"><a href="listing.html">Gul Ahmed</a></li>
                        <li className="level2"><a href="listing.html">Al Karam</a></li>
                        <li className="level2"><a href="listing.html">Lakahani</a></li>
                        <li className="level2"><a href="listing.html">Motifz</a></li>
                        <li className="level2"><a href="listing.html">Origins</a></li>
                        <li className="level2"><a href="listing.html">Ethnic</a></li>
                      </ul>
                    </li>
                    <li className="col-sm-3">
                      <a href="listing.html" className="megamenu__subtitle"><span>Official</span></a>
                      <ul className="megamenu__submenu">
                        <li className="dl-back"><a href="listing.html"><span className="icon icon-chevron_left" />back</a></li>
                        <li className="level2"><a href="listing.html">Sana Safinaz</a></li>
                        <li className="level2"><a href="listing.html">Asim Jofs</a></li>
                        <li className="level2"><a href="listing.html">Maria B</a></li>
                        <li className="level2"><a href="listing.html">Khadhi</a></li>
                        <li className="level2"><a href="listing.html">SD</a></li>
                      </ul>
                    </li>
                    <li className="col-sm-12 hidden-xs">
                      <div className="row">
                        <div className="col-sm-6"> <a href="#" className="discolor-hover"><img className="img-responsive" src="assets/images/custom/banner-megamenu-01.jpg" alt /></a> </div>
                        <div className="col-sm-6"> <a href="#" className="discolor-hover"><img className="img-responsive" src="assets/images/custom/banner-megamenu-02.jpg" alt /></a> </div>
                      </div>
                    </li>
                  </ul>
                </li>

                <li className="dropdown dropdown-mega-menu">
                  <Link to="about" activeClassName="active"><span className="act-underline">Men's<span className="badge badge--menu badge--color">Coming Soon</span></span></Link>

                </li>
                <li className="dropdown dropdown-mega-menu">
                  <Link to="about" activeClassName="active"><span className="act-underline">About</span></Link>

                </li>

                <li className="dropdown dropdown-mega-menu">
                  <Link to="contact" activeClassName="active"><span className="act-underline">Contact</span></Link>

                </li>

              </ul>
            </div>
          </nav>
        </div>
        <div className="pull-right col-sm-3 col-md-3 col-lg-2">
          <div className="text-right">
            {/* search start */}
            <div className="search link-inline">
              <a href="#" className="search__open"><span className="icon icon-search"/></a>
              <div className="search-dropdown">
                <form action="#" method="get">
                  <div className="input-outer">
                    <input type="search" name="search" defaultValue maxLength={128} placeholder="SEARCH:"
                           className="placeholder"/>
                    <button type="submit" title className="icon icon-search"/>
                  </div>
                  <a href="#" className="search__close"><span className="icon icon-close"/></a>
                </form>
              </div>
            </div>
            {/* search end */}
            {/* account menu start */}
            <div className="account link-inline">
              <div className="dropdown text-right">
                <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                  <span className="icon icon-person "/>
                </a>
                <ul className="dropdown-menu dropdown-menu--xs-full" style={{width: 856}}>

                  {/*<li><Link to="dashboard"><span className="icon "></span>Dashboard</Link></li>
                   <li><a href="login_form.html"><span className="icon icon-person"></span>My Account</a></li>
                   <li><Link to="signin"><span className="icon icon-lock"></span>Sign In</Link></li>
                   <li><a href="login_form.html"><span className="icon icon-person_add"></span>Create an account</a></li>*/}

                  {this.renderLinks()}


                </ul>
              </div>
            </div>
            {/* account menu end */}
            {/* shopping cart start */}
            <div className="cart link-inline">
              <div className="dropdown text-right">
                <a className="dropdown-toggle">
                  <span className="icon icon-shopping_basket"/>
                  <span className="badge badge--cart">2</span>
                </a>
                <div className="dropdown-menu dropdown-menu--xs-full slide-from-top" role="menu"
                     style={{maxHeight: 389, overflowX: 'hidden', overflowY: 'auto', width: 856}}>
                  <div className="container">
                    <div className="cart__top">Recently added item(s)</div>
                    <a href="#" className="icon icon-close cart__close"><span>CLOSE</span></a>
                    <ul>
                      <li className="cart__item">
                        <div className="cart__item__image pull-left"><a href="#"><img src="images/product/product-1.jpg"
                                                                                      alt/></a></div>
                        <div className="cart__item__control">
                          <div className="cart__item__delete"><a href="#" className="icon icon-delete"><span>Delete</span></a>
                          </div>
                          <div className="cart__item__edit"><a href="#" className="icon icon-edit"><span>Edit</span></a>
                          </div>
                        </div>
                        <div className="cart__item__info">
                          <div className="cart__item__info__title">
                            <h2><a href="#">Quis nostrud exercit ation ullamco</a></h2>
                          </div>
                          <div className="cart__item__info__price"><span
                            className="info-label">Price:</span><span>$84.00</span></div>
                          <div className="cart__item__info__qty"><span className="info-label">Qty:</span><input
                            type="text" className="input--ys" defaultValue={1}/></div>
                          <div className="cart__item__info__details">
                            <div className="multitooltip">
                              <a href="#">Details</a>
                              <div className="tip on-bottom">
                                <span><strong>Color:</strong> Purple</span>
                                <span><strong>Quantity:</strong> 200</span>
                                <span><strong>Image:</strong> No</span>
                                <span><strong>Paper:</strong> Type Linen</span>
                                <span><strong>Size:</strong> 4"x3.5"</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="cart__item">
                        <div className="cart__item__image pull-left"><a href="#"><img src="images/product/product-2.jpg"
                                                                                      alt/></a></div>
                        <div className="cart__item__control">
                          <div className="cart__item__delete"><a href="#" className="icon icon-delete"><span>Delete</span></a>
                          </div>
                          <div className="cart__item__edit"><a href="#" className="icon icon-edit"><span>Edit</span></a>
                          </div>
                        </div>
                        <div className="cart__item__info">
                          <div className="cart__item__info__title">
                            <h2 className="title-center"><a href="#">Quis nostrud exercit ation ullamco</a></h2>
                          </div>
                          <div className="cart__item__info__price"><span
                            className="info-label">Price:</span><span>$84.00</span></div>
                          <div className="cart__item__info__qty"><span className="info-label">Qty:</span><input
                            type="text" className="input--ys" defaultValue={1}/></div>
                        </div>
                      </li>
                    </ul>
                    <div className="cart__bottom">
                      <div className="cart__total">Cart subtotal: <span> $65.00</span></div>
                      <button className="btn btn--ys btn-checkout">Checkout <span
                        className="icon icon--flippedX icon-reply"/></button>
                      <a href="#" className="btn btn--ys"><span className="icon icon-shopping_basket"/> View Cart</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* shopping cart end */}
          </div>
        </div>
      </div>


    );


};



export default NavbarPage;
