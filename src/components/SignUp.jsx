import React, { Component } from 'react';
import './css/SignUp.css';

class SignUp extends Component {
   constructor() {
        super()

        this.state = {
            setValidated: false,
            validated: false,
            errors:{}
        }

    }

  handleSubmit = (event) => {
    let errors={}
    const formEl = event.currentTarget
    if (formEl.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      for(let i=0; i<formEl.length; i++) {
                const elem = formEl[i];
                console.log(elem)
                const errorLabel = elem.parentNode.querySelector('.invalid-message');

                if (errorLabel && elem.nodeName.toLowerCase() !== 'button') {
                  console.log(elem.nodeName.toLowerCase())
                    if (!elem.validity.valid) {
                      console.log(errorLabel.getAttribute("id"))
                      errors[errorLabel.getAttribute("id")] = elem.validationMessage;
                    } else {
                        errorLabel.textContent = '';
                    }
                }
      }
      console.log("invalid")
    }
    this.setState({errors: errors});
    this.setState({ validated: true });
    console.log("valid")
  };
  render(){
  	return (
  		<div className="container">
  			<div className="row col">
  				<div className="col-md-5">
          <div className="container">
          <div className="row">
          <div className="col">
          <h4 className="titles">Sign up with phone number</h4>
          </div>
          </div>
          <div className="row">
          <div className="col">
  				  <form noValidate onSubmit={this.handleSubmit.bind(this)}>
  				   	<div className="form-group">
    					<label htmlFor="inputName1">User Name</label>
   					    <input type="name" className="form-control" id="inputName1" placeholder="User Name" required></input>
                <span style={{color: "red"}} className="invalid-message" id="userName1">
                {this.state.errors["userName1"]}
                </span>
 					    </div>
  					  <div className="form-group">
    					  <label htmlFor="inputPhone">Phone Number</label>
   					    <input type="tel" className="form-control" id="inputPhone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required></input>
 					      <span style={{color: "red"}} className="invalid-message" id="phone">
                {this.state.errors["phone"]}
                </span>
              </div>
 					    <div className="form-group">
    					  <label htmlFor="inputPassword1">Password</label>
   					    <input type="password" className="form-control" id="inputPassword1" placeholder="password" minLength={6} pattern="(?=.*\d)(?=.*[a-z]).{6,}"required></input>
                <small className="form-text text-muted">Must be at least 6 characters long, contain letters and numbers</small>
                <span style={{color: "red"}} className="invalid-message" id="pass1">
                  {this.state.errors["pass1"]}
                </span>
 					    </div>
              <button className="btn btn-outline-dark float-right" type="submit"><i className="fa fa-sign-in"></i> Sign up</button>
  				  </form>
            </div>
            </div>
            <div className="row">
            <div className="col">
          <div className="d-flex flex-row my-3 d-md-none">
             <div className="col"><hr/></div>
             <div className="col-auto">OR</div>
             <div className="col"><hr/></div>
             </div>
          </div>
          </div>
  				</div>
          </div>
          <span className="border-left border-secondary m-5 d-none d-md-block" style={{height: "500px"}}></span>

  				<div className="col-md-5">
          <div className="container">
          <div className="row">
          <div className="col">
          <h4 className="titles">Sign up with email address</h4>
          </div>
          </div>
              <div className="row">
              <div className="col">
  			     <form noValidate onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <label htmlFor="inputName2">User Name</label>
                <input type="name" className="form-control" id="inputName2" placeholder="User Name" required></input>
                <span style={{color: "red"}} className="invalid-message" id="userName2">
                {this.state.errors["userName2"]}
                </span>
              </div>
              <div className="form-group">
                <label htmlFor="iputEmail">Email Address</label>
                <input type="email" className="form-control" id="iputEmail" placeholder="name@example.com" required></input>
                <span style={{color: "red"}} className="invalid-message" id="email">
                {this.state.errors["email"]}
                </span>
              </div>
              <div className="form-group">
              <label htmlFor="inputPassword2">Password</label>
                <input type="password" className="form-control" id="inputPassword2"  placeholder="password" minLength={6} pattern="(?=.*\d)(?=.*[a-z]).{6,}"required></input>
                <small className="form-text text-muted">Must be at least 6 characters long, contain letters and numbers</small>
                <span style={{color: "red"}} className="invalid-message" id="pass2">
                  {this.state.errors["pass2"]}
                </span>
              </div>
              <button className="btn btn-outline-dark float-right" type="submit"><i className="fa fa-sign-in"></i> Sign up</button>
            </form>
            </div>
            </div>
             <div className="row">
            <div className="col">
          <div className="d-flex flex-row my-3">
             <div className="col"><hr/></div>
             <div className="col-auto">OR</div>
             <div className="col"><hr/></div>
             </div>
          </div>
          </div>
            <div className="row my-3">
            <div className="col">
            <h4 className="titles">Sign up with social media</h4>
            </div>
            </div>
            <div className="row">
            <div className="col">
            <button className="btn btn-outline-primary btn-block mx-auto"><i className="fa fa-facebook"></i>  Sign up with Facebook</button>
            </div>
            </div>
            <div className="row">
            <div className="col">
            <button className="btn btn-outline-danger btn-block mx-auto my-2"><i className="fa fa-google"></i>  Sign up with Google</button>
            </div>
            </div>
            </div>
  				</div>
  			</div>

  		</div>
  		)
  }
}
export default SignUp;