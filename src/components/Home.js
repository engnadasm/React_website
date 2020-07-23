import React, { Component } from "react";
import './navbar.jsx';
import NavBar from "./navbar";
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Jumbotron from "./img/5.jpg"
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

var sectionStyle = {
    backgroundImage: `url(${Jumbotron})`,
    height:'100%',
    width:'100%',
}

class Home extends Component {
    render() {
        return (

            <form class = "form_body">
            <div class="row d-flex justify-content-center">
            <div class="col-md-10">
            <div class="card p-3 py-4 Card">
            <h4 class= "advancedText" >&emsp; select Categories &emsp;
            &emsp; &emsp; &emsp; &emsp; &emsp;
            select Place</h4>

            <div class="container">
            <div class="row">
            <div class="col-12">
            <div class="input-group">


            <Form.Control style={{background: "#00838f"}}  as="select" size="lg">
            <option>All Categories</option>
            <option>1 select</option>
            <option>2 select</option>
            <option>3 select</option>
            </Form.Control>

            <Form.Control as="select" size="lg">
            <option>All Places</option>
            <option>1 select</option>
            <option>2 select</option>
            <option>3 select</option>
            </Form.Control>

            <div class="input-group-append">
            <button class="btn btn-secondary btn-block"type="button">
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

            <div class="row d-flex justify-content-center">
            <div class="col-md-10">
            <div class="card p-3 py-4 Card">
            <h4 class= "advancedText">The Top store :</h4>
            <div class="row d-flex justify-content-center">
            </div>
            </div>
            </div>
            </div>

            <Carousel style={{ height: '30rem' }}>
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


            <div class="row d-flex justify-content-center">
            <div class="col-md-10">
            <div class="card p-3 py-4 Card">
            <div class="row g-3 mt-2">
            <div class="col-md-3">
            <div class="row d-flex justify-content-center">
            <div class="col-md-10">
            <div class="card p-3 py-4 Card">
            <div class="row g-3 mt-2">
            <div class="col-md-3">
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>

            </form>


        );
    }
}

export default Home;
