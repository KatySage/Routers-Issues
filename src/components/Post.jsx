import React from "react";
import { useParams } from "react-router-dom";

const Post = props => {
    const { id } = useParams();
    const post = props.posts[id];

    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </article>
    )
}

export default Post;