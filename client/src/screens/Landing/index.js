import TutorSignIn from '../../components/TutorSignIn'
import UsersSignIn from '../../components/UsersSignIn'
import { useHistory } from "react-router-dom";
import hero from '../../images/hero.jpeg'

export default function Landing(props) {
  const history = useHistory();

  function handleClick(event) {
    history.push("/sign-up");
  }

  return (
    <div>
      <h1 className="hero-image-header-text">Level up with a coding tutor</h1>
      <div className="hero-image-container">
        <img className="hero-image" src={hero} alt="laptop"/>
      </div>
      <p className="hero-image-paragraph-text">
        1-on-1 coaching from someone that has gone through the same bootcamp you
        are going through. Debugging, career advice, and much more.
      </p>
      <TutorSignIn setCurrentTutor={props.setCurrentTutor}/>
      <UsersSignIn setCurrentUser={props.setCurrentUser }/>
      <button onClick={handleClick}>Sign-Up</button>
    </div>
  );
}
