import React, { useState } from 'react'

export default function GnosticDisplay(props) {
  const { currentUser, selectedDate, selectedBooking, inventory } = props
  
  const postBooking = (roomId) => {
    const bookingHash = {
      appointment: {
        band: currentUser.band_id,
        room: roomId,
        booking_hour_start: selectedBooking.booking_hour_start
       
      }
    }
  }
  return (
    <div>
      {inventory.map((item) => (
        <div key={item.id}>
          <h4>Room: {item.room_num}</h4>
          <p>Sq. Footage: {item.sq_footage}</p>
          <p>Max Capacity: {item.max_cap}</p>
          <p>Hourly Rate: {item.hourly_rt}</p>
          <details>
            <summary>Equipment</summary>
            <p>{item.fixed_equipment}</p>
          </details>
          <button value={item.id} onClick={(e) => postBooking(e.target.value)}>Book</button>
        </div>
      ))}
    </div>
  )
}
