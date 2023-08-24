import React, { useContext } from "react";
import "./style.css";
import CustomLink from "../ui/link/link";
import Button from "../ui/button/button";
import { AuthContext } from "../../context";


function Nav() {
  const {isAuthorized, setIsAuthorized} = useContext(AuthContext);

  function logout(event) {
    event.preventDefault();
    setIsAuthorized(false);
    localStorage.removeItem ("authorized");
  }
  return (
    <div className="nav">
      <CustomLink className={"nav__button"} to="/about">About</CustomLink>
      <CustomLink className={"nav__button"} to="/posts">Posts</CustomLink>
      {isAuthorized
        ?<Button className="delete-button" onClick={logout}>Log Out</Button>
        :<></>
      }
    </div>
  )
}

export default Nav;
