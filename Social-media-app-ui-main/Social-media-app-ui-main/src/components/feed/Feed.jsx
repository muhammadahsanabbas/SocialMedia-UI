import { Post } from '../post/Post'
import { Share } from '../share/Share'
import { Posts } from '../../dummyData.js'
import './Feed.css'

export const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  )
}
