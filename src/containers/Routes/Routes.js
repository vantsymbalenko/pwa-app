import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import Loadable from 'react-loadable';

import Home from '../../components/Home/Home';
import HomeImageSlider  from '../../components/Home/HomeImageSlider';
import Services  from '../../components/Services/Services';
import About  from '../../components/Pages/About';
import Pricing  from '../../components/Pages/Pricing';
import Team  from '../../components/Team/Team';
import Contacts from '../../components/Contacts/Contacts';
// import { Loader } from '../../components/Loader/Loader';

// const AsyncHome = Loadable({
//     loader : () => import("../../components/Home/Home"),
//     loading : Loader,
//     timeout: 10000
// });
//
// const AsyncServices = Loadable({
//     loader : () => import("../../components/Services/Services"),
//     loading : () => (<Loader/>)
// });

export default class Routes extends Component {
    // componentDidMount(){
    //     window.Royal_Preloader.config({
    //         mode:           'number',
    //         showProgress:   false,
    //         background:     '#fff'
    //     });
    // }
    render(){
        return(
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route path={"/home-image-slider"} component={HomeImageSlider}/>
                <Route path={"/services"} component={Services}/>
                <Route path={"/page-about"} component={About}/>
                <Route path={"/page-pricing"} component={Pricing}/>
                <Route path={"/team"} component={Team}/>
                <Route path={"/contacts"} component={Contacts}/>
            </Switch>
        );
    }
}
