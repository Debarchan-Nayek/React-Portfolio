import React from 'react'
import { Container } from 'react-bootstrap'
import SectionTitle from '../SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import projects from '../../data/projectData';
import 'swiper/swiper-bundle.min.css';

import './style.css';
import Projectitem from '../ProjectItem';

SwiperCore.use([Navigation]);

const Projects = (props) => {
  return(
    <div className="projectParent" id="projects">
        <Container>
            <SectionTitle
                className="projectHeading"
                heading="Projects"
                subHeading="Some of my recent works"
            />
            <div className="projects_allItems">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    breakpoints={{
                        768:{
                            slidesPerView: 1,
                        },
                        1200: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {projects.map((project, index) => {
                        if(index >=5 )return;
                        return(
                            <SwiperSlide key={project.id}>
                                <Projectitem 
                                    title={project.name}
                                    img={project.img}
                                    desc={project.desc}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </Container>
    </div>
   )

 }

export default Projects