import React, { useState, useEffect } from 'react'
import Calendar from './Calendar/Calendar'
import TimeFilter from './TimeFilterNAMETRICK'
import GnosticDisplay from '../Booker/TimeGnostic/display'
import { getAppointments } from '../../services/CRUD'
import './calendarRootStyles.css'

export default function CheckAvail(props) {
  const { currentUser, currentDate } = props
  const [date, setDate] = useState(currentDate)
  const [selectedBooking, setSelectedBooking] = useState({
    booking_hour_start: null,
    hours_booked: 0,
  })
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    const fetchAppointments = async () => {
      const apptArray = await getAppointments(date.format())
      setAppointments(apptArray)
    }
    fetchAppointments()
  }, [date])
  
  const runCheck = async () => { }
  
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
