import './HomePage.css'
import { Topbar } from '../../components/topbar/Topbar'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Rightbar } from '../../components/rightbar/Rightbar'
import { Feed } from '../../components/feed/Feed'

export const HomePage = () => {
  return (
   <>
    <Topbar />
    <div className="homeContainer">
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
    
   </>
  )
}

