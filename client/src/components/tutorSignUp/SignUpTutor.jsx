import { useState } from "react"
import { signUpTutor  } from "../../services/tutors"


export default function SignUpTutor (props) {
  const defaultInput = {
    username: "",
    email: "",
    hourlyRate: "",
    programmingLanguage: [],
    description:"",
    password: "",
    passwordConfirmation: "",
  };

  const [input, setInput] = useState(defaultInput)

  const handleChange = (e) => {
    let { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUpTutor(input);
  }

  // props.setCurrentUser(res.payload);

  return (
    <div className="tutor-signUp">
      <h3>Join our Tutoring Team</h3>
      <form onChange={handleChange} >
        <label>Username</label>
        <input
          name="username"
          value={input.username}
          placeholder="Please Enter Username"
          onSubmit={handleSubmit}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={input.email}
          placeholder="Enter Email"
          onSubmit={handleSubmit}
          required
        />
        <label>Hourly Rate (in USD):</label>
        <input
          name="hourlyRate"
          value={input.hourlyRate}
          placeholder="Enter your hourly rate"
          onSubmit={handleSubmit}
          required
        />
        <h5>Language:</h5>
        <label>Ruby</label>
        <input
          type="checkbox"
          name="programmingLanguage"
          value="ruby"
          onSubmit={handleSubmit}
        />
        <label>React</label>
        <input
          type="checkbox"
          name="programmingLanguage"
          value="react"
          onSubmit={handleSubmit}
        />
        <label>HTML</label>
        <input
          type="checkbox"
          name="programmingLanguage"
          value="html"
          onSubmit={handleSubmit}
        />
        <label>PHP</label>
        <input
          type="checkbox"
          name="programmingLanguage"
          value="php"
          onSubmit={handleSubmit}
        />
        <label>Django</label>
        <input
          type="checkbox"
          name="programmingLanguage"
          value="django"
          onSubmit={handleSubmit}
        />
        <label>CSS</label>
        <input
          type="checkbox"
          name="programmingLanguage"
          value="css"
          onSubmit={handleSubmit}
        />
        <label>Python</label>
        <input
          type="checkbox"
          name="programmingLanguage"
          value="python"
          onSubmit={handleSubmit}
        />
        <label>About Me</label>
        <textarea
          className="description-form"
          rows="25"
          cols="100"
          type="text"
          name="description"
          placeholder=""
          value={input.description}
          onSubmit={handleSubmit}
          required
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={input.password}
          placeholder="Create Password"
          onSubmit={handleSubmit}
          required
        />
        <label>Confirm Password</label>
        <input
          type="password"
          name="passwordConfirmation"
          value={input.passwordConfirmation}
          placeholder="Re-enter Password to Confirm"
          onSubmit={handleSubmit}
          required
        />
      </form>
      <input type='submit'/>
    </div>
  )
}
