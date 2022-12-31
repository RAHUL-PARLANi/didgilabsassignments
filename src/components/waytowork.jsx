import React from 'react'
import i1 from '../Images/w1 (1).png'
import i2 from '../Images/w1 (2).png'
import i3 from '../Images/w1 (3).png'
const Waytowork = () => {
  return (
    <div className='Waytowork'>
        <div className='waytw-toppart'>
            <div className='waytowork-title'>Ways to work with us</div>
            <button className='get-started-wtw'>Get Started</button>
        </div>
        <div className='boxes-waytowork'>
            <div>
                <div style={{'position':'relative'}}><img src={i1}/><div className='i1-box1'></div><div className='i1-box2'></div></div>
                <div className='wtw-box-title'>Project Management</div>
                <div className='wtw-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</div>
            </div>
            <div>
                <div style={{'position':'relative'}}><img src={i2}/><div className='i1-box21'></div></div>
                <div className='wtw-box-title'>Advanced Analytics</div>
                <div className='wtw-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</div>
            </div>
            <div>
                <div style={{'position':'relative'}}><img src={i3} /><div className='i1-box3'></div><div className='i2-box3'></div></div>
                <div className='wtw-box-title'>Marketing & Dashboard</div>
                <div className='wtw-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</div>
            </div>
        </div>

    </div>
  )
}

export default Waytowork