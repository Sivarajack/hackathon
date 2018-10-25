import React, { Component } from 'react';
import { HashRouter, Route,Switch } from 'react-router-dom';
import './App.css';
import logo from './avios-logo.png';
import page from './main-page.PNG';
import Form from './login';
import Details from './Details/Details'

class App extends Component {
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this)
        this.stateb = {
            username:'',
            password:''
        }
    }
    handleSubmit(e){

        e.preventDefault();
        console.log(this.context)
    }

  render() {
    return (
        <HashRouter >
      <div className="App">
        <div id="titlebar">
            <div className="titleSpace">
            </div>
          <div id="titleContent">
            <div id="logo"></div>
            <div id="about">
                <span id="globe" className="glyphicon glyphicon-globe"></span>
              <p>Help</p>
              <p>About Avios</p>
            </div>
            <div id="login"></div>
              <Form/>
            <div id="forgottenLink">Forgotten your details?</div>
          </div>
            <div className="titleSpace">
            </div>
        </div>
        <div id="header">
            <div id="header-space"></div>
          <div id="header-content">
          <p>More</p>
          <p>Car</p>
          <p>Hotels</p>
          <p>Flights</p>
              <span class="glyphicon glyphicon-home"></span>
          </div>
        </div>
          <img id="logo-image" src={logo} alt="avios-logo"/>
          <Switch>
          <Route path="/" exact render={()=> <img id="page" src={page} alt="" />} />
              <Route path="/details" component={Details} />
              <Route path="/autobook-success" component={Details} />
          </Switch>
      </div>
        </HashRouter>
    );
  }
}

export default App;
