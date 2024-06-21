
import Navbar from '../navbar';
import React from 'react';

function Contact() {
  return (
    <>
    <div className="container contact-container mt-5">
      <h2 className="text-center mb-5">Contact</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form action="https://formsubmit.co/sailuaettari@gmail.com" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;
