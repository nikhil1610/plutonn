import { useState } from 'react'
import './App.css'

import Topbar from './components/Topbar';
import LeftBar from './components/LeftBar';
import { CommunityContent, CommunitySideBar } from './components';
import MobileNav from './components/MobileNav';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='app'>
      <Topbar/>
      <main className='main'>
        <aside className='sidebar'>
          <LeftBar/>
        </aside>
        <section className='community'>
          <CommunityContent/>
          <CommunitySideBar/>
        </section>
        </main>
        <MobileNav/>
    </div>
    </>
  )
}

export default App
