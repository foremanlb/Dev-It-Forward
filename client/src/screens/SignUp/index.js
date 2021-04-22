import React from "react";
import UserSignUp from "../../components/UserSignUp/UserSignUp.jsx";
import TutorSignUp from "../../components/TutorSignUp/TutorSignUp.jsx";
import './index.css'

export default function SignUp(props) {
  return (
    <div id='signUp'>
      <UserSignUp
        setCurrentUser={props.setCurrentUser}
        setToggle={props.setToggle}
      />
      <TutorSignUp
        setCurrentTutor={props.setCurrentTutor}
        setToggle={props.setToggle}
      />
    </div>
  );
}
