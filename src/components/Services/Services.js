import React, { Component } from 'react';

export default class Services extends Component{
	render(){
		return(
            <div>
                <section id="services" className="section-padding section-border-bottom">
                    <div className="container">
                        <div className="row mb60">
                            <div className="col-sm-12 col-md-6 col-md-offset-3 text-center">
                                <h2>Services</h2>
                                <span className="divider divider-center divider-dark"/>
                                <p className="lead-sm no-margin-bottom">At multis se probavit. Si alia sentit, inquam, alia loquitur, numquam intellegam quid sentiat; Itaque sensibus rationem.</p>
                            </div>
                        </div>
                        <div className="row mb30">
                            <div className="col-md-4 leftReveal">
                                <div className="services-box">
                                    <span className="light-icon pe-7s-monitor"/>
                                    <h4 className="spaced mt20 mb20">Web/Ui Design</h4>
                                    <p className="no-margin">At multis se probavit. Si alia sentit, inquam, alia loquitur, numquam intel legam quid sentiat; Itaque sensibus ratio nem adiunxit et ratione.</p>
                                </div>
                            </div>
                            <div className="col-md-4 mt30-xs mt30-sm topReveal">
                                <div className="services-box">
                                    <span className="light-icon pe-7s-phone"/>
                                    <h4 className="spaced mt20 mb20">App Design</h4>
                                    <p className="no-margin">At multis se probavit. Si alia sentit, inquam, alia loquitur, numquam intel legam quid sentiat; Itaque sensibus ratio nem adiunxit et ratione.</p>
                                </div>
                            </div>
                            <div className="col-md-4 mt30-xs mt30-sm rightReveal">
                                <div className="services-box">
                                    <span className="light-icon pe-7s-wine"/>
                                    <h4 className="spaced mt20 mb20">Branding</h4>
                                    <p className="no-margin">At multis se probavit. Si alia sentit, inquam, alia loquitur, numquam intel legam quid sentiat; Itaque sensibus ratio nem adiunxit et ratione.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 leftReveal">
                                <div className="services-box">
                                    <span className="light-icon pe-7s-lock"/>
                                    <h4 className="spaced mt20 mb20">Security</h4>
                                    <p className="no-margin">At multis se probavit. Si alia sentit, inquam, alia loquitur, numquam intel legam quid sentiat; Itaque sensibus ratio nem adiunxit et ratione.</p>
                                </div>
                            </div>
                            <div className="col-md-4 mt30-xs mt30-sm bottomReveal">
                                <div className="services-box">
                                    <span className="light-icon pe-7s-users"/>
                                    <h4 className="spaced mt20 mb20">Support</h4>
                                    <p className="no-margin">At multis se probavit. Si alia sentit, inquam, alia loquitur, numquam intel legam quid sentiat; Itaque sensibus ratio nem adiunxit et ratione.</p>
                                </div>
                            </div>
                            <div className="col-md-4 mt30-xs mt30-sm rightReveal">
                                <div className="services-box">
                                    <span className="light-icon pe-7s-server"/>
                                    <h4 className="spaced mt20 mb20">Hosting</h4>
                                    <p className="no-margin">At multis se probavit. Si alia sentit, inquam, alia loquitur, numquam intel legam quid sentiat; Itaque sensibus ratio nem adiunxit et ratione.</p>
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
                                    <span className="ion-ios-play-outline"/>
                                </div>
                                <p className="mt30 mb30 lead">At multis se probavit. Si alia sentit, <strong>inquam alia</strong> loquitur, numquam intellegam quid sentiat Itaque.</p>
                                <h4 className="spaced no-margin"><a href="http://vimeo.com/123123" className="popup-youtube">Play Video</a></h4>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )

    }
}
