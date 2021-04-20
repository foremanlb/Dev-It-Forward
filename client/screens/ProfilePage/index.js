import { Redirect } from "react-router-dom";

export default function ProfilePage(props) {
  const currentProfile = props.currentProfile;
  const userData = props.userData;
  const tutorData = props.tutorData;

  const renderProfilePage = () => {
    if (currentProfile.tutor) {
      return <TutorProfile tutorData={tutorData} />;
    } else if (!currentProfile.tutor) {
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
