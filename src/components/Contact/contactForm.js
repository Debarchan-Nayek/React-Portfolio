import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

import './contactForm.css';

const ContactForm = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleValidation = (e) => {
        if(!name|| !email|| !message){
            alert("Please fill up all the columns before submitting.");
            return false;
        }else{
            alert("Form Submitted");
            return true;
        }
    }

    const sendMail = (e) => {
        e.preventDefault();

        if(handleValidation()){
            emailjs.sendForm( 
                'service_e8wt13j', 
                'template_yn0mg8q', 
                e.target, 
                'user_g6uiI8YTyrS0or0avGF2h' 
                ).then(res => {
                    console.log(res);
                }).catch(err => console.log(err));
    
                e.target.reset();
        }
    }

  return(
    <div>
        <Form onSubmit={sendMail}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    type="text" 
                    name="name"
                    placeholder="Enter your name" 
                    onChange= {(e) => setName(e.target.value)}  
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    name="user_email"
                    placeholder="Enter your email ID" 
                    onChange = {(e) => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control 
                    as="textarea" 
                    name="message"
                    rows={3}
                    placeholder="Enter your mesage" 
                    onChange = {(e) => setMessage(e.target.value)}
                />
            </Form.Group>
            <Button className="formSubmitBtn" type="submit">Submit</Button>
        </Form>
    </div>
   )

 }

export default ContactForm