import React from 'react'
import "./Hero.css"
import CountUp from 'react-countup';
import {motion} from 'framer-motion'
import SearchBar from '../SearchBar/SearchBar';


export const Hero = () => {
  return (
    <section className="hero-wrapper">
 <div className='paddings innerWidth flexCenter hero-container '>

{/*left side*/}
<div className="flexColStart hero-left">
<div className='hero-title'>
  <motion.h1
  initial={{y:"2rem",opacity: 0}}
  animate={{y: 0, opacity: 1}}
  transition={{
    duration: 2,
    type:"spring"
  }}
  >
  Welcome to Boulotoes
  </motion.h1>
</div>
<div className='flexColStart hero-des'>
<span>
  At Boulotoes, we believe in the power of innovation and</span> 
  <span>
  the importance of always moving forward.
  </span>
  <span>
   Founded with a vision to revolutionize our industry.
  </span>
  <span>
  We have grown into a dynamic and forward-thinking </span>
  <span>
  company  that is committed to delivering</span>
  
  <span>
   high-quality products and services.
  </span>

</div>
<SearchBar/>

<div className='flexCenter stats'>
<div className='flexColCenter stat'>
<span>
  <CountUp start={750} end={985} duration={4}/>
 <span>+</span>
</span>
<span className='secondaryText'>
   Qualities
    </span>

  </div>
  <div className='flexColCenter stat'>
<span>
  <CountUp start={700} end={1200} duration={4}/>
 <span>+</span>
</span>
<span className='secondaryText'>
   Happy Customer
   </span>
  </div>
  <div className='flexColCenter stat'>
<span>
  <CountUp start={10} end={30} duration={4}/>
 <span>+</span>
</span>
<span className='secondaryText'>
  Contract Awarded 
</span>
  </div>
  </div>
  </div>

           { /*right side*/}
          <div className='flexCenter hero-right'>
         <div className='image-container'>
            <img src='./hero-image.png'alt=''/>

         </div>
          </div>
        </div>
        
        </section>
  );
}
