import React from 'react'
import { Select } from 'rbx'

export default function TimeFilter(props) {
  const { selectedDateTime, updateState } = props

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'start') {
      updateState(name, timeSlots[value])
    } else {
      updateState(name, Number(value))
    }
  }

  const timeSlots = []
  for (let i = 12; i < 22; i++) {
    timeSlots.push(
      selectedDateTime.clone().set('hour', i)
    )
  }

  return (
    <>
      <Select.Container>
        <Select name='start-time' onChange={handleChange}>
        <Select.Option>--:-- PM</Select.Option>
      
          {timeSlots.map((slot, idx) => (
            <Select.Option key={idx} value={idx}>{slot.format('hh:00A')}</Select.Option>
          ))}
          </Select>
        
      </Select.Container>
      
      
      
      
      
      
      
      <div className='duration-select'>
        <p>for...</p>
        <br />
        <label htmlFor='1'>duration</label>
        <select
          defaultValue={'2'}
          name='dur'
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
