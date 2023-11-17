import React from 'react';
import logo from './logo.svg';
import './App.css';
import Application from './components/application/Application';
import { Skills } from './components/skills/skills';

function App() {
  const skills = ['HTML','CSS','Javascript']
  
  return (
    <div className="App">
     <Application/>
     <hr />
     <Skills skills={skills}/>
    </div>
  );
}

export default App;
