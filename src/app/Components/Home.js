import  React  from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {

    constructor(props){
        super();
        this.state ={
            age : props.user.age,
            msg : props.msg
        };
    }

    makeMeOlder(){
        this.setState({
                age : this.state.age + 1
        });
    }

    resetMyAge(){
        this.setState({
           age: this.props.user.age
        });
    }

    onGreet(){
        this.props.greet(this.props.user.name);
    }

    changeMessageValue(event){
        this.props.msgChange(event.target.value);
    }
    render(){
        return(
            <div className="container">
                <h4>User name is {this.props.user.name} and {(this.props.user.gender == "M") ? "His" : "Her"} age is {this.state.age}</h4>
                <h2>{this.props.user.name}'s Hobbies are</h2>
                <ul>
                    {this.props.user.hobbies.map((hobby,i) => <li key={i}> {hobby}</li>)}
                </ul>
                {this.props.children}
                <br/><br/>
                <button onClick={() => {this.makeMeOlder()}} className="btn btn-primary">Make {this.props.user.name} older!</button>
                <button onClick={() => {this.resetMyAge()}} className="btn btn-primary col-xs-offset-1">Reset Age</button>
                <br/><br/>
                <input value = {this.props.msg} type="text" onChange={(event) => {this.changeMessageValue(event)}}/>
                <br/><br/>
                <button onClick={() => {this.onGreet()}} className="btn btn-primary">Greet!!!</button>
            </div>
        );
    }
}

Home.protoTypes = {
    user: PropTypes.object,
    children : PropTypes.element.isRequired,
    greet : PropTypes.func,
    msgChange : PropTypes.func,
    msg : PropTypes.string

};