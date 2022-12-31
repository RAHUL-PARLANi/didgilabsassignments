import React from 'react'
import logo from '../Images/Vector.png'
import menu from '../Images/menu.png'
const Header = () => {
  return (
    <div className='header'>
        <div><img src={logo}  alt='opus logo'/></div>
        <div className='mid-nav'>
            <div>Overview</div>
            <div>Pages</div>
            <div>Template</div>
        </div>
        <div><button className='contactus-button'>Contact Us</button></div>
        <div className='menu-box'><img src={menu} alt='menu'/></div>
    </div>
  )
}

export default Header