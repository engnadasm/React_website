import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import Media from 'react-bootstrap/Media';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import image from './img/5.jpg';
import './css/Shop.css';
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
      var buttonStyle;
      if (this.state.isHovered) {
        buttonStyle= {backgroundColor: "Transparent", border:"none", color:"white", outline:"none"}
      }else{
         buttonStyle= {backgroundColor: "Transparent", border:"none", color:"black", outline:"none"}
      }
      if (this.props.isStarred ){return (<OverlayTrigger
                                                    placement="top"
                                                    overlay={
                                                      <Tooltip>
                                                        Add to <strong>my favourites</strong>.
                                                      </Tooltip>
                                                    }
                                                  >
                                                    <button style={buttonStyle} className="float-right"><i class="fa fa-heart" aria-hidden="true"></i></button>
                                           </OverlayTrigger>)}
     if ( this.props.isRemovable){ return (<OverlayTrigger
                                                    placement="top"
                                                    overlay={
                                                      <Tooltip>
                                                        Remove from <strong>my favourites</strong>.
                                                      </Tooltip>
                                                    }
                                                  >
                                                  <button style={buttonStyle}  className="btn btn-outline-dark float-right" onClick={()=>this.props.onRemove(this.props.shopObject)}><i className="fa fa-trash"></i></button>
                                                  </OverlayTrigger>)}
      return(<div></div>)
    }
	 render(){
             var mediaStyle;
             var buttonStyle;
             var titleStyle;
             var className;
               if (this.state.isHovered) {
                 mediaStyle = {height: 256,boxShadow: '0 4px 8px 10px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',backgroundColor:"#12a898", color:"white"}
                 className = "fade-in"
                 buttonStyle={}
                 titleStyle={color: "white"}
               } else {
                 mediaStyle = {color: '#000',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',backgroundColor:"white", color:"black"}
                 className = ""
                 buttonStyle={display:"none"}
                titleStyle={color: "#12a898"}

               }

  		return (
  		<div className={className}  key={this.props.shopObject.id}>
            <div className="my-3" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>

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
                    <h3  className="d-inline" style={titleStyle}>{this.props.shopObject.title}</h3>
                    {this.renderButtons()}
                    </div>
                    <p style={{fontFamily:"Alata"}}>
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
                  <button style={buttonStyle}className="btn btn-dark btn-block" onClick={()=>this.props.onSelect(this.props.shopObject)}>View More Details</button>
            </div>
        </div>
  		)
  }
}
export default Shop;