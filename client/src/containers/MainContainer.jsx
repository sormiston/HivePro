import React, { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import MainScreen from '../screens/MainScreen'
import { getRooms } from '../services/CRUD'

export default function MainContainer(props) {
  const [roomsInventory, setRoomsInventory] = useState([])
  const { currentUser, currentDateTime } = props

  useEffect(() => {
    const fetchRoomsInventory = async () => {
      const roomsArray = await getRooms()
      setRoomsInventory(roomsArray)
    }
    fetchRoomsInventory()
  }, [])

  return (
    <MainScreen
      currentUser={currentUser}
      currentDateTime={currentDateTime}
      roomsInventory={roomsInventory}
    />
  )
}
