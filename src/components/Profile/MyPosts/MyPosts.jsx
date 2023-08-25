import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post"; // classes - 14 урок
const MyPosts = (props) => {

    let postsElements = props.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>

            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add posts</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;