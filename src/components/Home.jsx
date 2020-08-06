import React, { Component } from "react";
import './navbar.jsx';
import Jumbotron from "./img/5.jpg"
import './Home.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Carousel from 'react-bootstrap/Carousel';
import SearchResult from './SearchResult';
import NavBar from "./navbar";
import SignUp from './SignUp';
import Login from './Login';
import Footer from './Footer';
import ShopInHome from "./ShopInHome";

var sectionStyle = {
    backgroundImage: `url(${Jumbotron})`,
    height:'100%',
    width:'100%',
}

class Home extends Component {

  constructor(props) {
      super()
      this.state = {
          // Takes active tab from props if it is defined there
          dropdownPlaces:  1,
          dropdownCateg: 1,
          boolean: true,
          M : NavBar,

          shopObjects:[
          {id:1,
          image:'image1',
          title:'Title1',
          rating:3,
          description:'description2, i want to know what the maximum length of description'+
        'to limit it to be more beautiful so i writting more and more and more more and more and more'+
        'ore more and more'

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
          {id:4,
           image:'image6',
           title:'Titl4',
           rating:2,
          description:'description4'
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
        },
        {id:7,
         image:'image6',
         title:'Title7',
         rating:2,
        description:'description7'
        }],


          page : 0
      };
      // Bind the dropdownSelect function already here (not in the render function)
      this.search_but = this.search_but.bind(this);
      this.handlePrevious = this.handlePrevious.bind(this);
      this.handleNext = this.handleNext.bind(this);
  }

  viewShopPage=(shopObject)=>{
  console.log("clicked-----------------------");
  console.log(shopObject);
  alert("clicked ");

  }

  handlePrevious=()=>{
console.log("Previous-----------------------");
alert("Page Previous " + this.state.page);

if(this.state.page > 0){
this.setState({page : this.state.page -1})
}
}
handleNext=()=>{
console.log("Next-----------------------");
var sum = this.state.shopObjects.length - 3 * (this.state.page + 1);

alert("Page Next " + this.state.page + "then " + sum);
if(this.state.shopObjects.length - 3 * (this.state.page + 1) > 0){
this.setState({page : this.state.page + 1})
}
}
  search_but=()=> {
      var categorieslistValue = document.getElementById('Categorieslist').value;
      var placeslistValue = document.getElementById('Placeslist').value;
      this.setState({
          dropdownPlaces: placeslistValue,
          dropdownCateg : categorieslistValue,
          M : SearchResult,
          boolean: false
      });

  };
    render() {
      if(this.state.boolean) {
        return (
          /*this for state select Categories & Place*/
            <form class = "form_body">
            <div class="row d-flex justify-content-center">
            <div class="col-md-10">
            <div class="card p-3 py-4 Card">
            <h4 class= "advancedText" >&emsp; select Categories &emsp; &emsp; &emsp;
            &emsp; &emsp; &emsp; &emsp; &emsp;
            select Place</h4>

            {/*this for the rectangle of Search*/}
            <div class="container">
            <div class="row">
            <div class="col-12">
            <div class="input-group">
            {/*this for the dropdown of Categories*/}
            <Form.Control style={{background: "#00838f"}}  as="select" size="lg"  id="Categorieslist" >
            <option value="1">All Categories</option>
            <option value="2">1 select</option>
            <option value="3">2 select</option>
            <option value="4">3 select</option>
            </Form.Control>
            {/*this for the dropdown of places*/}
            <Form.Control as="select" size="lg" id="Placeslist" >
            <option value="1">All Places</option>
            <option value="2">1 select</option>
            <option value="3">2 select</option>
            <option value="4">3 select</option>
            </Form.Control>
            {/*this for the search button*/}
            <div class="input-group-append">
            <button herf="SearchResult" class="btn btn-secondary btn-block"type="button"onClick={this.search_but}>
            <i class="fa fa-search"></i>
            </button>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>

            {/*this for the rectangle of Sentence "Top store"*/}
            <div class="row d-flex justify-content-center">
            <div class="col-md-10">
            <div class="card p-3 py-4 Card">
            <h4 class= "advancedText">The Top store :</h4>
            <div class="row d-flex justify-content-center">

            </div>
            </div>
            </div>
            </div>
          {/*this for the rectangle of Ads*/}

                     <div class="row d-flex justify-content-center">
                     <div class="col-md-10">
                     <div class="card p-0 py-4 Card">
                     <div class="row d-flex justify-content-center">

            <a className="prev" onClick={this.handlePrevious}>&#10094;</a>
            <CardDeck style={{ height: '28rem' }}>
          {/*this for the first of Ads*/}
          {this.state.shopObjects.slice(this.state.page * 3,(this.state.page + 1) * 3).map(shopObject =>
            <div class="row d-flex justify-content-center">
            <div class="col-md-12">
          <ShopInHome shopObject={shopObject} onClick={this.viewShopPage}/>
          </div>
          </div>
           )}

           </CardDeck>
           <a className="next" onClick={this.handleNext}>&#10095;</a>

           </div>
           </div>
           </div>
           </div>






            </form>);
      }
        else {
          return(
            <NavBar  onClick={this.state.boolean= true } change={true}/>
          );
        }
    }
}

export default Home;
