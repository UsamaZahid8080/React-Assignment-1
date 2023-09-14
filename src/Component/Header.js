import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import images1 from './images/logo.png';
import images2 from './images/slide-img.png';
import "./Header.css"
import { FaSistrix } from "react-icons/fa";
import Button1 from './Button1';
function Header() {
  return (
    <>
      <div className='secondsection'>
        <Navbar expand="lg" className="navbar">
          <Container fluid>
            <Navbar.Brand href="#"><img className="navbarlogo mt-1 ms-3" src={images1} alt='' /></Navbar.Brand><h3 className='fw-bolder mt-3 logoName'>TROPIKO</h3>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0 fw-bold me-3"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1" className='navs'>Home</Nav.Link>
                <Nav.Link href="#action2" className='navs'>Fruite</Nav.Link>
                <Nav.Link href="#action2" className='navs'>Services</Nav.Link>
                <Nav.Link href="#action2" className='navs'>Contact us</Nav.Link>
              </Nav>
              <Form className="d-flex">

                <FaSistrix className='search-icon' />

                <Button className='f-button btn'>GET A QUOTE</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-6 main-div'>
              <h1 className='fw-bolder mt-4'>Welcome to<br />Our Fruits Shop</h1>
              <p className='text-wrap'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using<br />Lorem Ipsum is that it has a more-or-less normal distribution<br />of letters, as opposed to using 'Content here, content here<br />making it look like readable English.</p>
              <Button1 style={{ backgroundColor: "#FF4500", color: "white", border: "none" }}>SHOP NOW</Button1>
              <Button1 style={{ backgroundColor: "black", color: "white", border: "none" }}>CONTACT US</Button1>
            </div>
            <div className='col-6'>
              <img src={images2} alt='' className='img1' />
            </div>


          </div>
        </div>
      </div>
    </>
  );
}



export default Header