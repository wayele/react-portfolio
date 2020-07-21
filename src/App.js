import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Jumbotron from './components/Jumbotron';
// import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <Jumbotron />
        <About />
      </div>
    </Router>
  );
};

export default App;
