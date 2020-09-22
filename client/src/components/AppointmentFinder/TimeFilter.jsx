import React from 'react'
import { Generic, Select } from 'rbx'

export default function TimeFilter(props) {
  const { selectedDateTime, updateState } = props

  const handleChange = (e) => {
    const { className, value } = e.target
    if (className === 'start') {
      updateState(className, timeSlots[value])
    } else {
      updateState(className, Number(value))
    }
  }

  const timeSlots = []
  for (let i = 12; i < 22; i++) {
    timeSlots.push(
      selectedDateTime.clone().set('hour', i)
    )
  }

  return (
    <Generic className="time-options" as={"span"}>
      <Select.Container className='time-start'>
        <Select className='start' onChange={handleChange}>
        <Select.Option className='start'>--:-- PM</Select.Option>
      
          {timeSlots.map((slot, idx) => (
            <Select.Option className='start' key={idx} value={idx}>{slot.format('hh:00A')}</Select.Option>
          ))}
          </Select>
        
      </Select.Container>
      <span>for...</span>
      <Select.Container className='time-dur'>
        <Select
          defaultValue={'2'}
          className='dur'
          onChange={handleChange}
        >
          <Select.Option value='1'>1 hour</Select.Option>
          <Select.Option value='2'>2 hours</Select.Option>
          <Select.Option value='3'>3 hours</Select.Option>
        </Select>
      </Select.Container>
    </Generic>
  )
}
