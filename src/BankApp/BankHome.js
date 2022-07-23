import {Link,Outlet } from "react-router-dom"
export default function BankHome(){
    return(
          <div  className="container">
            <h2 className="text-center text-success">HDFC Bank</h2>
            <h4>Online Banking</h4>
          <ul>
            <li>
                <Link to="/Personal">Personal Banking</Link>
            </li>
            <li>
                <Link to="/Corporate">Corporate Banking</Link>
            </li>
            <li>
                <Link to="/NRI">NRI Banking</Link>
            </li>
          </ul>
          <hr/>
           <div className="text-center"><Outlet/></div>
          </div>
    )
}