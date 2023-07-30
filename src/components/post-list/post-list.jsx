import React, { useState} from "react";
import Post from "../post/post";
import "./style.css";

function PostList({posts, title}) {
    return <><h1 className="title">{title}</h1>
    {posts.map(post => 
      <Post post={post} key={post.id}/>)}
      </>
}

export default PostList;