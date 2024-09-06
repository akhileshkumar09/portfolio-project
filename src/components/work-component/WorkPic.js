import React from 'react'
import './workPic.css'

function WorkPic(props) {
  return (
    <div className='work-view'>
      <div className='work-view-detail'>
        <div>
          <h3 className='work-view-brand'>{props.brand}</h3>
          <p className='work-view-location'>{props.location}</p>
          <p className='work-view-text'>{props.detail}</p>
        </div>
        <div className='open-case'>
          <p>open case</p> <p className='arrow'>→</p>
        </div>
      </div>
      <div className='work-view-screenshots'>
        <img className='first' src={props.firstImage} alt='phone screenshot'/>
        <img className='midle' src={props.midleImage} alt='I-Pad screenshot'/>
        <img className='third' src={props.thirdImage} alt='phone screenshot'/>
      </div>
    </div>
  )
}

export default WorkPic