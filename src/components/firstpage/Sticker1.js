import React from 'react'
import './sticker.css'
function Sticker1(props) {
  return (
    <div className={`sticker sticker${props.number}`}>
        <div className='title'>{props.text}</div>
    </div>
  )
}

export default Sticker1