import React, {useState} from 'react'
import Calendar from './Calendar/Calendar'
import TimeFilter from './TimeFilter'
import './calendarRootStyles.css'

export default function CheckAvail(props) {
  const { currentUser, currentDateTime } = props
  const [dateWrap, setDateWrap] = useState(currentDateTime)
  const [selectedTime, setSelectedTime] = useState({
    booking_hour_start: null,
    hours_booked: 0
  })
  
  
  return (
    <div>
    
      <h1>Check availability by date...</h1>
      
      <Calendar value={setDateWrap} setValue={setDateWrap} />
      
      <h2>Search a specific time (optional)</h2>
      <h4>(all times EST)</h4>
      <TimeFilter selectedTime={selectedTime} setSelectedTime={setSelectedTime}/>
    </div>
  )
}
