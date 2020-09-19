import React, { useState, useEffect } from 'react'
import Calendar from './Calendar/Calendar'
import TimeFilter from './TimeFilter'
import GnosticDisplay from '../Booker/TimeGnostic/GnosticDisplay'
import { getConflicts } from '../../services/CRUD'
import './calendarRootStyles.css'

export default function CheckAvail(props) {
  const { currentUser, currentDate, roomsInventory } = props
  // dynamic date set by calendar component
  const [date, setDate] = useState(currentDate)
  // dynamic time params set by TimeFilter component
  const [selectedBooking, setSelectedBooking] = useState({
    booking_hour_start: null,
    hours_booked: 2,
  })
  // api return to be passed as props to display
  // const [conflicts, setConflicts] = useState([])
  const [reducedInventory, setReducedInventory] = useState([])

  const runCheck = async () => {
      // currently NO guard against running with null booking time - error
      const dateHrStr = date
        .clone()
        .set('hours', selectedBooking.booking_hour_start)
        .format('YYYY-MM-DDTHH:00:00')
    const durStr = String(selectedBooking.hours_booked)
    
    let conflicts = await getConflicts(dateHrStr, durStr)
    conflicts = conflicts.map(c => c.room_id)
    setReducedInventory(roomsInventory.filter(r => !conflicts.includes(r.id) ))
  }
 

  return (
    <div>
      <h1>Check availability by date...</h1>

      <Calendar value={date} setValue={setDate} />
      <TimeFilter setSelectedBooking={setSelectedBooking} />
      <button onClick={runCheck}>Check</button>
      {/* <GnosticDisplay roomsInventory={roomsInventory} availableAppts={conflicts} /> */}
    </div>
  )
}
