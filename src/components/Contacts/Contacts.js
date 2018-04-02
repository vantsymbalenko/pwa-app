import React, { Component } from 'react';

export default class Contacts extends Component{
    componentDidMount(){
        let script = document.createElement("script");
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyArLNT3t4qsJEBmR0R9P_6ueLIQz0Jvt1M&callback=initMap";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

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
                    i.find(".active").removeClass("active");
                    window.$(this).addClass("active");
                })
            });
        });
    }
    render(){
        return(
            <div>
                <div id="map" />
                <section id="contact" className="section-padding section-border-top">
                    <div className="container">
                        <div className="row mb40">
                            <div className="col-xs-12 text-center">
                                <h2>Contact</h2>
                                <span className="divider divider-center divider-dark no-margin-bottom"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                                <form data-toggle="validator" id="contactForm" name="contactForm">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <div className="controls">
                                                    <input className="form-control" data-error="This section is required." id="msg_subject" placeholder="Subject *" required="" type="text" />
                                                    <div className="help-block with-errors" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <div className="controls">
                                                    <input className="form-control" data-error="This section is required." id="name" placeholder="Your Name *" required="" type="text" />
                                                    <div className="help-block with-errors" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <div className="controls">
                                                    <input className="email form-control" data-error="This section is required." id="email" placeholder="Email *" required="" type="email" />
                                                    <div className="help-block with-errors" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <div className="controls">
                                                    <textarea className="form-control" data-error="This section is required." id="message" placeholder="Message *" required="" rows="5" />
                                                    <div className="help-block with-errors" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 text-center">
                                            <div id="msgSubmit" className="h4 hidden" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 text-center">
                                            <button type="submit" id="submit" className="btn btn-primary btn-lg">Send</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
} 