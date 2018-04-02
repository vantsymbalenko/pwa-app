import React, { Component } from 'react';

export default class Pricing extends Component{
  render(){
    return(
        <div>
            <section id="pricing" className="section-padding section-border-bottom">
                <div className="container">
                    <div className="row mb60">
                        <div className="col-xs-12 text-center">
                            <h2>Pricing</h2>
                            <span className="divider divider-center divider-dark no-margin-bottom"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-4 leftReveal">
                            <div className="pricing-box">
                                <h4 className="no-margin spaced">Regular</h4>
                                <span className="divider divider-center mt40 mb30"/>
                                <h1 className="rotateLeftReveal">
                                    <span className="currency">$</span>29<span className="plan-time">/ Month</span>
                                </h1>
                                <span className="divider divider-center mt30 mb40"/>
                                <ul className="list-pricing list-unstyled">
                                    <li><em>Premium Support</em></li>
                                    <li>25 Domains</li>
                                    <li>CMS</li>
                                    <li>1 Month License</li>
                                    <li><strong>Free</strong> Squirrel</li>
                                </ul>
                                <a className="btn btn-primary-light btn-lg"  role="button"><span className="ion-ios-arrow-right mr15"/> Register</a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 mt30-xs">
                            <div className="pricing-box featured bottomReveal">
                                <h4 className="no-margin spaced">Premium</h4>
                                <span className="divider divider-center mt40 mb30"/>
                                <h1 className="rotateLeftReveal">
                                    <span className="currency">$</span>79<span className="plan-time">/ Month</span>
                                </h1>
                                <span className="divider divider-center mt30 mb40"/>
                                <ul className="list-pricing list-unstyled">
                                    <li><em>Premium Support</em></li>
                                    <li>25 Domains</li>
                                    <li>CMS</li>
                                    <li>1 Month License</li>
                                    <li><strong>Free</strong> Squirrel</li>
                                </ul>
                                <a className="btn btn-primary btn-lg"  role="button"><span className="ion-ios-arrow-right mr15"/> Register</a>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 mt30-xs mt30-sm">
                            <div className="pricing-box rightReveal">
                                <h4 className="no-margin spaced">The Baby</h4>
                                <span className="divider divider-center mt40 mb30"/>
                                <h1 className="rotateLeftReveal">
                                    <span className="currency">$</span>19<span className="plan-time">/ Month</span>
                                </h1>
                                <span className="divider divider-center mt30 mb40"/>
                                <ul className="list-pricing list-unstyled">
                                    <li><em>Premium Support</em></li>
                                    <li>25 Domains</li>
                                    <li>CMS</li>
                                    <li>1 Month License</li>
                                    <li><strong>Free</strong> Squirrel</li>
                                </ul>
                                <a className="btn btn-primary-light btn-lg"  role="button"><span className="ion-ios-arrow-right mr15"/> Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="video-cta" className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center rotateLeftReveal">
                            <div className="icon-holder-circle">
                                <span className="ion-android-people"/>
                            </div>
                            <p className="mt30 no-margin-bottom lead">We offer <strong>full support</strong> regardless what plan you have, if you recieved a free squirrel or not.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
  }
}

