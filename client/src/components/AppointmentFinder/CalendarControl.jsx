import React, { useState } from 'react'

import Calendar from './Calendar/Calendar'
import './calendarRootStyles.css'

export default function (props) {
  const { currentUser, currentTime } = props
  const [value, setValue] = useState(currentTime)
  return <Calendar value={value} onChange={setValue} />
}
