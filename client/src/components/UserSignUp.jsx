import { useState } from "react";

import {signInUser, signUpUser } from "../services/users"

export default function SignUpUser(props) {
  const defaultInput = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
   
  };

  const [input, setInput] = useState(defaultInput);
  
  const handleChange = (event) => {
    let { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput, [name]: value,

    }));
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUpUser(input);
    let res = await signInUser(input);
    props.setCurrentUser(res.payload)
 }
return (
  <div>
    <h2> Header Student </h2>
    <form onChange = {handleChange} onSubmit={handleSubmit} >
      <label>username</label>
      <input
        name="username"
        type = "username"
        value={input.username}
        placeholder = "Enter username .."
      />
      <label>Email</label>
      <input
        name="email"
        type = "email"
        value={input.email}
        placeholder = "Enter email .."
      />

      <label>Password</label>
      <input
        name="password"
        type ="password"
        value={input.password}
        placeholder = "Enter password .."
      />
      <label>Password Confirmation</label>
      <input
        name="passwordConfirmation"
        type ="password"
        value={input.passwordConfirmation}
        placeholder = "reenter password .."
      />
      <button type = "submit"></button>
    </form>
  </div>
)
  
}
