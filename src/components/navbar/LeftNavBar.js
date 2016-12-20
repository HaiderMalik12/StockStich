/**
 * Created by HaiderMalik on 19/12/2016.
 */
import React from 'react';
import {Link,IndexLink} from 'react-router';

class LeftNavBar extends React.Component{

  render(){
   return(
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
   );
  }
}

export  default LeftNavBar;
