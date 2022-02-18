import React, {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Navbarr from "../Navbar/Navbar";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {errorNotify, successNotify} from "../components/notify";
// import {useNavigate} from "react-router-dom";

const Registration = () => {

    const [user, setUser] = useState({
        name: "",
        username: "",
        password: "",
        email: "",
        date: "",
        isAuth: false,
        isLogin: false,
    });

    const btnDisabled = user.username === '' || user.password === '' || user.name === '' || user.email === '' || user.date === '';

    let navigate = useNavigate();

    const [newArray, setNewArray] = useState([]);

    // const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target
        setUser({...user, [name]: value})
    }

    const handleClick = (user ) => {
        // debugger
        console.log(user);
        axios.post("http://localhost:4000/users", user).then(data => {
                const newArr = [...newArray];
                newArr.push(data.data);
                setNewArray(newArr)
                if (data) {
                    user.isAuth = true
                    navigate(`/Login`)
                    successNotify('Registration Successful');
                }
            }
            //     // localStorage.setItem('user', JSON.stringify(data.data))
            //     // localStorage.setItem('users', JSON.stringify(newArr))
            // }
        ).catch(err => {
            errorNotify(err.response.data.message);
            // setErrorMessage(err.response.data.message);
        })

    };

    return (
        <>
            <Navbarr/>
            <div style={{marginTop: 20}}>
                <Form>
                    <Container>
                        <Row className="mb-3">
                            <Form.Group className="mb-3" controlId="formGridFullName">
                                <h1>Register</h1>
                                <Form.Label>Full Name</Form.Label>
                                <input name='name' value={user.name} type="text" onChange={handleChange}
                                       className="form-control" placeholder="Enter your name"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridUsername">
                                <Form.Label>Username</Form.Label>
                                <input name='username' value={user.username} type="text" onChange={handleChange}
                                       className="form-control" placeholder="Enter username"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <input name='password' value={user.password} type="password" onChange={handleChange}
                                       className="form-control" placeholder="Enter password"/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <input name='email' value={user.email} type="email" onChange={handleChange}
                                       className="form-control" placeholder="Enter email"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridDate">
                                <Form.Label>Date of Birth</Form.Label>
                                <input name='date' value={user.date} type="date" onChange={handleChange}
                                       className="form-control" placeholder="Enter birth date"/>
                            </Form.Group>
                        </Row>

                        <Button variant="primary" type='button' disabled={btnDisabled}
                                onClick={() => handleClick(user)}>
                            Submit
                        </Button>
                        {/*{errorMessage && (*/}
                        {/*    <h6 className="error" style={{marginTop: 15, color: 'red'}}> {errorMessage} </h6>*/}
                        {/*)}*/}
                    </Container>
                </Form>
            </div>

        </>
    )
}

export default Registration;