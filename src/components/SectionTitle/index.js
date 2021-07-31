import React from 'react';
import "react-bootstrap";
import './style.css';

const SectionTitle = (props) => {
  return(
    <div className="sectionTitle">
        <p>{props.subHeading}</p>
        <h2 className="sectionTitleHeading">{props.heading}</h2>
    </div>
   )

 }

export default SectionTitle