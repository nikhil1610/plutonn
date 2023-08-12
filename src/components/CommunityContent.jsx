import '../styles/community_content.css';
import { communities } from '../constants';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiDotsVerticalRounded } from'react-icons/bi';

const CommunityContent = () => {

  const community = communities[0];
  return (
    <article className='community_content'>
      <div className='community_topbar'>
        <header className='community_header'>
          <div className='header_display'>
            <img src={community.logo} alt={community.name}/>
            <div className='header_details'>
              <h2>{community.name}</h2>
              <h3>{community.members} Members</h3>
            </div>
          </div>
          <div className='header_display' style={{gap:'10px'}}>
            <button className='community_join'>
              <AiOutlinePlus color={'#f45046'}/> 
              Join
            </button>
            <button style={{display:'flex', alignItems:'center'}}>
              <BiDotsVerticalRounded/>
            </button>
          </div>
        </header>
      </div>
      <article className='community_posts'></article>
    </article>
  )
}

export default CommunityContent