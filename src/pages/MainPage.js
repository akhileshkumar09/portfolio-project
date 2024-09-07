import React from 'react'
import Header from '../components/Header'
import FirstPage from '../components/FirstPage'
import Story from './story/Story'
import Work from './work/Work'
import Skills from './skill/Skills'

function MainPage() {
  return (
    <div className='mainPage'>
        <Header/>
        <FirstPage/>
        <Story/>
        <Work/>
        <Skills/>
    </div>
  )
}

export default MainPage