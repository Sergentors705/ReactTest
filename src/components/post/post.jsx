import React, { useState } from "react";
import Button from "../ui/button/button";
import "./style.css";

function Post(props, remove) {
    
    return (
      <div className="post">
      <div className="post__content">
        <strong>{props.number}. {props.post.title}</strong>
        <div>{props.post.text}</div>
      </div>
      <div className="post__btns">
        <Button onClick={() => props.remove(props.post)} >Delete</Button>
      </div>
    </div>
    )
}

export default Post;