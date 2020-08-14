import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import Media from 'react-bootstrap/Media';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
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

    renderButtons=()=>{
      if (this.props.isStarred ){return (<OverlayTrigger
                                                    placement="right"
                                                    overlay={
                                                      <Tooltip>
                                                        Add to <strong>my favourites</strong>.
                                                      </Tooltip>
                                                    }
                                                  >
                                                    <button className="btn btn-outline-dark float-right"><i class="fa fa-heart" aria-hidden="true"></i></button>
                                           </OverlayTrigger>)}
     if ( this.props.isRemovable){ return (<OverlayTrigger
                                                    placement="right"
                                                    overlay={
                                                      <Tooltip>
                                                        Remove from <strong>my favourites</strong>.
                                                      </Tooltip>
                                                    }
                                                  >
                                                  <button className="btn btn-outline-dark float-right" onClick={()=>this.props.onRemove(this.props.shopObject)}><i className="fa fa-trash"></i></button>
                                                  </OverlayTrigger>)}
      return(<div></div>)
    }
	 render(){
             var mediaStyle;
             var buttonStyle;
             var className;
               if (this.state.isHovered) {
                 mediaStyle = {height: 256,boxShadow: '0 4px 8px 10px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}
                 className = "fade-in"
                 buttonStyle={}
               } else {
                 mediaStyle = {color: '#000',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}
                 className = ""
                 buttonStyle={display:"none"}

               }

  		return (
  		<div className={className}  key={this.props.shopObject.id}>
            <div className="my-3" style={{backgroundColor:"#b3ccff"}} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>

                <Media style={mediaStyle}>
                      <img
                    width={this.state.isHovered ? 200 : 128}
                    height={this.state.isHovered ? 200 : 128}
                    className="mr-3"
                    src={image}
                    alt={this.props.shopObject.image}
                  />
                  <Media.Body>
                    <div>
                    <h3  className="d-inline">{this.props.shopObject.title}</h3>
                    {this.renderButtons()}
                    </div>
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
                  <button style={buttonStyle}className="btn btn-outline-dark btn-block" onClick={()=>this.props.onSelect(this.props.shopObject)}>View More Details</button>
            </div>
        </div>
  		)
  }
}
export default Shop;