/* footer component */
import React, { Component } from 'react';
import '../styles/footer.css';

export default class footer extends Component {
    render() {
        return (
            <div className="footer-parent">
                <div className="footer">
                    <p>Email us: <a href="mailto:travelbuddies@gmail.com">travelbuddies@gmail.com</a></p>
                    <p>Call us: (+91) 12340 05678</p>
                    <p>Visit us: Travel Buddies, VIT, Vellore</p>
                </div>
            </div>
        )
    }
}
