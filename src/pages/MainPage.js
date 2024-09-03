import React from 'react'
import Header from '../components/Header'
import FirstPage from '../components/FirstPage'
import Story from './story/Story'

function MainPage() {
  return (
    <div className='mainPage'>
        <Header/>
        <FirstPage/>
        <Story/>
    </div>
  )
}

export default MainPage