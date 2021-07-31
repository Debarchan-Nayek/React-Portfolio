import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import './style.css';

const Footer = (props) => {
  return(
    <div className="parentFooter">
      <Container>
            <div className="social-icons">
            <Row>
              <Col>
                <a className="icon-links" href="https://www.facebook.com/Debarchan-Nayek ">
                  <FaFacebook className="fontIcon" />
                </a>
              </Col>
              <Col>
                <a className="icon-links" href="https://www.instagram.com/deb_nayek">
                  <FaInstagram className="fontIcon" />
                </a>
              </Col>
              <Col>
                <a className="icon-links" href="https://www.linkedin.com/in/debarchan-nayek-77b106120">
                  <FaLinkedin className="fontIcon" />
                </a>
              </Col>
              <Col>
                <a className="icon-links" href="https://github.com/Debarchan-Nayek">
                  <FaGithub className="fontIcon" />
                </a>
              </Col>
              <Col>
                <a className="icon-links" href="https://twitter.com/NayekDebarchan">
                  <FaTwitter className="fontIcon" />
                </a>
              </Col>
            </Row>
            <p className="pt-5">Copyright © 2021 Debarchan Nayek.All Rights Reserved</p>
            </div>
      </Container>
    </div>
   )

 }

export default Footer