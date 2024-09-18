import React from 'react'
import './Connect.css'

function Connect() {
  return (
    <div className='connect' id='connect'>
        <h2 className='connect-top-h2'>Ready to grow your business<br/>through empathic visual style?</h2>
        <h2 className='connect-bottom-h2'>Let's make it happen✨</h2>
        <button>Start a project</button>
        <hr/>
        <div className='connect-option'>
            <div >
                <p className='email'>Connect</p>
                <p className='email-id'>hello@dedialsun.space</p>
            </div>
            <div className='social-media'>
                <p>follow</p>
                <span>🎯</span>
                <span>📞</span>
                <span>🕸️</span>
                <span>🫧</span>
            </div>
        </div>
    </div>
  )
}

export default Connect