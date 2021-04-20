import React from 'react'
import {Redirect} from 'react-router-dom'

export default function tutorGallery(props) {
  const currentProfile = props.currentProfile
  const data = props.data

  const renderPage = () => {
    if (currentProfile.username) {
      return (
        <div>
          <logout />
          <cardContainer data={data}/>
        </div>
      )
    } else {
      return <Redirect to='/' />
    }
  }

  return (
    <div>
      {renderPage()}
    </div>
  )
}