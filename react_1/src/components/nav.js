import Home from './Pages/Home';
import About from './Pages/About';
import { Link, Routes, Route } from 'react-router-dom';

function Nav () {
return (
    <>
    <header className="navigationBar">
        <nav>
            <div className="banner">
            <div className="LogonPages">
            <img src="https://www.cognitoforms.com/file/pfgdAoA5A4t2OArO1cUWvt347oDwXXcsrDXstoOBOVRBcOHGmnbbNVyHucMhgDM6" />
            <ul className="Pages">
                <li><Link to= '/Home.'>Home</Link></li>
                <li><Link to='/About'>About us</Link></li>
            </ul>
            </div>
            <h1 className="title">FBLA</h1>
            </div>
        </nav>
        </header>
    <main>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </main>
    </>
)
}

export default Nav;