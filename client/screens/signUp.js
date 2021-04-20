import { useState } from "react";

import { signUp } from "../services/users"
import { signUp } from "../services/tutors"

export default function SignUp(props) {
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
    await signUp(input);
    let res = await signIn(input);
    //
 }
return (
  <div>
    <h2> Header Student </h2>
    <form onChange = {handleChange}>
      <label>username</label>
      <input
        name="username"
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
      
      <button type = "submit"></button>


    </form>
  </div>
)
  
}
