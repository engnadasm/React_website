import React, { Component  } from 'react';
import StarRatings from 'react-star-ratings';
import Media from 'react-bootstrap/Media';
import ExampleComponent from "react-rounded-image";
import './css/StoreElement.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Carousel from 'react-bootstrap/Carousel';
import ShopInHome from "./ShopInHome";
import CommentList from "./comment_list";
import Info from "./info";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

class StoreElement extends Component {
    constructor(props){
        super();
        this.state = {
            shopObjects:[
                {id:1,
                 image: '3',
                  },
                {id:2,
                 image: '4',
                  },
                {id:3,
                 image:'5',
                   },
                {id:6,
                 image:'6',
                }],
            title : "The Store Name",
            image : '4',
            page : 0,
            stare : false,
            rating: 5

        };

        this.handleNext = this.handleNext.bind(this);

    }

    removeItem=()=>{
      this.setState({stare : false});
    }

    addItem=()=>{
      this.setState({stare : true});
    }
    handleNext=()=>{
        var sum = this.state.shopObjects.length - 1 * (this.state.page + 1);

        if(sum > 0){
            this.setState({page : this.state.page + 1})
        } else if(sum <= 0){
            this.setState({page : 0})
        }
    }
    changeRating=( newRating, name ) =>{
      this.setState({
        rating: newRating
      });
    }
    renderButtons=()=>{
      var buttonStyle;
      var buttonStyle2;

      buttonStyle= {backgroundColor: "Transparent", border:"none", color:"red", outline:"none"}
      buttonStyle2= {backgroundColor: "Transparent", border:"none", color:"black", outline:"none"}

      if (!this.state.stare){return (<OverlayTrigger
                                                    placement="top"
                                                    overlay={
                                                      <Tooltip>
                                                        Add to <strong>my favourites</strong>.
                                                      </Tooltip>
                                                    }
                                                  >
                                                    <button style={buttonStyle2} className="btn btn-outline-dark float-right"
                                                    onClick={this.addItem}>
                                                    <i class="fa fa-heart"></i></button>
                                           </OverlayTrigger>)}
     else { return (<OverlayTrigger
                                                    placement="top"
                                                    overlay={
                                                      <Tooltip>
                                                        Remove from <strong>my favourites</strong>.
                                                      </Tooltip>
                                                    }
                                                  >
                                                  <button style={buttonStyle}  className="btn btn-outline-dark float-right"
                                                  onClick={this.removeItem}>
                                                  <i className="fa fa-heart"></i></button>
                                                  </OverlayTrigger>)}
      return(<div></div>)
    }

    render(){
        return (
            <div className="mx-1 my-1">
                <div className="col-mb-10">
                    <div className="jumbotron" fill expand="lg" >
                        <div className="row px-4 py-4">
                            <div class="col">
                                <div class="row">
                                    <ExampleComponent image={require('./img/' +this.state.image+ '.jpg')}
                                        roundedColor="#12A898"
                                        imageWidth="300"
                                        imageHeight="300"
                                        roundedSize="20"/>
                                </div>
                                <div class="row">
                                    <div className="float-left">
                                        <h2 style={{color:"#12A898"}}> {this.state.title} {this.renderButtons()}</h2>

                                    </div>
                                </div>
                                <div class="row" style={{ padding: '1rem'}}>
                                    <div className="float-left">
                                    <h3 style={{color:"#12A898"}}> {"Your Rate"} </h3>
                                        <StarRatings
                                            rating={this.state.rating}
                                            starRatedColor="yellow"
                                            starDimension="35px"
                                            changeRating={this.changeRating}
                                            numberOfStars={5}
                                            name='rating'/>
                                    </div>
                                </div>
                                <div class="row" style={{ padding: '1rem'}}>
                                    <div className="float-left inline">
                                    <h3 style={{color:"#12A898"}}> {"Total Rate"} </h3>

                                        <StarRatings
                                            rating={2}
                                            starRatedColor="yellow"
                                            starDimension="35px"
                                            changeRating={false}
                                            numberOfStars={5}
                                            name='rating'/>
                                    </div>
                                </div>

                            </div>
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
                                <button class="my-3 btn btn-block"
                                    style={{background: "#12A898"}}>
                                    <h3>Visit Website</h3></button>
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
