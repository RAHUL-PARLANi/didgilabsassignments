import React from 'react'
import image1 from '../Images/create1.png'
import image2 from '../Images/create2.png'
const Create = () => {
  return (
    <div className='create-main'>
        <div>
            <div style={{'display':'flex'}}>
                <div>
                    <img src={image1} alt='create 1 image'/>
                </div>
                <div style={{'marginLeft':'25px'}}>
                    <div className='left-title-create' style={{'width':'150px'}}>Choose your sections</div>
                    <div className='left-info-create'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                </div>
            </div>
            
            <div style={{'display':'flex',"marginTop":'70px'}}>
                <div>
                    <img src={image2} alt='create 2 image'/>
                </div>
                <div style={{'marginLeft':'25px'}}>
                    <div className='left-title-create' style={{'width':'250px'}}>Add the images and text you need</div>
                    <div className='left-info-create'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                </div>
            </div>
        </div>
        <div>
            <div className='create-main-heading'>
            Create pages using beautiful components.
            </div>
            <div className='create-main-info'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </div>
            <div>
            <button className='create-main-button'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Create