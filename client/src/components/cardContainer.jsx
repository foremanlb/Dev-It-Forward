import React from 'react'
import TutorCard from './TutorCard'

export default function cardContainer(props) {
  const data = props.data

  return (
    <div>
      {data.map((item) => {
        return(
          <TutorCard item={item} key={item._id}/>
      )})}
    </div>
  )
}
