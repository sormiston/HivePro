import React from 'react'

export default function TimeFilter(props) {
  const { selectedDate, setSelectedBooking } = props

  const handleChange = (e) => {
    const { name, value } = e.target
    setSelectedBooking((prevState) => ({
      ...prevState,
      [name]: timeSlots[value],
    }))
  }

  const timeSlots = []
  for (let i = 12; i < 22; i++) {
    timeSlots.push(
      selectedDate.clone().set('hour', i)
    )
  }

  return (
    <>
      <div className='select-menu'>
        <label htmlFor='sessionStart'>Session Start</label>
        <select name='booking_hour_start' onChange={handleChange}>
          <option defaultValue>Session Start at...</option>
          {timeSlots.map((slot, idx) => (
            <option key={idx} value={idx}>{slot.format('hh:00A')}</option>
          ))}
          {/* slot.format('YYYY-MM-DDTHH:00:00') */}
          
          {/* <option value='13'>1:00PM</option>
          <option value='14'>2:00PM</option>
          <option value='15'>3:00PM</option>
          <option value='16'>4:00PM</option>
          <option value='17'>5:00PM</option>
          <option value='18'>6:00PM</option>
          <option value='19'>7:00PM</option>
          <option value='20'>8:00PM</option>
          <option value='21'>9:00PM</option> */}
        </select>
      </div>
      <div className='duration-select'>
        <p>for...</p>
        <br />
        <label htmlFor='1'>duration</label>
        <select
          defaultValue={'2'}
          name='hours_booked'
          onChange={handleChange}
        >
          <option value='1'>1 hour</option>
          <option value='2'>2 hours</option>
          <option value='3'>3 hours</option>
        </select>
      </div>
    </>
  )
}
