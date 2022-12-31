import React from 'react'
import image from '../Images/ai-kit.png';
const AIkit = () => {
  return (
    <div className='ai-kit-main'>
        <div>
            <div className='ai-color-sq2'></div>
            <div className='ai-color-sq1'></div>
            <div className='ai-color-sq3'></div>
            <div className='ai-image'>
                <img src={image} alt='ai-kit image'/>
            </div>
        </div>
        <div className='text-area'>
            <div style={{'position':'relative'}}>
                <div className='our-knowledge-box'></div>
                <div className='our-knowledge'>OUR KNOWLEDGE</div>
            </div>
            <div className='ai-kit-info'>
            A UI Kit that's Modern & Elegant
            </div>
            <div className='ai-kit-info2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.
            </div>
        </div>
    </div>
  )
}

export default AIkit