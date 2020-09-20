import React from 'react'
import { makeBooking } from '../../../services/CRUD'

export default function GnosticDisplay(props) {
  
  const { currentUser, selectedBooking, inventory, touched } = props

  const postBooking = async (roomId) => {
    const body = {
      appointment: {
        band: currentUser.band_id,
        room: Number(roomId),
        booking_hour_start: selectedBooking.start
          .clone()
          .format('YYYY-MM-DDTHH:00:00'),
        hours_booked: selectedBooking.dur,
      },
    }
    const post = await makeBooking(body)
    console.log(post)
  }

  return (
    <div>
      {touched && <div>{inventory.length} rooms available.</div>}
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
          <button
            value={item.id}
            onClick={(e) => postBooking(e.target.value)}
          >
            Book
          </button>
        </div>
      ))}
    </div>
  )
}
