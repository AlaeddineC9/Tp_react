import React from 'react'; // Importation de la librairie React

// Importation des composants
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Service from './components/Service.jsx';
import Portfolio from './components/Portfolio.jsx';
import Resume from './components/Resume.jsx';
import Headr from './components/headr.jsx';
import Footer from './components/Footer.jsx';

function App() {


  return (
    <>
      <Headr/>
      <About />
      <Resume />
      <Portfolio />
      <Service />
      <Contact />
      
      
      
      <Footer/>
    </>
  )
}

export default App
