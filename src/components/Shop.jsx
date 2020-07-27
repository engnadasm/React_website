import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import Media from 'react-bootstrap/Media';
import image from './img/5.jpg';
class Shop extends Component {
 

    constructor(){
    super();
    this.state = {
        isHovered: false
    };
    }
    handleHover = () => {
        this.setState({isHovered: !this.state.isHovered});
        
    }

    changeRating=( newRating, name ) =>{
      this.setState({
        rating: newRating
      });
    }


	 render(){
             var linkStyle;
               if (this.state.isHovered) {
                 linkStyle = {height: 256, cursor: 'pointer'}
               } else {
                 linkStyle = {color: '#000'}
               }

  		return (
  		<div >
            <div className="my-2" key={this.props.shopObject.id} style={{backgroundColor:"#b3ccff"}}>

                <Media onClick={()=>this.props.onClick(this.props.shopObject)}
                style={linkStyle} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                      <img
                    width={this.state.isHovered ? 200 : 128}
                    height={this.state.isHovered ? 200 : 128}
                    className="mr-3"
                    src={image}
                    alt={this.props.shopObject.image}
                  />
                  <Media.Body>
                    <h5>{this.props.shopObject.title}</h5>
                    <p>
                     {this.props.shopObject.description}
                    </p>
                    <div className="float-right">
                    <StarRatings 
                      rating={this.props.shopObject.rating}
                      starRatedColor="yellow"
                      starDimension="20px"
                      changeRating={this.changeRating}
                      numberOfStars={5}
                      name='rating'
                    />
                    </div>
                  </Media.Body>
                </Media>

            </div>
        </div>
  		)
  }
}
export default Shop;