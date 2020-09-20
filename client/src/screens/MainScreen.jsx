import React, { useState } from 'react'
import CheckAvail from '../components/AppointmentFinder/CheckAvail'

export default function MainScreen(props) {
  const { currentUser, currentDateTime, roomsInventory } = props
  const date = currentDateTime
    .clone()
    .set({ hour: 0, minute: 0, second: 0 })
  return (
    
    <div>
      <CheckAvail
        currentUser={currentUser}
        currentDate={date}
        roomsInventory={roomsInventory}
      />
    </div>
  )
}
