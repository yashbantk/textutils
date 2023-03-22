
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(17 27 36)';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }

  }
  return (
    <>
      <Navbar title="textutils" mode={mode} togglemode={togglemode} />
      <div className="container my-3">
        <Textform heading="heading" mode={mode} />

      </div>


    </>
  );
}

export default App;
