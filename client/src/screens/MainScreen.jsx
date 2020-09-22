import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Notification, Image, Card, Container } from 'rbx'
import CheckAvail from '../components/AppointmentFinder/CheckAvail'

export default function MainScreen(props) {
  const { currentUser, currentDateTime, roomsInventory } = props
  const date = currentDateTime
    .clone()
    .set({ hour: 0, minute: 0, second: 0 })
  const { id } = useParams()


  return (
    <>
      <Container>
        <Notification color='warning'>
          <h4>
            Welcome, {currentUser ? currentUser.first_name : 'Guest'}
          </h4>
        </Notification>
  
        <Carousel className='gallery' renderIndicator={false} showThumbs={false}>
          {roomsInventory &&
            roomsInventory.map((room, idx) => (
              <>
      
                <Card key={idx}>
                  <Card.Header>
                    <Card.Header.Title>Studio {room.room_num}</Card.Header.Title>
                    </Card.Header>
                <Card.Image size={'3by2'}>
                  <Image src={room.img_url} />
                  </Card.Image>
                  <Card.Footer>
                    <Card.Footer.Item>
                      {room.sq_footage}<br />
                      Space for: {room.max_cap}
                    </Card.Footer.Item>                    
                    <Card.Footer.Item>
                      ${room.hourly_rt_day}/hr (Days)<br />
                      ${room.hourly_rt_night}/hr (Nights)
                    </Card.Footer.Item>
                  </Card.Footer>
                </Card>
              </>
            ))}
        </Carousel>
        <CheckAvail
          currentUser={currentUser}
          currentDate={date}
          roomsInventory={roomsInventory}
          updateId={id}
        />
      </Container>
    </>
  )
}
