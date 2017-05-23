import React from "react";
import { render } from "react-dom";

import { Header } from "./Components/Header";
import { Home } from "./Components/Home";

class MyApp extends React.Component {
    constructor(){
        super();
        this.state = {
          userName : "Welcome User",
            message:"Type a message"
        };
    }
    onGreet(userName){
        this.setState({
            userName: 'Welcome '+ userName
        });
    }

    onMessageChange(value){
        this.setState({
            message:value
        });
    }
    render(){
        var mona = {name:"Mona",age:24,hobbies : ["Tennis","Cooking","Painting"],gender:"F"};
        var gandhi = {name:"Gandhi", age:29,hobbies:["Tennis","Cricket","Photography"],gender:"M"};
        return (
          <div className="container">
              <div className="row">
                  <div className="col-xs-6 col-xs-offset-2">
                      <Header homeLink="Home"/>
                  </div>
              </div>
              <div className="row">
                  <div className="col-xs-6 col-xs-offset-2">
                      <h1><u><b>{this.state.userName}</b></u></h1>
                      <h2>{this.state.message}</h2>
                      <Home user = {mona} greet = {this.onGreet.bind(this)} msg = {this.state.message} msgChange = {this.onMessageChange.bind(this)}/>
                      <hr/>
                      <Home user = {gandhi} greet = {this.onGreet.bind(this)} msg = {this.state.message} msgChange = {this.onMessageChange.bind(this)}>
                      <p>Gandhi married Mona</p>
                      </Home>
                  </div>
              </div>
          </div>
        );
    }
}

render(<MyApp/>,window.document.getElementById("app"));