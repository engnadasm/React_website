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
import Logo from './img/N&T.png';
import UserProfile from "./UserProfile";

const Search = () => {
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)
  //      <input type="submit" value="Search" onClick={onClick} />
  return (
    <div>
        { showResults ? <Results /> : <Results2 /> }
      </div>
  )
}
const Results = () => (
  <Nav inline>

    <Nav.Link href="#SignIn" eventKey={2} to="/SignIn"
    ><i class="fa fa-fw fa-sign-in" ></i> SignIn</Nav.Link>

    <Nav.Link href="#SignUp" eventKey={3} to="/SignUp"
    ><i class="fa fa-fw fa-user" ></i> SignUp</Nav.Link>
    </Nav>
)
const Results2 = () => (
  <Nav inline>
    <Nav.Link href="#SignOut" eventKey={4} to="/SignOut"
    ><i class="fa fa-fw fa-sign-out" ></i> SignOut</Nav.Link>

    <Nav.Link href="#Profile" eventKey={5} to="/Profile"
    ><i class="fa fa-fw fa-user-circle-o" ></i> UserProfile</Nav.Link>
    </Nav>
)

class NavBar extends Component {
    constructor(props) {

        super()
        this.state = {
            showLogin: false,
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

        if(selectedTab == 1){
          this.setState({
              M : Home
          });
        }else if(selectedTab == 2){
            this.onOpenModalLogin()
        }else if(selectedTab == 3){
          this.setState({
              M : SignUp
          });
        }else if(selectedTab == 5){
          this.setState({
              M : UserProfile
          });
        }

    };
      onCloseModal = () => {
        this.setState({ showLogin: false });
    };

     onOpenModalLogin = () => {
        this.setState({ showLogin: true });
    };
    render() {

      if(!this.props.change) {
        return (
          <React.Fragment>
            <Navbar fill variant="tabs" collapseOnSelect expand="lg" bg="dark" variant="dark"
            activeKey={this.state.navTap} onSelect={this.navSelect}>
                <Navbar.Brand href="#home" ><img className="pl-3" width="88" height= "45" src={Logo}></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link  href="#home" eventKey={1} to="/"
                        ><i class="fa fa-fw fa-home" ></i> Home</Nav.Link>
                        <NavDropdown  class="fa fa-fw fa-book" activeKey={this.state.activeDropMenu}
                        onSelect={this.dropdownSelect} to="/Categories" href="#Categories"
                            title="Categories">
                            <NavDropdown.Item  href="#Categories" eventKey={1} >Shoes</NavDropdown.Item>
                            <NavDropdown.Item  href="#Categories"eventKey={2} >Kids</NavDropdown.Item>
                            <NavDropdown.Item  href="#Categories" eventKey={3}>Women</NavDropdown.Item>
                            <NavDropdown.Item  href="#Categories"eventKey={4}>Men</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item  href="#Categories"eventKey={5}>All</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                  <Search/>
                </Navbar.Collapse>
            </Navbar>
            <React.StrictMode>
            <this.state.M/>
            <Login showForm={this.state.showLogin} onClose={this.onCloseModal}/>
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
