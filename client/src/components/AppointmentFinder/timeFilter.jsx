import React from 'react'

export default function timeFilter(props) {
  
  const { value, setValue } = props
  
  const handleChange = () => {
    
  }
  
  return (
    <div>
      <select name="sessionStart" id="sessionStart">
        <option value="12:00PM">12:00PM</option>
     </select>
    </div>
  )
}
