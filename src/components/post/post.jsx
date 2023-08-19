import React, { useState } from "react";
import Button from "../ui/button/button";
import "./style.css";

function Post(props, remove) {

    return (
      <div className="post">
      <div className="post__content">
        <h2 className="post__title">{props.post.id}. {props.post.title}</h2>
        <div className="text">{props.post.body}</div>
      </div>
      <div className="post__btns">
        <Button onClick={() => props.remove(props.post)} >Delete</Button>
      </div>
    </div>
    )
}

export default Post;
