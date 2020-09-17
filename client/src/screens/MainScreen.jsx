import React, { useState } from 'react'


import CheckAvail from '../components/AppointmentFinder/CheckAvail'

export default function MainScreen(props) {
  const { currentUser, currentTime } = props
  
  return (
    <div>
      
      <CheckAvail currentUser={currentUser} currentTime={currentTime}/>
    </div>
  )
}
