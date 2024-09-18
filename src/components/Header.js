import React from 'react'
import './header.css'


function Header({activeSection}) {
  return (
    <div className='header'>
        <div className='logos'>
            <div className='container'><div className='indicator'></div></div>
            <div className='logoTitle'>Praval Gautam</div>
        </div>

        <div className='menuItems'>
            <a href='#story' className ={activeSection === 'story' ? 'active-link' : 'link'}>Story</a> 
            <a href='#works' className ={activeSection === 'works' ? 'active-link' : 'link'}>Works</a> 
            <a href='#skills' className ={activeSection === 'skills' ? 'active-link' : 'link'}>Skills</a> 
            <a href='#explorations' className ={activeSection === 'explorations' ? 'active-link' : 'link'}>Explorations</a> 
            <a href='#connect' className ={activeSection === 'connect' ? 'active-link' : 'link'}>Connect</a> 
            <a href='#say-hello' className ={ 'active-link focused link focused'}>Say "Hello"</a> 
            
        </div>
    </div>
  )
}

export default Header