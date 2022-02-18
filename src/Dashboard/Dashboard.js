import React, {useEffect, useState} from "react";
import Navbarr from "../Navbar/Navbar";
import {Container} from "react-bootstrap";
import axios from "axios";

const Dashboard = () => {

    // const value = axios.get("http://localhost:4000/users").then(data => {
    //         console.log(data)
    //     }
    // )          i
    //
    // let userData = localStorage.getItem('data');
    // userData = JSON.parse(userData)
    // console.log('User data',userData)

    // const userName = axios.get("http://localhost:4000/users").then(res => {
    //         console.log('response ===>', res.data);
    //         setValue(res.data.name);
    //     }
    // )
    // console.log(userName)

    const [userData, setUserData] = useState([])

    const apiCall = () => {axios.get("http://localhost:4000/users").then(res => {
        console.log('response ===>', res.data);
        // setGetList(res.data);
        const getUser = res.data
        setUserData(getUser)
        // localStorage.setItem('userList', JSON.stringify(res.data))
    })}

    useEffect(()=> apiCall(), [])


    // let data = localStorage.getItem('userList');
    // data = JSON.parse(data)
    // console.log(data)

    return (
        <>
            <Navbarr/>
            <Container>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Handle</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        userData === null || undefined ? 'No data'
                            :
                            (userData.sort(function(a,b){if(a.name < b.name) {return -1}}).filter(value => value.isLogin === true).map((val, index) => {
                                return (
                                    <tr key={index}>
                                        <>
                                            <td>{val.name}</td>
                                            <td>{val.email}</td>
                                            <td>{val.date}</td>
                                        </>
                                    </tr>
                                )
                            }))
                    }
                    </tbody>
                </table>
            </Container>
        </>
    )
}

export default Dashboard;