import React, { Component } from 'react';
import { Modal} from "react-bootstrap";
class Login extends Component {
  constructor() {
        super()

        this.state = {
            login: false,
            valid: false,
            fields:{},
            errors:{}
        }

    }

    onCloseModal = () => {
        this.setState({ login: false });
    };

     onOpenModalLogin = () => {
        this.setState({ login: true });
    };

    handleSubmit = (event) =>{
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if(!fields["emailPhone"]){
           formIsValid = false;
           errors["emailPhone"] = "Cannot be empty";
           console.log("email empty")
        }

        if(typeof fields["emailPhone"] !== "undefined"){
           let lastAtPos = fields["emailPhone"].lastIndexOf('@');
           let lastDotPos = fields["emailPhone"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["emailPhone"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["emailPhone"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["emailPhone"] = "Email is not valid";
            } 
            console.log("email exist")     
        }

        if(!fields["password"]){
           formIsValid = false;
           errors["password"] = "Cannot be empty";
        }

       this.setState({errors: errors});
       this.setState({valid: formIsValid});
  };

  handleChange=(e)=>{       
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;       
        this.setState({fields});
    };
  render(){
    const { login } = this.state;
    
    return (
<div>
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#LoginPopup" onClick={this.onOpenModalLogin}>
  Launch demo modal
</button>

<Modal size="sm" id="LoginPopup" tabIndex="-1" aria-labelledby="LoginPopupTitle" aria-hidden="true" show={this.state.login} onHide={this.onCloseModal}>
      <Modal.Header closeButton className="bg-danger">
        <h5 className="modal-title" id="LoginPopupTitle">Login</h5>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row">
          <div className="col">
            <form novalidate>
              <div className="form-group">
              <label htmlFor="inputPhoneEmail">Email/Phone</label>
                <input type="email" className="form-control" id="inputPhoneEmail" onChange={this.handleChange} value={this.state.fields["emailPhone"]} name="emailPhone"></input>
                <span style={{color: "red"}}>
                 {this.state.errors["emailPhone"]}
                </span>
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword">Password</label>
                <input type="password" className="form-control" id="inputPassword"  onChange={this.handleChange} value={this.state.fields["password"]} name="password" ></input>
                <span style={{color: "red"}}>
                 {this.state.errors["password"]}
                </span>
              </div>
            </form>
            </div>
            </div>
            <div className="row">
            <div className="col">
            <button className="btn btn-outline-primary btn-block mx-auto"><i className="fa fa-facebook"></i>  Login with Facebook</button>
            </div>
            </div>
            <div className="row">
            <div className="col">
            <button className="btn btn-outline-danger btn-block mx-auto my-2"><i className="fa fa-google"></i>  Login with Google</button>
            </div>
            </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.onCloseModal}>Cancel</button>
        <button type="submit" className="btn btn-secondary" onClick={this.handleSubmit}>Login</button>
      </Modal.Footer>
</Modal>
</div>
)
}
}
export default Login;