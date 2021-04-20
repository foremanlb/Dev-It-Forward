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
  


return (
  <div>
   
  </div>
)
  
}
