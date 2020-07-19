import React, { Component } from 'react';
import './SignUp.css';
class SignUp extends Component {

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
  				  <form>
  				   	<div className="form-group">
    					<label for="inputName">Full Name</label>
   					    <input type="email" className="form-control" id="Email" ></input>
 					    </div>
  					  <div className="form-group">
    					<label for="inputPhone">Phone number</label>
   					    <input type="email" className="form-control" id="inputPhone" placeholder="name@example.com"></input>
 					    </div>
 					    <div className="form-group">
    					<label for="inputPassword">Password</label>
   					    <input type="password" className="form-control" id="inputPassword"></input>
 					    </div>
              <button className="btn btn-outline-dark float-right" type="submit"><i className="fa fa-sign-in"></i> Sign up</button>
  				  </form>
            </div>
            </div>
            <div className="row">
            <div className="col">
          <div class="d-flex flex-row my-3 d-md-none">
             <div class="col"><hr/></div>
             <div class="col-auto">OR</div>
             <div class="col"><hr/></div>
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
  			     <form>
              <div className="form-group">
              <label for="inputName">Full Name</label>
                <input type="email" className="form-control" id="Email" ></input>
              </div>
              <div className="form-group">
              <label for="iputEmail">Email address</label>
                <input type="email" className="form-control" id="iputEmail" placeholder="name@example.com"></input>
              </div>
              <div className="form-group">
              <label for="inputPassword">Password</label>
                <input type="password" className="form-control" id="inputPassword"></input>
              </div>
              <button className="btn btn-outline-dark float-right" type="submit"><i class="fa fa-sign-in"></i> Sign up</button>
            </form>
            </div>
            </div>
             <div className="row">
            <div className="col">
          <div class="d-flex flex-row my-3">
             <div class="col"><hr/></div>
             <div class="col-auto">OR</div>
             <div class="col"><hr/></div>
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