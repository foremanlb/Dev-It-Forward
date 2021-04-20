import React from 'react'

export default function TutorCard(props) {
  const item = props.item

  return (
    <div>
      <h3>{item.username}</h3>
      <h5>{item.email}</h5>
      <p>{`Hourly Rate: $${item.hourlyRate}`}</p>
      <ul>{item.programmingLanguage.map((language) => {
        return (
          <li key={language}>
            {language}
          </li>
        )
      })}
      </ul>
      <p>{item.description}</p>
    </div>
  )
}
