import React from 'react'
import im1 from '../Images/61779b485e784e451b620983_Grey%20Manter.svg.png'
import im2 from '../Images/61779b485e784e8596620986_Grey%20Stamps.svg.png'
import im3 from '../Images/Vector (1).png'
import im4 from '../Images/Vector (2).png'
const Trustedsection = () => {
 var a=[];
 a=[{"title":'99.95%',
     "midinfo":'Accuracy rate',
     'lowerinfo':'in fulfilling orders'},
     {
     "title":'5000+',
     "midinfo":'Ecommerce businesses',
     'lowerinfo':'partner with Opus'},
     {
     "title":'99.96%',
     "midinfo":'Of orders ship on time',
     'lowerinfo':'within SLA'},
     {
     "title":'#1',
     "midinfo":'Best Fulfillment Technology',
     'lowerinfo':'by AdWeek’s Retail Awards'}]
  return (
    <div>
     <div className='heading-trusted'>Trusted and loved by the world’s best teams</div>
      <div className='image-part-trusted-section'>
        <div><img src={im3} alt='a'/></div>
        <div><img src={im2} alt='a'/></div>
        <div><img src={im1} alt='a'/></div>
        <div><img src={im4} alt='a'/></div>
      </div>
      <div className='image-part-trusted-section'>
        {a.map(elem=>{return(
            <div>
            <div className='title-trusted'>{elem.title}</div>
            <div className='midinfo-trusted'>{elem.midinfo}</div>
            <div className='lowerinfo-trusted'>{elem.lowerinfo}</div>
        </div>
        )})}
        </div>
    </div>
  )
}

export default Trustedsection
