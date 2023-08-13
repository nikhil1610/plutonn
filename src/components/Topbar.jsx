import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa';

import '../styles/topbar.css';
import user_avatar from '../assets/user_avatar.png';
import plutonn_logo from '/plutonn_logo.png'
const Topbar = () => {

  const [isDark, setDark] = useState(false);

  useEffect(()=>{

    // const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    const prefersDarkTheme = theme === 'dark' ? true : false;
    console.log(prefersDarkTheme);
    setDark(prefersDarkTheme);

  },[isDark]);

  return (
    <header className='navbar'>
      <div className='logo' style={{display:'flex',alignItems:'center',gap:'2px'}}>
       <img src={plutonn_logo} alt='plutonn_logo'/>
       <p>Plutonn</p>
      </div>
      <div className='profile'>
        <p>Community-Posts</p>
        <div style={{display:'flex', gap:'10px'}}>
          <button onClick={()=>setDark(!isDark)}>{isDark? <FaSun/>  : <FaMoon/>}</button>
          <img src={user_avatar} alt='user_avatar'/>
        </div>
      </div>
    </header>
  )
}

export default Topbar