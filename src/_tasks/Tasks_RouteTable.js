import { BrowserRouter,Routes,Route } from "react-router-dom";
import TasksMainPage from "./TasksMainPage";
import TasksLogin from "./TasksLogin";
import TasksSignUp from "./TasksSignUp";
import TasksDashboard from "./TasksDashboard";

export default function Tasks_RouteTable(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<TasksMainPage/>}></Route>
            <Route path="/mainpage" element={<TasksMainPage/>}></Route>
            <Route path="/login" element={<TasksLogin/>}></Route>
            <Route path="/signup" element={<TasksSignUp/>}></Route>
            <Route path="/dashboard" element={<TasksDashboard/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}