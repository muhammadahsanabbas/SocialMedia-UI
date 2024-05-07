import "./post.css"
import { MoreVertical } from 'lucide-react';
import { Users } from "../../dummyData";
import { useState } from "react";

export const Post = ({post}) => {
  const [like , setLike] = useState(post.like)
  const [isLiked , setIsLiked] = useState(false)

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img  className="postProfieImg" src={Users.filter(u => u.id=== post.userId)[0].profilePicture} alt="" />
                <span className="postUsername">{Users.filter(u => u.id=== post.userId)[0].username}</span>
                <span className="postTime">{post.time}</span>
            </div>
            <div className="postTopRight">
              <MoreVertical />
            </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            {post?.desc}
          </span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" onClick={likeHandler} src="/assets/reacts/like.png" alt="" />
            <img className="likeIcon" onClick={likeHandler} src="/assets/reacts/love-react.png" alt="" />
            <img className="likeIcon" onClick={likeHandler} src="/assets/reacts/care-emoji.png" alt="" />
            <img className="likeIcon" onClick={likeHandler} src="/assets/reacts/laughing-react.png" alt="" />
            <img className="likeIcon" onClick={likeHandler} src="/assets/reacts/wow-react.png" alt="" />
            <img className="likeIcon" onClick={likeHandler} src="/assets/reacts/angry-react.png" alt="" />
            <span className="postLikeCounter">{like}reacts</span>
          </div>
          <div className="postBottomRight">
            <span className="postComments">{post.comments} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

