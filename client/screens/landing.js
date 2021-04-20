import { signIn } from "../../services/users.js";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Landing() {
  let defaultInput = {
    username: "",
    password: "",
  };
  const [input, setInput] = useState(defaultInput);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signIn(input);
    history.push("/tutors");
  };

  function handleClick(event) {
    history.push("/sign-up");
  }

  function handleChange(event) {
    let { id, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  }

  return (
    <div>
      <h1 className="hero-image-header-text">Level up with a coding tutor</h1>
      <div className="hero-image-container">
        <img className="hero-image" src="../../assets/hero.jpeg" alt="image" />
      </div>
      <p className="hero-image-paragraph-text">
        1-on-1 coaching from someone that has gone through the same bootcamp you
        are going through. Debugging, career advice, and much more.
      </p>
      <form onSubmit={handleSubmit}>
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
      <button onClick={handleClick}>Sign-Up</button>
    </div>
  );
}
