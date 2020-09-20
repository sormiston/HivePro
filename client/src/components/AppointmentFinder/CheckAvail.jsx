import React, { useState, useEffect } from 'react'
import Calendar from './Calendar/Calendar'
import TimeFilter from './TimeFilter'
import GnosticDisplay from '../Booker/TimeGnostic/GnosticDisplay'
import { getConflicts } from '../../services/CRUD'


export default function CheckAvail(props) {
  const { currentUser, currentDate, roomsInventory, updateId } = props
  // dynamic date set by calendar component
  const [selectedDateTime, setSelectedDate] = useState({
    start: currentDate,
    dur: 2,
  })
  const [reducedInventory, setReducedInventory] = useState([])
  const [touched, setTouched] = useState(false)
  const updateState = (k, v) => {
    setSelectedDate((prevState) => ({
      ...prevState,
      [k]: v,
    }))
  }
 
  const runCheck = async () => {
    let conflicts = await getConflicts(
      selectedDateTime.start.format('YYYY-MM-DDTHH:00:00'),
      String(selectedDateTime.dur)
    )
    conflicts = conflicts.map((c) => c.room_id)
    setReducedInventory(
      roomsInventory.filter((r) => !conflicts.includes(r.id))
    )
    setTouched(true)
  }
  return (
    <div>
      <h1>Check availability by date...</h1>
      <Calendar
        value={selectedDateTime.start}
        updateState={updateState}
      />
      <TimeFilter
        selectedDateTime={selectedDateTime.start}
        updateState={updateState}
      />
      <button onClick={runCheck}>Check</button>
      {touched && <GnosticDisplay
        currentUser={currentUser}
        selectedBooking={selectedDateTime}
        inventory={reducedInventory}
        touched={touched}
        setTouched={setTouched}
        updateId={updateId}
      />}
    </div>
  )
}
