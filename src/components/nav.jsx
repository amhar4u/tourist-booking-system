import React, { useState } from 'react';
import {Outlet,Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
import '../css/nav.css'

 function Nav() {

  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

  
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };


  return (
    <div>
    <nav className="nav">
        <p className="tit">PRONTO</p>
      <ul className={active}>
        <li className="nav__item tit">
          <Link to="/" className="nav__link" >
            Home
          </Link>
        </li>
        <li className="nav__item tit">
          <Link to="/about" className="nav__link">
            About
          </Link>
        </li>
        <li className="nav__item tit">
          <Link to="/service" className="nav__link">
            Service
          </Link>
        </li>
        <li className="nav__item tit">
          <Link to="/contact" className="nav__link">
            Contact
          </Link>
        </li>
        <li className="nav__item tit">
          <Link to="/booking" className="nav__link">
            booking
          </Link>
        </li>
        <li className="nav__item">
          <Button href='/login' className="btn-custom " style={{color:'lightseagreen'}} >Login</Button>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
    <Outlet/>
    </div>
    
  );
}
export default Nav;
