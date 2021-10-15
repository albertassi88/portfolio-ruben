import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import TodoProvider from './context/TodoProvider';
import { Home, About, Contacts, Projects, Skills } from './pages';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => { Aos.init({ duration: 2000 }); }, []);

  return (
    <TodoProvider>
      <BrowserRouter>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </BrowserRouter>
    </TodoProvider>
  );
}

export default App;
