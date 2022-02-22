import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import Logo from '../../images/logo.png'
import "./NaviBar.css"

export default function NaviBar() {
  return (
    <>
      <div className='navbar-container'>
        <div className='nav-content'>
          <Navbar collapseOnSelect expand='lg' bg='light' variant="light">
            <Navbar.Brand className='mo-5 logo-item'>
              <img className='logo-image' src={Logo} alt='logo' />

            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='menu-link'>
                <Nav.Link bsStyle="menu-link--item">НOME</Nav.Link>
                <Nav.Link className='menu-link--item'>ABOUT</Nav.Link>
                <Nav.Link className='menu-link--item'>CLASESS</Nav.Link>
                <Nav.Link className='menu-link--item'>PRICES</Nav.Link>
              </Nav>

            </Navbar.Collapse >
          </Navbar >
        </div>
      </div>



    </>


  )
}