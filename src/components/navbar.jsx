import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import {Nav, Tab, Tabs} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Dropdown } from 'react-css-dropdown';
import SignUp from './SignUp';
import Login from './Login';

class NavBar extends Component {
    constructor(props) {
        super()
        this.state = {
            // Takes active tab from props if it is defined there
            activeTab: props.activeTab || 1,
            activeTab2: props.activeTab2 || 1

        };
        // Bind the handleSelect function already here (not in the render function)
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSelect2 = this.handleSelect2.bind(this);

    }

    handleSelect(selectedTab) {
        // The active tab must be set into the state so that
        // the Tabs component knows about the change and re-renders.
        this.setState({
            activeTab: selectedTab
        });
        alert("You prefer browsing internet with " + selectedTab)
    };

    handleSelect2(selectedTab) {
        // The active tab must be set into the state so that
        // the Tabs component knows about the change and re-renders.
        this.setState({
            activeTab2: selectedTab
        });
        if(selectedTab== 3){
          //alert("You prefer browsing internet with " + selectedTab);
          window.location.href = SignUp;
          this.props.navigation.navigate('SignUp')

        }
    };
    render() {
        return (
            <Navbar fill variant="tabs" collapseOnSelect expand="lg" bg="dark" variant="dark"
            activeKey={this.state.activeTab2} onSelect={this.handleSelect2}>
                <Navbar.Brand href="#home" >Alex Mall Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link class="active" href="#home" eventKey={1} title="Tab 1"
                        ><i class="fa fa-fw fa-home" eventKey={1} title="Tab 1"></i> Home</Nav.Link>
                        <NavDropdown  class="fa fa-fw fa-book" activeKey={this.state.activeTab} onSelect={this.handleSelect}
                            title="Categories" type="hj" id="browsers2" href="#Categories-dropdown">
                            <NavDropdown.Item  eventKey={1} title="Tab 1" href="#action/4.1" >Shoes</NavDropdown.Item>
                            <NavDropdown.Item eventKey={2} title="Tab 2" href="#action/4.2" >Kids</NavDropdown.Item>
                            <NavDropdown.Item  eventKey={3} title="Tab 3" href="#action/4.3">Women</NavDropdown.Item>
                            <NavDropdown.Item eventKey={4} title="Tab 4" href="#action/4.4">Men</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/4.5">All</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav inline>
                        <Nav.Link href="#Login" eventKey={2} title="Tab 2"
                        ><i class="fa fa-fw fa-sign-in" eventKey={2} title="Tab 2"></i> Login</Nav.Link>
                        <Nav.Link href="#SignUp" eventKey={3} title="Tab 3"
                        ><i class="fa fa-fw fa-user" eventKey={3} title="Tab 3"></i> SignUp</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }

}
export default NavBar;
