import React, { useState } from 'react'
import { useParams} from 'react-router-dom'
import styled from 'styled-components'
import CheckAvail from '../components/AppointmentFinder/CheckAvail'

export default function MainScreen(props) {
  const { currentUser, currentDateTime, roomsInventory } = props
  const date = currentDateTime
    .clone()
    .set({ hour: 0, minute: 0, second: 0 })
  const { id } = useParams()
  
  const Welcome = styled.h1`
  font-family: ${currentUser && currentUser.band.font};
  font-size: 3rem;
  `
  
  console.log(typeof roomsInventory)
  
  return (
    <div>  
      <section>
        <Welcome>{currentUser && currentUser.band.name}</Welcome>
        <h4>Welcome, {currentUser ? currentUser.first_name : "Guest"}</h4>
      </section>  
      <ul className="gallery">
        {roomsInventory && roomsInventory.map((room, idx) => <li key={idx}><img src={room.img_url} width="300"/></li>)}
      </ul>
          <CheckAvail
            currentUser={currentUser}
            currentDate={date}
            roomsInventory={roomsInventory}
            updateId={id}
          />
    </div>
  )
}
