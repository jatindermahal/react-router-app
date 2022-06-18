//import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import './navigation.css'

function Navigation(){
    return (<Navbar className="nav-bs" variant="dark" fixed="top" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">React App</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/hello">Hello</Nav.Link>
           
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>)
}

export default Navigation;