import React, { useState } from 'react'

export default function GnosticDisplay(props) {
  const { inventory } = props
  return (
    <div>
      {inventory.map((item) => (
        <div>
          <h4>Room: {item.room_num}</h4>
          <p>Sq. Footage: {item.sq_footage}</p>
          <p>Max Capacity: {item.max_cap}</p>
          <p>Hourly Rate: {item.hourly_rt}</p>
          <details>
            <summary>Equipment</summary>
            <p>{item.fixed_equipment}</p>
          </details>
        </div>
      ))}
    </div>
  )
}
