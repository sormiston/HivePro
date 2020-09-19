import React, { useState, useEffect } from 'react'
import Calendar from './Calendar/Calendar'
import TimeFilter from './TimeFilter'
import GnosticDisplay from '../Booker/TimeGnostic/display'
import timeGnosticCheck from '../../services/availability'
import { getAppointments } from '../../services/CRUD'
import './calendarRootStyles.css'

export default function CheckAvail(props) {
  const { currentUser, currentDate } = props
  // dynamic date set by calendar component
  const [date, setDate] = useState(currentDate)
  // dynamic time params set by TimeFilter component
  const [selectedBooking, setSelectedBooking] = useState({
    booking_hour_start: null,
    hours_booked: 2,
  })
  // api return to be passed as props to display
  const [appointments, setAppointments] = useState([])

  const fetchAppointments = async () => {
    const dateHrStr = date
      .clone()
      .set('hours', selectedBooking.booking_hour_start)
      .format()
    const durStr = String(selectedBooking.hours_booked)
    const apptArray = await getAppointments(dateHrStr, durStr)
    setAppointments(apptArray)
  }

  return (
    <div>
      <h1>Check availability by date...</h1>

      <Calendar value={date} setValue={setDate} />
      <TimeFilter setSelectedBooking={setSelectedBooking} />
      <button onClick={fetchAppointments}>Check</button>
      <GnosticDisplay />
    </div>
  )
}
