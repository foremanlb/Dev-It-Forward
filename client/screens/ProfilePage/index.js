export default function ProfilePage(props) {
  return (
    <div>
      <button onClick={props.logout}>Sign Out</button>
      <h1>User Profile</h1>
      <UserProfile />
      <h1>Tutor Profile</h1>
      <TutorProfile />
    </div>
  );
}
