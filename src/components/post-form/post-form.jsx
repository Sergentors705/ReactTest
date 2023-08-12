import React, {useState} from "react";
import Input from "../ui/input/input";
import Button from "../ui/button/button";
import "./style.css";

function PostForm({create}) {

    const [post, setPost] = useState({title: "", text: ""})
  
    const addNewPost = (event) => {
      event.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
      setPost({title: "", text: ""});
    }
    return (
        <form>
        <Input
          onChange={e => setPost({...post, title: e.target.value})} 
          type="text" 
          value={post.title} 
          placeholder="Post name"
        />
        <Input
          onChange={e => setPost({...post, text: e.target.value})} 
          type="text" 
          value={post.text} 
          placeholder="Post description"
        />
        <Button  type="submit" onClick={addNewPost}>Create post</Button>
      </form>
    )
}

export default PostForm;