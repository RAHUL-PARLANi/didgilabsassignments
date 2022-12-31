import React from 'react'
import image from '../Images/Feautures.png'
import image2 from '../Images/div (1).png'
const Features = () => {
  return (
    <div className='features-main'>
        <div>
            <div style={{'position':'relative'}}>
                <div className='feactures-box'></div>
                <div className='features'>Features</div>
            </div>
            <div className='features-info'>
            You’re not just doing business. You’re doing life.
            </div>
            <div>
                <div className='tick-info'><span><img src={image2} alt='tick' style={{'marginRight':'15px'}}/></span> Responsive Components</div>
                <div className='tick-info'><span><img src={image2} alt='tick' style={{'marginRight':'15px'}}/></span> Over 50 Sections</div>
                <div className='tick-info'><span><img src={image2} alt='tick' style={{'marginRight':'15px'}}/></span> Handcrafted Pages</div>
            </div>
        </div>
        <div>
            <img src={image} alt='images'/>
        </div>
    </div>
  )
}

export default Features