import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "B Organics",
      technologies: <>
        <span className="break-line">Frontend: React.js, HTML, CSS, Bootstrap</span><br />
        <span className="break-line">Backend: Node.js, Express.js</span><br />
        Database: MongoDB<br />
        Other Tools: Git, GitHub for version control
      </>,
      description: "I worked on the development of the e-commerce platform for an organic products company B Organics, which can be visited at www.borganics.in. The website consists of several key components Landing Page, Home Page, Shop, Contact, and About Us Landing Page & Home Page: The landing page is integrated with the home page, where products are showcased along with their benefits, sizes, and prices. It highlights the company's reputation and includes a footer with links to the company's social media platforms, privacy policy, order damage rules, and contact details. Footer Component: The footer contains links to the company's social media pages, allowing users to navigate directly to these platforms. It also includes data privacy policies, order damage rules, and contact information. Shop Component: This component categorizes products for easy navigation. Users can view all products in one place and select specific categories. On selecting a product, users are routed to the product details page, where they can view detailed information, choose the quantity and size, and add items to their cart.Add to Cart & Checkout: In the cart component, users can see the selected product details and the total price. By clicking the 'Buy' button, users are taken to the checkout page where they can review their selections, enter their shipping details (address, phone number, email, pin code), and send the data to the server for order processing. After placing an order, users can check their order details through the admin component at www.borganics.in/admin.Contact Component: This component includes a form with a POST method to handle customer queries. Any issues or questions submitted by customers are sent directly to the company's email. About Us Component: This section provides a detailed explanation of the company's purpose, goals, and market objectives, offering transparency and building trust with users.Visit Website: B Organics",
      link: "https://www.borganics.in",
      images: [
        "https://res.cloudinary.com/drevfgyks/image/upload/v1718722958/People/Screenshot_2024-06-18_202131_ni3uno.png",
        "https://res.cloudinary.com/drevfgyks/image/upload/v1718722960/People/Screenshot_2024-06-18_202222_s2nuwn.png",
        "https://res.cloudinary.com/drevfgyks/image/upload/v1718722958/People/Screenshot_2024-06-18_202413_dvcha7.png",
        "https://res.cloudinary.com/drevfgyks/image/upload/v1718722956/People/Screenshot_2024-06-18_203104_qqtqve.png",
        "https://res.cloudinary.com/drevfgyks/image/upload/v1718722951/People/Screenshot_2024-06-18_202459_f89o3b.png",
        "https://res.cloudinary.com/drevfgyks/image/upload/v1718722951/People/Screenshot_2024-06-18_202315_uxhmqd.png"
      ]
    },
    {
      title: "Tasty Food",
      description: "I develop it static website for the food service its name is tasty food implemented landing page white choose as explore menu delivery and payment follow us these four components I expanded in detail on tasty food services in this website landing page in that I explain it all components at one place that is landing page it's means homepage why choose as in this page service and food providing by tasty food I explain it here explore menu page I showing type of food services what type of food available here I am showing here, in delivery and payment page I am showing payment methods and delivery options like visa platinum credit card debit card internet banking like that, in follow us page implemented social media navigations its icons when we click on it weekend redirect to the tasty food social media's but I didn't given link because this is statistic website also I added footer page in that I given contact details company logo company email ID and address social media I can't and menu all things I mentioned in footer page also I added carousel for any offers and new products advertisements on home page that is landing page  and thank you so much check once visit the website",
      technologies: "Frontend: React.js, HTML, CSS, Bootstrap",
      link: "https://www.tastyfood.com",
      images: [
        "https://res.cloudinary.com/drevfgyks/image/upload/v1718723359/People/Screenshot_2024-06-18_203443_rgwdn3.png",
        "https://res.cloudinary.com/drevfgyks/image/upload/v1718723348/People/Screenshot_2024-06-18_203533_s9f1za.png",
        "https://res.cloudinary.com/drevfgyks/image/upload/v1718723341/People/Screenshot_2024-06-18_203658_kg7sfn.png",
        "https://res.cloudinary.com/drevfgyks/image/upload/v1718723340/People/Screenshot_2024-06-18_203724_cr3gk3.png"
      ]
    }
  ];

  const Project = ({ project }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }, [project.images.length]);

    const handleSlideTo = (index) => {
      setActiveIndex(index);
    };

    return (
      <>
        <div className="project-container col-12">
          <div
            id={`carousel-${project.title.replace(/\s+/g, '-')}`}
            className="carousel slide col-6"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSlideTo(index)}
                  className={index === activeIndex ? 'active' : ''}
                  aria-current={index === activeIndex ? 'true' : ''}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {project.images.map((url, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                >
                  <img
                    src={url}
                    className="d-block w-100 animate__animated animate__fadeIn"
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#carousel-${project.title.replace(/\s+/g, '-')}`}
              data-bs-slide="prev"
              onClick={() => setActiveIndex(activeIndex === 0 ? project.images.length - 1 : activeIndex - 1)}
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#carousel-${project.title.replace(/\s+/g, '-')}`}
              data-bs-slide="next"
              onClick={() => setActiveIndex(activeIndex === project.images.length - 1 ? 0 : activeIndex + 1)}
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="col-6 techsills">
            <h2>{project.title}</h2>
            <p>
              Technologies Used:<br />
              {project.technologies}
            </p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visit Website
            </a>
          </div>
        </div>
        <div className="text-content col-12">
          <div className="pro-descri">
            <p className="projectsDes">{project.description}</p>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
