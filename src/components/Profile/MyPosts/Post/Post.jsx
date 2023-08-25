import React from "react";
import classes from './Post.module.css'; // classes - 14 урок

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://www.iguides.ru/upload/medialibrary/c6a/bavd72b2bgixqyy04hohzr1f7xuserk4.png" alt=""/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;