import React from 'react'
import "./footer.css";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

function Footer() {
  return (
    <>
    <footer>
      <div id="main-navbar" className="navar">
        <nav>
          <ul>
            <li>
            <Link to="about">About</Link>
            </li>
            <li>
            <Link to="/contactUs">Contact Us</Link>
            </li>
            <li>
            <Link to="/Privacypolicy">Privacy policy</Link>
            </li>
          </ul>
        </nav>
        
      </div>
      
    </footer>
     
     </>
  )
}

export default Footer
