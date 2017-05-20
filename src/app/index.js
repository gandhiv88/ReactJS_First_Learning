import React from "react";
import { render } from "react-dom";

import { Header } from "./Components/Header";
import { Home } from "./Components/Home";

class MyApp extends React.Component {
    render(){
        return (
          <div className="container">
              <div className="row">
                  <div className="col-xs-10 col-xs-offset-5">
                      <Header/>
                  </div>
              </div>
              <div className="row">
                  <div className="col-xs-10 col-xs-offset-5">
                      <Home/>
                  </div>
              </div>
          </div>
        );
    }
}

render(<MyApp/>,window.document.getElementById("app"));