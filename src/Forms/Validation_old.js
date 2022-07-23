import { useState } from "react"
export default function Validation_old(){
const[userMsg,setUserMsg] =useState()
const[capsStaus,setCapsStatus]=useState()
const[shiftStatus,setShiftStatus]=useState()
const[cityStatus,setCityStatus]=useState()
const[pwdMsg,setPwdMsg]=useState()
const[userDetails,setuserDetails]=useState({
    UserID:"",Password:'',City:''
})
    function handleChangeName(e){
           if((e.target.value).length==0){
            setUserMsg(true)
           }
           else{
            setUserMsg(false)
           }
           setuserDetails({
            UserID:e.target.value,
            Password:userDetails.Password,
            City:userDetails.City
           })
    }
    function handleVerifyCapsLock(e){
    if(e.which>=65&&e.which<=90){
        setCapsStatus(true)
    }
    else{
        setCapsStatus(false)
    }
    }
    function handleVerifyShiftPress(e){
        if(e.shiftKey ==true){
             setShiftStatus("Shift key was pressed")
        }
        else{
            setShiftStatus("")
        }

    }

    function handleHidePwdMsg(){
        setCapsStatus(false)
    }
    function handleChangeCity(e){
        if(e.target.value=="Notcity"){
            setCityStatus(true)
        }
        else{
            setCityStatus(false)
        }
    }
    function handlePwdChange(e){
        if(e.target.value.match(/(?=.*[A-Z])\w{4,10}/)){
             setPwdMsg("Strong Password")
             setPwdMsg.style.color("green")
        }

       else if(e.target.value.length==0){
        setPwdMsg("Poor Password")
        }
         setuserDetails({
         UserID:userDetails.UserID,
         Password:e.target.value,
         City:userDetails.City
         })
    }
    function submitData(){
      alert(JSON.stringify(userDetails)) 
    }
    return(
        <div className="container">
                    <label>UserName</label>
                    <span><input onChange={handleChangeName} onInput={handleVerifyShiftPress}type="text" name="userName"/></span>
                    <span className={(userMsg==true)?"d-block text-danger":"d-none"}>Please Enter UserName</span>
                    <span>{shiftStatus}</span>
            <br/>
            <label>Password</label>
                  <input onKeyPress={handleVerifyCapsLock} onBlur={handleHidePwdMsg}
                     onKeyUp={handlePwdChange}  type="password" name="pwd"/> 
                  <span>{pwdMsg}</span>
            <br/>
             <div className={(capsStaus==true)?'d-block':'d-none'}><span className="bi bi-exclamation-triangle text-warning">Caps ON</span></div>
             <select onChange={handleChangeCity}>
                <option value="Notcity">Not City</option>
                <option>Kolkata</option>
                <option>Chennai</option>
                <option>Mumbai</option>
                <option>Delhi</option>
             </select>
             <span className={(cityStatus==true)?"d-block text-danger":"d-none"}>Please Choose Your City</span>
            <br/>
            <button className="text-center" type="submit" onClick={submitData}>Submit</button>
        </div>

    )
}