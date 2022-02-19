import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function NaviBar() {
  return (
    <>

      <Navbar collapseOnSelect expand='lg' bg='light' variant="light">
        <Navbar.Brand>
          <img className='logo-image' src='/images/logo.png' alt='logo-image' />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link>НOME</Nav.Link>
            <Nav.Link>ABOUT</Nav.Link>
            <Nav.Link>CLASESS</Nav.Link>
            <Nav.Link>PRICES</Nav.Link>
          </Nav>
          <Button variant='secondary' size='sm' className='me-2'>Log in</Button>
          <Button variant='secondary' size='sm'  >Sign out</Button>
        </Navbar.Collapse >
      </Navbar >
      <Container fluid >

      </Container>
    </>


  )
}