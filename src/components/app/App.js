import React, {useMemo, useRef, useState} from "react";
import PostList from "../post-list/post-list";
import "./style.css";
import PostForm from "../post-form/post-form";
import PostFilter from "../post-filter/post-filter";
import ModalWindow from "../ui/modal-window/modal-window";
import Button from "../ui/button/button";

function App() {
  const [posts, setPosts] = useState([
    {
      id:1,
      title: "Валенки",
      text: "Ехал грека через реку."
    },
    {
      id:2,
      title: "Трихлоризоциануровая кислота",
      text: "Ахалай махалай ляськи масяськи."
    },
    {
      id:3,
      title: "Джигурда",
      text: "Труп бомжа."
    },
  ])

  const [filter, setFilter] = useState({sort: "", query: ""});
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(
    () => {
      if (filter.sort) {
        return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
      }
      return posts;
    },
    [filter.sort, posts]
  );

  const sortedAndSearchedPosts = useMemo(
    () => {
      return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    },
    [filter.query, sortedPosts]
  )

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
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
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts list 1"/>
    </div>
  );
}

export default App;
