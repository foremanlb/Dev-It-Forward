import React from "react";
import { Redirect } from "react-router-dom";
import CardContainer from "../../components/CardContainer/CardContainer";
import "./index.css";

export default function TutorGallery(props) {
  const currentUser = props.currentUser;
  const currentTutor = props.currentTutor;
  const tutors = props.tutors;

  const renderPage = () => {
    if (currentUser || currentTutor) {
      return (
        <div>
          <CardContainer tutors={tutors} />
        </div>
      );
    } else {
      return <Redirect to="/Landing" />;
    }
  };

  return (
    <div>
      <button className="sign-out-button" onClick={props.logout}>
        Sign Out
      </button>
      {renderPage()}
    </div>
  );
}
