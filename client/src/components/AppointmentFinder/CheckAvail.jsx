import React, { useState, useEffect } from 'react'
import Calendar from './Calendar/Calendar'
import TimeFilter from './TimeFilter'
import GnosticDisplay from '../Booker/TimeGnostic/GnosticDisplay'
import { getConflicts } from '../../services/CRUD'
import './calendarRootStyles.css'

export default function CheckAvail(props) {
  const { currentUser, currentDate, roomsInventory } = props
  // dynamic date set by calendar component
  const [selectedDate, setDate] = useState(currentDate)
  // dynamic time params set by TimeFilter component
  const [selectedBooking, setSelectedBooking] = useState({
    booking_hour_start: {},
    hours_booked: 2,
  })
  const [reducedInventory, setReducedInventory] = useState([])
  
  const runCheck = async () => {
    // currently NO guard against running with null booking time - error
    // const dateHrStr = selectedDate
    //   .clone()
    //   .set('hours', selectedBooking.booking_hour_start)
    //   .format('YYYY-MM-DDTHH:00:00')
    const durStr = String(selectedBooking.hours_booked)

    const bookingHourEnd = selectedDate.clone().set('hour', )
    let conflicts = await getConflicts(selectedBooking.booking_hour_start, durStr)
    conflicts = conflicts.map((c) => c.room_id)
    setReducedInventory(
      roomsInventory.filter((r) => !conflicts.includes(r.id))
    )
  }
  return (
    <div>
      <h1>Check availability by date...</h1>

      <Calendar value={selectedDate} setValue={setDate} />
      <TimeFilter selectedDate={selectedDate} setSelectedBooking={setSelectedBooking} />
      <button onClick={runCheck}>Check</button>
      <GnosticDisplay
        currentUser={currentUser}
        selectedDate={selectedDate}
        selectedBooking={selectedBooking}
        inventory={reducedInventory}
      />
    </div>
  )
}
