import React from 'react'
import './firstpage.css'
import Sticker1 from './firstpage/Sticker1'
function FirstPage() {
  return (
    <div className='first-page'>
        <p className='intro'>🤘 Yo, I'm Praval Gautam, married to digital design and...</p>
        <h3 className='intro-title'>helping digital founders<br/>create unique, empathic <br/>product experiences</h3>
        <Sticker1 number={1} text={'😎 WEBSITE'}/>
        <Sticker1 number={2} text={'🎯 INTERFACE'}/>
        <Sticker1 number={3} text={'🔮 BRANDING'}/>
        <Sticker1 number={4} text={'ILLUSTRATION'}/>
        <Sticker1 number={5} text={'ANIMATION'}/>
    </div>
  )
}

export default FirstPage