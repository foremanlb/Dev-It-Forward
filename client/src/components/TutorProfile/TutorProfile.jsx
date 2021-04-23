import { useState } from "react";
import { deleteTutor } from "../../services/tutors";
import { useHistory } from "react-router-dom";
import LanguageMap from "../LanguageMap/LanguageMap";
import { updateTutor } from "../../services/tutors";
import "./TutorProfile.css";

export default function TutorProfile(props) {
  const tutor = props.tutor;
  const [input, setInput] = useState(tutor);
  let history = useHistory();
  const setToggle = props.setToggle;

  async function handleDelete() {
    await deleteTutor(tutor._id);
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
    await updateTutor(input._id, input);
    setToggle((prevState) => !prevState);
    alert("Tutor Profile Updated!");
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
        <label htmlFor="hourly rate">Hourly Rate</label>
        <input
          type="number"
          name="hourlyRate"
          required
          onChange={handleChange}
          value={input.hourlyRate}
        />
        <LanguageMap input={input} setInput={setInput} />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          required
          onChange={handleChange}
          value={input.description}
        />
        <button className="update-tutor" type="submit">
          Update Profile
        </button>
      </form>
      <button className="delete-tutor" onClick={handleDelete}>
        Delete Profile
      </button>
    </div>
  );
}
