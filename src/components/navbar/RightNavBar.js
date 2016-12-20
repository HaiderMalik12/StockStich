import React from 'react';
import {Link} from 'react-router';

import LeftNavBar from './LeftNavBar';

class NavbarPage extends React.Component {

  render(){
    return(
      <div className="pull-right col-sm-3 col-md-3 col-lg-2">
        <div className="text-right">
          {/* search start */}
          <div className="search link-inline">
            <a href="#" className="search__open"><span className="icon icon-search" /></a>
            <div className="search-dropdown">
              <form action="#" method="get">
                <div className="input-outer">
                  <input type="search" name="search" defaultValue maxLength={128} placeholder="SEARCH:" className="placeholder" />
                  <button type="submit" title className="icon icon-search" />
                </div>
                <a href="#" className="search__close"><span className="icon icon-close" /></a>
              </form>
            </div>
          </div>
          {/* search end */}
          {/* account menu start */}
          <div className="account link-inline">
            <div className="dropdown text-right">
              <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <span className="icon icon-person " />
              </a>
              <ul className="dropdown-menu dropdown-menu--xs-full" style={{width: 856}}>
                <li><Link to="signin"><span className="icon icon-person" />My Account</Link></li>
                <li><a href="checkout-step.html"><span className="icon icon-done_all" />Checkout</a></li>
                <li><Link to="signin"><span className="icon icon-lock" />Log In</Link></li>
                <li><a href="login_form.html"><span className="icon icon-person_add" />Create an account</a></li>
                <li className="dropdown-menu__close"><a href="#"><span className="icon icon-close" />close</a></li>
              </ul>
            </div>
          </div>
          {/* account menu end */}
          {/* shopping cart start */}
          <div className="cart link-inline">
            <div className="dropdown text-right">
              <a className="dropdown-toggle">
                <span className="icon icon-shopping_basket" />
                <span className="badge badge--cart">2</span>
              </a>
              <div className="dropdown-menu dropdown-menu--xs-full slide-from-top" role="menu" style={{maxHeight: 389, overflowX: 'hidden', overflowY: 'auto', width: 856}}>
                <div className="container">
                  <div className="cart__top">Recently added item(s)</div>
                  <a href="#" className="icon icon-close cart__close"><span>CLOSE</span></a>
                  <ul>
                    <li className="cart__item">
                      <div className="cart__item__image pull-left"><a href="#"><img src="images/product/product-1.jpg" alt /></a></div>
                      <div className="cart__item__control">
                        <div className="cart__item__delete"><a href="#" className="icon icon-delete"><span>Delete</span></a></div>
                        <div className="cart__item__edit"><a href="#" className="icon icon-edit"><span>Edit</span></a></div>
                      </div>
                      <div className="cart__item__info">
                        <div className="cart__item__info__title">
                          <h2><a href="#">Quis nostrud exercit ation ullamco</a></h2>
                        </div>
                        <div className="cart__item__info__price"><span className="info-label">Price:</span><span>$84.00</span></div>
                        <div className="cart__item__info__qty"><span className="info-label">Qty:</span><input type="text" className="input--ys" defaultValue={1} /></div>
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
                      <div className="cart__item__image pull-left"><a href="#"><img src="images/product/product-2.jpg" alt /></a></div>
                      <div className="cart__item__control">
                        <div className="cart__item__delete"><a href="#" className="icon icon-delete"><span>Delete</span></a></div>
                        <div className="cart__item__edit"><a href="#" className="icon icon-edit"><span>Edit</span></a></div>
                      </div>
                      <div className="cart__item__info">
                        <div className="cart__item__info__title">
                          <h2 className="title-center"><a href="#">Quis nostrud exercit ation ullamco</a></h2>
                        </div>
                        <div className="cart__item__info__price"><span className="info-label">Price:</span><span>$84.00</span></div>
                        <div className="cart__item__info__qty"><span className="info-label">Qty:</span><input type="text" className="input--ys" defaultValue={1} /></div>
                      </div>
                    </li>
                  </ul>
                  <div className="cart__bottom">
                    <div className="cart__total">Cart subtotal: <span> $65.00</span></div>
                    <button className="btn btn--ys btn-checkout">Checkout <span className="icon icon--flippedX icon-reply" /></button>
                    <a href="#" className="btn btn--ys"><span className="icon icon-shopping_basket" /> View Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* shopping cart end */}
        </div>
      </div>

    );

  }
}

export default NavbarPage;
