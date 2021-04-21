import React, { useState, useEffect } from 'react'
import { getTutor } from '../services/tutors'
import {useParams} from 'react-router-dom'



const TutorDetail = (props) => {

  const [tutor, setTutor] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    const fetchTutor = async () => {
      const tutor = await getTutor(id);
      setTutor(tutor)
      }
    fetchTutor();
  })




  return (
    <div className="tutor-detail">
      
      <div className="detail">
        <div className="tutor-user-name"> {tutor.username}</div>
        <div className="tutor-email"> {tutor.email}</div>
        <div className="tutor-hourlyrate"> {tutor.hourlyRate}</div>
        <ul>{tutor.programmingLanguage.map((language) => {
        return (
          <li key={language}>
            {language}
          </li>
        )
      })}
      </ul>
        <div className="tutor-description"> {tutor.description}</div>
        
      </div>

    </div>
  )
}

export default TutorDetail