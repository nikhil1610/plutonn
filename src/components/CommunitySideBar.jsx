import React from 'react'

import { communities } from '../constants';


const CommunitySideBar = () => {
  return (
    <div className='community_sidebar'>
      <div className='search'>
        <input type='text' placeholder='Search Joined Community' style={{ border:'none',outline:'none'}}/>
        <button></button>
      </div>
      <h3 style={{ color:'#000', fontWeight:'550', fontSize:'16.5px'}}>Popular Communities</h3>
      <ul style={{ padding:'0px'}}>
        {communities.map((community, index) =>(
          <li>
            <a style={{ display:'flex', gap:'5px'}}>
              <img src={community.logo}/>
              <div style={{ display: 'flex', flexDirection:'column'}}>
                <h4>{community.name}</h4>
                <h3>{community.members} members</h3>
              </div>
            </a>
            <button>

            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CommunitySideBar