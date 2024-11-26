import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import Nav from './components/nav'
function App() {
  return (
    <div className="App">
      <Nav />
      <Card Name = "Justin" Work="SWE"/>
      <Card Name = "Kay" Work="PHP Demon"/>
      <Card Name = "Hello"Work= "Greetings"/>
    </div>
  );
}

export default App;
