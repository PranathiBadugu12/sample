import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import LoginComponent from './LoginComponent'
import HomePageComponent from './HomePageComponent'
import '../css/LoginSignUp.css'
import '../config'
export default class NavbarComponent extends Component {
  
   render() {
      return (
         <Router>
           {/* Declare the nav bar here */}
         <div className="App">
           <nav className="navbar navbar-expand-lg navbar-light">
             <div className="container">
        
               <Link className="navbar-brand" to={"/HomePageComponent"}>TrAVel</Link>
               <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                 <ul className="navbar-nav ml-auto">
                   <li className="nav-item">
                     <Link className="nav-link boxed" to={"/sign-in"}>{global.config}</Link>
                   </li>&nbsp;
                   
                 </ul>
               </div>
             </div>
           </nav>
         
           <div className="auth-wrapper">
             <div className="auth-inner">
               <Switch>
                 {/* Declare the paths to components here */}
                 <Route path="/sign-in" component={LoginComponent} />
                 <Route path="/homePage" component={HomePageComponent} />
               </Switch>
             </div>
           </div>
           
         </div></Router>
      )
   }
};
