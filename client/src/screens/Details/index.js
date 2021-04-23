import TutorDetails from "../../components/TutorDetail/TutorDetail.jsx";

export default function Details(props) {
  return (
    <div>
      <button onClick={props.logout}>Sign Out</button>
      <TutorDetails />
    </div>
  );
}
