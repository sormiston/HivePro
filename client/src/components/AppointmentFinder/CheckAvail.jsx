import React, { useState, useEffect } from 'react'
import Calendar from './Calendar/Calendar'
import TimeFilter from './TimeFilter'
import GnosticDisplay from '../Booker/TimeGnostic/GnosticDisplay'
import { getConflicts } from '../../services/CRUD'
import './calendarRootStyles.css'

export default function CheckAvail(props) {
  const { currentUser, currentDate, roomsInventory } = props
  // dynamic date set by calendar component
  const [selectedDate, setSelectedDate] = useState(
    {
    start: currentDate,
    end: {},
    dur: 0
    }
  )
  const updateState = (k, v) => {
    setSelectedDate((prevState) => ({
      ...prevState,
      [k]: v
    }))
  }
  
  const [reducedInventory, setReducedInventory] = useState([])
  
  const runCheck = async () => {
   
    // const durStr = String(selectedBooking.hours_booked)
    // const bookingHourEnd = selectedDate.clone().set('hour', )
    // let conflicts = await getConflicts(selectedBooking.booking_hour_start, durStr)
    // conflicts = conflicts.map((c) => c.room_id)
    // setReducedInventory(
    //   roomsInventory.filter((r) => !conflicts.includes(r.id))
    // )
  }
  return (
    <div>
      <h1>Check availability by date...</h1>

      <Calendar value={selectedDate.start} updateState={updateState} />
      <TimeFilter selectedDate={selectedDate.start} updateState={updateState} />
      <button onClick={runCheck}>Check</button>
      <GnosticDisplay
        currentUser={currentUser}
        selectedDate={selectedDate.start}
        // selectedBooking={selectedBooking}
        inventory={reducedInventory}
      />
    </div>
  )
}
