import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/use-fetching/use-fetching";
import PostService from "../API/post-service";
import Loader from "../components/ui/loader/loader";

function PostIdPage() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  })
  const [fetchComments, isCommentLoading, commentsError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data);
  })

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, [])

  return (
    <div style={{width: "1200px"}}>
      <h1 style={{color: "deeppink"}}>Post {params.id}</h1>
      {isLoading
        ? <Loader />
        : <div style={{color: "lime"}}>{post.id}. {post.title}</div>
      }
      <p style={{color: "yellow", fontSize: "36px"}}>comments</p>
      {isCommentLoading
        ? <Loader />
        : <div>
          {comments.map(item =>
            <div>
              <p style={{color: "aqua"}}>{item.email}</p>
              <div style={{color: "lime"}}>{item.body}</div>
            </div>)}
        </div>
      }
    </div>
  )
}

export default PostIdPage;
