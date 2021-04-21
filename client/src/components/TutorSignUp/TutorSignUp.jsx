import { useState } from "react";
import { signUpTutor } from "../../services/tutors";
import { useHistory } from "react-router-dom"

export default function TutorSignUp(props) {
  
  

  const defaultInput = {
    username: "",
    email: "",
    hourlyRate: "",
    programmingLanguage: [],
    description: "",
    password: "",
  };
  const [input, setInput] = useState(defaultInput);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };


  const handleLanguage = (e) => {
    if (e.target.checked) {
      setInput((prevState) => {
        let languageArr =[...prevState.programmingLanguage, e.target.value];
        return { ...prevState, programmingLanguage: languageArr };
      });
    } else {
      setInput((prevState) => {
        let index = prevState.programmingLanguage.indexOf(e.target.value);
        let languageArr = prevState.programmingLanguage.slice();
        languageArr.splice(index, 1);
        return { ...prevState, programmingLanguage: languageArr };
      });
    }
  }

  let history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await signUpTutor(input);
    props.setCurrentTutor(res.payload);
    history.push("/")

  };

  

  return (
    <div className="tutor-signUp">
      <h3>Join our Tutoring Team</h3>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="type"
          name="username"
          value={input.username}
          placeholder="Please Enter Username"
          onChange={handleChange}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={input.email}
          placeholder="Enter Email"
          onChange={handleChange}
          required
        />
        <label>Hourly Rate (in USD):</label>
        <input
          type="number"
          name="hourlyRate"
          value={input.hourlyRate}
          placeholder="Enter your hourly rate"
          onChange={handleChange}
          required
        />
        <h5>Language:</h5>
        <label>Ruby</label>
        <input
          type="checkbox"
          name="programmingLanguage"
          value="ruby"
          onChange={handleLanguage}
        />
        <label>React</label>
        <input
          type="checkbox"
          name="programmingLanguage"
          value="react"
          onChange={handleLanguage}
        />
        <label>HTML</label>
        <input
          type="checkbox"
          name="programmingLanguage"
          value="html"
          onChange={handleLanguage}
        />
        <label>PHP</label>
        <input
          type="checkbox"
          name="programmingLanguage"
          value="php"
          onChange={handleLanguage}
        />
        <label>Django</label>
        <input
          type="checkbox"
          name="programmingLanguage"
          value="django"
          onChange={handleLanguage}
        />
        <label>CSS</label>
        <input
          type="checkbox"
          name="programmingLanguage"
          value="css"
          onChange={handleLanguage}
        />
        <label>Python</label>
        <input
          type="checkbox"
          name="programmingLanguage"
          value="python"
          onChange={handleLanguage}
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
          onChange={handleChange}
          required
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={input.password}
          placeholder="Create Password"
          onChange={handleChange}
          required
        />
      </form>
      <input type="submit" />
    </div>
  );
}