import { Link } from "react-router-dom";

export default function TutorCard(props) {
  const tutor = props.tutor;

  return (
    <div>
      <h3>{tutor.username}</h3>
      <h5>{tutor.email}</h5>
      <p>{`Hourly Rate: $${tutor.hourlyRate}`}</p>
      <ul>
        {tutor.programmingLanguage.map((language) => {
          return <li key={language}>{language}</li>;
        })}
      </ul>
      <p>{tutor.description}</p>
      <Link to={`/details/${tutor._id}`}>Details</Link>
    </div>
  );
}
