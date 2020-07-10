import React from "react";
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from "react-bootstrap";

class NavbarComponent extends React.Component {

    render() {
        return (
            <Navbar bg="primary" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}

export default NavbarComponent
