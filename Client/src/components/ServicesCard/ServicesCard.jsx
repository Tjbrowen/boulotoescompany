import React from 'react'
import "./ServicesCard.css"
import {truncate} from 'lodash'
import { useNavigate } from 'react-router-dom'

const ServicesCard = ({card}) => {
  const navigate = useNavigate();
  return (
    <div className='flexColStart r-card'
    onClick={()=>navigate(`../services/${card.id} `)}
    >
             <img src={card.image} alt="Home" />
             <span className='primaryText'>{truncate(card.title, {length: 15})}</span>
             <span className='secondaryText'>{truncate(card.description, {length: 80})}</span>
            </div>
  )
}

export default ServicesCard