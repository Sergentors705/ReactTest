import React, { useState } from "react";
import Post from "../post/post";
import "./style.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function PostList({posts, title, remove}) {

  if (!posts.length) {
    return (
      <div className="no-post">Posts not found</div>
    )
  }

  return (
    <div className="post-list">
      <h1 className="title">{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) =>
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <Post remove={remove} number={index + 1} post={post}/>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  )
}

export default PostList;
