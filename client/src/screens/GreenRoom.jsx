import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { getAppointmentsByBand, deleteBooking } from '../services/CRUD'
import equip from '../assets/semibreve.png' 
import { Button } from 'rbx'
import moment from 'moment'

const BandSplash = styled.main`
    margin: 4rem auto 0;
    font-family: ${props => props.currentUser ? props.currentUser.band.font : 'Arial'};
    width: 80%;
    h1 {
      font-size: 100px;
      font-weight: 800;
    }

    ul {
      list-style-type: '\\1F40E';
      list-style-position: inside;
      li {
        border: 1px solid #ffdd57;
        border-radius: 1rem;
        margin: 1rem 5rem;
        padding: .5rem;
      }
    }
    
    
    details ul.equipment-list {
      list-style-type: unset;
      list-style-image: url(${equip});
    }
    
    button {
      margin: .5rem 1rem;
    }
  `

export default function GreenRoom(props) {
  const [appointments, setAppointments] = useState([])
  const [pageModified, setPageModified] = useState(0)
  const { currentUser } = props
  const history = useHistory()

  // FETCH query of associated appointments
  useEffect(() => {
    const fetchAppointments = async () => {
      let apptArray = await getAppointmentsByBand(
        currentUser.band_id
      )
      apptArray = apptArray.sort()
      setAppointments(apptArray)
    }
    currentUser && fetchAppointments()
  }, [currentUser, pageModified])

  const updateRedirect = (apptId) => 
    history.push(`/appointments/update/${apptId}`)
  
  const cancelBooking = async (apptId) => {
    const cancel = await deleteBooking(apptId)
    setPageModified(prevState => prevState + 1)
  }

  return (
    <>
      <BandSplash className='band-splash' currentUser={currentUser}>
        <h1>{currentUser && currentUser.band.name}</h1>
        <div className="session-section">
          <h3>Welcome, {currentUser && currentUser.first_name}</h3>
          <h4>UPCOMING SESSIONS</h4>
          <ul className="session-list">
            {appointments.map((a, idx) => (
              <li className="session" key={a.id}>
                <div>
                  <h4>
                    {moment(a.booking_hour_start).utc().calendar()}
                  </h4>
                  <h4>
                    {a.hours_booked} hour session in Room{' '}
                    {a.room.room_num}
                  </h4>
                </div>
  
                <p>Sq. Footage: {a.room.sq_footage}</p>
                <p>Max Capacity: {a.room.max_cap}</p>
  
                <details>
                  <summary>Equipment</summary>
                  <ul className='equipment-list'>{a.room.fixed_equipment.split(';').map(equip => {
                    return <li>{equip}</li>
                  })}</ul>
                </details>
                <Button
                  color='warning'
                  value={a.id}
                  onClick={(e) => updateRedirect(e.target.value)}
                >
                  Change
                </Button>
                <Button
                  color='warning'
                  value={a.id}
                  onClick={(e) => cancelBooking(e.target.value)}
                >
                  Cancel
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </BandSplash>
    </>
  )
}
