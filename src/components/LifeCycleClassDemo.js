import React from 'react'
class SuccessComponent extends React.Component {
componentWillMount(){
    alert("Success-Will-Mount")
}
componentDidMount(){
    alert("Success-Mounted")
} 
  render() {
    return (
      <div>
        Authenication successful...
      </div>
    )
  }
}
class ErrorComponent extends React.Component {
    render() {
      return (
        <div>
          User Not Found
        </div>
      )
    }
  }
export default class LifeCycleClassDemo extends React.Component {
    constructor(props){
          super(props);
          this.state={
            UserDetails:{
                UserName:"Avijit",
                Password:"12345"
            },
            FormDetails:{
              UserName:'',
              Password:''
            },
            Msg:"",
        }
    }
    handleOnUserChange(e){
        this.setState({
         FormDetails:{
             UserName:e.target.value,
             Password:this.state.FormDetails.Password
         }
        })
       }
    handleOnPwdChange(e){
        this.setState({
            FormDetails:{
                UserName:this.state.FormDetails.UserName,
                Password:e.target.value
            }
        })
    }
    handleOnSubmit(){
console.log(this.state.FormDetails)
        if(this.state.UserDetails.UserName==this.state.FormDetails.UserName&&this.state.UserDetails.Password==this.state.FormDetails.Password){
            this.setState({Msg:<SuccessComponent/>})
        }
        else{
          this.setState({Msg:<ErrorComponent/>}) 
        }    
        }
  render(
  ) {
    return (
      <div className="container-fluid">
          <dl>
            <dt>UserName</dt>
            <dd><input type="text" onChange={this.handleOnUserChange.bind(this)}/></dd>
            <dt>Password</dt>
            <dd><input type="password" onChange={this.handleOnPwdChange.bind(this)}/></dd>
            <button type="submit" onClick={this.handleOnSubmit.bind(this)}>Register</button>
            <div>{this.state.Msg}</div>
          </dl>
      </div>
    )
  }
}
