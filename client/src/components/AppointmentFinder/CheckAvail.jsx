import React, {useState} from 'react'
import Calendar from './Calendar/Calendar'
import TimeFilter from './TimeFilter'
import './calendarRootStyles.css'

export default function CheckAvail(props) {
  const { currentUser, currentTime } = props
  const [value, setValue] = useState(currentTime)
  
  
  return (
    <div>
    
      <h1>Check availability by date...</h1>
      <Calendar value={value} setValue={setValue} />
      
      <h2>Search a specific time (optional)</h2>
      <h4>(all times EST)</h4>
      <TimeFilter value={value} setValue={setValue}/>
    </div>
  )
}
