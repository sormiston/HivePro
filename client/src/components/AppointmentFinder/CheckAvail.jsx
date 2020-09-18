import React, {useState} from 'react'
import Calendar from './Calendar/Calendar'
import TimeFilter from './TimeFilter'
import GnosticDisplay from "../Booker/TimeGnostic/display";
import './calendarRootStyles.css'

export default function CheckAvail(props) {
  const { currentUser, currentDateTime } = props
  const [dateWrap, setDateWrap] = useState(currentDateTime)
  const [selectedBooking, setSelectedBooking] = useState({
    booking_hour_start: null,
    hours_booked: 0
  })
  
  
  
 
  return (
    <div>
    
      <h1>Check availability by date...</h1>
      
      <Calendar value={dateWrap} setValue={setDateWrap} />
      <TimeFilter setSelectedBooking={setSelectedBooking} />
      <GnosticDisplay />
      
    </div>
  )
}
