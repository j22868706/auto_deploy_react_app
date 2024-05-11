import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Aboutme from './Components/Aboutme/Aboutme';
import Certification from './Components/Certification/Certification';
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Aboutme />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;