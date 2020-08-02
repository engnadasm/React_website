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
          M : NavBar
      };
      // Bind the dropdownSelect function already here (not in the render function)
      this.search_but = this.search_but.bind(this);
  }

  search_but() {
      var categorieslistValue = document.getElementById('Categorieslist').value;
      var placeslistValue = document.getElementById('Placeslist').value;
      this.setState({
          dropdownPlaces: placeslistValue,
          dropdownCateg : categorieslistValue,
          M : SearchResult
      });
      alert(categorieslistValue + " then " + placeslistValue);

  };
    render() {
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
            <button class="btn btn-secondary btn-block"type="button"onClick={this.search_but}>
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
            <Carousel style={{ height: '30rem' }}>
            <Carousel.Item>
            <div class="row d-flex justify-content-center">
            <div class="col-md-10">
            <CardDeck style={{ height: '28rem' }}>
          {/*this for the first of Ads*/}
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" style={{height:'50%',width:'100%'}} src={ Jumbotron } />
            <Card.Body>
            <Card.Title>Store name</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            <div class="rate">
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">1 star</label>
            </div>
            </Card.Text>
            <button class="btn btn-secondary btn-block">View more Details</button>
            </Card.Body>
            </Card>
          {/*this for the second of Ads*/}
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" style={{height:'50%',width:'100%'}} src={ Jumbotron } />
            <Card.Body>
            <Card.Title>Store name</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            <div class="rate">
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">1 star</label>
            </div>
            </Card.Text>
            <button class="btn btn-secondary btn-block">View more Details</button>
            </Card.Body>
            </Card>
            {/*this for the third of Ads*/}
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" style={{height:'50%',width:'100%'}} src={ Jumbotron } />
            <Card.Body>
            <Card.Title>Store name</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            <div class="rate">
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">1 star</label>
            </div>
            </Card.Text>
            <button class="btn btn-secondary btn-block">View more Details</button>
            </Card.Body>
            </Card>
          {/*the end of ads*/}
            </CardDeck>
            </div>
            </div>
            </Carousel.Item>

            <Carousel.Item>
            <div class="row d-flex justify-content-center">
            <div class="col-md-10">
            <CardDeck style={{ height: '28rem' }}>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" style={{height:'50%',width:'100%'}} src={ Jumbotron } />
            <Card.Body>
            <Card.Title>Store name</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            <div class="rate">
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">1 star</label>
            </div>
            </Card.Text>
            <button class="btn btn-secondary btn-block">View more Details</button>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" style={{height:'50%',width:'100%'}} src={ Jumbotron } />
            <Card.Body>
            <Card.Title>Store name</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            <div class="rate">
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">1 star</label>
            </div>
            </Card.Text>
            <button class="btn btn-secondary btn-block">View more Details</button>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" style={{height:'50%',width:'100%'}} src={ Jumbotron } />
            <Card.Body>
            <Card.Title>Store name</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            <div class="rate">
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">1 star</label>
            </div>
            </Card.Text>
            <button class="btn btn-secondary btn-block">View more Details</button>
            </Card.Body>
            </Card>

            </CardDeck>
            </div>
            </div>
            </Carousel.Item>
            </Carousel>



            </form>


        );
    }
}

export default Home;
