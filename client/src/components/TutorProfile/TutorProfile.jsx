import {useState} from 'react'
import { deleteTutor } from '../../services/tutors'
import { useHistory } from "react-router-dom"
import LanguageMap from '../LanguageMap/LanguageMap'
import {updateTutor } from '../../services/tutors'

export default function TutorProfile(props) {
  const tutor = props.tutor
  const [input, setInput] = useState(tutor)
  let history = useHistory();
  const setToggle = props.setToggle
  
  async function handleDelete() {
    await deleteTutor(tutor._id)
    await localStorage.clear();
    setToggle((prevState) => !prevState)
    history.push("/")
  }
  
  const handleChange = (e) => {
    let { name, value } = e.target
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateTutor(tutor._id, input)
    setToggle((prevState) => !prevState)
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>User Name</label>
        <input
          type='text'
          name='username'
          required
          onChange={handleChange}
          value={input.username}
          placeholder='hello'
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          required
          onChange={handleChange}
          value={input.email}
        />
        <label htmlFor='hourly rate'>Hourly Rate</label>
        <input
          type='number'
          name='hourlyRate'
          required
          onChange={handleChange}
          value={input.hourlyRate}
        />
        <LanguageMap input={input} setInput={setInput}/>
        <label htmlFor='description'>Description</label>
        <input
          type='text'
          name='description'
          required
          onChange={handleChange}
          value={input.description}
        />
        <button type='submit'>Update Profile</button>
      </form>
      <button className="delete-tutor" onClick={handleDelete}>Delete Profile</button>
    </div>
  )
}