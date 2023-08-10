import { useState } from 'react'
import './App.css'

import Content from './components/Content';
import Navbar from './components/Navbar';
import LeftBar from './components/LeftBar';
import RightBar from './components/CommunitySideBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='app'>
      <Navbar/>
      <main className='main'>
        <LeftBar/>
        <Content/>
        </main>
    </div>
    </>
  )
}

export default App
