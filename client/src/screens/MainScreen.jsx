import React, { useState } from 'react'
import { useParams} from 'react-router-dom'

import CheckAvail from '../components/AppointmentFinder/CheckAvail'

export default function MainScreen(props) {
  const { currentUser, currentDateTime, roomsInventory, updateId } = props
  const date = currentDateTime
    .clone()
    .set({ hour: 0, minute: 0, second: 0 })
  
    const { id } = useParams()
  
  return (
    <div>      
          <CheckAvail
            currentUser={currentUser}
            currentDate={date}
            roomsInventory={roomsInventory}
            updateId={id}
          />
    </div>
  )
}
