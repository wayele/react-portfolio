import React, { Component } from 'react';
import Jumbotron from '../Jumbotron';
import './style.css';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <h1> Contact Info</h1>
                <h4> Please contact me anytime by emailing at <a href="ayele.wub@gmail.com" >ayele.wub@gmail.com</a></h4>
                <h5> I can also be found on the social media platforms below </h5>
                <Jumbotron />
            </div>
        )
    }
}

export default Contact
