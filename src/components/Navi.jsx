import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navi() {
  return (
    <div><Navbar expand="lg" className="bg-dark py-3">
    <Container fluid>
      <Navbar.Brand className='text-danger ps-5' href="#">StreamiFY</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0 "
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 border border-danger bg-dark text-danger"
            style={{ width: "500px", color: "red !important" }}
            aria-label="Search"
          />
          <Button variant="outline-danger" >Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default Navi