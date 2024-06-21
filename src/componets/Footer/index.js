import React from 'react';
import './Footer.css'; // Import your Footer-specific CSS file here
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-logo" href="#">
            <Link to="/" ><img src="https://res.cloudinary.com/drevfgyks/image/upload/v1694333811/20230213_232002_p6djmh.png" alt="Logo" className='company-logo'/></Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-contact">
              <h3>Contact</h3>
              <ul className="list-unstyled">
                <li><i className="fa fa-phone"></i> 9948946658</li>
                <li><i className="fa fa-envelope"></i> <a href="mailto:nanisaiofficial5@gmail.com">nanisaiofficial5@gmail.com</a></li>
                <li><i className="fa fa-linkedin"></i> <a href="https://www.linkedin.com/in/aettarisailu/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-menu">
              <h3>Menus</h3>
              <ul className="list-unstyled">
                <li><a href="#">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About Me</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-social">
              <h3>Follow Me</h3>
              <ul className="list-unstyled">
                <li><a href="https://www.linkedin.com/in/aettarisailu/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                {/* Add more social icons here as needed */}
              </ul>
            </div>
          </div>
        </div>
        {/* <hr />
        <div className="row">
          <div className="col-12">
            <p className="small text-center text-muted">© {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
