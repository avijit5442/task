import {useState,useEffect} from "react"
export default function UseCaptcha(){
const[data,setData]=useState(0)
useEffect(()=>{
    var array=["A","B","d","D","G","j","K","n","q","R","U","v","x","Y","z","Z"]
    var a=Math.floor(Math.random()*9);
    var b=array[(Math.floor(Math.random()*array.length))];
    var c=Math.floor(Math.random()*9);
    var d=Math.floor(Math.random()*9);
    var e=array[Math.floor(Math.random()*array.length)];
    var f=Math.floor(Math.random()*9);
    setData(`${a} ${b} ${c} ${d} ${e} ${f}`)
},[])
    return data
}