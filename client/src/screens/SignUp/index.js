import React from "react";
import UserSignUp from '../../components/UserSignUp/UserSignUp.jsx'
import TutorSignUp from "../../components/TutorSignUp/TutorSignUp.jsx";

export default function SignUp(props) {
  return (
    <div>
      <UserSignUp setCurrentUser={props.setCurrentUser} setToggle={props.setToggle}/>
      <TutorSignUp setCurrentTutor={props.setCurrentTutor} setToggle={props.setToggle}/>
    </div>
  );
}
