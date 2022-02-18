import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import Login from "../Login/Login";

const Navbarr = () => {

    const myDataa = localStorage.getItem('user');
    const user = JSON.parse(myDataa)

    const myDatass = localStorage.getItem('data');
    const myData = JSON.parse(myDatass)

    let navigate = useNavigate();

    function redirectToLogin() {
        navigate(`/Login`)
    }

    function redirectToRegistration() {
        navigate(`/Registration`)
    }

    function redirectToDashboard() {
        navigate(`/dashboard`)
    }

    function redirectToHome() {
        navigate(`/`)
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand onClick={redirectToHome} style={{cursor: 'pointer'}}>My App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={redirectToRegistration}>Registration</Nav.Link>
                            <Nav.Link onClick={redirectToLogin}>Login</Nav.Link>
                            {
                                user && user.isAuth &&
                                <Nav.Link onClick={redirectToDashboard}>Dashboard</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navbarr;