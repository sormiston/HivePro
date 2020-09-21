import React, { useState, useEffect } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import MainScreen from '../screens/MainScreen'
import GreenRoom from '../screens/GreenRoom'
import { getRooms } from '../services/CRUD'

export default function MainContainer(props) {
  const [roomsInventory, setRoomsInventory] = useState(null)
  
  const { currentUser, currentDateTime } = props

  useEffect(() => {
    const fetchRoomsInventory = async () => {
      const roomsArray = await getRooms()
      setRoomsInventory(roomsArray)
    }
    fetchRoomsInventory()
  }, [])

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <MainScreen
            currentUser={currentUser}
            currentDateTime={currentDateTime}
            roomsInventory={roomsInventory}
            
          />
        </Route>
        <Route path='/appointments/update/:id'>
          <MainScreen
            currentUser={currentUser}
            currentDateTime={currentDateTime}
            roomsInventory={roomsInventory}
            
          />
        </Route>
        <Route path='/green-room'>
          <GreenRoom
            currentUser={currentUser}
          />
        </Route>
      </Switch>
    </>
  )
}
