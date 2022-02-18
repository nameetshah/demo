import React from "react";
import Login from "./Login/Login";
import Navbarr from "./Navbar/Navbar";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Registration from "./Registration/Registration";
import Dashboard from "./Dashboard/Dashboard";
import {ToastContainer} from "react-toastify";
import Home from "./Home/Home";
import LoggedInUsers from "./LoggedInUsers/LoggedInUsers";

const myData = localStorage.getItem('user');
const user = JSON.parse(myData)

function App() {

    return (
        <div className="App">
            {/*<Navbarr />*/}
            <BrowserRouter>
                <ToastContainer/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    {/*<Route path="/" element={<Home/>}/>*/}
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/Registration" element={<Registration/>}/>

                    {/*{*/}
                    {/*    user.isAuth &&  <Route path="/dashboard" element={<Dashboard/>}/>*/}
                    {/*}*/}

                    <Route path="/dashboard" element={
                        <ProtectedRoute redirectTo="/Login">
                            <Dashboard/>
                        </ProtectedRoute>
                    }/>
                    <Route path="/loggedInUsers" element={
                        <ProtectedRoute redirectTo="/Login">
                            <LoggedInUsers/>
                        </ProtectedRoute>
                    }/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

const ProtectedRoute = ({children, redirectTo}) => {
    return user && user.isAuth ? <Navigate to={redirectTo}/> : children;
}

// const ProtectedRoutes = ({children, redirectTo}) => {
//     return user && user.isLogin === true ? <Navigate to={redirectTo} /> : children;
// }

export default App;
