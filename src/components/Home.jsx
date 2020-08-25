import React, { Component } from "react";
import './navbar.jsx';
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
import StoreElement from "./StoreElement";

class Home extends Component {

  constructor(props) {
      super()
      const shopObjects1 = [];

      shopObjects1.push({
        id:1,
        image:'3',
        title:'Title',
        rating:3,
        description:'description',
        stare : false


      });
      shopObjects1.push({
        id:1,
        image:'4',
        title:'Title',
        rating:3,
        description:'description',
        stare : false


      });
      shopObjects1.push({
        id:1,
        image:'3',
        title:'Title',
        rating:3,
        description:'description',
        stare : false


      });
      shopObjects1.push({
        id:1,
        image:'5',
        title:'Title',
        rating:3,
        description:'description',
        stare : false


      });

      this.state = {
          // Takes active tab from props if it is defined there
          dropdownPlaces:  1,
          dropdownCateg: 1,
          boolean: true,
          M : NavBar,
          shopObjects1,
          shopObjects:[
          {id:1,
          image:'4',
          title:'Title1',
          rating:3,
          description:'description2, i want to know what the maximum length of description',
          stare : false
          },
          {id:2,
           image:'3',
          title:'Title2',
          rating:4,
          description:'description2',
          stare : false

          },
          {id:3,
           image:'5',
           title:'Title3',
           rating:2,
          description:'description3',
          stare : false

          },
          {id:4,
           image:'6',
           title:'Titl4',
           rating:2,
          description:'description4',
          stare : false

        },
          {id:5,
           image:'3',
          title:'Title5',
          rating:4,
          description:'description5',
          stare : false

          },
          {id:6,
           image:'4',
           title:'Title6',
           rating:2,
          description:'description6',
          stare : false

        },
        {id:7,
         image:'5',
         title:'Title7',
         rating:2,
        description:'description7',
        stare : false

      },{id:8,
       image:'4',
       title:'Title8',
       rating:3,
      description:'description8',
      stare : false

      }],
        flag : true,
        page : 0,
      };
      // Bind the dropdownSelect function already here (not in the render function)
      this.search_but = this.search_but.bind(this);
      this.handlePrevious = this.handlePrevious.bind(this);
      this.handleNext = this.handleNext.bind(this);
      this.viewShopPage = this.viewShopPage.bind(this);

  }

  viewShopPage=(shopObject)=>{
  this.setState({
              M : StoreElement,
              flag : false,
              boolean: false
          });
  }

  removeItem=(shopObject)=>{
      shopObject.stare = false
  }

  addItem=(shopObject)=>{
    shopObject.stare = true
  }

  handlePrevious=()=>{

if(this.state.page > 0){
this.setState({page : this.state.page -1})
}
}
handleNext=()=>{
var sum = this.state.shopObjects.length - 2 * (this.state.page + 1);

if(sum > 0){
  this.setState({page : this.state.page + 1})
} else if(sum <= 0){
  this.setState({page : 0})
}
}
  search_but=()=> {
      var categorieslistValue = document.getElementById('Categorieslist').value;
      var placeslistValue = document.getElementById('Placeslist').value;
      this.setState({
          dropdownPlaces: placeslistValue,
          dropdownCateg : categorieslistValue,
          M : SearchResult,
          flag : true,
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
            &emsp; &emsp; &emsp; &emsp;
            select Place</h4>

            {/*this for the rectangle of Search*/}
            <div class="container">
            <div class="row">
            <div class="col-12">
            <div class="input-group">
            {/*this for the dropdown of Categories*/}
            <Form.Control style={{background: "#12A898"}}  as="select" size="lg"  id="Categorieslist" >
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
            <Carousel onSelect={this.handleNext}
            onClick={this.handleNext} >
          {/*this for the first of Ads*/}
          {this.state.shopObjects1.map((shopObjects1, index) =>
            <Carousel.Item>
            <div class="row d-flex justify-content-center">
            <div class="col-md-10">
            <CardDeck >

            <ShopInHome key={index * 3} shopObject={shopObjects1} onClick={this.viewShopPage}
          isStarred={shopObjects1.stare} onStare={this.addItem} onRemove={this.removeItem}/>

            {this.state.shopObjects.slice(this.state.page * 2,(this.state.page + 1) * 2).map(shopObject =>

              <ShopInHome shopObject={shopObject} onClick={this.viewShopPage}
              isStarred={shopObject.stare} onStare={this.addItem} onRemove={this.removeItem}/>

            )}

            </CardDeck>
            </div>
            </div>
            <div class="row d-flex justify-content-center">
            <div class="col-md-10">
            <div class="card p-3 py-4 Card">
            <div class="row d-flex justify-content-center">
            </div>
            </div>
            </div>
            </div>
            </Carousel.Item>
           )}

           </Carousel>
           {/*this for the rectangle of Sentence "Top store"*/}

            </form>);
      }
        else {
          if(this.state.flag) {
            return(
                <NavBar  onClick={this.state.boolean= true } change={true} change2 = {true}/>
            );
        }else {
            return(
                <NavBar  onClick={this.state.boolean= true } change={true} change2 = {false}/>
            );}
        }
    }
}

export default Home;
