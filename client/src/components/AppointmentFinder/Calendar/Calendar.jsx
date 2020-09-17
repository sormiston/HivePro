import React, { useState, useEffect } from 'react'


import './styles.css'
import buildCalendar from './build'
import dayStyles, { beforeToday } from './styles'
import CalendarHeader from './Header'

// CALENDAR FUNCTION from LIVE TUTORIAL CODE-ALONG
// credit Mark Tellez - "devmentorlive"
// https://www.youtube.com/watch?v=5jRrVqRWqsM

export default function Calendar(props) {
  const [calendar, setCalendar] = useState([])
  const { value, setValue } = props
  useEffect(() => {
    setCalendar(buildCalendar(value))
  }, [value])

  return (
    <div className='calendar'>
      <CalendarHeader value={value} setValue={setValue} />
      <div className='body'>
        <div className='day-names'>
          {['s', 'm', 't', 'w', 't', 'f', 's'].map((d) => (
            <div className='week'>{d}</div>
          ))}
        </div>
        {calendar.map((week) => (
          <div>
            {week.map((day) => (
              <div
                className='day'
                onClick={() => !beforeToday(day) && setValue(day)}
              >
                <div className={dayStyles(day, value)}>{day.format('D')}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
