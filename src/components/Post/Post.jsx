import './post.css'
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Post = () => {
    return (
        <div className="post">
            <div className="post-first">
                <img className='post-img' src="/assets/person/1.jpeg" />
                <input className='post-text' placeholder="whats's on your mind Legend?" />
            </div>
            <hr className='post-hr' />
            <div className="post-second">
                <ul className='post-ul'>
                    <li className='post-li'>
                        <PhotoSizeSelectActualIcon className='post-first-icon' />
                        <span className='post-span'>Photos or Video</span>
                    </li>
                    <li className='post-li'>
                        <LabelIcon className='post-second-icon' />
                        <span className='post-span'>Tag</span>
                    </li>
                    <li className='post-li'>
                        <LocationOnIcon className='post-third-icon' />
                        <span className='post-span'>Location</span>
                    </li>
                    <li className='post-li'>
                        <EmojiEmotionsIcon className='post-fourth-icon' />
                        <span className='post-span'>Feelings</span>
                    </li>
                </ul>
                <button className='post-button'>Share</button>
            </div>
        </div>
    )
}

export default Post