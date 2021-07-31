import React from 'react'
import { Button, Container } from 'react-bootstrap';
import SectionTitle from '../SectionTitle';

import './style.css';

const ContactBanner = (props) => {
  return(
    <div id="contactBanner">
        <Container>
            <div className="contactBanner-wrapper">
                <SectionTitle 
                    className="contactBannerHeading"
                    heading="Let me help you"
                    subHeading="Have a project in mind"
                />
                <Button href="/contact" size="lg" className="contactBtn">Contact Now</Button>
            </div>
        </Container>
    </div>
   )

 }

export default ContactBanner