import React from 'react'

import './style.css'

const Projectitem = (props) => {
  return(
    <div className="parentProjectitem">
        <img className="projectItem_img" src={props.img} alt="ahah" />

        <div className="projectItem_info mt-2 p-2">
            <h3 className="projectItem_title">{props.title}</h3>
            <p className="projectItem_desc">{props.desc}</p>
        </div>
    </div>
   )

 }

export default Projectitem