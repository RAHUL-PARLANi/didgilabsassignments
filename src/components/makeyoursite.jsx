import React from 'react'
import image1 from '../Images/vc1.png';
import image2 from '../Images/Vector-1.png'
import image3 from '../Images/2bar.png'
const Makeyoursite = () => {
  return (
    <div className='Make-main'>
      <div className='left-make--box' style={{'position':'relative'}}>
        <div className='left-make-box-i1'></div>
        <div className='left-make-title'>Make your site better with Opus</div>
        <div className='left-make-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.</div>
        <div><button className='left-make-butt'>Learn More</button></div>
      </div>
      <div style={{'position':'relative'}}>
        <div className='right-make--box1'>
          <div><img src={image1}/></div>
          <div className='right-make--box-info'>Build or Customize a Website in Minutes</div>
        </div>
        <div className="right-make--box">
          <div><img src={image2}/></div>
          <div className='right-make--box-info'>
          Our UI Kit was made for creativity.
          </div>
        </div>
        <div >
          <img src={image3}/>
        </div>
      </div>
    </div>
  )
}

export default Makeyoursite
