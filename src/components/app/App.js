import React, {useEffect, useState} from "react";
import PostList from "../post-list/post-list";
import "./style.css";
import PostForm from "../post-form/post-form";
import PostFilter from "../post-filter/post-filter";
import ModalWindow from "../ui/modal-window/modal-window";
import Button from "../ui/button/button";
import { usePosts } from "../../hooks/use-posts/use-posts";
import PostService from "../../API/post-service";
import Loader from "../ui/loader/loader";
import { useFetching } from "../../hooks/use-fetching/use-fetching";
import { getPageCount, getPagesArray } from "../../utils/pages";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: "", query: ""});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  let pagesArray = getPagesArray(totalPages);


  const [fetchPosts, isPostsLoading, postError] = useFetching(async() => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = (response.headers["x-total-count"]);
    setTotalPages(getPageCount(totalCount, limit));
  })

  useEffect(() => {
    fetchPosts();
  }, [page])

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
    <div className="App">
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
      {postError &&
        <h1>Error ${postError}</h1>
      }
      {isPostsLoading
        ? <Loader></Loader>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts list 1"/>
      }
      {pagesArray.map(
        pageNumber =>
        <Button
          onClick={() => changePage(pageNumber)}
          key={pageNumber}
          className={page === pageNumber ? "page-button page-button__current" : "page-button"}
          style={{marginRight: "5px"}}
        >
          {pageNumber}
        </Button>
      )}
    </div>
  );
}

export default App;
