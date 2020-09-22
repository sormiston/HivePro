import React from 'react'
import { useHistory } from 'react-router-dom'
import { postBooking, patchBooking } from '../../../services/CRUD'
import { Box, Generic } from 'rbx'
import Button from '@material-ui/core/Button'

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
    
    const patch = await patchBooking(updateId, body)
    history.push('/green-room')
  }

  return (
    <>
    <div id="rooms-avail">{inventory.length} rooms available.</div>
    <Generic as="div" id="gnostic-display-wrapper">
      
      {inventory.map((item) => (
        <Box className='avail' key={item.id}>
          <h4>Room: {item.room_num}</h4>
          <p>Sq. Footage: {item.sq_footage}</p>
          <p>Max Capacity: {item.max_cap}</p>
          <p>Hourly Rate: ${item.hourly_rt_day}/hr (Days), ${item.hourly_rt_night}/hr (Evenings)</p>
          <details>
            <summary>Equipment</summary>
            <p>{item.fixed_equipment}</p>
          </details>
          <Button
            variant='contained'
            value={item.id}
            onClick={updateId ? (e)=> updateBooking(e.target.value) : (e) => makeBooking(e.target.value)}
          >
            {updateId ? 'Change to this Booking' : 'Book'}
          </Button>
        </Box>
      ))}
      </Generic>
      </>
  )
}
