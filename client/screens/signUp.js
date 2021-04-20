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
    let {name, value} = event.
  }


return (
  <div>
   
  </div>
)
  
}
