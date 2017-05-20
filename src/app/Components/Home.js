import  React  from "react";

export class Home extends React.Component {
    render(){
        let content = "";
        if(true){
            content = <p>Mona's work is mokka work</p>;
        }
        return(
            <div className="container">
                <p> This is a new component</p>
                {content}
            </div>
        );
    }
}