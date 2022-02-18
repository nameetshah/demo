import React, {useEffect, useState} from "react";
// import
import {Card} from "react-bootstrap";
import Navbarr from "../Navbar/Navbar";
import axios from "axios";

const Home = () => {

    const [userData, setUserData] = useState([])

    const apiCall = () => {
        axios.get("http://localhost:4000/users").then(res => {
            console.log('response ===>', res.data);
            const getUser = res.data
            setUserData(getUser)
        })
    }

    useEffect(() => apiCall(), [])

    return (
        <>
            <Navbarr/>
            <div className='container' style={{display: 'flex', justifyContent: "space-evenly", marginTop: 15, alignItems: "center"}}>
                <Card
                    border='dark'
                    style={{width: '18rem'}}
                    className="mb-2"
                >
                    <Card.Header style={{textAlign: "center"}}>Total users</Card.Header>
                    <Card.Body>
                        <h1 style={{textAlign: "center"}}>
                            {userData.filter(v => v).length}
                        </h1>
                    </Card.Body>
                </Card>

                <Card
                    border='dark'
                    style={{width: '18rem'}}
                    className="mb-2"
                >
                    <Card.Header style={{textAlign: "center"}}>Logged In Users</Card.Header>
                    <Card.Body>
                        <h1 style={{textAlign: "center"}}>
                            {userData.filter(v => v.isLogin === true).length}
                        </h1>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default Home;