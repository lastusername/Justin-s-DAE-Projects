import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn.js'
import {useState} from "react";
import SignUp from './components/SignUp.js';

function App() {
  let [signUp, setSignUp] = useState(<SignIn />)

  function Register() {
    return setSignUp ((<SignUp />));
  }

  return (
    <div className="App">
   {signUp}
   <p className="mt-10 text-center text-sm/6 text-gray-500">
       Not a member?{' '}
          <button onclick={Register}><a className="font-semibold text-indigo-600 hover:text-indigo-500">
            Start a 14 day free trial
          </a>
          </button>
            </p>
    </div>
  );
}

export default App;
