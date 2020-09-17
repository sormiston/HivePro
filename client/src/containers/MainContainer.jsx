import React, { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import moment from 'moment'
import MainScreen from '../screens/MainScreen'

export default function MainContainer(props) {
  const [currentTime, setCurrentTime] = useState(moment())
  const { currentUser } = props
  return (
    <MainScreen currentUser={currentUser} currentTime={currentTime} set/> 
  )
}
