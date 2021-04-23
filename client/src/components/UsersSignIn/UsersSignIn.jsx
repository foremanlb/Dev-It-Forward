import React from 'react'
import { signInUser } from '../../services/users.js'
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./UsersSignIn.css"


export default function UsersSignIn(props) {
  let defaultInput = {
    username: "",
    password: "",
  };
  const [userInput, setUserInput] = useState(defaultInput);

  const history = useHistory();


  const handleSubmit = async (event) => {
  event.preventDefault();
  let res = await signInUser(userInput);
  props.setCurrentUser(res.payload)
  history.push("/");
  };

  const handleChange = (event) => {
  let { id, value } = event.target;
  setUserInput((prevInput) => ({
    ...prevInput,
    [id]: value,
    }));
  }


  return (
    <div className="users-sign-in">
      <form className = "user-signin-form" onSubmit={handleSubmit}>
        <h1>User Sign-In</h1>
        <label htmlFor="username" placeholder="username">Username</label>
        <input
          type="text"
          id="user username"
          onChange={handleChange}
          value={userInput.username}
        ></input>
        <label htmlFor="password" placeholder="password">Password</label>
        <input
          type="password"
          id="user password"
          onChange={handleChange}
          value={userInput.password}
        ></input>
        <button className="user-sign-in-button" type="submit">Sign-In</button>
      </form>
    </div>
  )
}
