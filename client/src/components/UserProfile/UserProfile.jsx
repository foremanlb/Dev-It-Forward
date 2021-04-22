import { deleteUser, updatedUser } from "../../services/users";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function UserProfile(props) {
  const user = props.user;
  const [input, setInput] = useState(user);
  let history = useHistory();
  const setToggle = props.setToggle;

  async function handleDelete() {
    await deleteUser(user._id);
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
  };

  return (
    <div>
      <h3>{`Nice to see you again, ${user.username}`}</h3>
      <p>This is the info we have on your profile</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          name="username"
          required
          onChange={handleChange}
          value={input.username}
          placeholder="hello"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={input.email}
        />
        <button type="submit">Update Profile</button>
      </form>
      <button className="delete-user" onClick={handleDelete}>
        Delete Profile
      </button>
    </div>
  );
}
