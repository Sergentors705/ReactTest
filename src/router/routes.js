import About from "../pages/about";
import Error from "../pages/error";
import Login from "../pages/login";
import PostIdPage from "../pages/post-id-pages";
import Posts from "../pages/posts";

export const privateRoutes = [
  {path: "/", element: <Posts/>},
  {path: "/posts", element: <Posts/>},
  {path: "/about", element: <About />},
  {path: "/posts/:id", element: <PostIdPage />},

  {path: "/error", element: <Error />},
]

export const publicRoutes = [
  {path: "/", element: <Login/>},
  {path: "/login", element: <Login />},

]
