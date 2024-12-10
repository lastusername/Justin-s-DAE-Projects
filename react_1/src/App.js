import logo from './logo.svg';
import './App.css';
import Nav from './components/nav'
import { Link, Routes, Route } from 'react-router-dom';
import React from 'react';
import Banner from './components/Banner';
import Join from './components/JoinPop';
import Profile from './Pages/Profile';



const slides = [
  {
    image: './img/banner',
    alt: '',
    title: 'Explore the Great Outdoors',
    description: 'Discover breathtaking landscapes and natural wonders.'
  },
  {
    image: './img/banner2',
    alt: '',
    title: 'Embrace the Future',
    description: 'Stay ahead with cutting-edge technology and innovation.'
  },
  {
    image: 'https://source.unsplash.com/random/1600x900/?business',
    alt: '',
    title: 'Grow Your Business',
    description: 'Unlock your potential with our expert business solutions.'
  }
];


function App() {
  
  return (
    <div className="App">
      <Nav />
     


    </div>
  );
}

export default App;
