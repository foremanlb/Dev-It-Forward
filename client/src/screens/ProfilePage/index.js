import { Redirect } from "react-router-dom";
import TutorProfile from '../../components/tutorProfile/TutorProfile'

export default function ProfilePage(props) {
  const currentUser = props.currentUser;
  const currentTutor = props.currentTutor
  const users = props.users;
  const tutors = props.tutors;
  

  const renderProfilePage = () => {
    if (currentTutor) {
      const tutor = tutors.find(({username}) => username === currentTutor.username)
      return <TutorProfile tutor={tutor} />;
    } else if (!currentUser) {
      return <UserProfile userData={userData} />;
    } else {
      <Redirect to="/" />;
    }
  };
  return (
    <div>
      <Logout />
      {renderProfilePage()}
    </div>
  );
}
