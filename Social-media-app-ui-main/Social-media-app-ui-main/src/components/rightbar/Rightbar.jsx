import './Rightbar.css'
import {Users} from "../../dummyData"
import { Online } from '../online/Online'

export const Rightbar = ({profile}) => {

  const HomeRightBar = () => {
      return (
        <>
        <div className="birthdayContainer">
          <img className='birthdayImg' src="/Assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Hamza Ali</b> have a birthday today
           </span>
        </div>
        <img src="/Assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key= {u.id} user={u} />
          ))}
        </ul>
        </>
      )
  }

  const ProfileRightBar = () => {
    return (
      <>
      <h4 className='rightbarTitle'>User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Karachi</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single🙂</span>
        </div>
      </div>
      <h4 className='rightbarTitle'>User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src="Assets/Pp/sample-5.jpeg" alt="" />
          <span className="rightbarFollowingName">Muneeb Ahmed</span>
        </div>
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src="Assets/Pp/sample-1.png" alt="" />
          <span className="rightbarFollowingName">Hamza Ali</span>
        </div>
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src="Assets/Pp/sample-2.png" alt="" />
          <span className="rightbarFollowingName">Ramla Ali</span>
        </div>
      </div>

      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <ProfileRightBar />
      </div>
    </div>
  )
}
