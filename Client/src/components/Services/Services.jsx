import React from 'react'
import{Swiper,SwiperSlide, useSwiper}from 'swiper/react'
import 'swiper/css'
import'./Services.css'
import { sliderSettings } from '../../utils/common'
import ServicesCard from '../ServicesCard/ServicesCard'
import useServices from '../hooks/useServices'
import { PuffLoader } from 'react-spinners'



const Services = () => {
   const { data, isLoading, isError } = useServices(); 

   if (isError) {
    return (
      <div className='wrapper'>
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className='wrapper flexCenter' style={{ height: '60vh' }}>
        <PuffLoader 
        height="80"
        width="80"
        radius="1"
        color='#4066ff' 
        aria-label='puff-loading'
         />
      </div>
    );
  }

  return (
    <section className='r-wrapper'>
  <div className="paddings innerWidth r-container">
    <div className="r-head flexColStart">
      <span className='orangeText'>Our</span>
      <span className='primaryText'>Services</span>
    </div>
    <Swiper {...sliderSettings}>
     <SliderButtons/>
      { data.map((card,i)=>(
          <SwiperSlide key={i}>
            <ServicesCard card={card}/>
          </SwiperSlide>
        )
        )
      }
    </Swiper>
  </div>
    </section>
  )
}

export default Services

const SliderButtons =()=>{
  const swiper =useSwiper();
  return(
    <div className='flexCenter r-buttons'>
    <button onClick={()=>swiper.slidePrev()}>
      &lt;
    </button>
      <button  onClick={()=>swiper.slideNext()}>
        &gt;
      </button>
    </div>
  )
}