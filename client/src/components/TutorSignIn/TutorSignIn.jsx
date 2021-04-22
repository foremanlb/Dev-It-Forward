import React from 'react'
import { signInTutor } from '../../services/tutors.js'
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./TutorSignIn.css"


export default function TutorSignIn(props) {
  let defaultInput = {
    username: "",
    password: "",
  };
  const [tutorInput, setTutorInput] = useState(defaultInput);

  const history = useHistory();


  const handleSubmit = async (event) => {
    event.preventDefault();
    let res = await signInTutor(tutorInput);
    props.setCurrentTutor(res.payload)
    history.push("/");
  };

  function handleChange(event) {
  let { id, value } = event.target;
  setTutorInput((prevInput) => ({
    ...prevInput,
    [id]: value,
    }));
  }


  return (
    <div className = "tutor-sign-in">
      <form className = "tutor-signin-form" onSubmit={handleSubmit}>
        <h1>Tutor Sign-In</h1>
        <label htmlFor="username" placeholder="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={handleChange}
          value={tutorInput.username}
        ></input>
        <label htmlFor="password" placeholder="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={handleChange}
          value={tutorInput.password}
        ></input>
        <button type="submit">Sign-In</button>
      </form>
    </div>
  )
}
