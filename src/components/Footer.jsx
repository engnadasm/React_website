import React, { Component } from 'react';
import image from "./img/google-play-brands.svg"
import "./css/Footer.css";
class Footer extends Component {

	 render(){

  		return (
  		<footer>
        <div style={{backgroundColor:"#ccccff"}}>
            <div className="row row-content pt-3">
                <div className="col-12 col-offset-1 col-sm-4 ">
                    <h5>POPULAR SEARCHES</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">Ladies</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Kids</a></li>
                        <li><a href="#">Sales</a></li>
                    </ul>
                </div>
                <div className="col-12 col-sm-4">
                    <h5>MY ACCOUNT</h5>
                  <ul className="list-unstyled">
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Sign Up</a></li>
                        <li><a href="#">Account settings</a></li>
                        <li><a href="#">My favourites</a></li>
                    </ul>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="text-center" style={{padding: "40px 10px"}}>
                   	    <h5>FOLLOW US</h5>
                        <a className="btn btn-social-icon btn-google-plus" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-youtube" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                        <h5 className="mt-2">DOWNLOAD OUR APP</h5>
                        <a  href="#"><img style={{height: "15px", width: "15px"}} src={image}/></a>
                    </div>
                </div>
                <div className="col-12">
                    <p style={{padding:"10px"}}></p>
                    <p align="center" className="mx-auto">© Copyright 2020 Our Website</p>
                </div>
            </div>
        </div>
    </footer>
  		)
  }
}
export default Footer;