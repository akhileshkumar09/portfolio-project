import React from 'react'
import './story.css'
function Story() {
  return (
    <div className='story'>
        {/* <h2>Story</h2> */}

        <div className='story-detail'>
          <div className='story-pics'>
            <img className='story1' src='https://plus.unsplash.com/premium_photo-1722680738736-66a4cdc08923?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D' alt='story-1'/>
            <img className='story2' src='https://plus.unsplash.com/premium_photo-1718146018869-a3034b0f291a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D' alt='story-2'/>
          </div>
          <div className='story-text'>They argue. While the argument seems to be different the truth is it's always the same. Yes, the topic may be different or the circumstances, but when all said and done, it all came back to the same thing. They both knew it, but neither has the</div>
        </div>

        <div className='contributions'>
          <div className='contribution-info'>So for I Helped 10+ funded by the best.</div>
          <div className='brands'>
            <div className='brand-1'>🚩 Ycombinator</div>
            <div className='brand-2'>Accel</div>
            <div className='brand-3'>PlugAndPlay</div>
            <div className='brand-4'>Yentech</div>
          </div>
        </div>
    </div>
  )
}

export default Story