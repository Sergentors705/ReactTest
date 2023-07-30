import React, { useState } from "react";
import "./style.css";

function Post(props) {
    
    return (
      <div className="post">
      <div className="post__content">
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>{props.post.text}</div>
      </div>
      <div className="post__btns">
        <button>Delete</button>
      </div>
    </div>
    )
}

export default Post;