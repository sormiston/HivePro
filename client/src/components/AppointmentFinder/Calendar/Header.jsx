import React from 'react'

// CALENDAR FUNCTION from LIVE TUTORIAL CODE-ALONG
// credit Mark Tellez - "devmentorlive"
// https://www.youtube.com/watch?v=5jRrVqRWqsM

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
    return value.isSame(new Date(), 'month')
  }
  return (
    <div className='header'>
      <div
        className='previous'
        onClick={() => !thisMonth() && updateState('start', prevMonth())}
      >
       <span>{!thisMonth() ? String.fromCharCode(171) : null}</span> 
      </div>
      <div className='current'>
        {currMonthName()} {currYear()}
      </div>
      <div className='next' onClick={() => updateState('start', addMonth())}>
        {String.fromCharCode(187)}
      </div>
    </div>
  )
}
