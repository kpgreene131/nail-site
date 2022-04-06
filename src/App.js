import './App.css';
import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <div className='pageContainer'>
      <Router>
        <Navbar />
        <div className = "contentWrapper">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
