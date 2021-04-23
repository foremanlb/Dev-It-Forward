import React, { useState, useEffect } from "react";
import "./TutorDetail.css";
import { getTutor } from "../../services/tutors";
import { useParams } from "react-router-dom";
import icon from "../../images/icon.jpeg";
const TutorDetail = (props) => {
  const [tutor, setTutor] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchTutor();
  }, []);

  const fetchTutor = async () => {
    const tutor = await getTutor(id);
    setTutor(tutor);
  };

  return (
    <div className="tutor-detail">
      <div className="tutor-user-image">
        <img className="hero-image" src={icon} alt="laptop" />
      </div>
      <div className="details-container">
        <div className="tutor-user-name"> Tutor: {tutor.username}</div>
        <div className="tutor-email"> Email: {tutor.email}</div>
        <div className="tutor-hourlyrate">
          {" "}
          Hourly Rate: ${tutor.hourlyRate}
        </div>
        <ul className="language-list">
          {tutor.programmingLanguage &&
            tutor.programmingLanguage.map((language) => {
              return <li key={language}>{language}</li>;
            })}
        </ul>
        <div className="tutor-description"> {tutor.description}</div>
      </div>
    </div>
  );
};

export default TutorDetail;
