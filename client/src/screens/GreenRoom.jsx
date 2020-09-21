import React, { useEffect, useState } from 'react'
import { getAppointmentsByBand } from '../services/CRUD'
export default function GreenRoom(props) {
  const [appointments, setAppointments] = useState([])
  const { currentUser } = props

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

  return <div>I am green room teapot.</div>
}
