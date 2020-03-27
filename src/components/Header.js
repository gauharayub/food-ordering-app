import React from 'react';
import '../css/App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Checkout from './Checkout/Checkout'

function Header(props){
   
    return (
//navbar of food ordering app...
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="#home">FoodHUB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#">Contact Us</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link eventKey={2} href="#">
                About Us
            </Nav.Link>    
            <Checkout itemlist ={props.list}/>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Header