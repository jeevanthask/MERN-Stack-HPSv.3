import React from "react";
import {Navbar,Nav} from "react-bootstrap";

class NavbarComponent extends React.Component {

    render() {
        return (
            <Navbar bg="warning" expand="lg">
                <Navbar.Brand href="#home">Health Prediction System</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

            </Navbar>
        )
    }

}

export default NavbarComponent
