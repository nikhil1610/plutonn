import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar';
import LeftBar from './components/LeftBar';
import RightBar from './components/CommunitySideBar';
import { CommunityContent, CommunitySideBar } from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='app'>
      <Navbar/>
      <main className='main'>
        <LeftBar/>
        <section className='community'>
          <CommunityContent/>
          <CommunitySideBar/>
        </section>
        </main>
    </div>
    </>
  )
}

export default App
