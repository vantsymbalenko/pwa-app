import React, { Component } from 'react';

import imgSrcWork1 from '../../img/work/1.jpg';
import imgSrcWork2 from '../../img/work/2.jpg';
import imgSrcWork3 from '../../img/work/3.jpg';
import imgSrcWork4 from '../../img/work/4.jpg';
import imgSrcWork5 from '../../img/work/5.jpg';
import imgSrcWork6 from '../../img/work/6.jpg';
import imgSrcWork7 from '../../img/work/7.jpg';
import imgSrcWork8 from '../../img/work/8.jpg';
import imgSrcWork9 from '../../img/work/9.jpg';
import imgSrcSlide2 from '../../img/slide-2.jpg';
import imgSrcSlide3 from '../../img/slide-3.jpg';
import imgSrcSlide4 from '../../img/slide-4.jpg';

export default class Services extends Component{
    componentDidMount(){
        // custom script which use isotop library
        window.$(document).ready(function(){
            let $grid = window.$('.grid').isotope({
                layoutMode: 'masonry'
            });
            window.$('.filter-button-group').on('click', 'li', function() {
                let filterValue = window.$(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            window.$(".filter-button-group").each(function(t, e) {
                let i = window.$(e);
                i.on("click", "li", function() {
                    i.find(".active").removeClass("active"); window.$(this).addClass("active")
                })
            });
        });
    }
    render(){
        return(
            <main>
                <div id="home" className="top-carousel-image">
                    <div className="carousel slide" data-ride="carousel" id="carousel-top-image">
                        <div className="carousel-inner" role="listbox">
                            <div className="item active" style={{backgroundImage: `url(${imgSrcSlide2})`, backgroundSize: "cover" }}>
                                <div className="container">
                                    <div className="row">
                                        <div className= "col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                                            <div className="top-content top-content-carousel">
                                                <h2 className="text-white">I am a minimal portfolio</h2>
                                                <span className="divider"/>
                                                <p className="text-white mb20">Con panna organic americano grinder single origin white mug chicory arabica breve cortado. In sit, aromatic lungo shop body redeye. Galão dripper mocha doppio seasonal aroma barista. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu mauris felis.</p>
                                                <p className="no-margin">
                                                    <a className="btn btn-primary btn-lg scroll-link" data-id="about" href="#about" role="button">About Us</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item" style={{backgroundImage: `url(${imgSrcSlide3})`, backgroundSize: "cover" }}>
                                <div className="container">
                                    <div className="row">
                                        <div className= "col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                                            <div className="top-content-carousel">
                                                <h2 className="text-white">I am slide number two</h2>
                                                <span className="divider"/>
                                                <p className="text-white mb20">Con panna organic americano grinder single origin white mug chicory arabica breve cortado. In sit, aromatic lungo shop body redeye. Galão dripper mocha doppio seasonal aroma barista. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu mauris felis.</p>
                                                <p className="no-margin">
                                                    <a className="btn btn-primary btn-lg scroll-link" data-id="about" href="#about" role="button">About Us</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item" style={{backgroundImage: `url(${imgSrcSlide4})`, backgroundSize: "cover" }}>
                                <div className="container">
                                    <div className="row">
                                        <div className= "col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                                            <div className="top-content-carousel">
                                                <h2 className="text-white">I am slide number three</h2>
                                                <span className="divider"/>
                                                <p className="text-white mb20">Con panna organic americano grinder single origin white mug chicory arabica breve cortado. In sit, aromatic lungo shop body redeye. Galão dripper mocha doppio seasonal aroma barista. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu mauris felis.</p>
                                                <p className="no-margin">
                                                    <a className="btn btn-default btn-lg scroll-link" data-id="about" href="#about" role="button">About Us</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="left carousel-control" href="#carousel-top-image" role="button" data-slide="prev">
                            <span className="ion-ios-arrow-left carousel-arrow" aria-hidden="true"/>
                        </a>
                        <a className="right carousel-control" href="#carousel-top-image" role="button" data-slide="next">
                            <span className="ion-ios-arrow-right carousel-arrow" aria-hidden="true"/>
                        </a>
                    </div>
                </div>
                <section id="work" className="section-padding-work">
                    <div className="container">

                        <div className="row mb50">
                            <div className="col-sm-12 col-md-6 col-md-offset-3 text-center filter-button-group">
                                <h2>Portfolio</h2>
                                <span className="divider divider-center divider-dark mb30"/>
                                <span>Filter :</span>
                                <ul className="list-work-filter list-unstyled list-inline">
                                    <li className="active" data-filter="*">All</li>
                                    <li data-filter=".web">Web</li>
                                    <li data-filter=".print">Print</li>
                                    <li data-filter=".product">Product</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row grid">
                            <div className="col-md-4 product web">
                                <a href="images/work/1.jpg" className="zoom">
                                    <div className="grid-item">
                                        <div className="overlay">
                                            <div className="inner-overlay">
                                                <h4>Right &amp; Sand</h4>
                                                <span>Product</span>
                                            </div>
                                        </div>
                                        <img src={imgSrcWork1} className="img-responsive" alt="..."/>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 print product">
                                <a href="images/work/2.jpg" className="zoom">
                                    <div className="grid-item">
                                        <div className="overlay">
                                            <div className="inner-overlay">
                                                <h4>Polly Fox</h4>
                                                <span>Print</span>
                                            </div>
                                        </div>
                                        <img src={imgSrcWork2} className="img-responsive" alt="..."/>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 print product">
                                <a href="images/work/3.jpg" className="zoom">
                                    <div className="grid-item">
                                        <div className="overlay">
                                            <div className="inner-overlay">
                                                <h4>Roots</h4>
                                                <span>Print</span>
                                            </div>
                                        </div>
                                        <img src={imgSrcWork3} className="img-responsive" alt="..."/>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 print product">
                                <a href="images/work/4.jpg" className="zoom">
                                    <div className="grid-item">
                                        <div className="overlay">
                                            <div className="inner-overlay">
                                                <h4>Magazine</h4>
                                                <span>Print</span>
                                            </div>
                                        </div>
                                        <img src={imgSrcWork4} className="img-responsive" alt="..."/>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 web">
                                <a href="images/work/5.jpg" className="zoom">
                                    <div className="grid-item">
                                        <div className="overlay">
                                            <div className="inner-overlay">
                                                <h4>Bottle</h4>
                                                <span>Product</span>
                                            </div>
                                        </div>
                                        <img src={imgSrcWork5} className="img-responsive" alt="..."/>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 product web">
                                <a href="images/work/6.jpg" className="zoom">
                                    <div className="grid-item">
                                        <div className="overlay">
                                            <div className="inner-overlay">
                                                <h4>Triangle</h4>
                                                <span>Web</span>
                                            </div>
                                        </div>
                                        <img src={imgSrcWork6} className="img-responsive" alt="..."/>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 product web">
                                <a href="images/work/7.jpg" className="zoom">
                                    <div className="grid-item">
                                        <div className="overlay">
                                            <div className="inner-overlay">
                                                <h4>Hermes</h4>
                                                <span>Web</span>
                                            </div>
                                        </div>
                                        <img src={imgSrcWork7} className="img-responsive" alt="..."/>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 web">
                                <a href="images/work/8.jpg" className="zoom">
                                    <div className="grid-item">
                                        <div className="overlay">
                                            <div className="inner-overlay">
                                                <h4>Reasons</h4>
                                                <span>Web</span>
                                            </div>
                                        </div>
                                        <img src={imgSrcWork8} className="img-responsive" alt="..."/>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 web">
                                <a href="images/work/9.jpg" className="zoom">
                                    <div className="grid-item">
                                        <div className="overlay">
                                            <div className="inner-overlay">
                                                <h4>Cards</h4>
                                                <span>Print</span>
                                            </div>
                                        </div>
                                        <img src={imgSrcWork9} className="img-responsive" alt="..."/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
} 