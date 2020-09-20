import React, { useState, useEffect } from 'react'
import './calendarRootStyles.css'
import './styles.css'
import buildCalendar from './build'
import dayStyles, { beforeToday } from './styles'
import CalendarHeader from './Header'

// CALENDAR FUNCTION from LIVE TUTORIAL CODE-ALONG
// credit Mark Tellez - "devmentorlive"
// https://www.youtube.com/watch?v=5jRrVqRWqsM

export default function Calendar(props) {
  const [calendar, setCalendar] = useState([])
  const { value, updateState } = props
  useEffect(() => {
    setCalendar(buildCalendar(value))
  }, [value])

  return (
    <div className='calendar'>
      <CalendarHeader value={value} updateState={updateState} />
      <div className='body'>
        <div className='day-names'>
          {['s', 'm', 't', 'w', 't', 'f', 's'].map((d, i) => (
            <div key={i} className='week'>
              {d}
            </div>
          ))}
        </div>
        {calendar.map((week, i) => (
          <div key={i}>
            {week.map((day, i) => (
              <div
                key={i}
                className='day'
                onClick={() => !beforeToday(day) && updateState('start', day)}
              >
                <div className={dayStyles(day, value)}>
                  {day.format('D')}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
