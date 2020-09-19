import React from 'react'

export default function GnosticDisplay(props) {
  const { availableAppts } = props
  
  return (
    <div>
      {availableAppts.map(appt => (
        <p>{appt.room.room_num}</p>
      ))}
    </div>
  )
}
