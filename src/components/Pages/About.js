import React, { Component} from 'react';

import imgSrcWork4 from '../../img/work/4.jpg';

export default class About extends Component{
  render(){
    return(
        <div>
            <section id="about" className="section-padding section-border-bottom">
                <div className="container">
                    <div className="row mb60">
                        <div className="col-xs-12 text-center">
                            <h2>About</h2>
                            <span className="divider divider-center divider-dark no-margin-bottom"/>
                        </div>
                    </div>
                    <div className="row mb40">
                        <div className="col-sm-12 col-md-6 col-lg-6 leftReveal">
                            <h3 className="mb20"><span className="paragraph-logo">R</span> Information.</h3>
                            <p className="lead-rolla mb15">At ille non pertimuit saneque fidenter: Istis quidem ipsis verbis, inquit; Hos contra singulos dici est melius. Oculorum, inquit Plato, est in acerrimus.</p>
                            <p className="mb20">At multis se probavit. Si alia sentit, inquam, alia loquitur, numquam intellegam quid sentiat; Itaque sensibus rationem adiunxit et ratione effecta sensus non.Taque sensibus rationem adiunxit et.</p>
                            <div className="btn-group" role="group" aria-label="...">
                                <button type="button" className="btn btn-default btn-lg scroll-link" data-id="work" href="#work">Portfolio</button>
                                <button type="button" className="btn btn-primary btn-lg scroll-link" data-id="experience" href="#experience">Resume</button>
                            </div>
                        </div>
                        <div className="col-sm-8 col-md-5 col-lg-4 mt40-xs mt40-sm topReveal">
                            <div className="carousel slide" data-ride="carousel" id="carousel-about">
                                <ol className="carousel-indicators">
                                    <li className="active" data-slide-to="0" data-target="#carousel-about" />
                                    <li data-slide-to="1" data-target="#carousel-about" />
                                </ol>
                                <div className="carousel-inner" role="listbox">
                                    <div className="item active">
                                        <img alt="..." src={imgSrcWork4} />
                                    </div>
                                    <div className="item">
                                        <img alt="..." src={imgSrcWork4} />
                                    </div>
                                </div>
                                <a className="left carousel-control" href="#carousel-about" role="button" data-slide="prev">
                                    <span className="ion-ios-arrow-left carousel-arrow" aria-hidden="true"/>
                                </a>
                                <a className="right carousel-control" href="#carousel-about" role="button" data-slide="next">
                                    <span className="ion-ios-arrow-right carousel-arrow" aria-hidden="false"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-1 col-lg-2 mt40-xs skill-holder rightReveal">
                            <h4 className="mt15 mb15 spaced">
                                <span className="icon-holder ion-ios-monitor"/>
                                <span className="hidden-md">Web</span>
                            </h4>
                            <h4 className="mb15 spaced">
                                <span className="icon-holder ion-iphone"/>
                                <span className="hidden-md">App</span>
                            </h4>
                            <h4 className="mb15 spaced">
                                <span className="icon-holder ion-playstation"/>
                                <span className="hidden-md">Ico</span>
                            </h4>
                            <h4 className="no-margin-bottom spaced">
                                <span className="icon-holder ion-gear-a"/>
                                <span className="hidden-md">Dev</span>
                            </h4>
                        </div>
                    </div>
                    <div className="row mb40">
                        <div className="col-md-3 leftReveal">
                            <h5 className="heading-1 mb20">Skills</h5>
                            <p><em>At multis se probavit. Si alia sentit, inquam, alia loquitur, numquam intelli egam quid sentiat; Itaque sensibus rationem adiunxit et rati one effecta sensus non grinder single.</em></p>
                            <p className="no-margin">Taque sensibus rationem adiunxit et ratione effecta sensus non reliquit. Con panna organic americano.</p>
                        </div>
                        <div className="col-md-5 topReveal">
                            <div className="progress-bars-holder">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}>
                                        <span className="sr-only">90% Complete</span>
                                    </div>
                                </div>
                                <small className="text-light">Design</small>
                                <div className="progress mt15">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{width: "82%"}}>
                                        <span className="sr-only">82% Complete</span>
                                    </div>
                                </div>
                                <small className="text-light">Development</small>
                                <div className="progress mt15">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}>
                                        <span className="sr-only">95% Complete</span>
                                    </div>
                                </div>
                                <small className="text-light">Branding</small>
                                <div className="progress mt15">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="76" aria-valuemin="0" aria-valuemax="100" style={{width: "76%"}}>
                                        <span className="sr-only">76% Complete</span>
                                    </div>
                                </div>
                                <small className="text-light">Technology</small>
                            </div>
                        </div>
                        <div className="col-md-4 mt30-xs mt30-sm rightReveal">
                            <h5 className="heading-1 mb20">Quote</h5>
                            <p className="lead-sm text-light no-margin">“Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. That's because they were able to connect experiences.”</p>
                            <div className="quote-author">- Steve Jobs</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 bottomReveal">
                            <h4 className="spaced no-margin-top mb15">
                                <span className="icon-holder">1</span>
                                Idea
                            </h4>
                            <p className="no-margin-bottom">At multis se probavit. Si alia sentit, inquam, alia loquitur, numquam intel legam quid sentiat; Itaque sensibus rationem adiunxit et ratione.</p>
                        </div>
                        <div className="col-md-3 mt30-xs mt30-sm bottomReveal">
                            <h4 className="spaced no-margin-top mb15">
                                <span className="icon-holder">2</span>
                                Plan
                            </h4>
                            <p className="no-margin-bottom">At multis se probavit. Si alia sentit, inquam, alia loquitur, numquam intel legam quid sentiat; Itaque sensibus rationem adiunxit et ratione.</p>
                        </div>
                        <div className="col-md-3 mt30-xs mt30-sm bottomReveal">
                            <h4 className="spaced no-margin-top mb15">
                                <span className="icon-holder">3</span>
                                Design
                            </h4>
                            <p className="no-margin-bottom">At multis se probavit. Si alia sentit, inquam, alia loquitur, numquam intel legam quid sentiat; Itaque sensibus rationem adiunxit et ratione.</p>
                        </div>
                        <div className="col-md-3 mt30-xs mt30-sm bottomReveal">
                            <h4 className="spaced no-margin-top mb15">
                                <span className="icon-holder">4</span>
                                Execute
                            </h4>
                            <p className="no-margin-bottom">At multis se probavit. Si alia sentit, inquam, alia loquitur, numquam intel legam quid sentiat; Itaque sensibus rationem adiunxit et ratione.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="quotes" className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="icon-holder-circle pull-left mr30">
                                <span className="ion-person"/>
                            </div>
                            <h2 className="mt15">Quotes</h2>
                            <div className="carousel slide mt30" id="quote-carousel" data-ride="carousel" data-interval="5000">
                                <ol className="carousel-indicators quotes-carousel-indicators">
                                    <li data-target="#quote-carousel" data-slide-to="0" className="active" />
                                    <li data-target="#quote-carousel" data-slide-to="1" className="" />
                                    <li data-target="#quote-carousel" data-slide-to="2" className="" />
                                </ol>
                                <div className="carousel-inner">
                                    <div className="item active">
                                        <blockquote>
                                            <p className="mb20">"As Governor of my country, I have been an enemy to its enemies; I have slain the English; I have mortally opposed the English King; I have stormed and taken the towns and castles which he unjustly claimed as his own."</p>
                                            <footer>William Wallace</footer>
                                        </blockquote>
                                    </div>
                                    <div className="item">
                                        <blockquote>
                                            <p className="mb20">"As Governor of my country, I have been an enemy to its enemies; I have slain the English; I have mortally opposed the English King; I have stormed and taken the towns and castles which he unjustly claimed as his own."</p>
                                            <footer>William Wallace</footer>
                                        </blockquote>
                                    </div>
                                    <div className="item">
                                        <blockquote>
                                            <p className="mb20">"As Governor of my country, I have been an enemy to its enemies; I have slain the English; I have mortally opposed the English King; I have stormed and taken the towns and castles which he unjustly claimed as his own."</p>
                                            <footer>William Wallace</footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
  }
}
