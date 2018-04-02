import React, { Component } from 'react';

import imgSrcTeam1 from '../../img/team-1.jpg';
import imgSrcTeam2 from '../../img/team-2.jpg';
import imgSrcTeam3 from '../../img/team-3.jpg';
import imgSrcTeam4 from '../../img/team-4.jpg';

export default class Team extends Component{
  render(){
    return (
        <section id="team" className="section-padding section-border-bottom">
            <div className="container">
                <div className="row mb60">
                    <div className="col-sm-12 col-md-6 col-md-offset-3 text-center">
                        <h2>The Team</h2>
                        <span className="no-margin-bottom divider divider-center divider-dark"/>
                    </div>
                </div>
                <div className="row mb40">
                    <div className="col-sm-6 col-md-3 text-center topReveal">
                        <div className="grid-item">
                            <div className="overlay">
                                <div className="inner-overlay">
                                    <span>Plans site design by clarifying goals; designing functionality.</span>
                                </div>
                            </div>
                            <img src={imgSrcTeam1} className="img-responsive" alt="..." />
                        </div>
                        <h4 className="mb5 spaced">Louis Devin</h4>
                        <p className="spaced text-light no-margin-bottom"><em>Designer</em></p>
                    </div>
                    <div className="col-sm-6 col-md-3 mt30-xs text-center bottomReveal">
                        <div className="grid-item">
                            <div className="overlay">
                                <div className="inner-overlay">
                                    <span>Develops site by categorizing content; funneling traffic through content.</span>
                                </div>
                            </div>
                            <img src={imgSrcTeam2} className="img-responsive" alt="..." />
                        </div>
                        <h4 className="mb5 spaced">John Devin</h4>
                        <p className="spaced text-light no-margin-bottom"><em>Designer</em></p>
                    </div>
                    <div className="col-sm-6 col-md-3 mt30-xs mt30-sm text-center topReveal">
                        <div className="grid-item">
                            <div className="overlay">
                                <div className="inner-overlay">
                                    <span>Plans site design by clarifying goals; designing functionality.</span>
                                </div>
                            </div>
                            <img src={imgSrcTeam3} className="img-responsive" alt="..." />
                        </div>
                        <h4 className="mb5 spaced">Tom Ghost</h4>
                        <p className="spaced text-light no-margin-bottom"><em>Designer</em></p>
                    </div>
                    <div className="col-sm-6 col-md-3 mt30-xs mt30-sm text-center bottomReveal">
                        <div className="grid-item">
                            <div className="overlay">
                                <div className="inner-overlay">
                                    <span>Provides information by collecting, analyzing, and summarizing data and trends.</span>
                                </div>
                            </div>
                            <img src={imgSrcTeam4} className="img-responsive" alt="..." />
                        </div>
                        <h4 className="mb5 spaced">Don Rolla</h4>
                        <p className="spaced text-light no-margin-bottom"><em>Designer</em></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center">
                        <span className="no-margin-top mb40 divider divider-center divider-dark"/>
                        <p className="no-margin-bottom lead">When there is teamwork and collaboration, wonderful things can be achieved.</p>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}