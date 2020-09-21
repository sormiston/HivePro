import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Notification, Image } from 'rbx'
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

  return (
    <div>
      <Notification color='warning'>
        <h4>
          Welcome, {currentUser ? currentUser.first_name : 'Guest'}
        </h4>
      </Notification>

      <Carousel className='gallery'>
        {roomsInventory &&
          roomsInventory.map((room, idx) => (
            <>
              <p>{room.room_num}</p>
              <Image.Container size={'3by2'}>
                <Image src={room.img_url} />
              </Image.Container>
            </>
          ))}
      </Carousel>
      <CheckAvail
        currentUser={currentUser}
        currentDate={date}
        roomsInventory={roomsInventory}
        updateId={id}
      />
    </div>
  )
}
