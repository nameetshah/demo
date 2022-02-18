import React from "react";
import {Button, Modal} from "react-bootstrap";
import axios from "axios";
import {successNotify, errorNotify} from "../components/notify";
import {useNavigate} from "react-router-dom";


const Modall = (props) => {

    let navigate = useNavigate();

    const handleClickForLogin = (e) => {
        // debugger
        e.preventDefault();
        axios.post("http://localhost:4000/auth/login", props.users).then(res => {
            console.log('Response', res.data)
            if (res) {
                navigate('/dashboard');
                successNotify('You are logged in');
            }
            console.log('isLogin===>', props.users)
        }).catch(err => {
            errorNotify(err.response.data.message);
            // setErrorMessage(err.response.data.message);
        })
    };

    const handleClickForLoggedInUsers = (e) => {
        // debugger
        e.preventDefault();
        axios.post("http://localhost:4000/auth/login", props.users).then(res => {
            console.log('Response', res.data)
            if (res) {
                navigate('/loggedInUsers');
                successNotify('Now you can see logged in users.');
            }
            console.log('isLogin===>', props.users)
        }).catch(err => {
            errorNotify(err.response.data.message);
            // setErrorMessage(err.response.data.message);
        })
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Login Options
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{display: "flex", justifyContent: 'space-evenly'}}>
                    <Button variant='secondary' onClick={handleClickForLogin}>Login</Button>{' '}
                    <Button variant='dark' onClick={handleClickForLoggedInUsers}>Logged In Users</Button>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='danger' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Modall;