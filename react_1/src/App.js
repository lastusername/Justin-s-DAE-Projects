import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import Nav from './components/nav'
import { Link, Routes, route } from 'react-router-dom';
import React from 'react';
import Banner from './components/Banner';
import Join from './components/JoinPop';




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
      <Banner slides={slides} />
      <Card Name = "Justin" Work="SWE"/>
      <Card Name = "Kay" Work="PHP Guy"/>
      <Card Name = "Hello"Work= "Greetings" pgf=""/>
      <Join/>
    </div>
  );
}

export default App;
