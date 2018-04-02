import React from 'react';

export const Footer = () => {
    const date = new Date().getFullYear();
    return(
        <div>
            <section id="contact-information">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 text-center leftReveal">
                            <span className="dark-icon mb5 pe-7s-home" />
                            <h5 className="no-margin-bottom spaced">3H Maksimovicha Street, Kyiv, Ukraine</h5>
                        </div>

                        <div className="col-sm-4 mt30-xs text-center bottomReveal">
                            <span className="dark-icon mb5 pe-7s-phone"/>
                            <h5 className="no-margin-bottom spaced">+(380) 930 51 39 42</h5>
                        </div>

                        <div className="col-sm-4 mt30-xs text-center topReveal">
                            <span className="dark-icon mb5 pe-7s-plug"/>
                            <h5 className="no-margin-bottom spaced">contact@springsapps.com</h5>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="page-footer">
                <div className="container">

                    <div className="row">
                        <div className="col-md-12 text-center">
                            &copy; {date} <a >Springs</a>. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};