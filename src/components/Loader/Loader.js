import React, { Component } from 'react';
import '../../css/royal_preloader.css';

// export default class Loader extends Component{
//     componentWillMount(){
//         window.Royal_Preloader.config({
//             mode:           'number',
//             showProgress:   false,
//             background:     '#fff'
//         });
//     }
//     render(){
//         return(
//             <div id={"royal_preloader"} />
//         )
//     }
// }
export const Loader = ({isLoading, error}) => {
    console.log("isLoading", isLoading);
    // Handle the loading state
    if (isLoading) {
        return <div id="royal_preloader">Loading...</div>;
    }
    // Handle the error state
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
};