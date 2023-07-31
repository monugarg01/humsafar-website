import React from "react";
import "./header.css";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import About from "./about";
import humsafar  from '../assets/logo-homepage.png'
import instagram  from '../assets/instagram.png'
import fb  from '../assets/fb.png'
import whatsApp  from '../assets/whatsapp.png'
import tele  from '../assets/tele.png'
function Header() {
  return (
    <>
    <div className="top ">
      <div id="main-navbar" className="navbar">
        <div>
        <h2 className="logo"><Link to='/'><img src ={humsafar}/></Link></h2>
        </div>
        <nav>
          <ul>
            <li><a href="https://instagram.com/humsafarbhai_since2014?igshid=MzNlNGNkZWQ4Mg==" target="_blank"><img src={instagram}/></a>
            </li>
            <li>
            <a href="https://www.facebook.com/HUMSAFARBHAII?mibextid=ZbWKwL" target="_blank"><img src={fb}/></a>
            </li>
            <li>
             <a href="https://wa.me/919205323120" target="_blank"><img src={whatsApp}/></a>
            </li>
            <li>
             <a href="https://t.me/+m0i4xltrEzQzZWI9" target="_blank"><img src={tele}/></a>
            </li>
          </ul>
        </nav>
        
      </div>
      
    </div>
     
     </>
  );
}
export default Header;