import React, { useState } from "react";
import Button from "../ui/button/button";
import "./style.css";
import { useNavigate } from "react-router-dom";

function Post(props) {
  const router = useNavigate();
  console.log(router);
    return (
      <div className="post">
      <div className="post__content">
        <h2 className="post__title">{props.post.id}. {props.post.title}</h2>
        <div className="text">{props.post.body}</div>
      </div>
      <div className="post__buttons">
        <Button onClick={() => router(`/posts/${props.post.id}`)} className="open-button">Open</Button>
        <Button onClick={() => props.remove(props.post)} className="delete-button">Delete</Button>
      </div>
    </div>
    )
}

export default Post;
