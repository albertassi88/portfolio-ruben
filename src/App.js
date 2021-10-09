import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => { Aos.init({ duration: 2000 }); }, []);

  return (
    <BrowserRouter>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </BrowserRouter>
  );
}

export default App;
