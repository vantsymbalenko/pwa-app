import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import Routes from './containers/Routes/Routes';

import './css/bootstrap.min.css';
import './css/style.css';
import './css/ionicons.min.css';
import './css/magnific-popup.css';
import './css/pe-icon-7-stroke.css';

class App extends Component {

    componentWillMount(){
        document.body.classList.add("body-static-navbar");
    }

    render() {
        return (
            <div>
                <Header />
                <Routes />
                <Footer />
            </div>
        );
    }
}
export default withRouter(App);
