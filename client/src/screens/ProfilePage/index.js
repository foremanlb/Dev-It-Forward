import { Redirect } from "react-router-dom";
import TutorProfile from '../../components/TutorProfile/TutorProfile'
import UserProfile from '../../components/UserProfile/UserProfile'

export default function ProfilePage(props) {
  const currentUser = props.currentUser;
  const currentTutor = props.currentTutor
  const users = props.users;
  const tutors = props.tutors;
  

  const renderProfilePage = () => {
    if (currentTutor) {
      const tutor = tutors.find(({username}) => username === currentTutor.username)
      return <TutorProfile tutor={tutor} />;
    } else if (currentUser) {
      const user = users.find(({username}) => username === currentUser.username)
      return <UserProfile user={user} />;
    } else {
      return <Redirect to="/Landing" />;
    }
  };
  return (
    <div>
      <button onClick={props.logout}>Sign Out</button>
      {renderProfilePage()}
    </div>
  );
}
