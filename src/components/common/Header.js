import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import SignInPage from '../../containers/auth/SignInPage';
import SignUpPage from '../../containers/auth/SignInPage';

class Header extends Component {

  renderLinks() {

    if (this.props.authenticated) {

      return(
        <li className="dropdown">
          <a className="dropdown-toggle" href="#">
            My Account
          </a>
          <ul className="dropdown-menu">
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link href="/signout">Sign Out</Link></li>

          </ul>
        </li>
      );

    }


     else {

      return [
        <li><Link to="/signin"><i className="fa fa-user"/> Sign In<i className="fa fa-caret-down"/></Link></li>,
        <li><Link to="/signup"><i className="fa fa-user"/> Sign Up<i className="fa fa-caret-down"/></Link></li>
      ];
    }
  }

  render() {
    console.log(localStorage.getItem('token'));
    return (
      <header id="header"
              data-plugin-options="{&quot;stickyEnabled&quot;: true, &quot;stickyEnableOnBoxed&quot;: true, &quot;stickyEnableOnMobile&quot;: true, &quot;stickyStartAt&quot;: 57, &quot;stickySetTop&quot;: &quot;-57px&quot;, &quot;stickyChangeLogo&quot;: true}">
        <div className="header-body">
          <div className="header-container container">
            <div className="header-row">
              <div className="header-column">
                <div className="header-logo">
                  <a href="index.html">
                    <img alt="Porto" width={111} height={54} data-sticky-width={82} data-sticky-height={40}
                         data-sticky-top={33} src="assets/img/logo.png"/>
                  </a>
                </div>
              </div>
              <div className="header-column">
                <div className="header-row">
                  <div className="header-search hidden-xs">
                    <form id="searchForm" action="page-search-results.html" method="get">
                      <div className="input-group">
                        <input type="text" className="form-control" name="q" id="q" placeholder="Search..." required/>
                        <span className="input-group-btn">
                          <button className="btn btn-default" type="submit"><i className="fa fa-search"/></button>
                        </span>
                      </div>
                    </form>
                  </div>
                  <nav className="header-nav-top">
                    <ul className="nav nav-pills">
                      <li className="hidden-xs">
                        <a href="about-us.html"><i className="fa fa-angle-right"/> About Us</a>
                      </li>
                      <li className="hidden-xs">
                        <a href="contact-us.html"><i className="fa fa-angle-right"/> Contact Us</a>
                      </li>
                      <li>
                        <span className="ws-nowrap"><i className="fa fa-phone"/> (123) 456-789</span>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="header-row">
                  <div className="header-nav">
                    <button className="btn header-btn-collapse-nav" data-toggle="collapse"
                            data-target=".header-nav-main">
                      <i className="fa fa-bars"/>
                    </button>

                    <div className="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1 collapse">
                      <nav>
                        <ul className="nav nav-pills" id="mainNav">
                          <li className="dropdown active">
                            <a className="dropdown-toggle" href="index.html">
                              Home
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="index-overview.html">
                                  Overview
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  Landing Page
                                </a>
                              </li>
                              <li className="dropdown-submenu">
                                <a href="index-classic.html">Classic</a>
                                <ul className="dropdown-menu">
                                  <li><a href="index-classic.html"
                                         data-thumb-preview="img/previews/preview-classic.jpg">Classic - Original <span
                                    className="tip tip-dark">hot</span></a></li>
                                  <li><a href="index-classic-color.html"
                                         data-thumb-preview="img/previews/preview-classic-color.jpg">Classic - Color</a>
                                  </li>
                                  <li><a href="index-classic-light.html"
                                         data-thumb-preview="img/previews/preview-classic-light.jpg">Classic - Light</a>
                                  </li>
                                  <li><a href="index-classic-video.html"
                                         data-thumb-preview="img/previews/preview-classic-video.jpg">Classic - Video</a>
                                  </li>
                                  <li><a href="index-classic-video-light.html"
                                         data-thumb-preview="img/previews/preview-classic-video-light.jpg">Classic -
                                    Video - Light</a></li>
                                </ul>
                              </li>
                              <li className="dropdown-submenu">
                                <a href="index-corporate.html">Corporate <span className="tip">new</span></a>
                                <ul className="dropdown-menu">
                                  <li className="dropdown-submenu">
                                    <a href="#">Corporate - Versions <span className="tip tip-dark">hot</span></a>
                                    <ul className="dropdown-menu">
                                      <li><a href="index-corporate.html"
                                             data-thumb-preview="img/previews/preview-corporate.jpg">Corporate - Version
                                        1</a></li>
                                      <li><a href="index-corporate-2.html"
                                             data-thumb-preview="img/previews/preview-corporate-version2.jpg">Corporate
                                        - Version 2</a></li>
                                      <li><a href="index-corporate-3.html"
                                             data-thumb-preview="img/previews/preview-corporate-version3.jpg">Corporate
                                        - Version 3</a></li>
                                      <li><a href="index-corporate-4.html"
                                             data-thumb-preview="img/previews/preview-corporate-version4.jpg">Corporate
                                        - Version 4</a></li>
                                      <li><a href="index-corporate-5.html"
                                             data-thumb-preview="img/previews/preview-corporate-version5.jpg">Corporate
                                        - Version 5</a></li>
                                      <li><a href="index-corporate-6.html"
                                             data-thumb-preview="img/previews/preview-corporate-version6.jpg">Corporate
                                        - Version 6</a></li>
                                      <li><a href="index-corporate-7.html"
                                             data-thumb-preview="img/previews/preview-corporate-version7.jpg">Corporate
                                        - Version 7</a></li>
                                      <li><a href="index-corporate-8.html"
                                             data-thumb-preview="img/previews/preview-corporate-version8.jpg">Corporate
                                        - Version 8</a></li>
                                    </ul>
                                  </li>
                                  <li><a href="index-corporate-hosting.html"
                                         data-thumb-preview="img/previews/preview-corporate-hosting.jpg">Corporate -
                                    Hosting</a></li>
                                  <li><a href="index-corporate-digital-agency.html"
                                         data-thumb-preview="img/previews/preview-corporate-digital-agency.jpg">Corporate
                                    - Digital Agency <span className="tip">new</span></a></li>
                                </ul>
                              </li>
                              <li className="dropdown-submenu">
                                <a href="#">One Page</a>
                                <ul className="dropdown-menu">
                                  <li><a href="index-one-page.html"
                                         data-thumb-preview="img/previews/preview-one-page.jpg">One Page Original</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown dropdown-mega">
                            <a className="dropdown-toggle" href="#">
                              Shortcodes
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <div className="dropdown-mega-content">
                                  <div className="row">
                                    <div className="col-md-3">
                                      <span className="dropdown-mega-sub-title">Shortcodes 1</span>
                                      <ul className="dropdown-mega-sub-nav">
                                        <li><a href="shortcodes-accordions.html">Accordions</a></li>
                                        <li><a href="shortcodes-toggles.html">Toggles</a></li>
                                        <li><a href="shortcodes-tabs.html">Tabs</a></li>
                                        <li><a href="shortcodes-icons.html">Icons</a></li>
                                        <li><a href="shortcodes-icon-boxes.html">Icon Boxes</a></li>
                                        <li><a href="shortcodes-carousels.html">Carousels</a></li>
                                        <li><a href="shortcodes-modals.html">Modals</a></li>
                                        <li><a href="shortcodes-lightboxes.html">Lightboxes</a></li>
                                      </ul>
                                    </div>
                                    <div className="col-md-3">
                                      <span className="dropdown-mega-sub-title">Shortcodes 2</span>
                                      <ul className="dropdown-mega-sub-nav">
                                        <li><a href="shortcodes-buttons.html">Buttons</a></li>
                                        <li><a href="shortcodes-labels.html">Labels</a></li>
                                        <li><a href="shortcodes-lists.html">Lists</a></li>
                                        <li><a href="shortcodes-image-gallery.html">Image Gallery</a></li>
                                        <li><a href="shortcodes-image-frames.html">Image Frames</a></li>
                                        <li><a href="shortcodes-testimonials.html">Testimonials</a></li>
                                        <li><a href="shortcodes-blockquotes.html">Blockquotes</a></li>
                                        <li><a href="shortcodes-word-rotator.html">Word Rotator</a></li>
                                      </ul>
                                    </div>
                                    <div className="col-md-3">
                                      <span className="dropdown-mega-sub-title">Shortcodes 3</span>
                                      <ul className="dropdown-mega-sub-nav">
                                        <li><a href="shortcodes-call-to-action.html">Call to Action</a></li>
                                        <li><a href="shortcodes-pricing-tables.html">Pricing Tables</a></li>
                                        <li><a href="shortcodes-tables.html">Tables</a></li>
                                        <li><a href="shortcodes-progressbars.html">Progress Bars</a></li>
                                        <li><a href="shortcodes-counters.html">Counters</a></li>
                                        <li><a href="shortcodes-sections-parallax.html">Sections &amp; Parallax</a></li>
                                        <li><a href="shortcodes-tooltips-popovers.html">Tooltips &amp; Popovers</a></li>
                                        <li><a href="shortcodes-sticky-elements.html">Sticky Elements</a></li>
                                      </ul>
                                    </div>
                                    <div className="col-md-3">
                                      <span className="dropdown-mega-sub-title">Shortcodes 4</span>
                                      <ul className="dropdown-mega-sub-nav">
                                        <li><a href="shortcodes-headings.html">Headings</a></li>
                                        <li><a href="shortcodes-dividers.html">Dividers</a></li>
                                        <li><a href="shortcodes-animations.html">Animations</a></li>
                                        <li><a href="shortcodes-medias.html">Medias</a></li>
                                        <li><a href="shortcodes-maps.html">Maps</a></li>
                                        <li><a href="shortcodes-arrows.html">Arrows</a></li>
                                        <li><a href="shortcodes-alerts.html">Alerts</a></li>
                                        <li><a href="shortcodes-posts.html">Posts</a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              Features
                            </a>
                            <ul className="dropdown-menu">
                              <li className="dropdown-submenu">
                                <a href="#">Headers</a>
                                <ul className="dropdown-menu">
                                  <li className="dropdown-submenu">
                                    <a href="#">Default</a>
                                    <ul className="dropdown-menu">
                                      <li><a href="index-classic.html">Default</a></li>
                                      <li><a href="index-header-language-dropdown.html">Default + Language Dropdown</a>
                                      </li>
                                      <li><a href="index-header-big-logo.html">Default + Big Logo</a></li>
                                    </ul>
                                  </li>
                                  <li className="dropdown-submenu">
                                    <a href="#">Flat</a>
                                    <ul className="dropdown-menu">
                                      <li><a href="index-header-flat.html">Flat</a></li>
                                      <li><a href="index-header-flat-top-bar.html">Flat + Top Bar</a></li>
                                      <li><a href="index-header-flat-colored-top-bar.html">Flat + Colored Top Bar</a>
                                      </li>
                                      <li><a href="index-header-flat-top-bar-search.html">Flat + Top Bar with Search</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li><a href="index-header-center.html">Center</a></li>
                                  <li><a href="index-header-below-slider.html">Below Slider</a></li>
                                  <li><a href="index-header-full-video.html">Full Video</a></li>
                                  <li><a href="index-header-narrow.html">Narrow</a></li>
                                  <li><a href="index-header-always-sticky.html">Always Sticky</a></li>
                                  <li className="dropdown-submenu">
                                    <a href="#">Transparent</a>
                                    <ul className="dropdown-menu">
                                      <li><a href="index-header-transparent.html">Transparent</a></li>
                                      <li><a href="index-header-transparent-bottom-border.html">Transparent - Bottom
                                        Border</a></li>
                                      <li><a href="index-header-semi-transparent.html">Semi Transparent</a></li>
                                      <li><a href="index-header-semi-transparent-light.html">Semi Transparent -
                                        Light</a></li>
                                    </ul>
                                  </li>
                                  <li><a href="index-header-full-width.html">Full-Width</a></li>
                                  <li className="dropdown-submenu">
                                    <a href="#">Navbar</a>
                                    <ul className="dropdown-menu">
                                      <li><a href="index-header-navbar.html">Navbar</a></li>
                                      <li><a href="index-header-navbar-extra-info.html">Navbar + Extra Info</a></li>
                                    </ul>
                                  </li>
                                  <li><a href="index-header-signin.html">Sign In / Sign Up</a></li>
                                  <li><a href="index-header-logged.html">Logged</a></li>
                                </ul>
                              </li>
                              <li className="dropdown-submenu">
                                <a href="#">Navigations</a>
                                <ul className="dropdown-menu">
                                  <li><a href="index-classic.html">Default</a></li>
                                  <li><a href="index-navigation-stripe.html">Stripe</a></li>
                                  <li><a href="index-navigation-top-line.html">Top Line</a></li>
                                  <li><a href="index-navigation-dark-dropdown.html">Dark Dropdown</a></li>
                                  <li><a href="index-navigation-colors.html">Colors</a></li>
                                </ul>
                              </li>
                              <li className="dropdown-submenu">
                                <a href="#">Footers</a>
                                <ul className="dropdown-menu">
                                  <li><a href="index-classic.html#footer">Default</a></li>
                                  <li><a href="index-footer-advanced.html#footer">Advanced</a></li>
                                  <li><a href="index-footer-simple.html#footer">Simple</a></li>
                                  <li><a href="index-footer-light.html#footer">Light</a></li>
                                  <li><a href="index-footer-light-narrow.html#footer">Light Narrow</a></li>
                                  <li className="dropdown-submenu">
                                    <a href="#">Colors</a>
                                    <ul className="dropdown-menu">
                                      <li><a href="index-footer-color-primary.html#footer">Primary Color</a></li>
                                      <li><a href="index-footer-color-secondary.html#footer">Secondary Color</a></li>
                                      <li><a href="index-footer-color-tertiary.html#footer">Tertiary Color</a></li>
                                      <li><a href="index-footer-color-quaternary.html#footer">Quaternary Color</a></li>
                                    </ul>
                                  </li>
                                  <li><a href="index-footer-latest-work.html#footer">Latest Work</a></li>
                                  <li><a href="index-footer-contact-form.html#footer">Contact Form</a></li>
                                </ul>
                              </li>
                              <li className="dropdown-submenu">
                                <a href="#">Page Headers</a>
                                <ul className="dropdown-menu">
                                  <li><a href="index-page-header-default.html">Default</a></li>
                                  <li className="dropdown-submenu">
                                    <a href="#">Colors</a>
                                    <ul className="dropdown-menu">
                                      <li><a href="index-page-header-color-primary.html">Primary Color</a></li>
                                      <li><a href="index-page-header-color-secondary.html">Secondary Color</a></li>
                                      <li><a href="index-page-header-color-tertiary.html">Tertiary Color</a></li>
                                      <li><a href="index-page-header-color-quaternary.html">Quaternary Color</a></li>
                                    </ul>
                                  </li>
                                  <li><a href="index-page-header-light.html">Light</a></li>
                                  <li><a href="index-page-header-light-reverse.html">Light - Reverse</a></li>
                                  <li><a href="index-page-header-custom-background.html">Custom Background</a></li>
                                  <li><a href="index-page-header-parallax.html">Parallax</a></li>
                                  <li><a href="index-page-header-center.html">Center</a></li>
                                </ul>
                              </li>
                              <li className="dropdown-submenu">
                                <a href="#">Admin Extension <span className="tip tip-dark">hot</span> <em
                                  className="not-included">(Not Included)</em></a>
                                <ul className="dropdown-menu">
                                  <li><a href="feature-admin-forms-basic.html">Forms Basic</a></li>
                                  <li><a href="feature-admin-forms-advanced.html">Forms Advanced</a></li>
                                  <li><a href="feature-admin-forms-wizard.html">Forms Wizard</a></li>
                                  <li><a href="feature-admin-forms-code-editor.html">Code Editor</a></li>
                                  <li><a href="feature-admin-tables-advanced.html">Tables Advanced</a></li>
                                  <li><a href="feature-admin-tables-responsive.html">Tables Responsive</a></li>
                                  <li><a href="feature-admin-tables-editable.html">Tables Editable</a></li>
                                  <li><a href="feature-admin-tables-ajax.html">Tables Ajax</a></li>
                                  <li><a href="feature-admin-charts.html">Charts</a></li>
                                </ul>
                              </li>
                              <li className="dropdown-submenu">
                                <a href="#">Sliders</a>
                                <ul className="dropdown-menu">
                                  <li><a href="index-classic.html">Revolution Slider</a></li>
                                  <li><a href="index-slider-2.html">Nivo Slider</a></li>
                                </ul>
                              </li>
                              <li className="dropdown-submenu">
                                <a href="#">Layout Options</a>
                                <ul className="dropdown-menu">
                                  <li><a href="feature-layout-boxed.html">Boxed</a></li>
                                  <li><a href="feature-layout-dark.html">Dark</a></li>
                                  <li><a href="feature-layout-rtl.html">RTL</a></li>
                                </ul>
                              </li>
                              <li className="dropdown-submenu">
                                <a href="#">Extra</a>
                                <ul className="dropdown-menu">
                                  <li><a href="feature-typography.html">Typography</a></li>
                                  <li><a href="feature-grid-system.html">Grid System</a></li>
                                  <li><a href="feature-page-loading.html">Page Loading</a></li>
                                  <li><a href="feature-lazy-load.html">Lazy Load</a></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              Pages
                            </a>
                            <ul className="dropdown-menu">
                              <li className="dropdown-submenu">
                                <a href="#">Shop</a>
                                <ul className="dropdown-menu">
                                  <li><a href="shop-full-width.html">Shop - Full Width</a></li>
                                  <li><a href="shop-sidebar.html">Shop - Sidebar</a></li>
                                  <li><a href="shop-product-full-width.html">Shop - Product Full Width</a></li>
                                  <li><a href="shop-product-sidebar.html">Shop - Product Sidebar</a></li>
                                  <li><a href="shop-cart.html">Shop - Cart</a></li>
                                  <li><a href="shop-login.html">Shop - Login</a></li>
                                  <li><a href="shop-checkout.html">Shop - Checkout</a></li>
                                </ul>
                              </li>
                              <li className="dropdown-submenu">
                                <a href="#">Blog</a>
                                <ul className="dropdown-menu">
                                  <li><a href="blog-full-width.html">Blog Full Width</a></li>
                                  <li><a href="blog-large-image.html">Blog Large Image</a></li>
                                  <li><a href="blog-medium-image.html">Blog Medium Image</a></li>
                                  <li><a href="blog-timeline.html">Blog Timeline</a></li>
                                  <li><a href="blog-post.html">Single Post</a></li>
                                </ul>
                              </li>
                              <li className="dropdown-submenu">
                                <a href="#">Layouts</a>
                                <ul className="dropdown-menu">
                                  <li><a href="page-full-width.html">Full Width</a></li>
                                  <li><a href="page-left-sidebar.html">Left Sidebar</a></li>
                                  <li><a href="page-right-sidebar.html">Right Sidebar</a></li>
                                  <li><a href="page-left-and-right-sidebars.html">Left and Right Sidebars</a></li>
                                  <li><a href="page-sticky-sidebar.html">Sticky Sidebar</a></li>
                                  <li><a href="page-secondary-navbar.html">Secondary Navbar</a></li>
                                </ul>
                              </li>
                              <li className="dropdown-submenu">
                                <a href="#">Extra</a>
                                <ul className="dropdown-menu">
                                  <li><a href="page-404.html">404 Error</a></li>
                                  <li><a href="page-coming-soon.html">Coming Soon</a></li>
                                  <li><a href="page-maintenance-mode.html">Maintenance Mode</a></li>
                                  <li><a href="sitemap.html">Sitemap</a></li>
                                </ul>
                              </li>
                              <li><a href="page-custom-header.html">Custom Header</a></li>
                              <li><a href="page-team.html">Team</a></li>
                              <li><a href="page-services.html">Services</a></li>
                              <li><a href="page-careers.html">Careers</a></li>
                              <li><a href="page-our-office.html">Our Office</a></li>
                              <li><a href="page-faq.html">FAQ</a></li>
                              <li><a href="page-login.html">Login / Register</a></li>
                            </ul>
                          </li>

                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              About Us
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="about-us.html">About Us</a></li>
                              <li><a href="about-us-basic.html">About Us - Basic</a></li>
                              <li><a href="about-me.html">About Me</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              Contact Us
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="contact-us.html">Contact Us - Basic</a></li>
                              <li><a href="contact-us-advanced.php">Contact Us - Advanced</a></li>
                            </ul>
                          </li>
                          {/*SignIn*/}
                          {/*<li>*/}
                            {/*<Link to="/signin">*/}
                              {/*<i className="fa fa-user"/> Sign In*/}
                              {/*<i className="fa fa-caret-down"/></Link>*/}

                          {/*</li>*/}

                          {/*<li>*/}
                            {/*<Link to="/signup">*/}
                              {/*<i className="fa fa-user"/> Sign Up*/}
                              {/*<i className="fa fa-caret-down"/></Link>*/}

                          {/*</li>*/}

                          {this.renderLinks()}


                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
