import React from 'react';

import video from '../assets/HaraldFallDetection.mp4';


function Stream() {
    return (
      <div className='stream' id='stream'>
        <div className='vid-container'>
            <video src={video} autoPlay loop>
            </video>

        </div>
    
      </div>
    )
  }
  
  export default Stream