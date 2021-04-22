import { Link } from "react-router-dom";
import "./TutorCard.css";

export default function TutorCard(props) {
  const tutor = props.tutor;

  return (
    <div className="tutor-card-container">
      <h3>Tutor: {tutor.username}</h3>
      <p>{`Hourly Rate: $${tutor.hourlyRate}`}</p>
      <ul>
        {tutor.programmingLanguage.map((language) => {
          return <li key={language}>{language}</li>;
        })}
      </ul>
      <Link to={`/details/${tutor._id}`}>Details</Link>
    </div>
  );
}
