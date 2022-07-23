
import React,{ useState,useEffect,useContext } from 'react'
var createUserContext=React.createContext(null)
export default function UserDetails() {
const [user,setUser]=useState({

    Name:'',
    Password:'',
})
const [userClick,setUserClick]=useState({
    Name:'',
    Password:'',
})
    function handleUser(e){
        setUser({Name:e.target.value,
                 Password:user.Password})
    }
    function handlePwd(e){
        setUser({Name:user.Password,
                 Password:e.target.value})
    }
    function submit(){
        setUserClick({
            Name:user.Name,
            Password:user.Password
        })
    }
  return (
    <createUserContext.Provider value={userClick}>
    <div>UserDetails
        <dl className='container'>
            <dt>UserName:</dt>
            <dd><input type="text" onChange={handleUser}/></dd>
            <dt>Password:</dt>
            <dd><input type="password" onChange={handlePwd}/></dd>
            <button className='btn btn-success' onClick={submit}>Sign In</button>
        </dl>
        <ShowDetails/>
    </div>
    </createUserContext.Provider>
  )
}


function ShowDetails() {
   var users=useContext(createUserContext)
  return (
    <div className="container">
       UserName: {users.Name}    <br/>
       Password: {users.Password}
    </div>
  )
}

