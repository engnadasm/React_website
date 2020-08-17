import React, { Component  } from 'react';
import StarRatings from 'react-star-ratings';
import Media from 'react-bootstrap/Media';
import image from './img/4.jpg';
import image2 from './img/3.jpg';
import ExampleComponent from "react-rounded-image";
import './StoreElement.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Carousel from 'react-bootstrap/Carousel';
import ShopInHome from "./ShopInHome";
import CommentList from "./comment_list";
import Info from "./info";

class StoreElement extends Component {
    constructor(){
        super();
        this.state = {
          shopObjects:[
          {id:1,
          image: '3',
          title:'Title1',
          rating:3,
          description:'description1 This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.'
          },
          {id:2,
           image: '4',
          title:'Title2',
          rating:4,
          description:'description2'
          },
          {id:3,
           image:'5',
           title:'Title3',
           rating:2,
          description:'description3'
          },
          {id:6,
           image:'6',
           title:'Title6',
           rating:2,
          description:'description6'
          }],

          page : 0
        };
        this.handleNext = this.handleNext.bind(this);
    }

    handleNext=()=>{
      console.log("Next-----------------------");
      var sum = this.state.shopObjects.length - 1 * (this.state.page + 1);
      console.log("Page Next " + this.state.page + "then " + sum);

      if(sum > 0){
        this.setState({page : this.state.page + 1})
      } else if(sum <= 0){
        this.setState({page : 0})
      }
    }
    render(){
        return (
          <div className="mx-1 my-1">
          <div className="col-mb-10">
            <div class="" fill expand="lg"  style={{backgroundColor:"#b3ccff"}}>
                    <div className="row px-4 py-4">
                    <div class="col">

                        <div class="row">
                            <ExampleComponent image={image}
                                roundedColor="#66A5CC"
                                imageWidth="300"
                                imageHeight="300"
                                roundedSize="20"/>
                                </div>
                              <div class="row">

                                <div className="float-left">
                                <StarRatings
                                  rating={3}
                                  starRatedColor="yellow"
                                  starDimension="20px"
                                  changeRating={true}
                                  numberOfStars={5}
                                  name='rating'/>
                                </div>
</div>
<div class="row">

                                <div className="float-left">
                                <StarRatings
                                  rating={2}
                                  starRatedColor="yellow"
                                  starDimension="20px"
                                  changeRating={false}
                                  numberOfStars={5}
                                  name='rating'/>
                                </div>
                                </div>
</div>
{/*<div class="col">

                            <div class="vl">
                            </div>
                            </div>*/}

                            <div class="col-md-9 fill">
                            <Carousel onSelect={this.handleNext}
                            onClick={this.handleNext} >
                          {/*this for the first of Ads*/}
                          {this.state.shopObjects.map((shopObjects1, index) =>
                            <Carousel.Item>
                            <div class="row d-flex justify-content-center">
                            <img src={require('./img/' +shopObjects1.image+ '.jpg')} alt="Chicago" width="1200" height="350" />
                            </div>
                            </Carousel.Item>
                          )}
                          </Carousel>
                          <button class="my-3 btn btn-secondary btn-block">Visit Website</button>
                          <hr class="new4"/>
                          <Info/>
                          <hr class="new4"/>
                          <CommentList/>
                          </div>

                          </div>
                          </div>
                          </div>
                          </div>


        )
    }
}
export default StoreElement;
