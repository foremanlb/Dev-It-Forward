import { useState } from "react";
import { signInTutor, signUpTutor } from "../../services/tutors";
import { useHistory } from "react-router-dom";
import "./TutorSignUp.css";

export default function TutorSignUp(props) {
  const defaultInput = {
    username: "",
    email: "",
    hourlyRate: "",
    programmingLanguage: [],
    description: "",
    password: "",
  };
  const [tutorInput, setTutorInput] = useState(defaultInput);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setTutorInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleLanguage = (e) => {
    if (e.target.checked) {
      setTutorInput((prevState) => {
        let languageArr = [...prevState.programmingLanguage, e.target.value];
        return { ...prevState, programmingLanguage: languageArr };
      });
    } else {
      setTutorInput((prevState) => {
        let index = prevState.programmingLanguage.indexOf(e.target.value);
        let languageArr = prevState.programmingLanguage.slice();
        languageArr.splice(index, 1);
        return { ...prevState, programmingLanguage: languageArr };
      });
    }
  };

  let history = useHistory();

  const handleTutorSubmit = async (e) => {
    e.preventDefault();
    await signUpTutor(tutorInput);
    let res = await signInTutor({
      username: tutorInput.username,
      password: tutorInput.password,
    });
    props.setCurrentTutor(res.payload);
    props.setToggle((prevState) => !prevState);
    history.push("/");
  };

  return (
    <div className="tutor-signUp">
      <h2 id="tutor-sign-up-title">Tutor Sign Up</h2>
      <form onSubmit={handleTutorSubmit} id="TutorSignUpForm">
        <label>Username</label>
        <input
          type="type"
          name="username"
          value={tutorInput.username}
          placeholder="Please Enter Username"
          onChange={handleChange}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={tutorInput.email}
          placeholder="Enter Email"
          onChange={handleChange}
          required
        />
        <label>Hourly Rate (in USD):</label>
        <input
          type="number"
          name="hourlyRate"
          value={tutorInput.hourlyRate}
          placeholder="Enter your hourly rate"
          onChange={handleChange}
          required
        />
        <h5>Language:</h5>
        <div id="languageList">
          <label>Ruby</label>
          <input
            type="checkbox"
            name="programmingLanguage"
            value="Ruby"
            onChange={handleLanguage}
          />
          <label>React</label>
          <input
            type="checkbox"
            name="programmingLanguage"
            value="React"
            onChange={handleLanguage}
          />
          <label>HTML</label>
          <input
            type="checkbox"
            name="programmingLanguage"
            value="HTML"
            onChange={handleLanguage}
          />
          <label>PHP</label>
          <input
            type="checkbox"
            name="programmingLanguage"
            value="PHP"
            onChange={handleLanguage}
          />
          <label>Django</label>
          <input
            type="checkbox"
            name="programmingLanguage"
            value="Django"
            onChange={handleLanguage}
          />
          <label>CSS</label>
          <input
            type="checkbox"
            name="programmingLanguage"
            value="CSS"
            onChange={handleLanguage}
          />
          <label>Python</label>
          <input
            type="checkbox"
            name="programmingLanguage"
            value="Python"
            onChange={handleLanguage}
          />
        </div>
        <label>About Me</label>
        <textarea
          className="description-form"
          rows="15"
          cols="30"
          type="text"
          name="description"
          placeholder=""
          value={tutorInput.description}
          onChange={handleChange}
          required
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={tutorInput.password}
          placeholder="Create Password"
          onChange={handleChange}
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
}
