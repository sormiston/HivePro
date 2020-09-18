import React from 'react'

export default function timeFilter(props) {
  const { setSelectedBooking } = props

  const handleChange = (e) => {
    const { name, value } = e.target
    setSelectedBooking((prevState) => ({
      ...prevState,
      [name]: Number(value),
    }))
  }

  return (
    <>
      <h2>Search a specific time (optional)</h2>
      <h4>(all times EST)</h4>
      <div className='select-menu'>
        <label htmlFor='sessionStart'>Session Start</label>
        <select name='booking_hour_start' onChange={handleChange}>
          <option defaultValue>Session Start at...</option>
          <option value='12'>12:00PM</option>
          <option value='13'>1:00PM</option>
          <option value='2:00PM'>2:00PM</option>
          <option value='3:00PM'>3:00PM</option>
          <option value='4:00PM'>4:00PM</option>
          <option value='5:00PM'>5:00PM</option>
          <option value='6:00PM'>6:00PM</option>
          <option value='7:00PM'>7:00PM</option>
          <option value='8:00PM'>8:00PM</option>
          <option value='9:00PM'>9:00PM</option>
        </select>
      </div>
      <div className='duration-select'>
        <h4>for...</h4>
        <br />
        <label htmlFor='1'>duration</label>
        <select name='hours_booked' onChange={handleChange}>
          <option defaultValue>hours</option>
          <option value='1'>1 hour</option>
          <option value='2'>2 hours</option>
          <option value='3'>3 hours</option>
        </select>
      </div>
    </>
  )
}
