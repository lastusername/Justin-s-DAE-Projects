import logo from './logo.svg';
import './App.css';
import Nav from './components/nav'
import { Link, Routes, Route } from 'react-router-dom';
import React from 'react';
import Banner from './components/Banner';
import Join from './components/JoinPop';
import Profile from './Pages/Profile';




function App() {
  
  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
