// src/components/Home.js
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Projects from '../Projects';
import Skills from '../Skills';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';

const Home = () => {
  const carouselRef = useRef(null);
  useEffect(() => {
    // Initialize Bootstrap carousel when component mounts
    if (window.bootstrap) {
      const carousel = new window.bootstrap.Carousel(carouselRef.current, {
        interval: 3000, // Auto-play interval in milliseconds (3 seconds)
        wrap: true, // Allow wrapping from last to first slide
      });
      return () => carousel.dispose(); // Cleanup when component unmounts
    }
  }, []);

  return ( 
    <>
    <div className='Home_Container'>
    <div className="nav_container">
      <div className="text-center d-flex justify-content-center align-items-center ladingpage">
        <div className="row col-12">
          <div className="social-icons col-md-6">
            <div className="ml-5">
              <h1 className="welcome">Hello, I'm Sailu Aettari</h1>
              <p className="my-goal">
                I am passionate about coding and always eager to learn new technologies. My goal is to help businesses
                and individuals bring their ideas to life through innovative web solutions.
              </p>
              <div className="social-links">
                <a href="https://www.instagram.com/a.nanisai/" className="instagram" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://x.com/a_nanisai" className="twitter" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/aettarisailu/" className="linkedin" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://wa.me/9948946658" className="whatsapp" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
            <a href="https://drive.google.com/file/d/1Xz4CN4VcD_ChN2_O1Qhg9dYWwpWRaewY/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary hiremebutton mt-5">Hire me</button>
            </a>
          </div>
          <div className="myphoto-container col-md-6">
            <img
              src="https://res.cloudinary.com/drevfgyks/image/upload/v1718913839/People/20210426133855_IMG_7398-01_xnhb3d.png"
              className="profile ml-5"
              alt="profile"
            />
          </div>
        </div>
      </div>      
      </div>    
    </div>
    <Skills/>
    <div className="projects-section container mt-5 mb-5">
        <h2 className="text-center mb-5">Projects</h2>
        <div id="projects-carousel" ref={carouselRef} className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://res.cloudinary.com/drevfgyks/image/upload/v1718722958/People/Screenshot_2024-06-18_202131_ni3uno.png" className="d-block w-100" alt="Project 1" />
              <div className="caousl-caption d-none d-md-block">
                {/* <h5>Project 1</h5>
                <p>www.borganics.in</p> */}
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://res.cloudinary.com/drevfgyks/image/upload/v1718723359/People/Screenshot_2024-06-18_203443_rgwdn3.png" className="d-block w-100" alt="Project 2" />
              <div className="carouel-caption d-none d-md-block">
                {/* <h5>Project 2</h5>
                <p>Short description of Project 2.</p> */}
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://res.cloudinary.com/drevfgyks/image/upload/v1718723348/People/Screenshot_2024-06-18_203533_s9f1za.png" className="d-block w-100" alt="Project 3" />
              <div className="caroel-caption d-none d-md-block">
                {/* <h5>Project 3</h5>
                <p>Short description of Project 3.</p> */}
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#projects-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#projects-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    <Footer/>
    </>
  );
};

export default Home;
