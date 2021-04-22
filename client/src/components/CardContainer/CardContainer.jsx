import React from "react";
import TutorCard from "../TutorCard/TutorCard";
import "./CardContainer.css";

export default function CardContainer(props) {
  const tutors = props.tutors;

  return (
    <div className="tutor-gallery-container">
      {tutors.map((tutor) => {
        return <TutorCard tutor={tutor} key={tutor._id} />;
      })}
    </div>
  );
}
