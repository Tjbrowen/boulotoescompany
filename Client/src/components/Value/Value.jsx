import React from 'react'
import"./Value.css"

const Value = () => {
  return (
    <section className='v-wrapper'>
        <div className="paddings innerWidth flexCenter v-container">
            {/*left side*/}
            <div className='v-left'>
             <div className="image-container">
                <img src="./value.png" alt="" />
             </div>
             </div>
             <div className="flexColStart v-right">
              <span className='orangeText'>
                Our Value
              </span>
              <span className='primaryText'>
              OUR CORPORATE VALUES:
              </span>
               <span className='secondaryText'>
                <li>Open-mindedness</li>
                <li>Consistency</li>
                <li>Honesty</li>
                <li>Efficiency</li>
                We respect the individual, and believe that individuals<br></br> who are treated with respect<br></br> and given responsibility respond by giving their best.
                <br></br>We are frugal and guard and conserve<br></br> the company's resources<br></br>with the same vigilance which we would use to guard <br></br> and conserve our own personal resources.<br></br>
We are believers in the Golden Rule.<br></br> In all our dealings we will strive to be friendly and,<br></br> courteous, as well as fair and compassionate.

                </span>
             </div>
        </div>
    </section>
  )
}

export default Value