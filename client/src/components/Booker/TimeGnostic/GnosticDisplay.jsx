import React from 'react'
import { useHistory } from 'react-router-dom'
import { postBooking, patchBooking } from '../../../services/CRUD'
import { Box, Generic, Button } from 'rbx'
// import Button from '@material-ui/core/Button'

export default function GnosticDisplay(props) {
  const { currentUser, selectedBooking, inventory, updateId } = props
  const history = useHistory()

  const makeBooking = async (roomId) => {
    
    const dateTime = selectedBooking.date
      .clone()
      .set('h', selectedBooking.time.hour())
    const body = {
      appointment: {
        band: currentUser.band_id,
        room: Number(roomId),
        booking_hour_start: dateTime
          .clone()
          .format('YYYY-MM-DDTHH:00:00'),
        hours_booked: selectedBooking.dur,
      },
    }
    await postBooking(body)
    history.push('/green-room')
  }

  const updateBooking = async (roomId) => {
    const dateTime = selectedBooking.date
      .clone()
      .set('h', selectedBooking.time.hour())
    const body = {
      appointment: {
        room: Number(roomId),
        booking_hour_start: dateTime
          .clone()
          .format('YYYY-MM-DDTHH:00:00'),
        hours_booked: selectedBooking.dur,
      },
    }

    const patch = await patchBooking(updateId, body)
    history.push('/green-room')
  }

  return (
    <>
      <div id='rooms-avail'>{inventory.length} rooms available.</div>
      <Generic as='div' id='gnostic-display-wrapper'>
        {inventory.map((item) => (
          <Box className='avail' key={item.id}>
            <h4>Room: {item.room_num}</h4>
            <p>Sq. Footage: {item.sq_footage}</p>
            <p>Max Capacity: {item.max_cap}</p>
            <p>
              Hourly Rate: ${item.hourly_rt_day}/hr (Days), $
              {item.hourly_rt_night}/hr (Evenings)
            </p>
            <details>
              <summary>Equipment</summary>
              <p>{item.fixed_equipment}</p>
            </details>
            <Button variant='contained' value={item.id}>
              <div
                className='html-button'
                onClick={
                  updateId
                    ? (e) => updateBooking(e.target.offsetParent.value)
                    : (e) => makeBooking(e.target.offsetParent.value)
                }
              >
                {updateId ? 'Change to this Booking' : 'Book'}
                </div>
            </Button>
          </Box>
        ))}
      </Generic>
    </>
  )
}
