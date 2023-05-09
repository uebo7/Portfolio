import './App.css';
import { Routes, Route } from 'react-router-dom'
import React from 'react';
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Skill from './pages/Skill'
import Start from './pages/Start'
import LinkedInImg from './img/linkedinlogo.png'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/contact' element={<Contact name='LinkedInProfile' img={LinkedInImg}  />} />
      </Routes>
    </div>
  );
}

export default App;
