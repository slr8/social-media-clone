import './share.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../dummyData";
import { useState } from 'react';


const Share = ({ post }) => {
    let [like, setLike] = useState(post.like)
    let [isLiked, setIsLiked] = useState(false)

    const handleState = () => {
        setLike(isLiked ? like -= 1 : like += 1)
        setIsLiked(!isLiked)
    }

    return (
        <div className="share">
            <div className="share-first">
                <div className="share-left">
                    <img className='share-user' src={Users.filter((u) => u.id === post.userId)[0].profilePicture} />
                    <span className='share-username'>
                        {Users.filter((u) => u.id === post.userId)[0].username}</span>
                    <span className='share-time'>{post.date}</span>
                </div>
                <div className="share-right">
                    <MoreVertIcon className='share-dots' />
                </div>
            </div>
            <div className="share-second">
                <p className='share-post-text'>{post?.desc}</p>
                <img src={post.photo} className='share-image' />
            </div>
            <div className="share-third">
                <div className="share-left">
                    <img src="/assets/like.png" className='share-like' onClick={handleState} />
                    <img src="/assets/heart.png" className='share-heart' onClick={handleState} />
                    <span className='share-likes-count'>{like} people like it</span>
                </div>
                <div className="share-right">
                    <span className='share-comments'>{post.comment} Comments</span>
                </div>
            </div>
        </div >
    )
}

export default Share