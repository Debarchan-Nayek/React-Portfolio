import React from 'react';
import { Container } from 'react-bootstrap';
import {FaHtml5, FaCss3Alt, FaJsSquare, FaNode, FaReact} from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di'
import SectionTitle from '../SectionTitle';

import aboutImg from '../../images/my-img.jpg';

import './style.css'


const About = (props) => {
  return(
    <div className="pt-5" id="about">
        <Container className="aboutContainer">
            <div className="aboutSection_left">
                <SectionTitle 
                    className="section-title"
                    subHeading="Let me introduce myself..."
                    heading="About Me"
                />
                <p className="about-para pt-2" style={{width: "70%"}}>
                    Hello!My name is Debarchan Nayek and I'm a CSE Undergrad student from KIIT University, India. 
                    I'm a Full Stack Web Developer and designer, who loves to develop and design unique, beautiful and user-friendly Websites and Web Applications. I'm a great 
                    team player and have a flair of providing elegant solutions in minimum time.
                    <br />Here are a few technologies I've been working with recently:<br />
                </p>
                        <ul className="skills-list">
                            <li>
                                HTML5 <FaHtml5/>
                            </li>
                            <li>
                                CSS3 <FaCss3Alt/>
                            </li>
                            <li>
                                Javascript(ES6+) <FaJsSquare/>
                            </li>
                            <li>
                                Node.js <FaNode/>
                            </li>
                            <li>
                                React.js <FaReact/>
                            </li>
                            <li>
                                MongoDB <DiMongodb/>
                            </li>

                        </ul>
            </div>
            <div className="aboutSection_right">
                <img src={aboutImg} alt="my-img"/>
            </div>
        </Container>
    </div>
   )

 }

export default About