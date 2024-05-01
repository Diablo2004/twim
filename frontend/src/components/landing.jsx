/* landing page component */
import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/landing.css";
import LandingBody from "./landingBody";
import UserServiceApi from "../api/UserServiceApi";

class LandingPage extends Component {
  render() {
    const isUserLoggedIn = UserServiceApi.isUserLoggedIn();
    const isUserStaff = UserServiceApi.isUserStaff();
    const isUserAdmin = UserServiceApi.isUserAdmin();
    return (
      <>
        <Container id='landing-page' fluid>
          <div id='catchphrase'>
            <h1>Twim VIT</h1>
            <h4>The ultimate cab sharing service</h4>

            {isUserLoggedIn && !isUserStaff && !isUserAdmin && (
              <>
                <Link to='/dashboard'>
                  <Button variant='warning' style={{ fontSize: "2vh" }}>
                    Book a ride now
                  </Button>
                </Link>
              </>
            )}
            {isUserLoggedIn && (isUserStaff || isUserAdmin) && (
              <>
                <Link to='/staff'>
                  <Button variant='warning' style={{ fontSize: "2vh" }}>
                    Manage System
                  </Button>
                </Link>
              </>
            )}
            {!isUserLoggedIn && (
              <>
                <Link to='/signup'>
                  <Button variant='warning' style={{ fontSize: "2vh" }}>
                    Sign Up Now
                  </Button>
                </Link>
              </>
            )}
          </div>
        </Container>
        <Container id='landing-main' fluid>
          <LandingBody />
        </Container>
      </>
    );
  }
}

export default LandingPage;
