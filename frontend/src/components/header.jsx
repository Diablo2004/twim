/* header component */
import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import UserServiceApi from "../api/UserServiceApi";

class Header extends Component {
  render() {
    const isUserLoggedIn = UserServiceApi.isUserLoggedIn();
    const isUserStaff = UserServiceApi.isUserStaff();
    const isUserAdmin = UserServiceApi.isUserAdmin();
    return (
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='/'>TWIM</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='container-fluid'>
            <Nav.Link href='/'>Home</Nav.Link>
            {/* <Nav.Link href="/locations">Locations</Nav.Link> */}
            {isUserLoggedIn && (
              <>
                {!isUserStaff && !isUserAdmin && (
                  <Nav.Link href='/myprofile'>My Profile</Nav.Link>
                )}
                {!isUserStaff && !isUserAdmin && (
                  <Nav.Link href='/mybookings'>My Bookings</Nav.Link>
                )}
                {!isUserStaff && !isUserAdmin && (
                  <Nav.Link href='/dashboard'>Book Now</Nav.Link>
                )}
                {isUserStaff && !isUserAdmin && (
                  <Nav.Link href='/staff'>Staff Dashboard</Nav.Link>
                )}
                {isUserAdmin && !isUserStaff && (
                  <Nav.Link href='/staff'>Admin Dashboard</Nav.Link>
                )}
              </>
            )}
            {isUserLoggedIn && (
              <NavItem className='ml-auto'>
                <Nav.Link onClick={UserServiceApi.logout}>Logout</Nav.Link>
              </NavItem>
            )}
          </Nav>
          <Nav>
            {!isUserLoggedIn && (
              <>
                <Nav.Link href='/signup'>Sign Up</Nav.Link>
                <Nav.Link href='/login'>Log in</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
