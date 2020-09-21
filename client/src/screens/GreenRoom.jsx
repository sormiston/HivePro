import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getAppointmentsByBand } from '../services/CRUD'
import moment from 'moment'

export default function GreenRoom(props) {
  const [appointments, setAppointments] = useState([])
  const { currentUser } = props

  const BandSplash = styled.main`
    margin: 4rem auto 0;
    font-family: ${currentUser && currentUser.band.font};
    width: 80%;
    h1 {
      font-size: 10px;
      font-weight: 800;
    }
   
    ul {
      list-style-type: '\\1F40E';
      list-style-position: inside;
    }
  `

  // FETCH query of associated appointments
  useEffect(() => {
    const fetchAppointments = async () => {
      const apptArray = await getAppointmentsByBand(
        currentUser.band_id
      )
      setAppointments(apptArray)
    }
    currentUser && fetchAppointments()
  }, [currentUser])

  return (
    <>
      <BandSplash className='band-splash'>
        <h1>{currentUser && currentUser.band.name}</h1>
        <h3>Welcome, {currentUser && currentUser.first_name}</h3>
        <ul>
          {appointments.map((a, idx) => (
            <li key={a.id}>
              <div>
                <h4>{moment(a.booking_hour_start).calendar()}</h4>
                <h4>{a.hours_booked} hour session in Room {a.room.room_num}</h4>
              </div>
              
              <p>Sq. Footage: {a.room.sq_footage}</p>
              <p>Max Capacity: {a.room.max_cap}</p>
            
              <details>
                <summary>Equipment</summary>
                <p>{a.room.fixed_equipment}</p>
              </details>
              <button value={a.room.id}></button>
            </li>
          ))}
        </ul>
      </BandSplash>
    </>
  )
}
