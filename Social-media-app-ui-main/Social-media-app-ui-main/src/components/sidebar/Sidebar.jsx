import './Sidebar.css'
import { Rss , MessagesSquare ,Video ,Users2 ,Bookmark ,HelpCircle ,Briefcase ,CalendarRange ,GraduationCap  } from 'lucide-react';
import {Users} from '../../dummyData'
import { CloseFriend } from '../closeFriends/CloseFriend';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Rss className='sidebarIcon' />
            <span className="sidebarListItemText">
              Feed
            </span>
          </li>
          <li className="sidebarListItem">
            <MessagesSquare className='sidebarIcon' />
            <span className="sidebarListItemText">
              Chats
            </span>
          </li>
          <li className="sidebarListItem">
            <Video  className='sidebarIcon' />
            <span className="sidebarListItemText">
              Videos
            </span>
          </li>
          <li className="sidebarListItem">
            <Users2  className='sidebarIcon' />
            <span className="sidebarListItemText">
              Groups
            </span>
          </li>
          <li className="sidebarListItem">
            <Bookmark   className='sidebarIcon' />
            <span className="sidebarListItemText">
            Bookmarks 
            </span>
          </li>
          <li className="sidebarListItem">
            <HelpCircle   className='sidebarIcon' />
            <span className="sidebarListItemText">
              Questions
            </span>
          </li>
          <li className="sidebarListItem">
            <Briefcase   className='sidebarIcon' />
            <span className="sidebarListItemText">
              Jobs
            </span>
          </li>
          <li className="sidebarListItem">
            <CalendarRange   className='sidebarIcon' />
            <span className="sidebarListItemText">
              Events
            </span>
          </li>
          <li className="sidebarListItem">
            <GraduationCap  className='sidebarIcon' />
            <span className="sidebarListItemText">
              Courses
            </span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className='sidebarHr' />
        <ul className="sidebarFriendList">
          {Users.map(u=> (
            <CloseFriend key= {u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}
