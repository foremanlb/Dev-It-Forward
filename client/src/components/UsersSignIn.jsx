import React from 'react'
import { signInUser } from '../services/users.js'
import { useHistory } from "react-router-dom";



export default function UsersSignIn(props) {
  const setInput = props.setInput
  const input = props.input

  const history = useHistory();


  const handleSubmit = async (event) => {
  event.preventDefault();
  await signInUser(input);
  history.push("/tutors");
  };

  function handleChange(event) {
  let { id, value } = event.target;
  setInput((prevInput) => ({
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
          value={input.username}
        ></input>
        <label htmlFor="password" placeholder="password"></label>
        <input
          type="text"
          id="password"
          onChange={handleChange}
          value={input.password}
        ></input>
        <button type="submit">Sign-In</button>
      </form>
    </div>
  )
}
