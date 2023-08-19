import React from 'react'
import "./feed.css"
import Post from '../Post/Post'
import Share from '../Share/Share'
import { Posts } from "../../dummyData";


const Feed = () => {
    return (
        <div className="feed">
            <Post />
            {Posts.map((p) => (
                <Share key={p.id} post={p} />
            ))}
        </div>
    )
}

export default Feed