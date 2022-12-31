import React from 'react'
import r1 from '../Images/R1.png.png'
import r2 from '../Images/R2.png.png'
import r3 from '../Images/R3.png.png'
const ReSources = () => {
  return (
    <>
    <div className='res-top-part'>
        <div className='res-heading'>Resources</div>
        <div className='Res-getstarted-button'>Get Started</div>
    </div>
    <div  className='Resource-box'>
    <div style={{'width':'304px'}} >
        <div>
            <img src={r1} al='resource image'/>
        </div>
        
        <div className='res-title'>
        A high-converting, high-performing template
        </div>
        
        <div className='res-info'>
        Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.
        </div>
        
        <div>
            <button className='read-more'>Read Article</button>
        </div>

    </div>
    <div style={{'width':'304px'}}>
        <div>
            <img src={r2} alt='recource image'/>
        </div>
        <div className='res-title'>With a clean, minimal and professional look</div>
        <div className='res-info'>
        Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.
        </div>
        <div>
            <button className='read-more'>
                Read Article
            </button>
        </div>
    </div>
    <div style={{'width':'304px'}}>
        <div>
            <img src={r3} alt='resource image'/>
        </div>
        <div className='res-title'>Opus made our journey possible</div>
        <div className='res-info'>
        Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.
        </div>
        <div>
            <button className='read-more'>
                Read Article
            </button>
        </div>
    </div>

    </div>
    </>
  )
}

export default ReSources