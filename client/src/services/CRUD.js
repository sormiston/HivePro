import api from './api-config'

// GET /bands

export const getBandNames = async () => {
  const res = await api.get('/bands/names')
  return res.data
}

// GET /appointments

export const getAppointments = async (dateHrStr,durStr) => {
  try {
    const res = await api.get(`/appointments/filter/${dateHrStr}/${durStr}`)
    return res.data
  } catch (err) {
    return err
  }
}