import { deleteUser, updatedUser} from "../../services/users";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./UserProfile.css";

export default function UserProfile(props) {
  const user = props.user;
  const [input, setInput] = useState(user);
  let history = useHistory();
  const setToggle = props.setToggle;

  async function handleDelete() {
    await deleteUser(input._id);
    await localStorage.clear();
    setToggle((prevState) => !prevState);
    history.push("/");
  }

  const handleChange = (e) => {
    let { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatedUser(user._id, input);
    setToggle((prevState) => !prevState);
    alert("User Profile Updated!");
  };

  return (
    <div className="profile-container">
      <h3>{`Nice to see you again, ${input.username}!`}</h3>
      <p>This is the info we have on your profile</p>
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={input.email}
        />
        <button className="update-user" type="submit">
          Update Profile
        </button>
      </form>
      <button className="delete-user" onClick={handleDelete}>
        Delete Profile
      </button>
    </div>
  );
}
