import React, {Component} from 'react';
import Form from './Form';

class Contact extends Component {
    render() {
        return (
            <div className="container text-center">
                <h2>Welcome to Contact Us</h2>
                <Form />
            </div>
        )
    }
}

export default Contact;