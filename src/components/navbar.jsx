import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import {Nav, Tab, Tabs} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Dropdown } from 'react-css-dropdown';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import Footer from './Footer';

class NavBar extends Component {
    constructor(props) {

        super()
        this.state = {
            // Takes active tab from props if it is defined there
            activeDropMenu:  1,
            navTap: 1,
            M : Home
        };
        // Bind the dropdownSelect function already here (not in the render function)
        this.dropdownSelect = this.dropdownSelect.bind(this);
        this.navSelect = this.navSelect.bind(this);

    }

    dropdownSelect(selectedTab) {
        this.setState({
            activeDropMenu: selectedTab
        });
        alert("You prefer browsing internet with " + selectedTab)
    };

    navSelect(selectedTab) {
        this.setState({
            navTap: selectedTab
        });

        if(selectedTab == 1){
          this.setState({
              M : Home
          });
        }else if(selectedTab == 2){
          this.setState({
              M : Login
          });
        }else if(selectedTab == 3){
          this.setState({
              M : SignUp
          });
        }

    };
    render() {
        return (
          <React.Fragment>
            <Navbar fill variant="tabs" collapseOnSelect expand="lg" bg="dark" variant="dark"
            activeKey={this.state.navTap} onSelect={this.navSelect}>
                <Navbar.Brand href="#home" >Alex Mall Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link class="active" href="#home" eventKey={1} title="Tab 1"
                        ><i class="fa fa-fw fa-home" ></i> Home</Nav.Link>
                        <NavDropdown  class="fa fa-fw fa-book" activeKey={this.state.activeDropMenu} onSelect={this.dropdownSelect}
                            title="Categories" type="hj" id="browsers2" href="#Categories-dropdown">
                            <NavDropdown.Item  eventKey={1} title="Tab 1" href="#action/4.1" >Shoes</NavDropdown.Item>
                            <NavDropdown.Item eventKey={2} title="Tab 2" href="#action/4.2" >Kids</NavDropdown.Item>
                            <NavDropdown.Item  eventKey={3} title="Tab 3" href="#action/4.3">Women</NavDropdown.Item>
                            <NavDropdown.Item eventKey={4} title="Tab 4" href="#action/4.4">Men</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey={5} title="Tab 5" href="#action/4.5">All</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav inline>
                        <Nav.Link href="#Login" eventKey={2} title="Tab 2"
                        ><i class="fa fa-fw fa-sign-in" ></i> Login</Nav.Link>
                        <Nav.Link href="#SignUp" eventKey={3} title="Tab 3"
                        ><i class="fa fa-fw fa-user" ></i> SignUp</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <React.StrictMode>
            <this.state.M/>
            <Footer/>
            </React.StrictMode>
            </React.Fragment>

        );
    }

}
export default NavBar;
