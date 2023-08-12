import { useState } from 'react'
import './App.css'

import Topbar from './components/Topbar';
import LeftBar from './components/LeftBar';
import RightBar from './components/CommunitySideBar';
import { CommunityContent, CommunitySideBar } from './components';

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
    </div>
    </>
  )
}

export default App
