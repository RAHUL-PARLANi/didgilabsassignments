import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import photo1 from '../Images/Internshala.png'
import photo2 from '../Images/Internshala1.png'

const Space = () => {
  return (
    <div>
      <div className="navbar">
        <div ><img className='nav-img'src='https://upload.wikimedia.org/wikipedia/commons/5/59/Logo-Logo.svg'/></div>
        <div className='navhead'>Need help ? Call 8107344682</div>
      </div>
      <div className='hero--section'>
        <div className='sections'>
        <div className='section'><FontAwesomeIcon icon="fa-solid fa-calendar-days" /> Check in <FontAwesomeIcon icon="fa-solid fa-chevron-down" /></div>
        <div className='section'><FontAwesomeIcon icon="fa-solid fa-calendar-days" /> Check out <FontAwesomeIcon icon="fa-solid fa-chevron-down" /></div>
        <div className='section1'>3 adults - 0 children - 2 rooms</div>
        <div className='sop'>
          <div className='sop-circle'>V</div>
        </div>
        <div className='pos'>
          <div className='pos-titile'>MAXIMUM 7 GUESTS PER ROOM</div>
          <div className='rooms'>
            <div>
              <div className='titile-rooms'>Rooms</div>
              <div className='titleiinfo'>(Max: 5 Total guests/room)</div>
            </div>
            <div>
            <FontAwesomeIcon icon="fa-solid fa-circle-minus" />
            <span style={{'marginLeft':'5px','marginRight':'5px'}}>1</span> 
            <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
            </div>
          </div>
          <div className='rooms'>
            <div>
              <div className='titile-rooms'>Rooms</div>
              <div className='titleiinfo'>(Max: 5 Total guests/room)</div>
            </div>
            <div>
            <FontAwesomeIcon icon="fa-solid fa-circle-minus" />
            <span style={{'marginLeft':'5px','marginRight':'5px'}}>1</span> 
            <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
            </div>
          </div>
          <div className='rooms'>
            <div>
              <div className='titile-rooms'>Rooms</div>
              <div className='titleiinfo'>(Max: 5 Total guests/room)</div>
            </div>
            <div>
            <FontAwesomeIcon icon="fa-solid fa-circle-minus" />
            <span style={{'marginLeft':'5px','marginRight':'5px'}}>1</span> 
            <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
            </div>
          </div>
         <button className='done-bu'>Done</button>
        </div>
      </div>
        <button className='check-button'>Check Availablity</button>
      </div>
      <div className='mid-section'>
        
              <div className='imagepart'>
              <div className='VR'>
                  <div className='V'>V</div>
                  <div className='R'>R</div>
                </div>
                
                <div className='image-part111'>
                  <img  className='big-image' src='https://cdn.pixabay.com/photo/2015/01/16/08/54/motel-601218__340.jpg'/>
                </div>
                <div>
                  <div>
                    <img className='small-images' src='https://cdn.pixabay.com/photo/2016/07/08/23/36/beach-house-1505461__340.jpg'/>
                    <img className='small-images' src='https://cdn.pixabay.com/photo/2016/04/15/11/45/hotel-1330841__340.jpg'/>
                  </div>
                  <div>
                    <img className='small-images' src='https://cdn.pixabay.com/photo/2014/09/26/19/45/bedroom-462772__340.jpg'/>
                    <img className='small-images' src='https://cdn.pixabay.com/photo/2016/08/21/12/45/hall-1609571__340.jpg'/>
                  </div>
                </div>
              </div>
          <div style={{'display':'flex','justifyContent':'space-between'}}>
              <div>
                <div className='Hotel-name'>
                  Hotel Vishal @ Airport
              </div>
              <div className='address'>
                  104/2/2, National Highway 8, Manipalpur, New  <span>View Map</span><br/>
                  Delhi, 110037 New Delhi, india
              </div>
              <div className='phone-number'>
                  +91-7654564545,810734482
              </div>
          </div>
          <div className='map-image'>
              <img src='data:image/jpeg;base64,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' alt='map' />
          </div>
          </div>
          <div className='Keypoints'>
              <div className='keys' ><FontAwesomeIcon icon="fa-solid fa-circle" /> Free Parking</div>
              <div className='keys' ><FontAwesomeIcon icon="fa-solid fa-circle" /> Conference Room</div>
              <div className='keys' ><FontAwesomeIcon icon="fa-solid fa-circle" /> ATM</div>
              <div className='keys' ><FontAwesomeIcon icon="fa-solid fa-circle" /> Conference Room</div>
              <div className='keys' ><FontAwesomeIcon icon="fa-solid fa-circle" /> Conference Room</div>
          </div>
          <div className='discription'>
              Located in New Delhi, 5.5 km from Rashtraprati Bhavan, Hotel Vishal @ Airport provides accommodation with a restaurant, free private parking and fitness centre. This 3-star hotel offers an ATM, a concriege service and free WiFi. The accomodation features a 24-hour front desk, room service and currently exchange for guests. 
          </div>
      </div>
      <div className='list'>
         <div className='list-title'>Property Rules</div>
         <div className='list-subtitle'>Check-in: 12 PM Check-out 12 PM</div>
         <div className='list-list'>
             <div>
                <li>Guests with fever are not allowed</li>
                <li>Guests from containment zones are not allowed</li>
                <li>Guests below 18 years of age are not allowed at property</li>
                <li>PAN Card and Non-Govt IDs are not accepted as ID proof(s).</li>
                <li>Aadhar Card, Driving License and Govt ID are accepted as ID proof.</li>
                <li>Property staff is trained on Hygiene guidelines</li>
                <li>Pets are not allowed</li>
                <li>Outside food is not allowed</li>
                <li>Smoking within the premises are not allowed</li>
                <li>Does not provide private parties or events</li>
                <li>Quarantine protocols arebeing followed asper local government authorities</li>
             </div>
             <div>
                <li>Pets are not allowed</li>
                <li>Outside food is not allowed</li>
                <li>Smoking within the premises are not allowed</li>
                <li>Does not provide private parties or events</li>
                <li>Quarantine protocols arebeing followed asper local government authorities</li>
             </div>
             <div></div>
         </div>
      </div>
    </div>
  )
}

export default Space
