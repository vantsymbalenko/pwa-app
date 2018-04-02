import React from 'react';
import { Link } from 'react-router-dom';

import imgSrcLogoSprings from '../../img/LogoSprings.png';

export const Header = () => (
    <header>
        <nav className="navbar navbar-default navbar-spacing-top-fixed">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <Link to="/" className="navbar-brand scroll-top" >
                        <img src={imgSrcLogoSprings} alt="Logo Springs" className="navbar__springs-logo-img_width_auto"/>
                    </Link>
                    <span className="navbar-tagline hidden-sm">PWA Demo</span>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                            <a  className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Home<span /></a>
                            <ul className="dropdown-menu dropdown-menu-first">
                                <li><Link to="/">Default</Link></li>
                                <li><Link to="/home-image-slider">Image Slider</Link></li>
                                {/*<li><Link to="/home-text-rotated">Rotate</Link></li>*/}
                                {/*<li><Link to="/home-minimal-portfolio">No BG Slider</Link></li>*/}
                            </ul>
                        </li>
                        <li><Link to="/services">Services</Link></li>
                        <li className="dropdown">
                            <a  className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages<span/></a>
                            <ul className="dropdown-menu dropdown-menu-first">
                                <li><Link to="/page-about">About</Link></li>
                                <li><Link to="/page-pricing">Pricing</Link></li>
                                {/*<li><a href="multipage-experience.html">Experience</a></li>*/}
                            </ul>
                        </li>
                        <li><Link to="/team">Team</Link></li>
                        {/*<li className="dropdown">*/}
                            {/*<a  className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Work<span /></a>*/}
                            {/*<ul className="dropdown-menu dropdown-menu-first">*/}
                                {/*<li className="dropdown-submenu">*/}
                                    {/*<a tabIndex="-1" >Masonry &nbsp;<span className="ion-ios-arrow-right" /></a>*/}
                                     {/*<ul className="dropdown-menu">*/}
                                        {/*<li><a tabIndex="-1" href="multipage-portfolio-masonry-2col.html">2 Columns</a></li>*/}
                                         {/*<li><a tabIndex="-1" href="multipage-portfolio-masonry-3col.html">3 Columns</a></li>*/}
                                        {/*<li><a tabIndex="-1" href="multipage-portfolio-masonry-4col.html">4 Columns</a></li>*/}
                                    {/*</ul>*/}
                                {/*</li>*/}
                                 {/*<li className="dropdown-submenu">*/}
                                    {/*<a >Regular &nbsp;<span className="ion-ios-arrow-right" /></a>*/}
                                        {/*<ul className="dropdown-menu">*/}
                                            {/*<li><a tabIndex="-1" href="multipage-portfolio-aligned-2col.html">2 Columns</a></li>*/}
                                            {/*<li><a tabIndex="-1" href="multipage-portfolio-aligned-3col.html">3 Columns</a></li>*/}
                                            {/*<li><a tabIndex="-1" href="multipage-portfolio-aligned-4col.html">4 Columns</a></li>*/}
                                        {/*</ul>*/}
                                {/*</li>*/}
                            {/*</ul>*/}
                        {/*</li>*/}
                        <li><Link to="contacts">Contact</Link></li>
                        {/*<li className="btn-navbar"><a ><span className="btn btn-primary btn-lg">Buy Now</span></a></li>*/}
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);
