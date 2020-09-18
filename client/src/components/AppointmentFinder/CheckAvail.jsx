import React, { useState, useEffect } from 'react'
import Calendar from './Calendar/Calendar'
import TimeFilter from './TimeFilter'
import GnosticDisplay from '../Booker/TimeGnostic/display'
import {getAppointments} from '../../services/CRUD'
import './calendarRootStyles.css'

export default function CheckAvail(props) {
  const { currentUser, currentDateTime } = props
  const [dateWrap, setDateWrap] = useState(currentDateTime)
  const [selectedBooking, setSelectedBooking] = useState({
    booking_hour_start: null,
    hours_booked: 0,
  })

  useEffect(() => {
    const fetchAppointments = async () => {
      const apptArray = await getAppointments(dateWrap.format())
    }
    fetchAppointments()
  }, [dateWrap])
  const runCheck = async () => {}

  return (
    <div>
      <h1>Check availability by date...</h1>

      <Calendar value={dateWrap} setValue={setDateWrap} />
      <button onClick={runCheck}>Check</button>
      <TimeFilter setSelectedBooking={setSelectedBooking} />
      <GnosticDisplay />
    </div>
  )
}
