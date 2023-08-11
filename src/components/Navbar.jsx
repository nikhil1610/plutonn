import React from 'react'
import '../styles/navbar.css';
import user_avatar from '../assets/user_avatar.png';
import plutonn_logo from '../assets/plutonn_logo.png'
const Navbar = () => {
  return (
    <header className='navbar'>
      <div className='logo' style={{display:'flex'}}>
       <img src={plutonn_logo} alt='plutonn_logo'/>
       <p>Plutonn</p>
      </div>
      <div className='profile'>
        <p>Community-Posts</p>
        <img src={user_avatar} alt='user_avatar'/>
      </div>
    </header>
  )
}

export default Navbar