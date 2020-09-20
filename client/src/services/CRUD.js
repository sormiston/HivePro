import api from './api-config'

// GET /appointments/filter/:dt/:dur
export const getConflicts = async (dateHrStr, durStr) => {
  try {
    const res = await api.get(`/appointments/filter/${dateHrStr}/${durStr}`)
    return res.data
  } catch (err) {
    return err
  }
}
// GET /bands
export const getBandNames = async () => {
  try {
    const res = await api.get('/bands/names')
    return res.data
  } catch (err) {
    return err
  }
}

// GET /rooms
export const getRooms = async () => {
  try {
    const res = await api.get('/rooms')
    return res.data
  } catch (err) {
    return err
  }
}

// POST / appointments
export const makeBooking = async (body) => {
  try {
    const res = await api.post('/appointments', body)
    return res.data
  } catch (err) {
    return err
  }
}

