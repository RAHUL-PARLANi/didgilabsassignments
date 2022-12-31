import React from 'react'
import logo from '../Images/Vector.png'
const Footer = () => {
  return (
    <div>
    <div style={{'marginLeft':'10%'}}>
        <img src={logo} alt='logo' />
    </div>
    <div className='footer'>
        <div>
            <div className='nav-titile'>OVERVIEW</div>
            <div className='nav-links'>Overview</div>
            <div className='nav-links'>Landings</div>
            <div className='nav-links'>Company</div>
            <div className='nav-links'>Pricing</div>
            <div className='nav-links'>CMS Pages</div>
            <div className='nav-links'>Accounts</div>
            <div className='nav-links'>Buy for Figma</div>
        </div>
        <div>
            <div className='nav-titile'>Pages</div>
            <div className='nav-links'>Landing 1</div>
            <div className='nav-links'>Landing 2</div>
            <div className='nav-links'>Landing 3</div>
            <div className='nav-links'>Company 1</div>
            <div className='nav-links'>Company 2</div>
            <div className='nav-links'>Company 3</div>
            <div className='nav-links'>Blog 1</div>
            <div className='nav-links'>Blog 2</div>
            <div className='nav-links'>Contact 1</div>
            <div className='nav-links'>Contact 2</div>
            <div className='nav-links'>Comtact 3</div>
        </div>
        <div>
            <div className='nav-titile'>Pages</div>
            <div className='nav-links'>Case Studies</div>
            <div className='nav-links'>Careers</div>
            <div className='nav-links'>Pricing 1</div>
            <div className='nav-links'>Pricing 2</div>
            <div className='nav-links'>Pricing 3</div>
            <div className='nav-links'>Login</div>
            <div className='nav-links'>Register</div>
            <div className='nav-links'>Forgot Password</div>
            <div className='nav-links'>Blog Post</div>
            <div className='nav-links'>Team Member</div>
            <div className='nav-links'>Case Study</div>
            <div className='nav-links'>Job Post</div>
        </div>
        <div>
            <div className='Input'><input placeholder='Email Address'/><button>Get Started</button></div>
            <div style={{'display':'flex', width:'100%','justifyContent':'space-between','marginTop':'35px'}}>
                <div>
                    <div className='nav-titile'>OPUS FOR WEBFLOW</div>
                    <div className='Lorem-lpsum'>Lorem lpsum</div>
                </div>
                <div>
                    <div className='nav-titile'>OPUS FOR FIGMA</div>
                    <div className='Lorem-lpsum'>Lorem lpsum</div>
                </div>
            </div>
            <div className='Lorem'>
            © Template by <span style={{'color':'blue','marginLeft':"5px"}}>Lorem</span> - Powered by <span style={{'color':'blue','marginLeft':"5px"}}>Ipsum</span>
            </div>
        </div>
    </div>
    <div style={{'marginTop':'81px','marginBottom':'41px','display':'flex',width:'266.58px','justifyContent':'space-between','marginLeft':'10%'}}>
        <div className='lower-bids'>Style Guide</div>
        <div className='lower-bids'>Licence</div>
        <div className='lower-bids'>Changelog</div>
    </div>
    </div>
  )
}

export default Footer