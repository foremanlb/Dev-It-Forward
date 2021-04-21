import React from 'react'
import { deleteTutor } from '../../services/tutors'
import {useHistory} from "react-router-dom"

export default function TutorProfile(props) {
  const tutor = props.tutor
  let history = useHistory();
  
  async function handleDelete() {
    const deletedTutor = await deleteTutor(tutor._id)
    history.push("/")
    }

  return (
    <div>
      <h3>{tutor.username}</h3>
      <h5>{tutor.email}</h5>
      <p>{`Hourly Rate: $${tutor.hourlyRate}`}</p>
      <ul>{tutor.programmingLanguage.map((language) => {
        return (
          <li key={language}>
            {language}
          </li>
        )
      })}
      </ul>
      <p>{tutor.description}</p>
      <button className="delete-tutor" onClick={handleDelete}></button>
    </div>

  )
}
