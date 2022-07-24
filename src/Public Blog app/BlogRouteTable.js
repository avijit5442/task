import {BrowserRouter,Routes,Route} from "react-router-dom"
import Blogindex from "./BlogIndex"
export default function BlogRouteTable(){
    return(
        <>
         <BrowserRouter>
         <Routes>
            <Route path="/" element={<Blogindex/>}/>
         </Routes>
         </BrowserRouter>
        </>
    )
}