import React, { useState } from 'react'


import CheckAvail from '../components/AppointmentFinder/CheckAvail'

export default function MainScreen(props) {
  const { currentUser, currentDateTime } = props
  
  return (
    <div>
      
      <CheckAvail currentUser={currentUser} currentDateTime={currentDateTime}/>
    </div>
  )
}
