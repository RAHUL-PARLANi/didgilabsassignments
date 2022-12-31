import React from 'react'
import image1 from '../Images/main1.png';
import image2 from '../Images/main2.png';
import image3 from '../Images/main3.png';
import image4 from '../Images/main4.png';
import image5 from '../Images/main5.png';

const Herosection = () => {
  return (
    <>
    <div className='herosection'>
      <div className='hero-left-main-part'>
        <div className='hero-smallbox-1'></div>
        <div className='hero-smallbox-11'></div>
        <div className='hero-left-main-box'>
            <div className='hero-bg-image-1'>
                <img src={image1} alt='hello'/>   
            </div>
            <div className='hero-smallbox-3'></div>
            <div className='builtfor-title'>
                Built for<br/>enterprise<img src={image2} alt='alt-tag'/><br/>businesses.
            </div>
            <div className='builtfor-info'>Opus includes everything you need to build a beautiful website for your business. Built to perform and look good doing so.</div>
            <div style={{'display':'flex','marginLeft':'15%'}}>
                <div className='learn-more'>Learn More →</div>
                <div className='explore-pages'>Explore Pages</div>
            </div>
        </div>
      </div>
      <div className='hero-right-main-part'>
        <div className='hero-right-man-image'>
            <img src={image4} alt='heroimage'/>
        </div>
        <div className='hero-smallbox-2'></div>
        <div className='hero-right-white-box'>
            <div className='hero-right-white-box-info'>
            I felt like I couldn’t grow until I moved to Opus. Now I am encouraged to sell more with them.
            </div>
            <div className='hero-right-white-title1'>
            Frank Dublin
            </div>
            <div className='hero-right-white-title2'>
            CEO <span style={{'marginLeft':'0px','color':'#1355FF'}}>@stamps</span>
            </div>
        </div>
        <div className='hero-right-bg-image'><img src={image3} alt='hello'/></div>
      </div>
      
    </div>
    <div style={{'textAlign':'center'}}><img src={image5}/></div>
    </>
  )
}

export default Herosection
