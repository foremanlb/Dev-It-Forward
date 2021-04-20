import { useState } from "react";
import TutorSignIn from '../../components/TutorSignIn'
import UsersSignIn from '../../components/UsersSignIn'
import { useHistory } from "react-router-dom";

export default function Landing() {
  let defaultInput = {
    username: "",
    password: "",
  };
  const [input, setInput] = useState(defaultInput);

  const history = useHistory();

  function handleClick(event) {
    history.push("/sign-up");
  }

  return (
    <div>
      <h1 className="hero-image-header-text">Level up with a coding tutor</h1>
      <div className="hero-image-container">
        <img className="hero-image" src="../../assets/hero.jpeg" alt="laptop" />
      </div>
      <p className="hero-image-paragraph-text">
        1-on-1 coaching from someone that has gone through the same bootcamp you
        are going through. Debugging, career advice, and much more.
      </p>
      <TutorSignIn input={input} setInput={setInput} />
      <UsersSignIn input={input} setInput={setInput} />
      <button onClick={handleClick}>Sign-Up</button>
    </div>
  );
}
