import React from 'react'
import './header.css'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <div className='logos'>
            <div className='container'><div className='indicator'></div></div>
            <div className='logoTitle'>Praval Gautam</div>
        </div>

        <div className='menuItems'>
            <NavLink to='/story' className ={({isActive})=>(isActive ? 'active-link' : 'link')}>Story</NavLink> 
            <NavLink to='/works' className ={({isActive})=>(isActive ? 'active-link' : 'link')}>Works</NavLink> 
            <NavLink to='/skills' className ={({isActive})=>(isActive ? 'active-link' : 'link')}>Skills</NavLink> 
            <NavLink to='/explorations' className ={({isActive})=>(isActive ? 'active-link' : 'link')}>Explorations</NavLink> 
            <NavLink to='/connect' className ={({isActive})=>(isActive ? 'active-link' : 'link')}>Connect</NavLink> 
            <NavLink to='/say-hello' className ={({isActive})=>(isActive ? 'active-link focused' : 'link focused')}>Say "Hello"</NavLink> 
            
        </div>
    </div>
  )
}

export default Header