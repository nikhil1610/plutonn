import React from 'react'
import { ProfileCard, NavCard, FollowCard } from '../components'
const Leftbar = () => {
  return (
    <div className='sidebar'>
      <ProfileCard/>
      <NavCard/>
      <FollowCard/>
    </div>
  )
}

export default Leftbar