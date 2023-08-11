import React from 'react'
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <header className='navbar'>
      <div className='logo' style={{display:'flex'}}>
       <img/>
       <p>Plutonn</p>
      </div>
      <div className='profile'>
        <p>Community-Posts</p>
        <img/>
      </div>
    </header>
  )
}

export default Navbar