import React from 'react'
import '../css/footer.css'
import {Outlet,Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className="footer navigation">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>Quick Links</h5>
            <ul className="list">
                <li className="line"><Link to="/" >Home</Link></li>
                <li className="line"> <Link to="/about"> About</Link></li>
                <li className="line"> <Link to="/service"> Service</Link></li>
                <li className="line"> <Link to="/contact"> Contact</Link></li>  
            </ul>
          </div>
          <div className="col">
            <h5>Contact Details</h5>
            <ul className="list">
              <li className="line"> Opening Hours: 7 days 24 Hours</li>
              <li className="line"> Contact: +94776657107</li>
              <li className="line">Email: prontotours@gmail.com</li>
            </ul>
          </div>
          <div className="col">
            <h5>Follow Us</h5>
            <ul className="list">
              <li className="line"><a href="http://www.google.com">Facebook</a></li>
              <li className="line"><a href="http://www.google.com">Twitter</a></li>
              <li className="line"><a href="http://www.google.com">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <Outlet/>
    </>
  )
}

export default Footer
