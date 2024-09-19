import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Navi() {
  console.log('Navi is rendering'); 
  return (
    <div>
      <Navbar expand="lg" className="bg-dark">
      <Container fluid>
        <Navbar.Brand href="#" className='text-light fw-bold ms-4'>StreamiFY</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='text-light' />
        <Navbar.Collapse id="navbarScroll" className='text-light'>
          <Nav className="" style={{marginLeft:'520px'}}>
            <Link to="/" className='text-light  fw-bolder px-4 '>Home</Link>
            <Link to="/Movies" className='text-light  fw-bolder px-4'>Movies</Link>
            <Link to="/TvShows" className='text-light  fw-bolder px-4'>TV Shows</Link>
            <Link to="/Series" className='text-light  fw-bolder px-4'>Series</Link>
            <Link to="/About" className='text-light fw-bolder px-4'>About</Link>
            <Link to="/Contact" className='text-light  fw-bolder px-4'>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navi