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
  },[id])




  return (
    <div className="tutor-detail">
      
      <div className="detail">
        <div className="tutor-user-name"> {tutor.username}</div>
        <div className="tutor-user-name"> {tutor.username}</div>
        <div className="tutor-user-name"> {tutor.username}</div>
        <div className="tutor-user-name"> {tutor.username}</div>
        
      </div>

    </div>
  )
}

export default TutorDetail