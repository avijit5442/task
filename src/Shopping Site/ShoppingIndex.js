import { BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Login from "../components/Login"
import ShoppingArea from "../components/ShoppingArea"
import Electronics from "./Electronics"
import Fashion from "./Fashion"
import Grocery from "./Grocery"

export default function ShoppingIndex() {
  return ( 
    <div className="container">
      <BrowserRouter>
        <ul className="list-unstyled">
        <li><Link to="/Electronics">Electronics</Link></li>
        <li><Link to="/Fashion">Fashion</Link></li>
        <li><Link to="/Grocery">Grocery</Link></li>
        <li><Link to="/ShoppingArea">Shop Home</Link></li>
        </ul>
        <hr/>
        <Routes>
            <Route path="/Electronics" element={<Electronics/>}></Route>
            <Route path="/Fashion" element={<Fashion/>}></Route>
            <Route path="/Grocery" element={<Grocery/>}></Route>
            <Route path="/ShoppingArea" element={<ShoppingArea/>}></Route>
            <Route path="/" element={
              <div>
              <h2>Login to continue</h2>
              <Login/>
              </div>
            }></Route>
            
            <Route path="*" element={
              <code>Requested Page Not Available</code>
            }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}