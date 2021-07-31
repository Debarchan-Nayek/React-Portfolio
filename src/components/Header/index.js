import React from 'react';
import Typed from "react-typed";
import { Button } from 'react-bootstrap';
import './style.css';


const Header = (props) => {
  return(
    <div className="header-wraper" id="home">
        <div className="main-info">
            <h1 className="">Hello! I'm Debarchan </h1>
            <Typed 
                className="typed-text"
                strings={["Web Developer", "Web Designer", "Freelance Developer"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            <Button href="/contact" size="lg" className="mt-5 contactBtn">CONTACT ME</Button>
        </div>
    </div>
   )

 }

export default Header