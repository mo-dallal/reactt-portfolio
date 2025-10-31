import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Portfolio selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;