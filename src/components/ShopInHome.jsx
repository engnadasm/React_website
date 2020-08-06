import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import Media from 'react-bootstrap/Media';
import image from './img/5.jpg';
import './Shop.css';
import Card from 'react-bootstrap/Card';
import Jumbotron from "./img/5.jpg"

var sectionStyle = {
    backgroundImage: `url(${Jumbotron})`,
    height:'100%',
    width:'100%',
}

class ShopInHome extends Component {
    constructor(){
    super();
    this.state = {

    };
    }

    changeRating=( newRating, name ) =>{
      this.setState({
        rating: newRating
      });
    }

	 render(){
  		return (
            <Card key={this.props.shopObject.id} style={{ width: '19rem' }}>
                <Card onClick={()=>this.props.onClick(this.props.shopObject)}>
                      <Card.Img
                    variant="top" style={{height:'50%',width:'100%'}} src={ Jumbotron }
                    alt={this.props.shopObject.image}/>
                  <Card.Body>
                    <Card.Title>{this.props.shopObject.title}</Card.Title>
                    <Card.Text>
                     {this.props.shopObject.description}
                     </Card.Text>
                    <button class="btn btn-secondary btn-block">View more Details</button>
                    <div className="float-left">
                    <StarRatings
                      rating={this.props.shopObject.rating}
                      starRatedColor="yellow"
                      starDimension="20px"
                      changeRating={this.changeRating}
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
