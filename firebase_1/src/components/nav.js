import Home from '../Pages/Home';
import About from '../Pages/About';
import SignUp from '../Pages/SignUp';
import SignIn from '../Pages/SignIn';
import { Link, Routes, Route } from 'react-router-dom';
import './componentsCSS/nav.css';


function Nav () {
return (
    <>
    <header className="navigationBar">
        <nav>
            <div className="banner">
            <div className="LogonPages">
            <img src="https://www.cognitoforms.com/file/pfgdAoA5A4t2OArO1cUWvt347oDwXXcsrDXstoOBOVRBcOHGmnbbNVyHucMhgDM6" />
            <ul className="Pages">
                <li><Link to= '/Home' className="link-style">Home</Link></li>
                <li><Link to='/About'className="link-style">About Us</Link></li>
            </ul>
            </div>
            <h1 className="title">FBLA</h1>
            <ul className="Pages">
              <li><Link to= '/SignIn' className="link-style">Sign In</Link></li>
              <li><Link to='/SignUp'className="link-style">Sign Up</Link></li>
            </ul>
            </div>
            
        </nav>
        </header>
    <main>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </main>
    </>
)
}

export default Nav;