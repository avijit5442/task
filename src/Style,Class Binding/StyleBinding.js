import { useState } from "react"
export default function StyleBinding (){
const[theme,setTheme]=useState({})
    
    function handleModeChange(e){
        if(e.target.checked){
            setTheme({color:'white',
                     backgroundColor:'black'})
        }
        else{
            setTheme({color:'black',
                     backgroundColor:'white'})
        }
    }

        return(
            <div className="container">
                <div style={theme}>
                <div className="form-switch">
                    
                   <input onChange={handleModeChange} type="checkbox" className="form-check-input"/> Dark Mode
                    
                </div>
                    UserName:<input type="text" className="form-input"/>
                    <br/>
                    Password:<input type="password" className="form-input"/>
                    <br/>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </div>
        )
    
}
/*Style Binding with class component is not working ?
import React from "react"
export default class StyleBinding extends React.Component{
    constructor(props){
        super(props)
        this.state={theme:{}}
       }
    
    handleModeChange(e){
        if(e.target.checked==true){
            this.Setstate({color:'white',
                     backgroundColor:'black'})
        }
        else{
            this.Setstate({color:'black',
                     backgroundColor:'white'})
        }
    }
render(){
    return(
            <div className="container">
                <div style={this.state.theme}>
                <div className="form-switch">
                    
                   <input onChange={this.handleModeChange.bind(this)} type="checkbox" className="form-check-input"/> Dark Mode
                    
                </div>
                    UserName:<input type="text" className="form-input"/>
                    <br/>
                    Password:<input type="password" className="form-input"/>
                    <br/>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </div>
        )
}
        
    
}
*/