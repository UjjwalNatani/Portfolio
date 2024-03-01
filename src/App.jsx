import './App.css';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import { About_me } from './Components/About_me';
import { Skills } from './Components/Skills';
import { Project } from './Components/Projects';
import { Contact } from './Components/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='bg-primary-subtle'>

      <Routes>
        <Route path='/'></Route>
        <Route path='/About-me' element={<About_me />}></Route>
        <Route path='/Skills' element={<Skills />}></Route>
        <Route path='/Project' element={<Project />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
      </Routes>

      <Navbar />
      <Home />
      <About_me />
      <Skills />
      <Project />
      <Contact />
    <div style={{width:'99vw', height:'50px', backgroundColor: 'rgba(7, 11, 18, 0.9)'}}></div>

    </div>
  );
}

export default App;
