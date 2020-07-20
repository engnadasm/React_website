import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';

class NavBar extends Component {
    render() {
        return (
            <React.Fragment >
                <Navbar fill variant="tabs" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Alex Mall Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Categories" id="Categories-dropdown">
                                <NavDropdown.Item href="#action/3.1">Shoes</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Kids</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Women</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Men</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">another</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        <Form inline>
                            <Nav.Link href="#Login">Login</Nav.Link>
                            <Nav.Link href="#SignUp">SignUp</Nav.Link>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}
export default NavBar;
