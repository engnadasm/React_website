import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import Media from 'react-bootstrap/Media';
import image from './img/5.jpg';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Carousel from 'react-bootstrap/Carousel';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

class ShopInHome extends Component {
    constructor(){
    super();
    this.state = {

    };
    }

    renderButtons=()=>{
      var buttonStyle;
      var buttonStyle2;

      buttonStyle= {backgroundColor: "Transparent", border:"none", color:"red", outline:"none"}
      buttonStyle2= {backgroundColor: "Transparent", border:"none", color:"black", outline:"none"}

      if (!this.props.isStarred ){return (<OverlayTrigger
                                                    placement="top"
                                                    overlay={
                                                      <Tooltip>
                                                        Add to <strong>my favourites</strong>.
                                                      </Tooltip>
                                                    }
                                                  >
                                                    <button style={buttonStyle2} className="btn btn-outline-dark float-right"
                                                    onClick={()=>this.props.onStare(this.props.shopObject)}>
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
                                                  onClick={()=>this.props.onRemove(this.props.shopObject)}>
                                                  <i className="fa fa-heart"></i></button>
                                                  </OverlayTrigger>)}
      return(<div></div>)
    }


	 render(){
  		return (
            <Card key={this.props.shopObject.id} style={{ height: '28rem',width: '19rem' }}>
                <Card >
                      <Card.Img
                    variant="top" style={{height:'50%',width:'100%'}} src={require('./img/' +this.props.shopObject.image+ '.jpg')}
                    alt={this.props.shopObject.image}/>
                  <Card.Body>
                    <Card.Title>{this.props.shopObject.title}
                    {this.renderButtons()}
                    </Card.Title>

                    <Card.Text>
                     {this.props.shopObject.description}
                     </Card.Text>
                    <button class="btn btn-secondary btn-block"
                     onClick={()=>this.props.onClick(this.props.shopObject)}>View more Details</button>
                    <div className="float-left">
                    <StarRatings
                      rating={this.props.shopObject.rating}
                      starRatedColor="yellow"
                      starDimension="20px"
                      changeRating={false}
                      numberOfStars={5}
                      name='rating'/>
                    </div>

                  </Card.Body>
                </Card>
            </Card>

  		)
  }
}
export default ShopInHome;
