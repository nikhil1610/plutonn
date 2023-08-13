import React from 'react'
import '../styles/topbar.css';
import user_avatar from '../assets/user_avatar.png';
import plutonn_logo from '/plutonn_logo.png'
const Topbar = () => {
  return (
    <header className='navbar'>
      <div className='logo' style={{display:'flex',alignItems:'center',gap:'2px'}}>
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

export default Topbar