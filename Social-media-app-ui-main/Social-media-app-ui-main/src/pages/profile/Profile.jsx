import { Sidebar } from '../../components/sidebar/Sidebar'
import { Topbar } from '../../components/topbar/Topbar'
import './Profile.css'
import { Feed } from '../../components/feed/Feed'
import { Rightbar } from '../../components/rightbar/Rightbar'

export const Profile = () => {
  return (
    <>
    <Topbar />
    <div className="profile">
      <Sidebar />
    <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img className='profileCoverImg' src="Assets/posts/post-2.png" alt="" />
            <img className='profileUserImg' src="Assets/Pp/sample-6.jpeg" alt="" />
          </div>
          <div className="profileInfo">
            <h4 className='profileInfoName'>Abdullah Sajid</h4>
            <span className='profileInfoDesc'>Hello World</span>
          </div>
        </div>
      <div className="profileRightBottom">
        <Feed />
        <Rightbar profie />
      </div>
    </div>  
    </div>
    
   </>
  )
}
