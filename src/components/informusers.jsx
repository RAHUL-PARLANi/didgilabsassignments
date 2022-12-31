import React from 'react'
import image1 from '../Images/video.png'
import image2 from '../Images/a.png'
const Informusers = () => {
  return (
    <div className='infrom'>
      <div style={{"position":'relative'}}><div className='inform-box1'></div><div className='Inform-head1'>VIDEO TITLE</div></div>
      <div className='inform-head2'>Inform users with video sections</div>
      <div style={{"position":'relative'}}><div className='inform-box2'></div><img  className='inform-image' src={image1}/><img className='play-button' src={image2}/><div className='inform-box3'></div></div>
      <div className='inform-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.</div>
    </div>
  )
}

export default Informusers
