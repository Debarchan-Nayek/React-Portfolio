import React from 'react';
import SectionTitle from '../SectionTitle';
import { Button } from 'react-bootstrap';
import {MdEmail, MdLocalPhone, MdPlace} from 'react-icons/md';
import {BiLeftArrowCircle} from 'react-icons/bi';
import ContactinfoItem from './contactItem';
import ContactForm from './contactForm';
import Footer from '../Footer';

import './style.css';
import { Row, Col } from 'react-bootstrap';

const Contact = (props) => {
  return(
    <div className="contactPage" id="contact">
        <Button href="/" className="mb-5 mt-5"><BiLeftArrowCircle size="2x"/> Go Back to Home Page</Button>
        <SectionTitle 
            className="contactHeading" 
            heading="CONTACT"
            subHeading="get in Touch"
        />
        <Row className="contact-wrapper">
            <Col className="left-div">
                <ContactinfoItem 
                    icon={<MdLocalPhone />}
                    text="+91-8617495675"
                />
                <ContactinfoItem
                    icon={<MdEmail />}
                    text="dnayek2002@gmail.com"
                />
                <ContactinfoItem 
                    icon={<MdPlace />}
                    text="West Bengal, India"
                />                
            </Col>
            <Col  className="right-div">
                <ContactForm />
            </Col>
        </Row>

        <Footer />
    </div>
   )

 }

export default Contact