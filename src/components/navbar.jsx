import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import {Nav, Tab, Tabs} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Dropdown } from 'react-css-dropdown';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import Footer from './Footer';
import SearchResult from './SearchResult';
import StoreElement from "./StoreElement";

class NavBar extends Component {
    constructor(props) {

        super()
        this.state = {
            login: false,
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
            activeDropMenu: selectedTab,
            M : SearchResult
        });
      {/*  alert("SearchResult " + selectedTab)*/}
    };

    navSelect(selectedTab) {
        this.setState({
            navTap: selectedTab
        });
        alert("navTap "  + selectedTab)

        if(selectedTab == 1){
          this.setState({
              M : Home
          });
        }else if(selectedTab == 2){
                        this.onOpenModalLogin()
          this.setState({
              //M : Login

          });
        }else if(selectedTab == 3){
          this.setState({
              M : SignUp
          });
        }

    };
      onCloseModal = () => {
        this.setState({ login: false });
    };

     onOpenModalLogin = () => {
        this.setState({ login: true });
    };
    render() {
      if(!this.props.change) {
        return (
          <React.Fragment>
            <Navbar fill variant="tabs" collapseOnSelect expand="lg" bg="dark" variant="dark"
            activeKey={this.state.navTap} onSelect={this.navSelect}>
                <Navbar.Brand href="#home" >Alex Mall Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link  href="#home" eventKey={1}
                        ><i class="fa fa-fw fa-home" ></i> Home</Nav.Link>
                        <NavDropdown  class="fa fa-fw fa-book" activeKey={this.state.activeDropMenu}
                        onSelect={this.dropdownSelect} href="#Categories"
                            title="Categories">
                            <NavDropdown.Item  href="#Categories" eventKey={1} >Shoes</NavDropdown.Item>
                            <NavDropdown.Item  href="#Categories"eventKey={2} >Kids</NavDropdown.Item>
                            <NavDropdown.Item  href="#Categories" eventKey={3}>Women</NavDropdown.Item>
                            <NavDropdown.Item  href="#Categories"eventKey={4}>Men</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item  href="#Categories"eventKey={5}>All</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav inline>
                        <Nav.Link href="#Login" eventKey={2}
                        ><i class="fa fa-fw fa-sign-in" ></i> Login</Nav.Link>
                        <Nav.Link href="#SignUp" eventKey={3}
                        ><i class="fa fa-fw fa-user" ></i> SignUp</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <React.StrictMode>
            <this.state.M/>
            <Login showForm={this.state.login} onClose={this.onCloseModal}/>
            <Footer/>
            </React.StrictMode>
            </React.Fragment>
        );}
        else{
          if(this.props.change2) {
          this.state = {
              // Takes active tab from props if it is defined there
              activeDropMenu:  1,
              navTap: 1,
              M : Home
          };

          this.props = {
            change: false,
            change2: false
          };

          return(
          <React.Fragment>
          <React.StrictMode>
          <SearchResult href="#Categories"/>
          </React.StrictMode>
          </React.Fragment>);
        }
        else {
          this.state = {
              // Takes active tab from props if it is defined there
              activeDropMenu:  1,
              navTap: 1,
              M : Home
          };

          this.props = {
            change: false
          };

          return(
          <React.Fragment>
          <React.StrictMode>
          <StoreElement href="#Categories"/>
          </React.StrictMode>
          </React.Fragment>);
        }
      }

    }

}
export default NavBar;
