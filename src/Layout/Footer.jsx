import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoGameController } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <section className='footer-container'>
      <div className='center'>
        <div className='container footer-top'>
          <div>
            <p>Ready to get started?</p>
            <p>Talk to us Today</p>
          </div>

          <div>
            <NavLink to="/contact">
              <button className="get">Get Started</button>
            </NavLink>
          </div>
        </div>

      </div>

      <footer>
        <div className="footer-section grid grid-four-cols">

          <div className="footer-content">
            <h3>BuyNest E-commerce</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, blanditiis!</p>
          </div>

          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <input type="text" placeholder='YOUR E-MAIL' />
            <button className='get'>subscribe</button>
          </div>

          <div className="footer-social">
            <div className="icon-box">
              <IoGameController className='icons' />
            </div>
            <div className="icon-box">
              <FaInstagram className='icons' />
            </div>
            <div className="icon-box">
              <FaYoutube className='icons' />
            </div>
          </div>

          <div className="footer-call">
            <p>Call Us</p>
            <p>+91 9302886244</p>
          </div>

        </div>
      </footer>
    </section>
  )
}

export default Footer;
