import { Button } from 'react-bootstrap';
import React from 'react'

import './style.css';

const Resume = (props) => {
  return(
    <div className="resumeDiv">
        <div className="resumeContent">
            <h1 className="reume-heading">Check out my Resume!</h1>
            <a download href={require('../../data/resume.pdf').default}>
              <Button href="" size="lg" className="DownloadBtn">Download</Button>
            </a>
        </div>
    </div>
   )

 }

export default Resume