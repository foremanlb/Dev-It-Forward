import React from 'react'
import { signInUser } from '../../services/users.js'
import { useHistory } from "react-router-dom";
import { useState } from "react";


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

  function handleChange(event) {
  let { id, value } = event.target;
  setUserInput((prevInput) => ({
    ...prevInput,
    [id]: value,
    }));
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>User Sign-In</h1>
        <label htmlFor="username" placeholder="username"></label>
        <input
          type="text"
          id="username"
          onChange={handleChange}
          value={userInput.username}
        ></input>
        <label htmlFor="password" placeholder="password"></label>
        <input
          type="password"
          id="password"
          onChange={handleChange}
          value={userInput.password}
        ></input>
        <button type="submit">Sign-In</button>
      </form>
    </div>
  )
}
