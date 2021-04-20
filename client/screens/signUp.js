import { useState } from "react";
import { signUp} from "../services/users"

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

return (
  <div>
    <h2> Student </h2>
    <form>
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
       <label>Password Confirmation</label>
      <input
        name="password"
        type = "password"
        value={input.password}
        placeholder = "Enter password .."
      />
      <button type = "submit"></button>


    </form>
  </div>
)
  
}
