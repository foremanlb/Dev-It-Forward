export default function UserProfile(props) {
  const userData = props.userData;

  return (
    <div>
      <h3>{`Nice to see you again, ${userData.username}`}</h3>
      <p>This the the info we have on your profile</p>
      <li>{`Email: ${userData.email}`}</li>
      <li>{`Password: ${userData.password}`}</li>
    </div>
  );
}
