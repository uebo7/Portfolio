import './App.css';
import { Routes, Route } from 'react-router-dom'
import React from 'react';
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Project'
import Skill from './components/Skill'
import Start from './components/Start'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
