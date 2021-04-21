import React from 'react'
import TutorCard from '../TutorCard/TutorCard'

export default function CardContainer(props) {
  const tutors = props.tutors

  return (
    <div>
      {tutors.map((tutor) => {
        return(
          <TutorCard tutor={tutor} key={tutor._id}/>
      )})}
    </div>
  )
}
