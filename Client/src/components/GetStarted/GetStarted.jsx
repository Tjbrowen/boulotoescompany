import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>
                    Get Started With Boulotoes
               </span>
                 
                <button className="button">
                    <a href='mailto:boulotoes@gmail.com'> Get A Quote</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted