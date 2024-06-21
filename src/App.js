import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './componets/Home';
import Projects from './componets/Projects';
import Contact from './componets/Contact';
import About from './componets/AboutMe';
import Navbar from './componets/navbar';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
