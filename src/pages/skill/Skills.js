import React from 'react'
import './Skill.css'
import SkillCard from '../../components/skills-components/SkillCard'

function Skills() {
  const cardStyle1 = {
    position : 'relative',
    left : '20px',
    transform : `rotate(${-15}deg)`,
    animation : 'slideFromLeft 1s ease-out',
  }
  const cardStyle2 = {
    top : '20px',
    transform : `rotate(${7}deg)`,
    animation : 'slideFromBottom  1s ease-out',
  }
  const cardStyle3 = {
    transform : `rotate(${2}deg)`,
    animation : 'slideFromRight 1s ease-out',
  }
  const style1 = {
    textAlign : 'center',
    backgroundColor : '#8EACCD',
  }
  const style2 = {
    textAlign : 'center',
    backgroundColor : '#6CBEC7',
  }
  const style3 = {
    textAlign : 'center',
    backgroundColor : '#6A9C89',
  }
  return (
    <div className='skills'>
        <div className='intro-light-text'>
            <p>When I'm not out with my wife & dog...</p>
        </div>
        <div className='intro-dark-text'>
            <p>You'll catch me doing <br/>a combo of these things:</p>
        </div>
        <div className='skills-card'>
            <SkillCard cardStyle={cardStyle1} style = {style1} first = {'things I create'} second = {'websites'}
            third = {'app design'} forth = {'visual identity'} fifth = {'illustrations'}
            sixth = {'ui animations'} seventh = {'design systems'}/>

            <SkillCard cardStyle={cardStyle2} style = {style2} first = {'for products in'} second = {'websites'}
            third = {'app design'} forth = {'visual identity'} fifth = {'illustrations'}
            sixth = {'ui animations'} seventh = {'design systems'}/>

            <SkillCard cardStyle={cardStyle3} style = {style3} first = {'using tools like'} second = {'websites'}
            third = {'app design'} forth = {'visual identity'} fifth = {'illustrations'}
            sixth = {'ui animations'} seventh = {'design systems'}/>
        </div>
    </div>
  )
}

export default Skills