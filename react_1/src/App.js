import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import Nav from './components/nav'
import { Link, Routes, route } from 'react-router-dom';
import { useState } from "react";

function App() {
  let [number, setNumber] = useState(0);

  function Display() {
  return setNumber(("This is the text number"+number+". Thank you."));
  }

  return (
    <div className="App">
      <Nav />
      <Card Name = "Justin" Work="SWE"/>
      <Card Name = "Kay" Work="PHP Demon"/>
      <Card Name = "Hello"Work= "Greetings" pgf=""/>
      <button onClick={Display}>Click</button>
    </div>
  );
}

export default App;
