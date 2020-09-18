import React, { useState, useEffect } from 'react'
import Calendar from './Calendar/Calendar'
import TimeFilter from './TimeFilter'
import GnosticDisplay from '../Booker/TimeGnostic/display'
import timeGnosticCheck from '../../services/availability'
import { getAppointments } from '../../services/CRUD'
import './calendarRootStyles.css'

export default function CheckAvail(props) {
  const { currentUser, currentDate } = props
  const [date, setDate] = useState(currentDate)
  const [selectedBooking, setSelectedBooking] = useState({
    booking_hour_start: null,
    hours_booked: null,
  })
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    const fetchAppointments = async () => {
      const apptArray = await getAppointments(date.format())
      setAppointments(apptArray)
    }
    fetchAppointments()
  }, [date])

  const runCheck = () => {
    console.log(typeof date.format(), date.format())
    console.log(
      typeof selectedBooking.booking_hour_start,
      selectedBooking.booking_hour_start
    )
    console.log(
      typeof selectedBooking.hours_booked,
      selectedBooking.hours_booked
    )
    selectedBooking.booking_hour_start !== null &&
      selectedBooking.hours_booked !== null &&
      timeGnosticCheck(date, selectedBooking)
  }

  return (
    <div>
      <h1>Check availability by date...</h1>

      <Calendar value={date} setValue={setDate} />
      <button onClick={runCheck}>Check</button>
      <TimeFilter setSelectedBooking={setSelectedBooking} />
      <GnosticDisplay />
    </div>
  )
}
