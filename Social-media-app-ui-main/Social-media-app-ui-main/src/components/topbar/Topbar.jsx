import './Topbar.css'
import { Search ,User2, MessageSquare, Bell  } from 'lucide-react';

export const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className='Logo'>SocialApp</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className='searchIcon' />
          <input placeholder='Search Here Anything' className="srchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className='topbarLink'>Homepage</span>
          <span className='topbarLink'>Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <User2 />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <MessageSquare />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Bell />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/Assets/Pp/sample-2.png" alt="" className="topbarImg" />
      </div>
    </div>
  )
}
