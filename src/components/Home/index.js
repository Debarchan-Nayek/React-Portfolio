import React from 'react';
import Particles from 'react-particles-js';
import NavBar from '../NavBar';
import Header from '../Header';
import About from '../About';
import Services from '../Services';
import Projects from '../Projects';
import Resume from '../Resume';
import ContactBanner from '../ContactBanner';
import Footer from '../Footer';


const Home = (props) => {
  return(
    <>
    <Particles 
      params={{
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "circle",
            stroke:{
              width: 6,
              color: "#f9ab00"
            }
          }
        }
      }} 
     />
    <NavBar />
    <Header />
    <About />
    <Services />
    <Projects />
    <Resume />
    <ContactBanner />
    <Footer />
  </>
   )

 }

export default Home