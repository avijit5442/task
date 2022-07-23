import React from 'react';
export default class OneWayBinding extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:"Rich Dad poor Dad",
            author:"Robert Kiyosaki",
            available:false
        }
    }
    render(){
     return(
        <>
        <p>The book "{this.state.title}" was written by {this.state.author} is currently {this.state.available==true?"Available":"Out of stock"}</p>

        </>
     )   
    }
        
    
}