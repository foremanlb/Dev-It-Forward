import React from 'react'
import { Redirect } from 'react-router-dom'
import CardContainer from '../components/CardContainer'

export default function tutorGallery(props) {
  const currentUser = props.currentUser
  const currentTutor = props.currentTutor
  const tutors = props.tutors

  const renderPage = () => {
    if (currentUser !== null|| currentTutor !== null) {
      return (
        <div>
          <CardContainer tutors={tutors}/>
        </div>
      )
    } else {
      return <Redirect to='/Landing' />
    }
  }

  return (
    <div>
      <button onClick={props.logout}>Sign Out</button>
      {renderPage()}
    </div>
  )
}