import React from 'react'
import './Footer.css'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
   <section className="f-wrapper">
    <div className="paddings innerWidth flexCenter f-container">
        {/* left side*/}
        <div className="flexColStart f-left">
            <img src="./logo.png" alt=""width={120} />
            <p className='secondaryText'>
              &#169;
              Boulotoes, All Right Reserved.
            </p>
        </div>
        <div className="flexColStart f-right">
          <span className='secondaryText'>
          Made By Boulotoes
          </span>
          <div className="flexCenter f-menu">
          <NavLink to="/services">Services</NavLink><a href="mailto:boulotoes@gmail.com">Contact</a><NavLink to="/projects">Projects</NavLink>
          </div>
        </div>
    </div>
   </section>
  )
}

export default Footer