import React, { useState } from 'react'


import CalendarControl from '../components/AppointmentFinder/CalendarControl'

export default function MainScreen(props) {
  const { currentUser, currentTime } = props
  
  return (
    <div>
      <h1>Check availability by date...</h1>
      <CalendarControl currentUser={currentUser} currentTime={currentTime}/>
    </div>
  )
}
