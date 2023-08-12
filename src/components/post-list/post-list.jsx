import React, { useState } from "react";
import Post from "../post/post";
import "./style.css";

function PostList({posts, title, remove}) {

  if (!posts.length) {
    return (
      <div className="no-post">Posts not found</div>
    )
  }

  return (
    <>
      <h1 className="title">{title}</h1>
      {posts.map((post, index) =>
      <Post remove={remove} number={index + 1} post={post} key={post.id}/>)}
    </>
  )
}

export default PostList;
