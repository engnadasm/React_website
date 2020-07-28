import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import Media from 'react-bootstrap/Media';
import image from './img/5.jpg';
import './Shop.css';
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
             var className;
               if (this.state.isHovered) {
                 linkStyle = {height: 256, cursor: 'pointer',boxShadow: '0 4px 8px 10px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}
                 className = "fade-in"
               } else {
                 linkStyle = {color: '#000',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}
                 className = ""
               }

  		return (
  		<div className={className}>
            <div className="my-3" key={this.props.shopObject.id} style={{backgroundColor:"#b3ccff"}}>

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
                    <h3>{this.props.shopObject.title}</h3>
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