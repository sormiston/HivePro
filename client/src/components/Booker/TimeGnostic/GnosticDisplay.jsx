import React from 'react'
import { useHistory } from 'react-router-dom'
import { postBooking, patchBooking } from '../../../services/CRUD'

export default function GnosticDisplay(props) {
  
  const { currentUser, selectedBooking, inventory, updateId } = props
  const history = useHistory()
  
  const makeBooking = async (roomId) => {
    const body = {
      appointment: {
        band: currentUser.band_id,
        room: Number(roomId),
        booking_hour_start: selectedBooking.start
          .clone()
          .format('YYYY-MM-DDTHH:00:00'),
        hours_booked: selectedBooking.dur
      },
    }
    const post = await postBooking(body)
    console.log(post)
  }
  
  const updateBooking = async (roomId) => {
    const body = {
      appointment: {
        room: Number(roomId),
        booking_hour_start: selectedBooking.start
          .clone()
          .format('YYYY-MM-DDTHH:00:00'),
        hours_booked: selectedBooking.dur
      }
    }
    console.log('updateBooking function: ' + updateId, roomId)
    const patch = await patchBooking(updateId, body)
    history.push('/green-room')
    
  }

  return (
    <div>
      <div>{inventory.length} rooms available.</div>
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
            onClick={updateId ? (e)=> updateBooking(e.target.value) : (e) => makeBooking(e.target.value)}
          >
            {updateId ? 'Change to this Booking' : 'Book'}
          </button>
        </div>
      ))}
    </div>
  )
}
