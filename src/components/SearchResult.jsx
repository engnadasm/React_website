import React, { Component } from 'react';
import Shop from "./Shop";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './css/SearchResult.css';
class SearchResult extends Component {
	  		state = {
            shopObjects:[
            {id:1,
            image:'image1',
            title:'Title1',
            rating:3,
            description:'description1 This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.'
            },
            {id:2,
             image:'image2',
            title:'Title2', 
            rating:4,
            description:'description2'
            },
            {id:3,
             image:'image3',
             title:'Title3',
             rating:2,
            description:'description3'
            },
            {id:5,
             image:'image5',
            title:'Title5', 
            rating:4,
            description:'description5'
            },
            {id:6,
             image:'image6',
             title:'Title6',
             rating:2,
            description:'description6'
            }],

            page : 0
        }
    viewShopPage=(shopObject)=>{
        console.log("clicked-----------------------")
        console.log(shopObject)
    }
    handlePrevious=()=>{
    	console.log("Previous-----------------------")
    	if(this.state.page > 0){
    		this.setState({page : this.state.page -1})
    	}
    }
    handleNext=()=>{
    	console.log("Next-----------------------")
    	if(this.state.shopObjects.length - 3 * (this.state.page + 1) > 0){
    		this.setState({page : this.state.page + 1})
    	}
    }
	render(){

  		return (
  			<div>
  			<div className="jumbotron">
  				<div className="">
  				<div className="mb-5">
  				  <h3 className="text-center" style={{fontFamily: 'RubikMonoOne'}}>Search Results</h3>
  				  </div>
  				  <div className="row">
  				  <div className="col-12 col-offset-1 col-sm-3 d-none d-md-block">
			  				<nav className="sidenav font">
			  						<a href="#">All<div className="tab">({this.state.shopObjects.length})</div></a>
			                        <a href="#">Ladies<div className="tab">({this.state.shopObjects.length})</div></a>
			                        <a href="#">Men<div className="tab">({this.state.shopObjects.length})</div></a>
			                        <a href="#">Kids<div className="tab">({this.state.shopObjects.length})</div></a>
			                        <a href="#">Sales<div className="tab">({this.state.shopObjects.length})</div></a>
			                </nav>
			       </div>
			       <div className="col-12 col-sm-9">
						  <DropdownButton className="font" 
							  alignRight
							  title="Sort by"
							  id="dropdown-menu-align-right"
							  variant="dark"
							>
						  <Dropdown.Item eventKey="1">Name</Dropdown.Item>
						  <Dropdown.Item eventKey="2">Rate</Dropdown.Item>
						</DropdownButton>
						{this.state.shopObjects.slice(this.state.page * 3,(this.state.page + 1) * 3).map(shopObject => <Shop isStarred={true} isRemovable={false} shopObject={shopObject} onSelect={this.viewShopPage} onStar={this.removeItem}/>)}
						<nav aria-label="Page navigation" className="page-nav font">
						  <ul className="pagination justify-content-center">
						    <li className="page-item"><a className="page-link" onClick={this.handlePrevious}>Prev</a></li>
						    <li className="page-item"><a className="page-link" onClick={this.handleNext}>Next</a></li>
						  </ul>
						</nav>
			  		</div>
			  	  </div>
  				</div>
  			</div>
  			</div>
  			)
  	}
}
export default SearchResult;