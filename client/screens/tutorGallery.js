import React from 'react'
import {Redirect} from 'react-router-dom'

export default function tutorGallery(props) {
  const data = props.data
  

  const renderPage = () => {
    if (data.username) {
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