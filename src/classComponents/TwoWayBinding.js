import React from "react";
export default class TwoWayBinding extends React.Component{
    constructor(props) {
        super(props);
            this.state = {
            username:"John"
            }
    }
    handleUserChange(e){
          this.setState({username:e.target.value})
    }
    render(){
        return(
            <div className="container">
            <input type="text" onChange={this.handleUserChange.bind(this)}></input>
            <output>Hello {this.state.username}</output>
            </div>
        )
    }
}