import React from 'react';
import SectionTitle from '../SectionTitle';
import ServicesSectionItem from '../ServicesSectionItem/servicesSectionItem';
import { MdCode, MdDesktopMac, MdLightbulbOutline } from 'react-icons/md';

import './style.css';

const Services = (props) => {
  return(
        <div className="serviceContainer" id="services">
                <div className="servicesDiv">
                    <SectionTitle
                        heading="Services"
                        subHeading="What I will do for you"
                    />

                    <div className="services_allItems">
                    <ServicesSectionItem 
                        icon={<MdDesktopMac className="svg_icons"/>}
                        heading={<>WEB DESIGN</>}
                        text={<>Design isn't just what a product looks like and feels like on the outside. Design encompasses the internal functionality 
                                of a product as well as the overall user experience. I strive to design interfaces and experiences that people can enjoy on 
                                all digital mediums</>}
                    />
                    <ServicesSectionItem
                        icon={<MdCode className="svg_icons"/>}
                        heading={<>DEVELOPMENT</>}
                        text={<>With a strong foundation in Computer Science, I'm passionate about web design and development. I'm a hardworking MERN Stack developer
                                with a flair of creating elegant solutions in minimum time. As a developer, I hope to write clean, readable non repeating code that 
                                can be used by others and leveraged to create beautiful software.</>}
                    />
                    <ServicesSectionItem 
                        icon={<MdLightbulbOutline className="svg_icons"/>}
                        heading={<>INVOLVEMENT</>}
                        text={<>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius est at interdum dictum. Quisque tincidunt 
                                convallis magna, sit amet iaculis erat sollicitudin non. In non elit pretium, blandit tellus ultrices, maximus metus. 
                                Vestibulum eget accumsan sem.</>}
                    />
                    </div>
                </div>
        </div>
   )

 }

export default Services