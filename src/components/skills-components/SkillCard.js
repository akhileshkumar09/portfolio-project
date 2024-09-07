import React from 'react'
import './SkillCard.css'

function SkillCard(props) {
  return (
    <div className='skillCard' style={props.cardStyle}>
    <p className='area' style={props.style}>{props.first}</p>
    <hr></hr>
    <p>{props.second}</p>
    <hr></hr>
    <p>{props.third}</p>
    <hr></hr>
    <p>{props.forth}</p>
    <hr></hr>
    <p>{props.fifth}</p>
    <hr></hr>
    <p>{props.sixth}</p>
    <hr></hr>
    <p>{props.seventh}</p>
    </div>
  )
}

export default SkillCard