import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';

const Projects = () => {
  const images = [
    "https://res.cloudinary.com/drevfgyks/image/upload/v1718722958/People/Screenshot_2024-06-18_202131_ni3uno.png",
    "https://res.cloudinary.com/drevfgyks/image/upload/v1718722960/People/Screenshot_2024-06-18_202222_s2nuwn.png",
    "https://res.cloudinary.com/drevfgyks/image/upload/v1718722958/People/Screenshot_2024-06-18_202413_dvcha7.png",
    "https://res.cloudinary.com/drevfgyks/image/upload/v1718722956/People/Screenshot_2024-06-18_203104_qqtqve.png",
    "https://res.cloudinary.com/drevfgyks/image/upload/v1718722951/People/Screenshot_2024-06-18_202459_f89o3b.png",
    "https://res.cloudinary.com/drevfgyks/image/upload/v1718722951/People/Screenshot_2024-06-18_202315_uxhmqd.png",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Adjust interval time in milliseconds (e.g., 3000 for 3 seconds)

    return () => clearInterval(interval);
  }, [images.length]);

  const handleSlideTo = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="projects-container">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSlideTo(index)}
              className={index === activeIndex ? 'active' : ''}
              aria-current={index === activeIndex ? 'true': ''}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {images.map((url, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
              <img src={url} className="d-block w-100" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={() => setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1)}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={() => setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1)}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="text-content">
        <h2>B organics</h2>
        <p>B Organics is an e-commerce platform specializing in organic products, offering a seamless 
          shopping<br/> 
          experience for environmentally conscious consumers. The website allows users to browse, 
          select, <br/>and purchase organic products through a user-friendly interface.</p>
          <p>Technologies Used:<br/>
            Frontend: React.js, HTML, CSS, Bootstrap<br/>
            Backend: Node.js, Express.js<br/>
            Database: MongoDB<br/>
            Other Tools: Git, GitHub for version control</p>
        <a href="https://www.borganics.in" className="btn btn-primary">Visit Website</a>
      </div>
    </div>
  );
}

export default Projects;
