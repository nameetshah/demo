import React, {useState} from "react";
import {Button, Container, Form, Toast} from "react-bootstrap";
import Navbarr from "../Navbar/Navbar";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Feedback from 'react-bootstrap/Feedback'
import {errorNotify, successNotify} from "../components/notify";

const Login = () => {

    // const myData = localStorage.getItem('user');
    // const user = JSON.parse(myData)

    let navigate = useNavigate();

    function redirectToRegistration() {
        navigate(`/Registration`)
    }

    const [users, setUsers] = useState({
        username: "",
        password: "",
    });

    // const [errorMessage, setErrorMessage] = useState('');

    // const [validated, setValidated] = useState(false);

    // const myData = localStorage.getItem('userList');
    // const usersss = JSON.parse(myData)
    // console.log(myData)

    const handleChange = (e) => {
        const {name, value} = e.target
        setUsers({...users, [name]: value})
    }

    // const [passwordShown, setPasswordShown] = useState(false);
    //
    // const togglePassword = () => {
    //     setPasswordShown(!passwordShown);
    // };

    const btnDisabled = users.username === '' || users.password === '';

    const handleClick = (e) => {
        // debugger
        e.preventDefault();
        axios.post("http://localhost:4000/auth/login", users).then(res => {
            console.log('Response', res.data)
            if (res) {
                navigate('/dashboard');
                successNotify('You are logged in');
            }
            console.log('isLogin===>', users)
        }).catch(err => {
            errorNotify(err.response.data.message);
            // setErrorMessage(err.response.data.message);
        })
        // setValidated(true);

    };

    return (
        <>
            <Navbarr/>
            <div style={{marginTop: 20}}>
                <Form>
                    <Container>
                        <Form.Group className="mb-3" controlId="validationCustom01">
                            <Form.Label>Username</Form.Label>
                            <input name='username' value={users.username} type="text" onChange={handleChange}
                                   className="form-control" placeholder="Your name"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <input name='password' value={users.password} type="password" onChange={handleChange}
                                   className="form-control" placeholder="Your name"/>
                            {/*<p onClick={togglePassword}>Show password</p>*/}

                        </Form.Group>
                        <>
                            <Button variant="primary" type='submit' disabled={btnDisabled} onClick={handleClick}>Login</Button>{' '}
                            <Button variant="secondary" onClick={() => redirectToRegistration()}>Registration</Button>
                        </>
                        {/*{errorMessage && (*/}
                        {/*    <h6 className="error" style={{marginTop: 15, color: 'red'}}> {errorMessage} </h6>*/}
                        {/*)}*/}
                    </Container>
                </Form>
            </div>
        </>
    )
}

export default Login;