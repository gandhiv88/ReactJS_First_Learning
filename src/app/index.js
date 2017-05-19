import React from "react";
import { render } from "react-dom";

class MyApp extends React.Component {
    render(){
        return (
          <div className="container">
              <div className="row">
                  <div className="col-xs-10 col-xs-offset-5">
                      <h1> Hello Mona!</h1>
                  </div>
              </div>
          </div>
        );
    }
}

render(<MyApp/>,window.document.getElementById("app"));