/* Overview component in landing page */
import React, { Component } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank, faCar, faPhone, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import '../../styles/overview.css';

export default class Overview extends Component {
    render() {
        return (
            <section className="section-item">
                <div>
                    <h2>Overview</h2>
                    <Container fluid style={{ marginTop: '3vh' }}>
                        <Row>
                            <Col>
                                <div className="how-it-works">
                                    <h3>Sign up</h3>
                                    <p>Simply Sign up for free and Log in to our application</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="how-it-works">
                                    <h3>Book</h3>
                                    <p>Checkout your nearest cars here, then head over to dashboard, pick a time range to get started!</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="how-it-works">
                                    <h3>Drive</h3>
                                    <p>Enjoy driving your car</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                        </Row>
                    </Container>
                    
                </div>
            </section>
        );
    }
}
