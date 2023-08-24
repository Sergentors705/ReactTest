import React, { useContext } from "react";
import Input from "../components/ui/input/input";
import Button from "../components/ui/button/button";
import { AuthContext } from "../context";


function Login() {
  const {isAuthorized, setIsAuthorized} = useContext(AuthContext);

  function submit(event) {
    event.preventDefault();
    setIsAuthorized(true);
    localStorage.setItem("authorized", "true");
  }
  return (
    <div>
      <h1 style={{color: "yellow"}}>Log in</h1>
      <form onSubmit={submit}>
        <Input type="text" placeholder="Input login"></Input>
        <Input type="password" placeholder="Input password"></Input>
        <Button type="submit">Log In</Button>
      </form>
    </div>
  )
}

export default Login;
