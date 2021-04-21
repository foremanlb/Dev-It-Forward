import { deleteUser } from "../services/users";
import { useHistory } from "react-router-dom";

export default function UserProfile(props) {
  const user = props.user;
  let history = useHistory();

  async function handleDelete() {
    const deletedUser = await deleteUser(user._id);
    history.push("/");
  }
  return (
    <div>
      <h3>{`Nice to see you again, ${user.username}`}</h3>
      <p>This the info we have on your profile</p>
      <li>{`Email: ${user.email}`}</li>
      <li>{`Password: ${user.password}`}</li>
      <button className="delete-user" onClick={handleDelete}></button>
    </div>
  );
}
// will likely need an edit button to be able to change information for full CRUD
// not sure how we want to go about this
