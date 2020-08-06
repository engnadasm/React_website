import React, { Component  } from 'react';
import StarRatings from 'react-star-ratings';
import Media from 'react-bootstrap/Media';
import image from './img/4.jpg';
import image2 from './img/3.jpg';
import ExampleComponent from "react-rounded-image";
import './StoreElement.css';

class StoreElement extends Component {
    constructor(){
        super();
        this.state = {

        };
        this.handlePrevious = this.handlePrevious.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }
    handlePrevious=()=>{
        alert("Page Previous " );

    }
    handleNext=()=>{
        alert("Page Next ");

    }
    render(){
        return (
            <div>
                    <div className="row">
                        <div className=" my-3 mx-3 col-12 col-offset-1 col-sm-3 d-none d-md-block">

                            <ExampleComponent image={image}
                                roundedColor="#66A5CC"
                                imageWidth="300"
                                imageHeight="300"
                                roundedSize="20"/>
                                <div className="my-3 mx-3 float-left">
                                <StarRatings
                                  rating={3}
                                  starRatedColor="yellow"
                                  starDimension="20px"
                                  changeRating={true}
                                  numberOfStars={5}
                                  name='rating'/>
                                </div>
                                <div className="my-3 mx-3 float-left">
                                <StarRatings
                                  rating={2}
                                  starRatedColor="yellow"
                                  starDimension="20px"
                                  changeRating={false}
                                  numberOfStars={5}
                                  name='rating'/>
                                </div>
                            <div class="vl"></div>
                        </div>
                        <div class="col-md-8 v2">
                            <div class="card p-3 py-4 Card">
                                <div id="demo" class="carousel slide" data-ride="carousel">
                                    <ul class="carousel-indicators">
                                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                                        <li data-target="#demo" data-slide-to="1"></li>
                                        <li data-target="#demo" data-slide-to="2"></li>
                                    </ul>

                                    <div class="carousel-inner">

                                        <div class="carousel-item active">
                                            <img src={image} alt="Los Angeles" width="1100" height="350"/>
                                        </div>
                                        <div class="carousel-item">
                                            <img src={image2} alt="Chicago" width="1100" height="350"/>
                                        </div>
                                        <div class="carousel-item">
                                            <img src={image} alt="New York" width="1100" height="350"/>
                                        </div>
                                    </div>

                                    <a class="carousel-control-prev" href="#demo" data-slide="prev" onClick={this.handlePrevious}>
                                        <span class="carousel-control-prev-icon"></span>
                                    </a>
                                    <a class="carousel-control-next" href="#demo" data-slide="next" onClick={this.handleNext}>
                                        <span class="carousel-control-next-icon"></span>
                                    </a>
                                </div>
                            </div>
                            <button class="my-3 btn btn-secondary btn-block">View more Details</button>
                            <hr class="new4"/>
                        </div>
                    </div>

            </div>

        )
    }
}
export default StoreElement;
