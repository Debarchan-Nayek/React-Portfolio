import React from 'react';

import './contactItem.css';

const ContactinfoItem = (props) => {
  return(
    <div className="contactInfoItem">
        <div className="icon">{props.icon}</div>
        <div className="info">
            <p>{props.text}</p>
        </div>
    </div>
   )

 }

export default ContactinfoItem