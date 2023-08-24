import React, {useEffect, useRef, useState} from "react";
import PostList from "../components/post-list/post-list";
import PostForm from "../components/post-form/post-form";
import PostFilter from "../components/post-filter/post-filter";
import ModalWindow from "../components/ui/modal-window/modal-window";
import Button from "../components/ui/button/button";
import { usePosts } from "../hooks/use-posts/use-posts";
import PostService from "../API/post-service";
import Loader from "../components/ui/loader/loader";
import { useFetching } from "../hooks/use-fetching/use-fetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/ui/pagination/pagination";
import UseObserver from "../hooks/use-observer/use-observer";
import Select from "../components/ui/select/select";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: "", query: ""});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(async(limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = (response.headers["x-total-count"]);
    setTotalPages(getPageCount(totalCount, limit));
  })

  UseObserver(lastElement, () => {setPage(page + 1)}, page < totalPages, isPostsLoading);

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const changePage = (page) => {
    setPage(page);
  }

  return (
    <div style={{width: "800px"}}>
      <Button
        style={{marginBottom: "20px"}}
        onClick={() => setModal(true)}
      >Create post</Button>
      <ModalWindow visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </ModalWindow>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <Select
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue={"Quantity"}
        options={[
          {value: 5, name: "5"},
          {value: 10, name: "10"},
          {value: 25, name: "25"},
          {value: -1, name: "All"},
        ]}
      ></Select>
      {postError &&
        <h1>Error ${postError}</h1>
      }
      {isPostsLoading &&
        <Loader></Loader>
      }
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts list 1"/>
      <div ref={lastElement} style={{backgroundColor: "tomato", height: "20px"}}>

      </div>
      <Pagination
        totalPages={totalPages}
        page={page}
        changePage={changePage}
      />
    </div>
  );
}

export default Posts;
