import React from 'react'
import moment from 'moment'


export default function CalendarHeader({ value, updateState }) {
  function currMonthName() {
    return value.format('MMMM')
  }

  function currYear() {
    return value.format('YYYY')
  }

  function prevMonth() {
    return value.clone().subtract(1, 'month')
  }

  function addMonth() {
    return value.clone().add(1, 'month')
  }

  function thisMonth() {
    return value.isSame(moment(), 'month')
  }

  function futureCutOff() {
    return value
      .clone()
      .add(1, 'month')
      .isBefore(moment().add(3, 'month'))
  }
  return (
    <div className='header'>
      <div
        className='previous'
        onClick={() =>
          !thisMonth() && updateState('date', prevMonth())
        }
      >
        <span className='calendar-header-arrow'>
          {!thisMonth() ? String.fromCharCode(171) : null}
        </span>
      </div>
      <div className='current'>
        <span className='calendar-header'>
          {currMonthName()} {currYear()}
        </span>
      </div>
      <div
        className='next'
        onClick={() => updateState('date', addMonth())}
      >
        <span className='calendar-header-arrow'>
          {futureCutOff() ? String.fromCharCode(187) : null}
        </span>
      </div>
    </div>
  )
}
