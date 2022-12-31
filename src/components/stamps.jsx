import React from 'react'
import image1 from "../Images/61779b485e784e8596620986_Grey%20Stamps.svg.png"
import image2 from '../Images/stampsside.png'
const Stamps = () => {
  return (
    <div className='stamps'>
        <div className='bluebox'></div>
        <div className='lightbluebox'></div>
        <div>
            <div className='stamps-image'>
                <img src={image1} alt='stamps loggo'/>
            </div>
            <div className='stamps-info'>The Opus UI Kit lets you showcase your work in style. It's helped take our business online</div>
            <div className='stamps-name'>Alexa F.</div>
            <div className='stamps-designed'>Designer <span style={{'marginLeft':'5px','color':'#1355FF'}}>@stamps</span></div>
            <div className='stamps-arr'>
                <div className='stamps-arrow'>←</div>
                <div className='stamps-arrow'>→</div>
            </div>
        </div>
        <div>
          <img src={image2}/>
        </div>
    </div>
  )
}

export default Stamps