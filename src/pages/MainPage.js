import React from 'react'
import Header from '../components/Header'
import FirstPage from '../components/FirstPage'
import Story from './story/Story'
import Work from './work/Work'

function MainPage() {
  return (
    <div className='mainPage'>
        <Header/>
        <FirstPage/>
        <Story/>
        <Work/>
    </div>
  )
}

export default MainPage